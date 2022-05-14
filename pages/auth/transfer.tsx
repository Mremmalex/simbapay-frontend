import React, { memo, useState } from "react";
import { NestedLayout } from "../../components/layout";
import { Container } from "../../components/ui";
import { getAccountDetails } from "../api/account";
import styles from "./Transfer.module.scss";

function Transfer() {
	const [currency, setCurrency] = useState("eur");
	const [accountNum, setAccountNum] = useState("");
	const [amount, setAmount] = useState("");
	const [user, setUser] = useState("");

	const [errors, setErrors] = useState({
		accountError: "",
		transferError: "",
		balanceError: "",
	});

	const handlePaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
		setAccountNum(e.currentTarget.value);
		if (accountNum.length == 10) {
			try {
				const res = await getAccountDetails(currency, accountNum);
				setUser(res.data.username);
				// console.log(res);
			} catch (e: any) {
				console.log(e);
			}
		} else {
			setUser("");
		}
	};

	const handlAccountDetails = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setAccountNum(e.target.value);
		if (accountNum.length === 10) {
			try {
				const res = await getAccountDetails(currency, accountNum);
				setUser(res.data.username);
				// console.log(res);
			} catch (e: any) {
				console.log(e);
			}
		} else {
			setUser("");
		}
	};

	const handleTransfer = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<>
			<NestedLayout>
				<Container>
					<div className={styles.transfer}>
						<h2>Send Money</h2>
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
										type="text"
										placeholder="account number"
										onPaste={handlePaste}
										onChange={handlAccountDetails}
									/>
								</div>
								{user ? <span>{user}</span> : ""}
								<div>
									<input
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
