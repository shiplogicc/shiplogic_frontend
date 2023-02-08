import { AppBar, Box, Button, Grid, IconButton, InputBase, Toolbar, Typography, Paper } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { loader } from '../../Redux/Actions/loader';
import styled from '@mui/system/styled';
import { Girl } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GeneralInfo(props) {
    const dispatch = useDispatch();
    const account = useSelector(state => state.authentication.userProfile);
    useEffect(() => {
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                account && account.customer ?
                    <Item>
                        <Grid container sx={{ flexDirection:{xs:'column', md:'row'}}}>
                            <Grid item xs={12} sx={{ color:'#fff', bgcolor: '#222f3e', borderRadius: 1, pl: 1, mt:1 }}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Business Personal Detail</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Name</Typography>
                                <Typography component='p' variant='body2'>{account.customer.name}</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}} >
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Code</Typography>
                                <Typography component='p' variant='body2'>{account.customer.code}</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Email</Typography>
                                <Typography component='p' variant='body2'>{account.customer.email}</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Mobile</Typography>
                                <Typography component='p' variant='body2'>{account.customer.mobile}</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ color:'#fff', bgcolor: '#222f3e', borderRadius: 1, pl: 1, mt:1 }}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Tax Details</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>GST</Typography>
                                <Typography component='p' variant='body2'>{account.customer.gst}</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ color:'#fff', bgcolor: '#222f3e', borderRadius: 1, pl: 1, mt:1 }}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Bank Details</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Bank Name</Typography>
                                <Typography component='p' variant='body2'>{account.customer.bank_name}</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Account Number</Typography>
                                <Typography component='p' variant='body2'>{account.customer.account_number}</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>IFSC</Typography>
                                <Typography component='p' variant='body2'>{account.customer.ifsc}</Typography>
                            </Grid>
                            
                            <Grid item xs={12} sx={{ color:'#fff', bgcolor: '#222f3e', borderRadius: 1, pl: 1, mt:1 }}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Addresss</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Contact Address</Typography>
                                <Typography component='p' variant='body2'>{account.customer.address}</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{pl:1}}>
                                <Typography component='p' variant='overline' sx={{ fontWeight: 700 }}>Billing Address</Typography>
                                <Typography component='p' variant='body2'>{account.customer.billing_address}</Typography>
                            </Grid>
                        </Grid>
                    </Item>
                    :
                    <Item sx={{ textAlign: 'center', fontWeight: 700, color: 'InactiveCaptionText' }}>No Data Found!</Item>
            }
        </Box>
    )
}