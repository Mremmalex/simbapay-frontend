import React, { useContext, useEffect, useState } from "react";
import { NestedLayout } from "../../components/layout";
import { EurCard, NairaCard, Table, UsdCard } from "../../components/ui";
import { AccountContext } from "../../store/accountStore";

import { getUserAccounts } from "../api/account";
import style from "./Dashboard.module.scss";

function Dashboard() {
	// const [data, setData] = useState({
	// 	eur: {
	// 		account_num: "",
	// 		balance: 0,
	// 	},
	// 	ngn: {
	// 		account_num: "",
	// 		balance: 0,
	// 	},
	// 	usd: {
	// 		account_num: "",
	// 		balance: 0,
	// 	},
	// });
	// // const user_id = useUserContext.user.user_id;

	// useEffect(() => {
	// 	const account = async () => {
	// 		try {
	// 			const res = await getUserAccounts();
	// 			setData(res.data);
	// 		} catch (e: any) {
	// 			e.response.error;
	// 		}
	// 	};

	// 	account();
	// }, []);

	const useAccountContext = useContext(AccountContext);
	return (
		<>
			<NestedLayout>
				<div className={style.balance}>
					<EurCard eur={useAccountContext.userAccounts.eur} />
					<UsdCard usd={useAccountContext.userAccounts.usd} />
					<NairaCard ngn={useAccountContext.userAccounts.ngn} />
				</div>
				<Table />
			</NestedLayout>
		</>
	);
}

export default Dashboard;
