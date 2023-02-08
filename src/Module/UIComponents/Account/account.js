import { AppBar, Box, Button, Grid, IconButton, InputBase, Tab, Paper, Typography, Avatar } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { loader } from '../../Redux/Actions/loader';
import styled from '@mui/system/styled';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import GeneralInfo from './generalInfo';
import Billing from './billing';
import LogisticPriority from './logisticPriority';
import APIInfo from './apiInfo';
import PersonIcon from '@mui/icons-material/Person';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //textAlign: 'center',
    //display: 'flex',
    color: theme.palette.text.secondary,
}));


export default function Account(props) {
    const dispatch = useDispatch();
    const tabs = useSelector(state => state.masters.accountTabs)
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    const renderTabs = () => {
        switch (value) {
            case '1':
                return <Box sx={{mt:1}}><GeneralInfo {...props} /></Box>
            case '2':
                return <TabPanel value={value}><Billing {...props} /></TabPanel>
            case '3':
                return <TabPanel value={value}><LogisticPriority {...props} /></TabPanel>
            case '4':
                return <TabPanel value={value}><APIInfo {...props} /></TabPanel>
            default:
                return <TabPanel value={'1'}><GeneralInfo {...props} /></TabPanel>
        }
    }
    useEffect(() => {
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <TabContext value={value}>
                <Item>
                    <TabList onChange={handleChange}
                        aria-label="Account Tabs..."
                        textColor='primary'
                        indicatorColor='primary'
                        variant='scrollable'
                    >
                        {
                            tabs.map((item, index) => {
                                return (
                                    <Tab key={index} label={item.title} value={item.order} wrapped sx={{ textTransform: 'none', fontSize: 14 }} />
                                )
                            })
                        }
                    </TabList>
                </Item>
                {renderTabs()}
            </TabContext>
        </Box>
    )
}