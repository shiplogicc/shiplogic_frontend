import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';


export default function InternalError() {
    const navigate = useNavigate()
    return (
        <Box component="main" sx={{
             alignItems: 'center',
            height: '100vh', display: 'flex',
            justifyContent: 'center', flexDirection: 'column'
        }}>
            <Typography sx={{fontSize:'8rem', fontWeight:'bold'}}>
                500
            </Typography>
            <Typography variant='h5' gutterBottom>
                Something Went Wrong!
            </Typography>
            <Button variant='contained' sx={{textTransform:'none'}} onClick={()=>navigate(-1)}>GoBack</Button>
        </Box>
    )
}