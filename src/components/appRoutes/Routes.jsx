import { useRoutes } from 'react-router-dom';

import { MainRoutes } from './MainRoutes.jsx';

import { AuthRoutes } from "./AuthRoutes.jsx";

const Routes = () => {
    return useRoutes([MainRoutes, AuthRoutes]);
};

export default Routes;