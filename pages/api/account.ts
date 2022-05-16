import axios from "axios";

const base = process.env.NEXT_PUBLIC_BACKEND_URL;

const authbase = `${base}/api/auth`;

export function getUserAccounts() {
	return axios
		.get(`${authbase}/accounts`, { withCredentials: true })
		.then((res) => res.data);
}

export function getAccountDetails(currency: string, account: string) {
	return axios
		.post(
			`${authbase}/accountDetails`,
			{
				currency,
				account_num: account,
			},
			{ withCredentials: true }
		)
		.then((res) => res.data);
}
