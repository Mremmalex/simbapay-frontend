import axios from "axios";

const base = process.env.NEXT_PUBLIC_BACKEND_URL;

const baseUrl = `${base}/api`;
const userbase = `${base}/api/auth/register`;

const authbase = `${base}/api/auth/login`;

export function registerUser(payload: {
	username: string;
	email: string;
	password: string;
}) {
	return axios.post(userbase, payload).then((res) => res.data);
}

export function loginUser(payload: { username: string; password: string }) {
	return axios
		.post(authbase, payload, { withCredentials: true })
		.then((res) => res.data);
}

export function getMe() {
	return axios
		.get(`${baseUrl}/auth/user`, {
			withCredentials: true,
		})
		.then((res) => res.data);
}
