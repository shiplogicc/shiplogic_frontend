import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography, Icon } from "@mui/material";
import { Dashboard, ExpandLess, ExpandMore } from '@mui/icons-material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { matchPath, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { menuCollapse, setAccessedMenu, setAccessedSubMenu } from "../Redux/Actions/nav";

const navItems = [
    { id: 1, name: 'Dashboard', url: '/dashboard', collapse: false, icon: "dashboard" },
    {
        id: 2, name: 'Order', url: '/order',
        collapse: true,
        icon: "inventory",
        subMenu: [
            { id: 1, name: 'Orders', url: '/order/orderList' },
            { id: 2, name: 'Add Order', url: '/order/addOrder' },
            { id: 3, name: 'Upload Order', url: '/order/uploadOrder' }
        ]
    },
    //{ id: 3, name: 'Report', url: '/reports', collapse: false, icon: "assessment" },
]

export default function SideBar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const menu = useSelector(state => state.nav.accessedMenu);
    const subMenu = useSelector(state => state.nav.accessedSubMenu);
    const isMenuCollapse = useSelector(state => state.nav.menuCollapse)
    const handleMatchPath = () => {

    }
    const handleMenuClick = async (item) => {
        if (!item.collapse) {
            navigate(item.url)
            props.handleDrawer()
            const match = matchPath({
                path: item.url,
                exact: true,
            }, location.pathname);
            console.log(match, item.url, location.pathname)
            dispatch(menuCollapse(false))
            dispatch(setAccessedMenu(item))
            dispatch(setAccessedSubMenu(null))
        } else {
            dispatch(menuCollapse(!isMenuCollapse))
        }
    };
    const handleSubMenuClick = async (menu, subMenu) => {
        navigate(subMenu.url)
        props.handleDrawer()
        dispatch(setAccessedMenu(menu))
        dispatch(setAccessedSubMenu(subMenu))

    };
    return (
        <Box>
            <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Shiplogic Solutions
                    </ListSubheader>
                }
            >
                <Divider />
                {
                    navItems.map((item, index) => {
                        return (
                            <Box key={index} sx={{ mb: 0.5 }}>
                                <ListItemButton onClick={() => handleMenuClick(item)} >
                                    <ListItemIcon sx={{ my: 'auto', minWidth: 36 }}>
                                        <Icon fontSize="small"  >{item.icon}</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography variant={'body1'} color="inherit" sx={{ my: 'auto', fontSize: 13, fontWeight: 700 }}>
                                            {item.name}
                                        </Typography>
                                    }>

                                    </ListItemText>
                                    {
                                        item.collapse ?
                                            isMenuCollapse ? <ExpandMore fontSize="small" /> : <ChevronRightIcon fontSize="small" /> : null
                                    }
                                </ListItemButton>
                                {
                                    item.subMenu &&
                                    <Collapse in={isMenuCollapse} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {
                                                item.subMenu.map((sitem, sindex) => {
                                                    return (
                                                        <ListItemButton key={sindex} sx={{ pl: 6.3, pb: 0 }} onClick={() => handleSubMenuClick(item, sitem)}>
                                                            <ListItemIcon sx={{ my: 'auto', minWidth: 20 }}>
                                                                <FiberManualRecordIcon sx={{ width: 6, height: 6, }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={
                                                                <Typography variant={'body1'} color="inherit" sx={{ my: 'auto', fontSize: 12, fontWeight: 400 }}>
                                                                    {sitem.name}
                                                                </Typography>
                                                            } />
                                                        </ListItemButton>
                                                    )
                                                })
                                            }
                                        </List>
                                    </Collapse>
                                }
                            </Box>
                        )
                    })
                }
            </List>
        </Box>
    )
}