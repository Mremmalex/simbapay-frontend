import React, { useState } from "react";
import { Container } from "../components/ui";
import style from "./Register.module.scss";
import { registerUser } from "./api";
import Link from "next/link";
import { useRouter } from "next/router";

interface FormError {
	usernameError: string;
	emailError: string;
	passwordError: string;
}

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState("");
	const [success, setSuccess] = useState("");
	// const errorMessage: FormError = {};

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await registerUser({ username, email, password });
			setSuccess(res.message);
			router.push("/login");
			setUsername("");
			setEmail("");
			setPassword("");
		} catch (e: any) {
			setErrors(e.response.data.error);
			setUsername("");
			setEmail("");
			setPassword("");
		}
	};
	return (
		<section>
			<Container>
				<div className={style.register}>
					<h1>Get An Account.</h1>
					{errors && <span className={style.error}>{errors}</span>}
					{success && <span className={style.success}>{success}</span>}
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								placeholder="Your Username"
								onChange={(e) => setUsername(e.currentTarget.value)}
							/>
						</div>
						<div>
							<input
								type="email"
								placeholder="Your Email"
								onChange={(e) => setEmail(e.currentTarget.value)}
							/>
						</div>
						<div>
							<input
								type="password"
								placeholder="Your Password"
								onChange={(e) => setPassword(e.currentTarget.value)}
							/>
						</div>
						<button type="submit">Register</button>
					</form>
					<div className={style.acc}>
						<p>Got an account ?</p>
						<Link href={"/login"}>login</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Register;
