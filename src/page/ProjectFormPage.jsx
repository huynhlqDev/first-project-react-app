import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../redux/action/projectActions';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../util/environment';

const ProjectFormPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { projects, error } = useSelector(state => state.project);
    const [formData, setFormData] = useState({
        identifier: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
    });
    const [validate, setValidate] = useState({
        fullname: false,
        projectId: false,
        projectDescription: false,
        startDate: false,
        endDate: false
    });

    useEffect(() => {
        if (projects.some((project) => project.identifier === formData.identifier)) {
            alert("Create a project success")
            navigate(ROUTE.DASHBOARD)
        }
        if (error) {
            alert(error)
        }
    }, [projects, error])

    useEffect(() => {
        return () => {
            // clear page data
        }
    }, [])

    const handleSubmit = (e) => {
        if (!isValidInput()) {
            e.preventDefault();
            dispatch(addProject(formData))
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`name: ${name}, value: ${value}`);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidInput = () => {
        setValidate({
            fullname: formData.name.length === 0,
            projectId: formData.identifier.length === 0,
            startDate: formData.startDate.length === 0,
            endDate: formData.endDate.length === 0
        })
        return (
            formData.name.length === 0
            && formData.identifier.length === 0
            && formData.startDate.length === 0
            && formData.endDate.length === 0
        );
    }

    return (
        <div className="add-project">
            <Stack
                spacing={1}
                useFlexGap
                sx={{ flexWrap: 'wrap', width: '100%', maxWidth: '500px', margin: 'auto' }}
            >
                <h2>Create / Edit Project form</h2>

                <TextField
                    id="projectname"
                    name='name'
                    label="Project Name"
                    required
                    error={(validate.fullname)}
                    helperText={validate.fullname ? "Incorrect entry." : ""}
                    onInput={handleChange}
                />
                <TextField
                    id="project-id"
                    name='identifier'
                    label="Unique Project ID"
                    variant="outlined"
                    required
                    error={(validate.projectId)}
                    helperText={validate.projectId ? "Incorrect entry." : ""}
                    onInput={handleChange}
                />
                <TextField
                    id="project-description"
                    name='description'
                    label="Project Description"
                    variant="outlined"
                    error={(validate.projectDescription)}
                    helperText={validate.projectDescription ? "Incorrect entry." : ""}
                    rows={2} multiline
                    onInput={handleChange}
                />
                <TextField
                    id="start-date"
                    name='startDate'
                    label="Start Date"
                    variant="outlined"
                    type='date'
                    required
                    focused
                    error={(validate.startDate)}
                    helperText={validate.startDate ? "Incorrect entry." : ""}
                    onInput={handleChange}
                />
                <TextField
                    id="end-date"
                    name='endDate'
                    label="End Date"
                    variant="outlined"
                    type='date'
                    required
                    focused
                    error={(validate.endDate)}
                    onInput={handleChange}
                    helperText={validate.endDate ? "Incorrect entry." : ""}
                />
                <br></br>
                <Button
                    type="Submit"
                    id="submit"
                    variant="outlined"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>

            </Stack>
        </div>
    );
};

export default ProjectFormPage;