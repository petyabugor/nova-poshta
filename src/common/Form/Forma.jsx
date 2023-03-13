import React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

function Forma({
   searchValue,
   setSearchValue,
   valueButtonClick,
   setValueButtonClick,
   list,
   setList,
}) {
   const [message, setMessage] = useState('');
   const Validation = (event) => {
      event.preventDefault();
      const regEx = /^\d{14}$/;
      if (!regEx.test(searchValue)) {
         setMessage('Невірний номер ТТН');
      } else {
         setValueButtonClick(searchValue);
         setMessage('');
         const findItem = list.find((obj) => obj === searchValue);
         if (!findItem) {
            setList((ls) => [...ls, searchValue]);
         }
      }
   };

   return (
      <div className={styles.wrapper}>
         <form
            className={styles.form}
            onSubmit={Validation}
         >
            <div className={styles.inputWrapper}>
               <input
                  className={styles.input}
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Введіть номер ТТН"
               />
               {searchValue && (
                  <IoCloseOutline
                     onClick={() => setSearchValue('')}
                     className={styles.closeIcon}
                  />
               )}
            </div>
            <p className={styles.error}>{message}</p>
            <button
               type="submit"
               className={styles.button}
            >
               {' '}
               Відстежити посилку
            </button>
         </form>
      </div>
   );
}

export default Forma;
