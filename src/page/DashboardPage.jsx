import React from 'react';
import { useEffect } from 'react';
import { getProjects } from '../redux/action/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action/authActions';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../component/ProjectCard';
import { ROUTE } from '../util/environment'

const DashboardPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {logged } = useSelector((state) => state.auth);
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
        console.log("[APPEAR] Dashboard");
        dispatch(getProjects());
        return () => {
            console.log("[LEAVE] Dashboard");
        }
    }, [])

    return (
        <div className="dashboard" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
        }}>
            <Stack
                spacing={2}
                useFlexGap
                sx={{
                    flexWrap: 'wrap',
                    width: '100%',
                    maxWidth: '700px',
                    margin: 'auto'
                }}>
                <Stack direction="row" spacing={1} sx={{ justifyContent: 'left' }}>
                    <Button
                        sx={{ with: "100px" }}
                        variant='contained'
                        color='success' href={ROUTE.PROJECTFORM}>
                        Create a Project
                    </Button>
                </Stack>
                {projects.map(item => (
                    <ProjectCard
                        key={item.identifier}
                        name={item.name}
                        identifier={item.identìier}
                        description={item.description}
                    ></ProjectCard>
                ))}
            </Stack>
        </div>
    );
};

export default DashboardPage;
