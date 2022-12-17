import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function CardProjects({img,name,description,categories,link}){
    return(
        <Card sx={{transition:".1s all ease-in-out",'&:hover':{transform: "scale(1.1)"}}}>
            <CardActionArea href={link} target="_blank">
                <CardMedia
                component="img"
                image={img}
                alt="Project Thumbnail"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                {categories.map((data,i)=>(
                    <Chip key={i} sx={{marginRight:'5px',backgroundColor:'#1f70d9',color:'white'}} label={data} />
                ))}
                </CardContent>
            </CardActionArea>
        </Card>

    )
}
function GridCard({projects}){
    return(
            <Grid container spacing={0}>
                    {projects.map((data,i)=>(
                        <Grid key={i} item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <CardProjects img={data.thumbnail} name={data.name} description={data.description} categories={data.categories} link={data.link}/>
                        </Grid>
                    ))}
            </Grid>
    )
}
const Projects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("./projects.json");
            const proj = await response.json();
            setProjects(proj.projects);
        }
        fetchData();
    });
    return (
        <div>
            <Container>
                <GridCard  projects={projects}/>
            </Container>
        </div>
    );
};
export default Projects;