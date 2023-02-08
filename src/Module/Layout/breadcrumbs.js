import { Breadcrumbs, Link, Stack } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setAccessedSubMenu } from "../Redux/Actions/nav";


export default function CustomBreadcrumbs(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const menu = useSelector(state => state.nav.accessedMenu);
    const subMenu = useSelector(state => state.nav.accessedSubMenu);
    const handleMenuClick = (menu) => {
        navigate(menu.url)
        dispatch(setAccessedSubMenu(null))
    }
    return (
        <Stack spacing={2} m={1} p={1} style={{ borderRadius: 4 }}>

            {
                subMenu ?
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="medium" />}
                        aria-label="breadcrumb"
                    >
                        <Link underline="none" sx={{ "&:hover": { textDecoration: "underline #0073bb" } }}>{menu.title}</Link>
                        <Link underline="none" href={subMenu.url} sx={{ "&:hover": { textDecoration: "underline #0073bb" } }}>{subMenu.title}</Link>
                    </Breadcrumbs>
                    :
                    null
            }
        </Stack >
    )
}