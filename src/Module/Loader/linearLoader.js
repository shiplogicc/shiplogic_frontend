import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

function LinearProgressWithLabel(props) {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>

        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
    const linearLoader = useSelector(state => state.loader.linearLoader)
    const progress = useSelector(state => state.api.progress);
    const requestTime = useSelector(state => state.api.requestTime);
    console.log(linearLoader, progress, requestTime)
    return (
        <Box sx={{ width: '100%' }}>
            {
                linearLoader ?
                <LinearProgress />
                :
                <Box sx={{ width: '100%', display:requestTime > 0 ? 'flex' : 'none', justifyContent:'flex-end' }}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography variant='subtitle2' >Request Time: </Typography>
                    <Typography variant='body2' color="red"> {" "}{requestTime} s</Typography>
                </Box>
            </Box>
            }
            {/*
            <Box sx={{ width: '100%', display:'flex', justifyContent:'flex-end' }}>
                <Box sx={{ display:'flex', alignItems:'center'}}>
                    <Typography variant='subtitle2' >Request Time: </Typography>
                    <Typography variant='body2' color="red"> {" "}{requestTime} s</Typography>
                </Box>
            </Box>
            */}
        </Box>
    );
}