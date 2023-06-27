import main from "../styles/pages/about.module.scss";
import Footer from '../../components/layouts/Footer';
import Link from "next/link";

export default function About() {
  return (
    <div className={main.background}>
      <div className={main.resize}>
        <div className={main.heading}>
          <h1>ABOUT US</h1>
          <p>
          Java Developer, Minecraft Creators, Community
          </p>
        </div>
        <div className={main.container}>
          <section className={main.about}>
            <div className={main.dms_image}>
              <img src="/img/dimensionstudio.svg" alt="" />
            </div>
            <div className={main.about_content}>
              <h2>DIMENSION STUDIO</h2>
              <p>
                <b>"Dimension Studio"</b> Founded in 2021 <br />
                Minecraft Creators Project Server, Datapacks, Modding, etc.
                <br />
                You can hire groups or invite them to work with you.
              </p>
              <Link href="/Content" className={main.read_more}>
                Creation & Project
              </Link>
            </div>
          </section>
        </div>
        <footer style={{
          marginTop: "120px"
        }}>
        <Footer />
        </footer>
      </div>
    </div>
  );
}
