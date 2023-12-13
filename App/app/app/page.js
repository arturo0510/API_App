'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import { get_plants, get_plants_by_id, update_plant, delete_plant} from '/home/arturogonzalez/Desktop/API-leaf/APLI-leaf/API-LL/utils/apileaflist.jsx';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Home() {
 
    // States
  const [plantslist, plantlist] = useState([]);

  // Function to get all task lists without filter using API call
  async function fetchPlantLists() {
    try {
      const result = await get_plants();
      setTaskLists(result);
    } catch (error) {
      console.error('[ERROR] Error fetching task lists:', error);
    }
  }
  
    // Function useEffect to get all task lists initially
    useEffect(() => {
      fetchPlantLists();
    },[]);


  return (
    <div>
      <Grid container justifyContent="center" direction='column' alignItems='center' item xs={16} sm={2.2}>
            <Grid container justifyContent='center' direction='row' alignItems='center'>
              <Typography variant="h2" align='left' pt={4}>
                LeafLove
              </Typography>
            </Grid>
        </Grid>
      <div>

      <Grid container spacing={2}>
        <Grid container justifyContent="center" direction='column' alignItems='center' item xs={15} sm={4}>
            <Grid container justifyContent='center' direction='row' alignItems='center'>
              <Typography variant="standard" color="#172a38" focused mr={2} >Nombre de tu planta:</Typography>

              <TextField
                id="planta"
                label="añade un nombre a tu planta"
                variant="filled"
                color="success" focused
                onChange={(e) => setTarea(e.target.value)}
              />
            </Grid>
        </Grid>

        <Grid container justifyContent="center" direction='column' alignItems='center' item xs={15} sm={4}>
            <Grid container justifyContent='center' direction='row' alignItems='center'>
              <Typography variant="standard" color="#172a38" mr={2} >Descripción:</Typography>
              <TextField
                id="descripcion"
                label="Agrega una descripciòn de tu planta"
                variant="filled"
                color="success" focused
                onChange={(e) => setTarea(e.target.value)}
              />
            </Grid>
          <Typography variant="h5" color="initial"> </Typography>
        </Grid>
      </Grid>
   
      <Grid container spacing={3}>

        <Grid container justifyContent="center" direction='column' alignItems='center' item xs={15} sm={3.5} >
            <Grid container justifyContent='center' direction='row' alignItems='center' pt={5} pb = {2}>
              <Typography variant="standard" color="#172a38" focused mr={2} >Fecha de la nueva vida:</Typography>
              <TextField
                id="fecha_inicio"
                label="Selecciona la fecha"
                type="date"
                color="success" focused
                format = "MM/DD/YYYY"
                defaultValue="12-31-2023"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
        </Grid>

        <Grid container justifyContent="center" direction='column' alignItems='center' item xs={15} sm={5.5} >
            <Grid container justifyContent='center' direction='row' alignItems='center' pt={8} pb = {2}>
              <Button variant="contained" color="success" focused >
                Guardar
              </Button>
            </Grid>
        </Grid>

      </Grid>
      </div>
      
      <div>
      <Grid container justifyContent="center" direction='column' alignItems='center' item xs={16} sm={4.2}>
            <Grid container justifyContent='center' direction='row' alignItems='center'>
              <Typography variant="h4" align='left' color="#525252" pt={8}>
              Información sobre tus seres vivos
              </Typography>
            </Grid>
      </Grid>

      <Grid>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Planta 1
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Esta planta es un girasol
          </Typography>
          <Typography variant="body2">
          Hojas alternas, grandes, ovadas y más o menos cordadas, con el margen aserrado. Inflorescencia en capítulo terminal de gran tamaño, con flores liguladas amarillas, situadas en el exterior y flosculosas negruzcas o pardas en el disco, estas últimas con una escama en su base.  
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Actualizar</Button>
        </CardActions>
        <CardActions>
          <Button size="small">Eliminar</Button>
        </CardActions>
      </Card>
      </Grid>

      </div>
    </div> 
    
    
  );
}