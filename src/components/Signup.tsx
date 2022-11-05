import React, { useContext, useState } from "react";
import { Button, Box, Grid, TextField, Typography } from "@mui/material";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserContext } from "../context/UserContext";

export function Signup({
	loginTypeSetter,
}: {
	loginTypeSetter: (newLoginType: string) => void;
}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const { updateUserID } = useContext(UserContext);
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
				updateUserID(docID);
			})
			.catch(() => {
				setError("Could not create account");
				updateUserID("");
			});
	}

	return (
		<form>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
			>
				<Box sx={{ width: "100%", padding: "0rem 1rem 1rem 1rem" }}>
					<TextField
						required
						fullWidth
						type="text"
						variant="filled"
						label="Username"
						placeholder="Your Username"
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
					<Grid container gap="1rem">
						<Grid item flex={1}>
							<Button
								variant="contained"
								onClick={handleSignup}
								style={{ width: "100%" }}
							>
								Sign Up
							</Button>
						</Grid>
						<Grid item flex={1}>
							<Button
								variant="outlined"
								onClick={() => loginTypeSetter("signin")}
								style={{ width: "100%" }}
							>
								Sign In Instead
							</Button>
						</Grid>
					</Grid>
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
