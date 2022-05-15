import React from "react";
import { CurrencyEuroIcon } from "@heroicons/react/outline";
import Card from "./Card";
import style from "./NairaCard.module.scss";

interface Prop {
	ngn: {
		account_num: string;
		balance: number;
	};
}
function NairaCard({ ngn }: Prop) {
	return (
		<Card>
			<div className={style.naira_card}>
				<div className={style.naira_card_info}>
					<h2>Balance:</h2>
				</div>
				<div className={style.naira_card_balance}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={style.icon}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
						/>
					</svg>
					<h2>{ngn.balance}</h2>
				</div>
				<div>
					<h5>Account Number : {ngn.account_num}</h5>
				</div>
			</div>
		</Card>
	);
}

export default NairaCard;
