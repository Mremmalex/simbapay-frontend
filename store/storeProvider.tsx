import { ReactNode } from "react";
import { AccountContextProvider } from "./accountStore";
import { UserContextProvider } from "./userStore";

function StoreProvider({ children }: { children: ReactNode }) {
	return (
		<AccountContextProvider>
			<UserContextProvider>{children}</UserContextProvider>
		</AccountContextProvider>
	);
}

export default StoreProvider;
