import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import s from './Header.module.css';

function Header() {
  return (
    <nav>
      <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}></input>
      <label className={s.btnMenu} htmlFor="hmt">
        <span className={s.first}></span>
        <span className={s.second}></span>
        <span className={s.third}></span>
      </label>
      <ul className={s.hiddenMenu}>
        <li className={s.menuItem}>
          <NavLink
            to={PATH.PRE_JUNIOR}
            className={s.menuLink}
            activeClassName={s.selected}>
            PreJunior
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <NavLink to={PATH.JUNIOR} className={s.menuLink} activeClassName={s.selected}>
            Junior
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <NavLink
            to={PATH.JUNIOR_PLUS}
            className={s.menuLink}
            activeClassName={s.selected}>
            Junior+
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
