import { useEffect, useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import { Video } from "./Video";
import { SidebarSizes } from "../assets/constants";

export function Sidebar() {
	const [sidebarSize, setSidebarSize] = useState(SidebarSizes.Large);
	const isSidebarHidden = sidebarSize === SidebarSizes.Hidden;

	const increaseSidebarSize = () => {
		// const sidebarSizeKeys = Object.keys(SidebarSizes);
		// const currentSidebarSizeKey = sidebarSizeKeys.indexOf(sidebarSize)
	};

	return (
		<>
			{isSidebarHidden ? (
				<>BRUH</>
			) : (
				<Grid container sx={{ width: sidebarSize }}>
					<Grid item container flexDirection="row">
						<Button onClick={increaseSidebarSize}>Larger</Button>
						<Button>Smaller</Button>
					</Grid>
					<Video />
					<Video />
				</Grid>
			)}
		</>
	);
}
