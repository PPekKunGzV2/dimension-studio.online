import Btn from "components/props/btn";
import Footer from "components/layouts/Footer";
import styles from "../styles/pages/creations.module.scss";

export default function Creations() {
  return (
    <div className={styles.background}>
      <h1>DIMENSION CREATIONS</h1>
      <div className={styles.container}>
        <div className={styles.card} id="project1">
          <div className={styles.imgBx}>
            <img src="/creations/ss1-2.png" alt="" />
            <h2>PARTYGAME SS1</h2>
            <a href="https://www.youtube.com/watch?v=cHC1HAIKIAs" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>

        <div className={styles.card} id="project2">
          <div className={styles.imgBx}>
            <img src="/creations/ss1-2.png" alt="" />
             <h2>PARTYGAME SS2</h2>
            <a href="https://www.youtube.com/live/xGKjHDYOe10" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>

        <div className={styles.card} id="project3">
          <div className={styles.imgBx}>
          <img src="/creations/ss3.png" alt="FriendsCraft PartyGame Season 3" />
             <h2>PARTYGAME SS3</h2>
            <a href="https://www.youtube.com/live/yBlqnxDiLsc" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>

        <div className={styles.card} id="project3.5">
          <div className={styles.imgBx}>
          <img src="/creations/ss3.png" alt="FriendsCraft PartyGame Halloween" />
             <h2>PARTYGAME SS3.5</h2>
            <a href="https://www.youtube.com/live/" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>

        <div className={styles.card} id="project4">
          <div className={styles.imgBx}>
          <img src="/creations/ss3.png" alt="FriendsCraft PartyGame Space" />
             <h2>PARTYGAME SS4</h2>
            <a href="https://www.youtube.com/live/" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>

        <div className={styles.card} id="project4">
          <div className={styles.imgBx}>
            <img src="/creations/high-school.png" alt="" />
            <h2>High School</h2>
            <a href="https://www.youtube.com/hashtag/friendscrafthighschool" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>
        
        <div className={styles.card} id="project5">
          <div className={styles.imgBx}>
            <img src="/creations/true-legends.png" alt="" />
            <h2>True Legends</h2>
            <a href="https://www.youtube.com/hashtag/friendscraftsmpss4" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>

        <div className={styles.card} id="project6">
          <div className={styles.imgBx}>
            <img src="/creations/kmtab.png" alt="" />
            <h2>KmTab Plugin</h2>
            <a href="https://github.com/PPekKunGz/KmTab-WaterFall" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>

        <div className={styles.card} id="project7">
          <div className={styles.imgBx}>
            <img src="/creations/a14.gif" height={"250px"} alt="" />
            <h2>FriendsCraft ???</h2>
            <a href="https://github.com/PPekKunGz/" target="_blank" rel="noreferrer">
              <Btn text="WATCHING"/>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
