import styles from "../../src/styles/components/props/Follows.module.scss";

function Follows() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.social_test}>
          <ul className="social">
            <li>
              <a href="" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <i className="fa fa-twitter" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-instagram" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-vimeo" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-behance" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-dribbble" aria-hidden="true" />
            </li>
            <li>
              <i className="fa fa-github" aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Follows;
