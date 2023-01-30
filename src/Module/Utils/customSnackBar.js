
import * as React from 'react';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { showFeedback } from '../Redux/Actions/feedback';
import { Box } from '@mui/material';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackBar() {
    const dispatch = useDispatch();
    const message = useSelector(state => state.feedback.data);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(showFeedback(null))
    };

    useEffect(() => {
        return()=>{
            dispatch(showFeedback(null))
        }
    }, [])
    if (message) {
        return (
            <Snackbar open={message ? true : false} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={message.type} sx={{ width: '100%', mt:6 }}>
                    {message.message}
                </Alert>
            </Snackbar>
        )
    } else {
        return null;
    }

}