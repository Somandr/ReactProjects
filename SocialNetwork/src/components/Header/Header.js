import React from "react";
import classes from './Header.module.css'
// ${classes.d_grid}`
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.header_wrapper}>
          <div className={classes.header_logo}>
            <div className={classes.logo__text}>Uber</div>
            <div className={classes.logo__text}>Официальный партнёр</div>
          </div>
          <nav className={classes.header_menu}>
            <a href="#" className={classes.header_menu__links}>
              Продукты и услуги
            </a>
            <a href="#" className={classes.header_menu__links}>
              О компании
            </a>
            <a href="#" className={classes.header_menu__links}>
              Безопасность
            </a>
            <a href="#" className={classes.header_menu__links}>
              Помощь
            </a>
          </nav>
          <div className={classes.header_login}>
            <div className={classes.header_login__items}>
              <a href="#" className={classes.header_login__link}>
                Вход
              </a>
              <button className={classes.header_login__btn}>Регистрация</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
