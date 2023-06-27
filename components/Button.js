import styles from "../src/styles/components/Button.module.scss";

function Btn(props) {
  const { text } = props;
  return (
    <>
      <div className={styles.Btn}>
          <button className={styles.text}>{text}</button>
      </div>
    </>
  );
}
export default Btn;
