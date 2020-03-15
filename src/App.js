import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Courses from './components/courses/courses';
import Course from './components/courses/course';
import AddCourse from './components/courses/addCourse';
import Users from './components/users';

import './App.css';

function App() {
  return (
    <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/courses/:id" component={Course} />
            <Route path="/add-course" component={AddCourse} />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
