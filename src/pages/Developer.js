import styles from "../styles/pages/developer.module.scss"
import Footer from "components/layouts/Footer"

import YouTube from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import Verified from "@mui/icons-material/Verified";

export default function About() {
    return (
        <div className={styles.background}>
            <div className={styles.container} id="members">
      {/* DEVELOPER PROJECT */}
      <div className={styles.developer}>
        <div className={styles.main}>
          <div className={styles.text_main}>
            <img src="./img/members.svg" alt="" />
          </div>
        </div>
        {/* <div className={home.logo}>
          <img src="./logos+.png" alt="" />
        </div> */}
        <hr className={styles.hr_mid} data-content="" />
        <div className={styles.card}>
          <div className={styles.profile_card} id="#1">
            <div className={styles.wrapper}>
              <div className={styles.img_area}>
                <div className={styles.inner_area}>
                  <img src="./developer/00.jpg" alt="@MCKIMKUNG" />
                </div>
              </div>
              <div className={styles.name}>
                <div className={styles.test}>
                  @MCKimKunG
                  <Verified
                    style={{ alignItems: "center", color: "limegreen" }}
                  />
                </div>
              </div>
              <div className={styles.about}>Developer | Plugin | Modding</div>
              <div className={styles.social_icons}>
                <a
                  href="https://github.com/MCKimKunG"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.fb}
                >
                  <GitHub style={{ color: "black", fontSize: "36px" }} />
                </a>
                <a
                  href="https://www.youtube.com/@MCKimKunG"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.yt}
                >
                  <YouTube style={{ color: "red", fontSize: "36px" }} />
                </a>
                <a
                  href="https://twitter.com/MCKimKunG"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.tw}
                >
                  <Twitter style={{ color: "#00acee", fontSize: "36px" }} />
                </a>
              </div>
              {/* <div className={styles.buttons}>
                <Button text="FOLLOWS" link="https://github.com/MCKimKunG" />
                <Button
                  text="CONTRACT"
                  link="https://discord.com/users/465465938012274698"
                />
              </div> */}
            </div>
          </div>
          <div className={styles.profile_card} id="#2">
          <div className={styles.wrapper}>
              <div className={styles.img_area}>
                <div className={styles.inner_area}>
                  <img src="./developer/03.jpg" alt="@NovaSystem" />
                </div>
              </div>
              <div className={styles.name}>
                <div className={styles.test}>
                  @NovaSystem
                  <Verified
                    style={{ alignItems: "center", color: "limegreen" }}
                  />
                </div>
              </div>
              <div className={styles.about}>
                Developer | Plugin | Command Block
              </div>
              <div className={styles.social_icons}>
                <a
                  href="https://github.com/Novaritia"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.fb}
                >
                  <GitHub style={{ color: "BLACK", fontSize: "36px" }} />
                </a>
                <a
                  href="https://www.youtube.com/@pinkmachine4693"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.yt}
                >
                  <YouTube style={{ color: "red", fontSize: "36px" }} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.tw}
                >
                  <Twitter style={{ color: "#00acee", fontSize: "36px" }} />
                </a>
              </div>
              {/* <div className={styles.buttons}>
                <Button text="FOLLOWS" link="https://github.com/Novaritia" />
                <Button
                  text="CONTRACT"
                  link="https://discord.com/users/554852570330562560"
                />
              </div> */}
            </div>
          </div>
          <div className={styles.profile_card} id="#3">
            <div className={styles.wrapper}>
              <div className={styles.img_area}>
                <div className={styles.inner_area}>
                  <img src="./developer/02.jpg" alt="@SHIBA / SORATO" />
                </div>
              </div>
              <div className={styles.name}>
                <div className={styles.test}>
                    @SHIBA / SORATO
                  <Verified
                    style={{ alignItems: "center", color: "limegreen" }}
                  />
                </div>
              </div>
              <div className={styles.about}>Developer | Plugin | Modding</div>
              <div className={styles.social_icons}>
                <a
                  href="https://github.com/9SHIBA"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.fb}
                >
                  <GitHub style={{ color: "BLACK", fontSize: "36px" }} />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.yt}
                >
                  <YouTube style={{ color: "red", fontSize: "36px" }} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.tw}
                >
                  <Twitter style={{ color: "#00acee", fontSize: "36px" }} />
                </a>
              </div>
              {/* <div className={styles.buttons}>
                <Button text="FOLLOWS" link="https://github.com/mrbrownchz" />
                <Button
                  text="CONTRACT"
                  link="https://discord.com/users/450711285839953931"
                />
              </div> */}
            </div>
          </div>
          <div className={styles.profile_card} id="#4">
            <div className={styles.wrapper}>
              <div className={styles.img_area}>
                <div className={styles.inner_area}>
                  <img src="./developer/01.jpg" alt="@NovaSystem" />
                </div>
              </div>
              <div className={styles.name}>
                <div className={styles.test}>
                  @infinityRIP
                  <Verified
                    style={{ alignItems: "center", color: "limegreen" }}
                  />
                </div>
              </div>
              <div className={styles.about}>
                Social Media / Fanpage Anoucements
              </div>
              <div className={styles.social_icons}>
                <a
                  href="https://github.com/infinityRIP"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.fb}
                >
                  <GitHub style={{ color: "BLACk", fontSize: "36px" }} />
                </a>
                <a
                  href="https://www.youtube.com/@infinityripch.4427"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.yt}
                >
                  <YouTube style={{ color: "red", fontSize: "36px" }} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.tw}
                >
                  <Twitter style={{ color: "#00acee", fontSize: "36px" }} />
                </a>
              </div>
              {/* <div className={styles.buttons}>
                <Button text="FOLLOWS" link="https://github.com/Novaritia" />
                <Button
                  text="CONTRACT"
                  link="https://discord.com/users/554852570330562560"
                />
              </div> */}
            </div>
          </div>
          {/* DEVELOPER PROJECT */}
        </div>
      </div>
      <hr className={styles.hr_mid} data-content="" />
    </div>
            <Footer/>
        </div>
    )
}