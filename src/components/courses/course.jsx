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

    async componentDidMount(){
        const { data: course } = await axios.get(`${apiEndpoint}/${this.props.match.params.id}`);
        this.setState({ course });
    }
    
    handleChange = ({ currentTarget: input }) => {
        const course = { ...this.state.course };
        course[input.name] = input.value;
        this.setState({ course });
    }

    async handleUpdate() {
        const { course } = this.state;
        await axios.put(`${apiEndpoint}/${course._id}`, course);
        alert('Course Updated Successfully');
        this.props.history.push('/courses');
    }

    async handleDelete() {
        const { course } = this.state;
        await axios.delete(`${apiEndpoint}/${course._id}`);
        alert('Course Deleted Successfully');
        this.props.history.push('/courses');
    }

    render(){
        
        const { course } = this.state;

        return(
            <>
                <h1>Course - {course.title}</h1>
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
                    <button onClick={() => this.handleDelete()} type="button" className="btn btn-danger float-left">Delete</button>
                    <button onClick={() => this.handleUpdate()} type="button" className="btn btn-primary float-right">Save</button>
                </form>
            </>
        )
    }
}