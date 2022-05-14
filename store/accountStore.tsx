import { createContext, ReactNode, useEffect, useState } from "react";
import { getUserAccounts } from "../pages/api/account";

const AccountContext = createContext({
	userAccounts: {
		eur: {
			account_num: "",
			balance: 0,
		},
		usd: {
			account_num: "",
			balance: 0,
		},
		ngn: {
			account_num: "",
			balance: 0,
		},
	},
});
const AccountContextProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState({
		eur: {
			account_num: "",
			balance: 0,
		},
		ngn: {
			account_num: "",
			balance: 0,
		},
		usd: {
			account_num: "",
			balance: 0,
		},
	});

	useEffect(() => {
		const account = async () => {
			try {
				const res = await getUserAccounts();
				setData(res.data);
			} catch (e: any) {
				e.response.error;
			}
		};

		account();
	}, []);

	return (
		<AccountContext.Provider value={{ userAccounts: data }}>
			{children}
		</AccountContext.Provider>
	);
};

export { AccountContextProvider, AccountContext };
