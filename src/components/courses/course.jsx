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
                    <Input
                        label="Title"
                        value={course.title}
                        onChange={this.handleChange}
                        name="title"
                    />
                    <Input
                        label="Slug"
                        value={course.slug}
                        onChange={this.handleChange}
                        name="Slug"
                    />
                    <Input
                        label="Description"
                        value={course.description}
                        onChange={this.handleChange}
                        name="description"
                    />
                    <button onClick={() => this.handleDelete()} type="button" className="btn btn-danger float-left">Delete</button>
                    <button onClick={() => this.handleUpdate()} type="button" className="btn btn-primary float-right">Save</button>
                </form>
            </>
        )
    }
}