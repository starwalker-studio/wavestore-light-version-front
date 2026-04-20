import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.hero_section}>
      <div className={style.hero_container}>
        <div className={style.hero_wrapper}>
          <div className={style.hero_flex}>
            <div className={style.offer}>
              <img src="/img/hero/guitar-offer.png" alt="" />
              <div className={style.promo_grid}>
                <div>
                  <img src="/img/hero/promo/financing.png" alt="" />
                </div>
                <div>
                  <img src="/img/hero/promo/effects-promo.png" alt="" />
                </div>
                <div>
                  <img src="/img/hero/promo/guitar-promo.png" alt="" />
                </div>
                <div>
                  <img src="/img/hero/promo/monitor-promo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
