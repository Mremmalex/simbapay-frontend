import axios from "axios";

const base = process.env.NEXT_PUBLIC_BACKEND_URL;

const authbase = `${base}/api/auth/`;

export function makeTransfer(
	currency: string,
	account_num: string,
	amount: number
) {
	return axios
		.post(
			`${authbase}/transfer`,
			{
				currency,
				account_num,
				amount,
			},
			{ withCredentials: true }
		)
		.then((res) => res.data);
}
