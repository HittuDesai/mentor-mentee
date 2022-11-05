import React, { useState } from "react";
import { Button, Box, Grid, TextField, Typography } from "@mui/material";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase";

export function Signin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	async function handleSignIn(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault();
		if (username.length === 0) {
			setError("Email cannot be empty");
			return;
		}

		if (password.length === 0) {
			setError("Password cannot be empty");
			return;
		}

		const usersCollection = collection(db, "users");
		const usernameQuery = query(
			usersCollection,
			where("username", "==", username)
		);
		const usernameSnaphot = await getDocs(usernameQuery);
		const userFound = !usernameSnaphot.empty;
		if (!userFound) {
			setError("User not found");
			return;
		}

		const docID = usernameSnaphot.docs[0].id;
		const docData = usernameSnaphot.docs[0].data();
		if (docData.password === password) {
			const data = { ...docData, docID };
			// Set User Data Here
			return;
		}

		setError("Incorrect Password");
		// Set User State Here
	}

	return (
		<form>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ width: "100%", height: "100vh" }}
			>
				<Box sx={{ width: "100%", padding: "0rem 1rem 1rem 1rem" }}>
					<TextField
						required
						fullWidth
						type="email"
						variant="filled"
						label="Email"
						placeholder="Your Email"
						onChange={event => setUsername(event.target.value)}
						autoComplete="none"
						value={username}
					/>
				</Box>

				<Box sx={{ width: "100%", padding: "0rem 1rem 1rem 1rem" }}>
					<TextField
						required
						fullWidth
						variant="filled"
						label="Password"
						placeholder="Your Password"
						onChange={event => setPassword(event.target.value)}
						autoComplete="none"
						value={password}
					/>
				</Box>

				<Box style={{ width: "100%", padding: "0rem 1rem 0rem 1rem" }}>
					<Button
						variant="contained"
						onClick={handleSignIn}
						style={{ width: "100%" }}
					>
						Sign In
					</Button>
					{error !== "" && (
						<Typography
							fontSize="xs"
							style={{ fontStyle: "italic" }}
							fontWeight="bolder"
							color="red"
						>
							{error}
						</Typography>
					)}
				</Box>
			</Grid>
		</form>
	);
}
