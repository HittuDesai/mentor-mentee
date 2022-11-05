import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export function Login() {
	const [loginType, setLoginType] = useState<string>("signin");
	const loginTypeSetter = (newLoginType: string) => {
		setLoginType(newLoginType);
	};

	return (
		<Grid
			item
			flex={1}
			container
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			sx={{ width: "100%", height: "100%" }}
		>
			{loginType === "signin" ? (
				<Grid item sx={{ width: "100%" }}>
					<Signin loginTypeSetter={loginTypeSetter} />
				</Grid>
			) : (
				<Grid item sx={{ width: "100%" }}>
					<Signup loginTypeSetter={loginTypeSetter} />
				</Grid>
			)}
		</Grid>
	);
}
