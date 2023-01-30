import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';


export default function PageNotFound() {
    const navigate = useNavigate()
    return (
        <Box component="main" sx={{
             alignItems: 'center',
            height: '100vh', display: 'flex',
            justifyContent: 'center', flexDirection: 'column'
        }}>
            <Typography sx={{fontSize:'8rem', fontWeight:'bold'}}>
                403
            </Typography>
            <Typography variant='h5' gutterBottom>
                You'r not authorized for this url, Check with admin!
            </Typography>
            <Button variant='contained' sx={{textTransform:'none'}} onClick={()=>navigate(-1)}>GoBack</Button>
        </Box>
    )
}