import React from "react";
import { CurrencyEuroIcon } from "@heroicons/react/outline";
import Card from "./Card";
import style from "./UsdCard.module.scss";

interface Prop {
	usd: {
		account_num: string;
		balance: number;
	};
}
function UsdCard({ usd }: Prop) {
	return (
		<Card>
			<div className={style.usd_card}>
				<div className={style.usd_card_info}>
					<h2>Balance:</h2>
				</div>
				<div className={style.usd_card_balance}>
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
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h2>{usd.balance}</h2>
				</div>
				<div>
					<h5>Account Number : {usd.account_num}</h5>
				</div>
			</div>
		</Card>
	);
}

export default UsdCard;
