import { Box, Breadcrumbs, CssBaseline, Typography, Link } from "@mui/material";
import { Outlet } from "react-router";
import Header from "./header";
import CustomBreadcrumbs from "./breadcrumbs";
import Loader from "../Loader/overlayLoader";
import config from "../../config";
import { styled } from '@mui/material/styles';
import { red, green, blue, yellow, blueGrey } from '@mui/material/colors';
import CustomSnackBar from "../Utils/customSnackBar";
import { useEffect } from "react";

const Main = styled('div')(({ theme }) => ({
    //padding: theme.spacing(1),
    //minHeight:'100vh',
    [theme.breakpoints.down('md')]: {
        //backgroundColor: red[500],
        width: '100%'
    },
    [theme.breakpoints.up('md')]: {
        //backgroundColor: blue[500],
        width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
        //backgroundColor: green[500],
        width: '100%',
        //minHeight:'100vh',
    }
}));


export default function MainLayout(props) {
    console.log("MainOProps", props)
    useEffect(() => {

    }, [])

    return (
        <Box sx={{ display: 'flex' }}>
            <CustomSnackBar {...props} />
            <CssBaseline />
            <Header />
            <Main sx={{ pt: 6, pb: 5, flexGrow: 1 }}>
                <CustomBreadcrumbs />
                <Box sx={{ p: 1, m: 2, borderRadius: 1, borderWidth: 1 }}>
                    <Outlet />
                </Box>
            </Main>
        </Box>
    )
}