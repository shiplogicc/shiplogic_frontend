
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { connect, useDispatch } from "react-redux";
import { loader } from '../../Redux/Actions/loader';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import MainCard from '../Default/Cards/mainCard';
import PieChart from '../Chart/pieChart';
import { showFeedback } from '../../Redux/Actions/feedback';
import { getMenu } from '../../Api/Authentication';
import { DonutChart } from '../Chart/donutChart';
import { GeoChart } from '../Chart/geoChart';
import { BarChart } from '../Chart/barChart';






function Dashboard(props) {
    //console.log("Dashboard Props", props)
    const navigate = useNavigate()
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleFeedback = () => {
        dispatch(showFeedback({ type: "error", message: "This is Information!" }))
    }
    useEffect(() => {
        //dispatch(loader(false))
        //getMenu(navigate)
        //dispatch(loader({state:false, title:"Logging..."}))
        //dispatch({type: "VALIDATE_SESSION" , payload : false})
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ flexDirection:{xs:'column', md:'row'}}}>
                <Grid item xs>
                    <Button onClick={() => handleFeedback()}>Click Me</Button>
                    <Typography variant='h4' color=''>Donut Chart</Typography>
                    <DonutChart />
                </Grid>
                <Grid item xs>
                    <Button onClick={() => handleFeedback()}>Click Me</Button>
                    <Typography variant='h4' color=''>Geo Chart</Typography>
                    <GeoChart />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => handleFeedback()}>Click Me</Button>
                    <Typography variant='h4' color=''>Bar Chart</Typography>
                    <BarChart />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard;