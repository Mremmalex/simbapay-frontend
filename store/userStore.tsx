import { log } from "console";
import { createContext, ReactNode, useEffect, useState } from "react";
import { getMe } from "../pages/api";
import { User } from "../types/userTypes";

const userContext = createContext({
	user: { user_id: "", username: "", email: "" },
	addUserSession: (payload: User) => {},
});

function UserContextProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState({ user_id: "", username: "", email: "" });

	const addUserSession = (payload: User) => {
		setData(payload);
	};
	return (
		<userContext.Provider value={{ user: data, addUserSession }}>
			{children}
		</userContext.Provider>
	);
}

export { UserContextProvider, userContext };
