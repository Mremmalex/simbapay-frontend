import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import StoreProvider from "../store/storeProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StoreProvider>
	);
}

export default MyApp;
