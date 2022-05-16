import React, { memo, useContext, useState } from "react";
import { NestedLayout } from "../../components/layout";
import { Container } from "../../components/ui";
import { AccountContext } from "../../store/accountStore";
import { getAccountDetails } from "../api/account";
import { makeTransfer } from "../api/transferService";
import styles from "./Transfer.module.scss";

function Transfer() {
	const [currency, setCurrency] = useState("eur");
	const [accountNum, setAccountNum] = useState("");
	const [amount, setAmount] = useState("");
	const [user, setUser] = useState("");
	const [errors, setErrors] = useState("");

	const useAccountContext = useContext(AccountContext);

	const handlePaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
		setAccountNum(e.currentTarget.value);
		if (accountNum.length == 10) {
			try {
				const res = await getAccountDetails(currency, accountNum);
				setUser(res.data.username);
				// console.log(res);
			} catch (e: any) {
				setErrors(e.response.error);
			}
		}
	};

	const handleAccountDetails = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setAccountNum(e.currentTarget.value);
		if (accountNum.trim().length == 10) {
			try {
				const res = await getAccountDetails(currency, accountNum);
				if (res.data) setUser(res.data.username);
				else setUser(res.message);
			} catch (e: any) {
				setErrors(e.response.message);
				// console.log(e);
			}
		}
	};

	const handleTransfer = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await makeTransfer(
				currency,
				accountNum.trim(),
				parseInt(amount.trim())
			);
			console.log(res);
		} catch (e: any) {
			setErrors(e.response.data.message);
			// console.log(e.response.data.message);
		}

		setAccountNum("");
		setCurrency("EUR");
		setAmount("");
		setUser("");
		setErrors("");
	};
	return (
		<>
			<NestedLayout>
				<Container>
					<div className={styles.transfer}>
						<h2>Send Money</h2>
						{errors ? <span>{errors}</span> : ""}
						<div className={styles.form}>
							<form onSubmit={handleTransfer}>
								<select
									name="currency"
									id="from"
									onChange={(e) => setCurrency(e.currentTarget.value)}
									className={styles.option_from}>
									<option value="eur">EUR</option>
									<option value="usd">USD</option>
									<option value="ngn">NGN</option>
								</select>
								<div>
									<input
										value={accountNum}
										type="text"
										placeholder="account number"
										onPaste={handlePaste}
										onChange={handleAccountDetails}
									/>
								</div>
								{user ? <span>{user}</span> : ""}
								<div>
									<input
										value={amount}
										type="number"
										placeholder="amount"
										onChange={(e) => setAmount(e.currentTarget.value)}
									/>
								</div>
								<button type="submit">Send</button>
							</form>
						</div>
					</div>
				</Container>
			</NestedLayout>
		</>
	);
}

export default memo(Transfer);
