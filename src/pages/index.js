import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pages/index.module.scss";

//dms components
import Btn from "components/Button";

//image loader
import dms_logo from "../../public/img/dimensionstudio.svg";
import Footer from "components/layouts/Footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo_dms}>
          <Image
            src={dms_logo}
            alt="Dimension Studio"
            width={800}
            className={styles.img}
          />
        </div>
        <div className={styles.mouse_scroll}>
          <Link href="/About">
            <Btn text="DIMENSION" />
          </Link>
        </div>
        <div style={{marginTop: '50px'}}/>
        <Footer/>
      </div>
    </div>
  );
}
