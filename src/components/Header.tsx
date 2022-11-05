import { useEffect } from "react";
import { AppBar, Button, Grid, Typography } from "@mui/material";

export function Header() {
	useEffect(() => {
		// const currentUser = auth.currentUser;
		// if (currentUser && router.asPath === "/")
		// 	router.push(`/${loggedInUsername}`);
	}, []);

	/*
	const HeaderWithoutSession = () => (
		<AppBar position="static">
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				padding="1rem"
			>
				<SportsEsportsIcon />
				{wantsToSignin || wantsToSignup ? (
					<Button
						variant="text"
						onClick={() => {
							setWantsToSignin(false);
							setWantsToSignup(false);
						}}
					>
						Cancel
					</Button>
				) : (
					<div>
						<Button
							variant="text"
							onClick={() => setWantsToSignin(true)}
						>
							Sign In
						</Button>
						<Button
							variant="contained"
							onClick={() => setWantsToSignup(true)}
						>
							Sign Up
						</Button>
					</div>
				)}
			</Grid>
		</AppBar>
	);
	*/

	const HeaderWithSession = () => (
		<AppBar position="static">
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				padding="1rem"
			>
				<Typography variant="overline" fontSize="large">
					Mentor-Mentee
				</Typography>
			</Grid>
		</AppBar>
	);

	return <HeaderWithSession />;
}
