import React, { useEffect } from 'react';
import Forma from '../../common/Form/Forma';
import styles from './styles.module.scss';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchparcel } from '../../redux/slices/parcelSlice';

function Home() {
   const dispatch = useDispatch();
   const { statusParcel, isLoading } = useSelector((state) => state.parcel);
   const isMounted = useRef(false);
   const [searchValue, setSearchValue] = useState('');
   const [valueButtonClick, setValueButtonClick] = useState('');
   const [list, setList] = useState(JSON.parse(localStorage.getItem('TTN')) || []);

   useEffect(() => {
      if (isMounted.current) {
         localStorage.setItem('TTN', JSON.stringify(list));
      }
      isMounted.current = true;
   }, [list]);

   const getParcel = async () => {
      dispatch(fetchparcel(valueButtonClick));
   };
   useEffect(() => {
      getParcel(valueButtonClick);
   }, [valueButtonClick]);

   const changeValue = (val) => {
      setValueButtonClick(val);
      setSearchValue(val);
   };
   console.log(valueButtonClick);

   return (
      <div className={styles.wrapper}>
         <Forma
            list={list}
            setList={setList}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            valueButtonClick={valueButtonClick}
            setValueButtonClick={setValueButtonClick}
         />
         <div className={styles.content}>
            {isLoading === 'success' && list.length > 0 && valueButtonClick && (
               <div className={styles.status}>
                  {statusParcel.map((val) => (
                     <div
                        key={val.Number}
                        className={styles.status_content}
                     >
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

            {list.length > 0 && (
               <div className={styles.history}>
                  <div className={styles.history_title}>Останні запити</div>
                  {list.length > 0 ? (
                     <>
                        {list.map((val, i) => (
                           <Link
                              key={i}
                              className={styles.ttn}
                              onClick={() => changeValue(val)}
                           >
                              <p className={valueButtonClick === val ? 'active' : ''}>{val}</p>
                           </Link>
                        ))}

                        {list.length > 0 && (
                           <div
                              className={styles.clear_storage}
                              onClick={() => setList([])}
                           >
                              Очистити
                           </div>
                        )}
                     </>
                  ) : (
                     <div>Запитів поки що нема</div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}

export default Home;
