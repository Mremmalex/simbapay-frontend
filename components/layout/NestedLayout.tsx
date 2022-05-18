import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { getMe } from "../../pages/api";
import { userContext } from "../../store/userStore";
import { Main } from "../ui";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";

function NestedLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const useUserContext = useContext(userContext);
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			router.push("/login");
		}
	}, []);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const user = async () => {
				try {
					const res = await getMe();
					const payload = {
						user_id: res.data.user_id,
						username: res.data.username,
						email: res.data.email,
					};
					useUserContext.addUserSession(payload);
				} catch (e: any) {
					e.respone;
				}
			};
			user();
		}
	}, []);

	return (
		<>
			<Main>
				<Sidebar />
				<Content>{children}</Content>
			</Main>
		</>
	);
}

export default NestedLayout;
