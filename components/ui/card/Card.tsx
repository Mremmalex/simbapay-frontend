import React from "react";
import style from "./Card.module.scss";

function Card({ children }: { children: React.ReactNode }) {
	return <div className={style.card}>{children}</div>;
}

export default Card;
