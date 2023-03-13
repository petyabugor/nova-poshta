import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { fetchOffices } from '../../redux/slices/officesSlice';
import Skeleton from './OfficesSceleton';

function Offices() {
   const dispatch = useDispatch();
   const { offices, isLoading } = useSelector((state) => state.offices);

   const getProducts = async () => {
      dispatch(fetchOffices());
   };
   useEffect(() => {
      getProducts();
   }, []);

   return (
      <div className={styles.wrapper}>
         {isLoading === 'loading' ? (
            <div className="skeleton">
               {[...new Array(22)].map((_, index) => (
                  <Skeleton key={index} />
               ))}
            </div>
         ) : (
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
         )}
      </div>
   );
}

export default Offices;
