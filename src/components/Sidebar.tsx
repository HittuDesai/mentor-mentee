import { useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import { Video } from "./Video";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export function Sidebar() {
	const SideBarSizes = [0, 200, 400];
	const [sidebarSize, setSidebarSize] = useState(SideBarSizes.length - 1);
	const isSidebarHidden = sidebarSize === 0;

	const HiddenSidebar = () => (
		<IconButton onClick={() => setSidebarSize(1)}>
			<ArrowLeftIcon />
		</IconButton>
	);

	return (
		<>
			{isSidebarHidden ? (
				<HiddenSidebar />
			) : (
				<Grid container sx={{ width: SideBarSizes[sidebarSize] }}>
					<Grid item container flexDirection="row">
						{sidebarSize !== SideBarSizes.length - 1 && (
							<Button
								variant="contained"
								onClick={() => setSidebarSize(prev => prev + 1)}
							>
								Larger
							</Button>
						)}
						<Button
							variant="contained"
							onClick={() => setSidebarSize(prev => prev - 1)}
						>
							Smaller
						</Button>
					</Grid>
					<Video />
					<Video />
				</Grid>
			)}
		</>
	);
}
