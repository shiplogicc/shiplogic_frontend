import { AppBar, Box, Button, Grid, IconButton, InputBase, Toolbar, Typography, Link, Dialog, DialogTitle } from '@mui/material';
import * as React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import styled from '@mui/system/styled';


const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));

export default function AccountHeaderInfo(props) {
    const dispatch = useDispatch();
    const account = useSelector(state => state.authentication.userProfile);
    const [quickActionDailogOpen, setQuickActionDailogOpen] = useState(false);
    const handleQuickActionDailog = () =>{
        setQuickActionDailogOpen(!quickActionDailogOpen)
    }
    const renderDailog = (
        <Dialog onClose={handleQuickActionDailog} open={quickActionDailogOpen}>
            <DialogTitle>Quick Actions</DialogTitle>
        </Dialog>
    );
    if (account) {
        return (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Link component="button"
                    variant='button' sx={{ mr: 5, textTransform: 'none' }} onClick={handleQuickActionDailog}>Quick Actions</Link>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    {account.customer ? account.customer.name : account.fullname}
                </Typography>
            </Box>
            {renderDailog}
            </Box>
            
        );
    } else {
        return null;
    }
    
};