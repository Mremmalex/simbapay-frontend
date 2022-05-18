import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Container } from "../components/ui";
import { userContext } from "../store/userStore";
import { loginUser } from "./api";
import style from "./Login.module.scss";

export default function Login() {
	const [username, setUsername] = useState("");

	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState("");
	const [success, setSuccess] = useState("");
	const useUserContext = useContext(userContext);
	// const errorMessage: FormError = {};

	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await loginUser({ username, password });
			setSuccess(res.message);
			const payload = {
				user_id: res.data.user_id,
				username: res.data.username,
				email: res.data.email,
			};
			useUserContext.addUserSession(payload);
			// localStorage.setItem("user", JSON.stringify(res.data));
			localStorage.setItem("token", res.token);
			router.push("/auth/dashboard");
		} catch (e: any) {
			setErrors(e.response.data.message);
			// console.log(e.response.data.message);
		}
	};
	return (
		<section>
			<Container>
				<div className={style.login}>
					<h1>Welcome Back.</h1>
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
								type="password"
								placeholder="Your Password"
								onChange={(e) => setPassword(e.currentTarget.value)}
							/>
						</div>
						<button type="submit">Login</button>
					</form>
					<div className={style.acc}>
						<p>Do not have an account ?</p>
						<Link href={"/register"}>register</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}
