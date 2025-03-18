import React from 'react';

const DashboardPage = () => {
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
