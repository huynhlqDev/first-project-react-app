import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/action/projectActions';

const ProjectFormPage = () => {
    const dispatch = useDispatch();

    const [projectname, setProjectname] = useState('');
    const [projectId, setProjectId] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [validate, setValidate] = useState({
        fullname: false,
        projectId: false,
        projectDescription: false,
        startDate: false,
        endDate: false
    });

    const handleSubmit = (e) => {
        if (!isValidInput()) {
            e.preventDefault();
            dispatch(addProject(
                projectId,
                projectname,
                projectDescription,
                startDate,
                endDate))
        }
    }

    const isValidInput = () => {
        setValidate({
            fullname: projectname.length === 0,
            projectId: projectId.length === 0,
            startDate: startDate.length === 0,
            endDate: endDate.length === 0
        })
        return (
            projectname.length === 0
            && projectId.length === 0
            && startDate.length === 0
            && endDate.length === 0
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
                    label="Project Name"
                    // variant="outlined"
                    required
                    error={(validate.fullname)}
                    onInput={(e) => setProjectname(e.target.value)}
                    helperText={validate.fullname ? "Incorrect entry." : ""}
                />
                <TextField
                    id="project-id"
                    label="Unique Project ID"
                    variant="outlined"
                    required
                    error={(validate.projectId)}
                    onInput={(e) => setProjectId(e.target.value)}
                    helperText={validate.projectId ? "Incorrect entry." : ""}
                />
                <TextField
                    id="project-description"
                    label="Project Description"
                    variant="outlined"
                    error={(validate.projectDescription)}
                    onInput={(e) => setProjectDescription(e.target.value)}
                    helperText={validate.projectDescription ? "Incorrect entry." : ""}
                    rows={2} multiline
                />
                <TextField
                    id="start-date"
                    label="Start Date"
                    variant="outlined"
                    type='date'
                    required
                    focused
                    error={(validate.startDate)}
                    onInput={(e) => setStartDate(e.target.value)}
                    helperText={validate.startDate ? "Incorrect entry." : ""}
                />
                <TextField
                    id="end-date"
                    label="End Date"
                    variant="outlined"
                    type='date'
                    required
                    focused
                    error={(validate.endDate)}
                    onInput={(e) => setEndDate(e.target.value)}
                    helperText={validate.endDate ? "Incorrect entry." : ""}
                />
                <br></br>
                <Button
                    type="Submit"
                    id="submit"
                    onClick={handleSubmit}
                    variant="outlined"
                >
                    Submit
                </Button>

            </Stack>
        </div>
    );
};

export default ProjectFormPage;