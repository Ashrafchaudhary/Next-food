import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import headerStyle from "../../styles/mainHeader.module.css";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "./navLink";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={headerStyle.header}>
                <Link href="/" className={headerStyle.logo}>
                    <Image
                        src={logoImg}
                        alt="A plate with food on it"
                        priority
                    />
                    NextLevel Food
                </Link>

                <nav className={headerStyle.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
