import header from "../../src/styles/components/layouts/navbar.module.scss";
import { useTheme } from 'next-themes'
import Link from "next/link";

//-- MUI ICON --//
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BookIcon from '@mui/icons-material/Book';
import BusinessIcon from '@mui/icons-material/Business';
import Sun from '@mui/icons-material/LightMode';
import Moon from '@mui/icons-material/DarkMode';


function Navbar() {
  const { resolvedTheme, theme, setTheme } = useTheme()

  return (
    <header className={header.header}>
      <a href="/" className={header.logo}>
        <img src="/img/dms_logo.svg" />DIMENSION</a>
      <div className={header.group}>
        <ul className={header.nav}>
          <li><Link href="/"><HomeIcon color="secondary" />HOME</Link></li>
          <li><Link href="/Content"><FactCheckIcon color="secondary" />CREATION</Link></li>
          <li><Link href="/About"><BookIcon color="secondary" />ABOUT</Link></li>
          <li><Link href="/Developer"><BusinessIcon color="secondary" />DEVELOPER</Link></li>
          <button
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
            type="button"
            className={header.thememode}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </ul>
      </div>
    </header>
  );
}
export default Navbar;
