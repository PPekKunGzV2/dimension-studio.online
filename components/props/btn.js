import styles from "../../src/styles/components/props/btn.module.scss";

function Btn(props) {
  const { text, icon } = props;
  return (
    <>
      <div className={styles.Btn}>
          <button className={styles.text}>{text}</button>
      </div>
    </>
  );
}
export default Btn;
