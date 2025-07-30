import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import Dish from './interface/Dish.tsx'
import { useEffect, useState } from 'react'


function App() {

  const url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
   const [dishes, setDishes] = useState<Dish[]>([])



  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.

   useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setDishes(data))
        .catch(error => console.error("Error al cargar los datos:", error))
    }, [])
    


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          
          <Student apellido="Zambrano" nombre="Leoanardo" paralelo={2}></Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={dishes}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
