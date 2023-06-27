import effects from "../src/styles/components/bgeffect.module.scss"

function BGEffect() {
  return (
    <div className={effects.area}>
      <ul className={effects.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default BGEffect;
