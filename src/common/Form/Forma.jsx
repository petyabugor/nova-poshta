import React from 'react';
import styles from './styles.module.scss';

function Forma({ searchValue, setSearchValue, valueButtonClick, setValueButtonClick }) {
   const Validation = (event) => {
      event.preventDefault();
      setValueButtonClick(searchValue);
   };

   console.log(valueButtonClick);
   return (
      <div className={styles.wrapper}>
         <form
            className={styles.form}
            onSubmit={Validation}
         >
            <input
               className={styles.input}
               value={searchValue}
               onChange={(event) => setSearchValue(event.target.value)}
               placeholder="Введіть номер ТТН"
            />
            <button
               type="submit"
               className={styles.button}
            >
               {' '}
               Get status TTN
            </button>
         </form>
      </div>
   );
}

export default Forma;
