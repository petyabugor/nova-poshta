import React, { useEffect } from 'react';
import Forma from '../../common/Form/Forma';
import styles from './styles.module.scss';
import { useState } from 'react';
import axios from 'axios';

function Home() {
   const [searchValue, setSearchValue] = useState('');
   const [valueButtonClick, setValueButtonClick] = useState('');
   const [statusParcel, setStatusParcel] = useState([]);

   const apiKey = '580c856ea51f60fb314b58ae09b7276b';
   const url = 'https://api.novaposhta.ua/v2.0/json/';
   useEffect(() => {
      fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            apiKey: apiKey,
            modelName: 'TrackingDocument',
            calledMethod: 'getStatusDocuments',
            methodProperties: {
               Documents: [
                  {
                     DocumentNumber: valueButtonClick,
                  },
               ],
            },
         }),
      })
         .then((response) => response.json())
         .then((res) => setStatusParcel(res.data));
   }, [valueButtonClick]);

   return (
      <div className={styles.wrapper}>
         <Forma
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            valueButtonClick={valueButtonClick}
            setValueButtonClick={setValueButtonClick}
         />
         <div className={styles.content}>
            {valueButtonClick && (
               <div className={styles.status}>
                  {statusParcel.map((val) => (
                     <div className={styles.status_content}>
                        <p>
                           {' '}
                           <b>Номер відстеження:</b> {val.Number}
                        </p>
                        <p>
                           {' '}
                           <b>Статус:</b> {val.Status}
                        </p>
                        <p>
                           {' '}
                           <b>Очікується:</b> {val.ScheduledDeliveryDate}
                        </p>
                        <p>
                           <b> Сума до сплати:</b>{' '}
                           {!val.LastAmountTransferGM
                              ? '0'
                              : Number(val.LastAmountTransferGM).toFixed(2)}{' '}
                           грн
                        </p>
                     </div>
                  ))}
               </div>
            )}

            <div className={styles.history}>
               <div className={styles.history_title}>Останні запити</div>
            </div>
         </div>
      </div>
   );
}

export default Home;
