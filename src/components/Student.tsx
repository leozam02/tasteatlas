import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
  apellido: string;
  nombre: string;
  paralelo: number;
}


export default function Student( { apellido, nombre, paralelo }: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                {apellido} {nombre}
                {/* PENDIENTE: Renderice los props apellidos y nombres */}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo # {paralelo}

            </Typography>
        </>
    )
}
