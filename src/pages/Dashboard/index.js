import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/dashboard/DasboardNav";
import '../../style/dashboard.css'

export default function Dashboard() {
	return (
		<div className="dashboard">
			<div className="dashboard__nav">
				<DashboardNav/>
			</div>
			<div className="dashboard__content">
				<Outlet/>
			</div>
		</ div>
	)
}