import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";


export default function Loader(props) {
    const loader = useSelector(state => state.loader.loader);
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader.state}
        >
            <CircularProgress color="inherit"  />
            <Typography sx={{ m: 2 }}>{loader.title}</Typography>
        </Backdrop>
    )
}