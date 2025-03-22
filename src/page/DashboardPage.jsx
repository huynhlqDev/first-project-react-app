import React from 'react';
import { useEffect } from 'react';
import { fetchProjects } from '../redux/action/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action/authActions';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { projects, error } = useSelector((state) => state.project);

    useEffect(() => {
        console.log("Projects: ", projects);
        console.log("Error: ", error);
        if (error) {
            alert(error);
            dispatch(logout());
        }
    }, [projects, error]);


    useEffect(() => {
        dispatch(fetchProjects());
        console.log("[APPEAR] Dashboard");
        return () => {
            console.log("[LEAVE] Dashboard");
        }
    }, [])

    return (
        <div className="dashboard">
            <h1>Welcome to the Dashboard</h1>
            <section>
                <h2>Your Tasks</h2>
                {/* Placeholder for task list */}
            </section>
            <section>
                <h2>Your Projects</h2>
                {/* Placeholder for project summaries */}
            </section>
            <nav>
                <a href="/task-form">Create New Task</a>
                <a href="/project-form">Create New Project</a>
            </nav>
        </div>
    );
};

export default DashboardPage;
