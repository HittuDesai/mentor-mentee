import { Header } from "./Header";
import { LearningArea } from "./LearningArea";
import { Sidebar } from "./Sidebar";
import { Grid } from "@mui/material";

function Dashboard() {
	return (
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
	);
}

export default Dashboard;
