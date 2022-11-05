import { Grid } from "@mui/material";
import { Header } from "./components/Header";
import { LearningArea } from "./components/LearningArea";
import { Sidebar } from "./components/Sidebar";

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
			<Grid
				item
				flex={1}
				container
				flexDirection="row"
				justifyContent="space-between"
			>
				<Grid item flex={1} sx={{ background: "red" }}>
					<LearningArea />
				</Grid>
				<Grid item>
					<Sidebar />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
