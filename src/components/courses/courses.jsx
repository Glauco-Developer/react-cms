import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiEndpoint = 'http://localhost:3000/api/courses';

export default class Courses extends Component {
    state = {
        courses: []
    }

    async componentDidMount(){
        const { data: courses } = await axios.get(apiEndpoint);
        this.setState({ courses });
    }

    async handleDelete(course) {
        await axios.delete(`${apiEndpoint}/${course._id}`);
        const courses = this.state.courses.filter(c => c._id !== course._id);
        this.setState({ courses })
    }

    render(){        
        const { courses } = this.state;
        return(
            <>
                <h1>Courses</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Slug</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { courses.map(course => (
                            <tr key={course._id}>
                                <th scope="row">{course._id}</th>
                                <td>{course.title}</td>
                                <td>{course.slug}</td>
                                <td>{course.description}</td>
                                <td>
                                    <Link to={`/courses/${course._id}`} type="button" className="btn btn-light mr-2">Update</Link>
                                    <button onClick={() => this.handleDelete(course)} type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                <hr/>
                <Link to={'/add-course'} className="btn btn-primary float-right">Add new course</Link>
            </>            
        )
    }
}