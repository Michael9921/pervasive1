import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Datalogs from "./components/Datalogs";
import Dataform from "./components//Dataform";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/signin" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/signin" />} />
			<Route path="/data-logs" exact element={<Datalogs />} />
			<Route path="/data-logs/add-data" exact element={<Dataform />} />
		</Routes>
	);
}

export default App;
