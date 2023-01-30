import { Suspense } from 'react';
import Loader from '../Loader/overlayLoader';
//import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Loader {...props} title="FallbackError"/>}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;
