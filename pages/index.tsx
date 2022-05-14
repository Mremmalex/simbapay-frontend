import type { NextPage } from "next";
import Link from "next/link";
import { NestedLayout } from "../components/layout";
import { Container, EurCard, NairaCard, UsdCard } from "../components/ui";
import style from "./Home.module.scss";

const Home: NextPage = () => {
	return (
		<section>
			<Container>
				<div className={style.auth}>
					<h1>Welcome.</h1>
					<Link href={"/login"}>login</Link>
					<Link href={"/register"}>register</Link>
				</div>
			</Container>
		</section>
	);
};

export default Home;
