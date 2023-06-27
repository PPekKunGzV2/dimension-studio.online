import footer from "../../src/styles/components/layouts/footer.module.scss";

function Footer() {
  return (
    <>
      <div className={footer.copyright}>
        <hr className="hr_mid"/>
        Icon Font Awesome 1.2.0 · Created by Font Awesome <br/>
        Copyright © PPekKunGzDev &amp; Br6wnDev, All Rights Reserved.
      </div>
    </>
  );
}
export default Footer;
