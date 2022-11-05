import { Header } from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Grid } from "@mui/material";
import { Login } from "./components/Login";

function App() {
	return (
		<Grid
			container
			flexDirection="column"
			sx={{ width: "100vw", height: "100vh" }}
		>
			<Grid item>
				<Header />
			</Grid>
			{/* <Dashboard /> */}
			<Grid item>
				<Login />
			</Grid>
		</Grid>
	);
}

export default App;
