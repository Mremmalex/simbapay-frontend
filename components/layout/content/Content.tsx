import React from "react";
import style from "./Content.module.scss";

function Content({ children }: { children: React.ReactNode }) {
	return <div className={style.content}>{children}</div>;
}

export default Content;
