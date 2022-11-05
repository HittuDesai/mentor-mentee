import React, { useState } from "react";
import { Button, Box, Grid, TextField } from "@mui/material";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	async function handleSignup(
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
		if (userFound) {
			setError("Username is already taken");
			return;
		}

		const userData = { username, password };
		addDoc(usersCollection, userData)
			.then(snapshot => {
				const docID = snapshot.id;
				// Set User Data Here
			})
			.catch(() => {
				setError("Could not create account");
			});
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
						onClick={handleSignup}
						style={{ width: "100%" }}
					>
						Sign Up
					</Button>
				</Box>
			</Grid>
		</form>
	);
}
