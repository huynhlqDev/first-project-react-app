import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { ButtonGroup, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const ProjectCard = (Props) => {


    return (
        <Card variant="outlined" sx={{ minWidth: 300, backgroundColor: "#f0f0f0"}}>
            <Box sx={{ p: 2 }}>
                <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {Props.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {Props.identifier}
                    </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {Props.description}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction="row" spacing={1} sx={{ justifyContent: 'right' }}>
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                        <Button color='info' variant='contained'>Dashboard</Button>
                        <Button color='warning' variant='contained'>Update</Button>
                        <Button color='error' variant='contained'>Delete</Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </Card>
    );
}

export default ProjectCard;