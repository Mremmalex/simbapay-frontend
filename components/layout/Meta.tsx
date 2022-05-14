import Head from "next/head";

interface Props {
	title: string;
	description?: string;
	keywords?: string;
}

function Meta({ title, description, keywords }: Props) {
	return (
		<Head>
			<meta content={keywords} name="keywords" />
			<meta content={description} name="description" />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

Meta.defaultProps = {
	title: "simba pay",
	description: "your mondern mobile bank",
	keywords: "mobile bank, account, bank",
};

export default Meta;
