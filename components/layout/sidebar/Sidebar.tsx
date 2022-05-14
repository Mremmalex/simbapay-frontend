import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../../ui";
import {
	HomeIcon,
	SwitchHorizontalIcon,
	SwitchVerticalIcon,
} from "@heroicons/react/outline";
import style from "./Sidebar.module.scss";

interface Menu {
	name: string;
	icon: JSX.Element;
	url: string;
}
function Sidebar() {
	const menu: Array<Menu> = [
		{
			name: "Dashboard",
			icon: <HomeIcon className="svg" />,
			url: "/auth/dashboard",
		},
		{
			name: "Convert",
			icon: <SwitchVerticalIcon className="svg" />,
			url: "/auth/convert",
		},
		{
			name: "Transfer",
			icon: <SwitchHorizontalIcon className="svg" />,
			url: "/auth/transfer",
		},
		{
			name: "Transactions",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			),
			url: "/auth/transactions",
		},
	];

	const router = useRouter();
	return (
		<aside className={style.sidebar}>
			<Container>
				<div className={style.menu}>
					<ul>
						{menu.map((menu) => (
							<li key={menu.name}>
								<Link href={menu.url}>
									<a
										className={
											router.pathname === menu.url ? style.active : ""
										}>
										{menu.icon}
										{menu.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</aside>
	);
}

export default Sidebar;
