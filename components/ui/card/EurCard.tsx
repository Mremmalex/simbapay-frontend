import React from "react";
import { CurrencyEuroIcon } from "@heroicons/react/outline";
import Card from "./Card";
import style from "./EurCard.module.scss";

interface Prop {
	eur: {
		account_num: string;
		balance: number;
	};
}

function EurCard({ eur }: Prop) {
	return (
		<Card>
			<div className={style.eur_card}>
				<h2>Balance:</h2>
				<div className={style.eur_card_info}></div>
				<div className={style.eur_card_balance}>
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
							d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h2>{eur.balance}</h2>
				</div>
			</div>
		</Card>
	);
}

export default EurCard;
