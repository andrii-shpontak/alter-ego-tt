import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { IState } from '../../store/slice';

const PrivateRoute = () => {
  const auth: boolean = useSelector((state: IState) => state?.isAuth);
  return auth ? <Outlet /> : <Navigate to="/alter-ego-tt/" />;
};

export default PrivateRoute;
