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
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const { resolvedTheme, theme, setTheme } = useTheme()

  return (
    <header className={header.header}>
      <Link href="/" className={header.logo}>
        <img src="/img/dms_logo.svg" />DIMENSION</Link>
      <input type="checkbox" id="toggler" />
      <label for="toggler"><MenuIcon/></label>
      <div className={header.menu}>
        <ul className={header.list}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Content</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Developer</Link></li>
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
