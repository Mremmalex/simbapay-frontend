import React from "react";
import { Navbar } from "../ui";
import Meta from "./Meta";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Meta />
			<Navbar />
			<main>{children}</main>
		</>
	);
}

export default Layout;
