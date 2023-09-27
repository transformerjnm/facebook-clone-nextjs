"use client";
import { Button } from "@mui/material";
import TextInput from "../Atoms/TextInput.js/TextInput";
import { useState } from "react";

/**
 * Summary:
 * login and registration form
 *
 * Props:
 *
 */
export default (props) => {
	const [isRegistering, setIsRegistering] = useState(false);
	const login = () => {
		console.log("login");
	};
	const register = () => {
		console.log("register");
	};
	return (
		<form>
			<TextInput variant="default" placeHolderText="Your Email" />
			<TextInput variant="default" placeHolderText="Your Password" />
			{isRegistering ? (
				<>
					<TextInput
						variant="default"
						placeHolderText="Confirm Your Password"
					/>
					<Button onClick={register} variant="contained">
						Register
					</Button>
					<Button
						onClick={() => {
							setIsRegistering(false);
						}}
						variant="contained"
					>
						Login To An Account
					</Button>
				</>
			) : (
				<>
					<Button onClick={login} variant="contained">
						Login
					</Button>
					<Button
						onClick={() => {
							setIsRegistering(true);
						}}
						variant="contained"
					>
						Create An Account
					</Button>
				</>
			)}
		</form>
	);
};
