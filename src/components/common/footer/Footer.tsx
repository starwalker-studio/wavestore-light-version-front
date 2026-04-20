import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footer_background}>
        <div className={style.footer_layout}>
          <div className={style.footer_container}>
            <div className={style.footer_content}>
              <h2>legal notice</h2>
              <p>
                ⚠️ This online store is for demonstration purposes only. Wave
                Store is a fictional project developed as part of a creative
                portfolio.
                <br />
              </p>
              <p>Copyright 2026 © Disenmix</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
