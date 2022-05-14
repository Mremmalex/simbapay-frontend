import Link from "next/link";
import { Container } from "..";
import style from "./Navbar.module.scss";

function Navbar() {
	return (
		<header className={style.header}>
			<Container>
				<Link href={"/"}>simbaPay</Link>
			</Container>
		</header>
	);
}

export default Navbar;
