import { AppBar, Box, Button, Grid, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { loader } from '../../Redux/Actions/loader';
import styled from '@mui/system/styled';


const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));

export default function AddOrder(props) {
    const dispatch = useDispatch();
    useEffect(() => {
    }, [])
    return (
        <Box sx={{flexGrow:1}}>
            <Typography>Add Order</Typography>
        </Box>
    )
}