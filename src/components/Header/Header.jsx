import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/img/icon/logo.png';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <div className={styles.wrapper}>
         <Link
            className={styles.logo}
            to="/"
         >
            <div>
               <img
                  src={logo}
                  alt=""
               />
            </div>
         </Link>
         <div className={styles.list}>
            <Link
               className={styles.button}
               to="/"
            >
               <div>Перевірити ТТН</div>
            </Link>
            <Link
               className={styles.button}
               to="/offices"
            >
               <div>Список відділень</div>
            </Link>
         </div>
         <div className={styles.title}>Нова пошта</div>
      </div>
   );
}

export default Header;
