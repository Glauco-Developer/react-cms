import React, { Component } from 'react';
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
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            value={course.title}
                            placeholder={course.title}
                            onChange={this.handleChange}
                            id="title"
                            name="title"
                            type="text"
                            className="form-control"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Slug</label>
                        <input
                            value={course.slug}
                            placeholder={course.slug}
                            onChange={this.handleChange}
                            id="slug"
                            name="slug"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            value={course.description}
                            placeholder={course.description}
                            onChange={this.handleChange}
                            id="description"
                            name="description"
                            type="text"
                            className="form-control"/>
                    </div>
                    <button onClick={() => this.handleAdd()} type="button" className="btn btn-primary float-right">Add Course</button>
                </form>
            </>
        )
    }
}