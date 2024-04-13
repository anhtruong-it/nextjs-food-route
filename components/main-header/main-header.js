import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './nav-link';

export default function MainHeader() {
    return (
        <header>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority/>
                Next level food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browser Meals</NavLink>
                    </li>
                    <li>
                    <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}