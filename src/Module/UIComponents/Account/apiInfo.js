import { AppBar, Box, Button, Grid, IconButton, InputBase, Toolbar, Typography, Paper } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { loader } from '../../Redux/Actions/loader';
import styled from '@mui/system/styled';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function APIInfo(props) {
    const dispatch = useDispatch();
    useEffect(() => {
    }, [])
    return (
        <Box sx={{flexGrow:1}}>
            <Grid container>
                <Grid item xs={12}>
                    <Item>No Data Found!</Item>
                </Grid>
            </Grid>
        </Box>
    )
}