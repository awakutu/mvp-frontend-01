import {
	Switch,
	Redirect,
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin';
import Verification from './components/Verification';
import Verified from './components/Verification/verified';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Group from './components/Group';
import DetailGroup from './components/DetailGroup';
import DashboardAdmin from './components/DashboardAdmin';
import Approval from './components/DashboardAdmin/approval';
import Blacklist from './components/DashboardAdmin/blacklist';
import PrefCategory from './components/PrefCategory';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import DelayRoute from './utils/DelayRoute';

export default function App() {
	return (
		<Router>
			<Switch>
				<Redirect exact from="/" to="/Register" />
				<PublicRoute path="/Register" component={Register} />{' '}
				<PublicRoute path="/Login" component={Login} />{' '}
				<PublicRoute path="/LoginAdmin" component={LoginAdmin} />{' '}
				<PublicRoute path="/Verification" component={Verification} />{' '}
				<DelayRoute path="/Verified" component={Verified} />{' '}
				<PrivateRoute path="/Dashboard" component={Dashboard} />{' '}
				<PrivateRoute path="/DashboardAdmin" component={DashboardAdmin} />{' '}
				<PrivateRoute path="/DashboardAdminApproval" component={Approval} />{' '}
				<PrivateRoute path="/DashboardAdminBlacklist" component={Blacklist} />{' '}
				<PrivateRoute path="/Profile" component={Profile} />{' '}
				<PrivateRoute path="/Group" component={Group} />{' '}
				<PrivateRoute path="/DetailGroup" component={DetailGroup} />{' '}
				<PrivateRoute path="/PrefCategory" component={PrefCategory} />{' '}
			</Switch>
		</Router>
	);
}
