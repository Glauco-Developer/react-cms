import React, { Component } from 'react';
import Input from '../commom/input';
import axios from 'axios';

const apiEndpoint = 'http://localhost:3000/api/courses';

export default class Course extends Component{
    state = {
        course: {
            title: '',
            slug: '',
            description: ''
        }
    }

    handleChange = ({ currentTarget: input }) => {
        const course = { ...this.state.course };
        course[input.name] = input.value;
        this.setState({ course });
    }
    
    async handleAdd(){
        const { course } = this.state;
        await axios.post(apiEndpoint, course);
        alert('Course Added Successfully');
        this.props.history.push('/courses');
    }

    render(){
        
        const { course } = this.state;

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
                    />
                    <Input
                        label="Slug"
                        value={course.slug}
                        onChange={this.handleChange}
                        name="slug"
                        type="text"
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