import { AppBar, Box, Button, Grid, IconButton, InputBase, Toolbar, Typography, Paper, Tooltip, Input, InputLabel, Divider, LinearProgress } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { loader } from '../../Redux/Actions/loader';
import styled from '@mui/system/styled';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as XLSX from "xlsx";
import LinearWithValueLabel from '../../Loader/linearLoader';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
}));

export default function UploadOrder(props) {
    const dispatch = useDispatch();
    const [totatRecords, setTotalRecords] = useState(0);
    const [totalSuccess, setTotalSuccess] = useState(0);
    const [totalFailed, setTotalFailed] = useState(0);
    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            convertXLSXToJson(e.target.result)
        };
        reader.readAsBinaryString(file);
    };
    const convertXLSXToJson = (binary) => {
        const wb = XLSX.read(binary, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws)
        setTotalRecords(data.length)
        console.log(Object.keys(data[0]).length)
    }
    const handleSelectFile = (event) => {
        event.preventDefault();
        console.log(event.target.files[0])
        readFile(event.target.files[0])
    }
    useEffect(() => {
        //dispatch(loader(false))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Item>
                <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Grid item xs={12}>
                        <Button variant="text" component="span" sx={{ textTransform: 'none' }}>
                            Download Format
                        </Button>
                    </Grid>
                    <Grid item xs sx={{ ml: 1 }}>
                        <Box>
                            <Typography variant='body1' sx={{ fontWeight: 700 }}>Upload Manifest</Typography>
                        </Box>
                        <Box>
                            <Input accept="image/*" id="contained-button-file"
                                type="file" disableUnderline sx={{ textDecoration: 'none', height: 100 }}
                                onChange={handleSelectFile}
                            />
                        </Box>
                        <Box>
                            <Button variant="contained" component="span" disabled sx={{ textTransform: 'none' }}>
                                Upload
                            </Button>
                        </Box>
                    </Grid>
                    <Divider orientation='vertical' flexItem sx={{ mt: 1.9 }} />
                    <Grid item xs >
                        <Box>
                            <Typography variant='body1' sx={{ fontWeight: 700 }}>Upload Summary</Typography>
                        </Box>
                        <Box>
                            <Grid container spacing={2} sx={{ mt: 1 }}>
                                <Grid item xs>
                                    <Typography variant='body1' sx={{ fontWeight: 500 }}>Total Records</Typography>
                                </Grid>
                                <Divider orientation='vertical' flexItem sx={{ mt: 1.9 }} />
                                <Grid item xs>
                                    <Button variant="text" component="span" sx={{ textTransform: 'none' }} title="Total Records">{totatRecords}</Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs>
                                    <Typography variant='body1' sx={{ fontWeight: 500 }}>Total Success</Typography>
                                </Grid>
                                <Divider orientation='vertical' flexItem sx={{ mt: 1.9 }} />
                                <Grid item xs>
                                    <Button variant="text" component="span" sx={{ textTransform: 'none' }} title="Total Success">{totalSuccess}</Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs>
                                    <Typography variant='body1' sx={{ fontWeight: 500 }}>Total Failed</Typography>
                                </Grid>
                                <Divider orientation='vertical' flexItem sx={{ mt: 1.9 }} />
                                <Grid item xs>
                                    <Button variant="text" component="span" sx={{ textTransform: 'none' }} title="Total Failed">{totalFailed}</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <LinearWithValueLabel />
                    </Grid>
                </Grid>
            </Item>
        </Box>
    )
}