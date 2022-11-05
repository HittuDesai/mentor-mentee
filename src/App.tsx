import { useContext } from "react";
import { UserContext, UserContextProvider } from "./context/UserContext";

import { Header } from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Grid } from "@mui/material";
import { Login } from "./components/Login";

function App() {
	const { userID } = useContext(UserContext);

	return (
		<Grid
			container
			flexDirection="column"
			sx={{ width: "100vw", height: "100vh" }}
		>
			<Grid item>
				<Header />
			</Grid>

			{!userID || userID?.length === 0 ? <Login /> : <Dashboard />}
		</Grid>
	);
}

export default App;
