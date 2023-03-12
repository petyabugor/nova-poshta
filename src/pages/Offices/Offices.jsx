import React from 'react';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function Offices() {
   const [offices, setOffices] = useState([]);

   const apiKey = '580c856ea51f60fb314b58ae09b7276b';
   const url = 'https://api.novaposhta.ua/v2.0/json/';
   let options = JSON.stringify({
      apiKey: apiKey,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
         Limit: '200',
      },
   });

   useEffect(() => {
      fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: options,
      })
         .then((response) => response.json())
         .then((res) => setOffices(res.data));
   }, []);
   return (
      <div className={styles.wrapper}>
         <table className={styles.table}>
            <tr>
               <th>Область</th>
               <th>Населений пункт</th>
               <th>Вага до</th>
            </tr>

            {offices.map((val) => (
               <tr>
                  <td>{val.SettlementAreaDescription}</td>
                  <td>{val.ShortAddress}</td>
                  <td>{val.TotalMaxWeightAllowed} кг</td>
               </tr>
            ))}
         </table>
      </div>
   );
}

export default Offices;
