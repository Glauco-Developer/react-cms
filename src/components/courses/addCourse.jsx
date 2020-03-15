import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from '../commom/input';
import axios from 'axios';

const apiEndpoint = 'http://localhost:3000/api/courses';

export default class Course extends Component{
    state = {
        course: {
            title: '',
            slug: '',
            description: ''
        },
        errors: {}
    }

    schema = {
        title: Joi.string().required().min(3).label('Title'),
        slug: Joi.string().required().min(3).label('Slug'),
        description: Joi.optional()
    }

    validate = () => {
        const options = { abortEarly: false }
        const { error } = Joi.validate(this.state.course, this.schema, options);
        if (!error) return null;              
        
        const errors = {};
        for(let item of error.details){
            errors[item.path[0]] = item.message;
            console.log(errors)
        }

        return errors;
    }

    handleChange = ({ currentTarget: input }) => {
        const course = { ...this.state.course };
        course[input.name] = input.value;
        this.setState({ course });
    }
    
    handleAdd = async () => {
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if(errors) return;
        
        const { course } = this.state;
        await axios.post(apiEndpoint, course);
        alert('Course Added Successfully');
        this.props.history.push('/courses');
    }

    render(){        
        const { course, errors } = this.state;
        return(
            <>
                <h1>Add New Course - {course.title}</h1>
                <div className="alert alert-info" role="alert">Slug {course.slug}</div>
                <form action="">
                <Input
                        label="Title"
                        value={course.title}
                        onChange={this.handleChange}
                        name="title"
                        type="text"
                        error={errors.title}
                    />
                    <Input
                        label="Slug"
                        value={course.slug}
                        onChange={this.handleChange}
                        name="slug"
                        type="text"
                        error={errors.slug}
                    />
                    <Input
                        label="Description"
                        value={course.description}
                        onChange={this.handleChange}
                        name="description"
                        type="text"
                    />
                    <button onClick={() => this.handleAdd()} type="button" className="btn btn-primary float-right">Add Course</button>
                </form>
            </>
        )
    }
}