import { lazy } from "react";
import Loadable from "../Navigations/loadable";
import MainLayout from "../Layout";

const Dashboard = Loadable(lazy(() => import('../UIComponents/Home/dashboard')));
const Error404 = Loadable(lazy(() => import('../UIComponents/Default/404')));
const Error500 = Loadable(lazy(() => import('../UIComponents/Default/500')));
const OrderList = Loadable(lazy(() => import('../UIComponents/Order/orderList')));
const AddOrder = Loadable(lazy(() => import('../UIComponents/Order/addOrder')));
const UploadOrder = Loadable(lazy(() => import('../UIComponents/Order/uploadOrder')));

export const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [

        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/order/orderList',
            element: <OrderList />,

        },
        {
            path: 'order',
            children: [
                {
                    path: '/order/addOrder',
                    element: <AddOrder />
                }
            ]
        },
        {
            path: 'order',
            children: [
                {
                    path: '/order/uploadOrder',
                    element: <UploadOrder />
                }
            ]
        }
    ]
}

export const ErrorRoutes = {
    path: '/',
    children:[
        {
            path: '*',
            element: <Error404 />
        },
        {
            path: '/pageNotFound',
            element: <Error404 />
        },
        {
            path: '/internalServerError',
            element: <Error500 />
        },
    ]
}

