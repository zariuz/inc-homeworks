import React from 'react';
import Affair from './Affair';
import { AffairPriorityType, AffairType, defaultAffairs } from './HW2';
import style from './Affairs.module.css';

type AffairsPropsType = {
  data: typeof defaultAffairs;
  setFilter: (filter: AffairPriorityType | 'all') => void;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback} />
  ));

  const setAll = () => {
    props.setFilter('all');
  };
  const setHigh = () => {
    props.setFilter('high');
  };
  const setMiddle = () => {
    props.setFilter('middle');
  };
  const setLow = () => {
    props.setFilter('low');
  };

  return (
    <div className={style.wrapper}>
      <div className={style.affairs}>{mappedAffairs}</div>
      <div className={style.buttonBlock}>
        <button onClick={setAll}>All</button>
        <button onClick={setHigh}>High</button>
        <button onClick={setMiddle}>Middle</button>
        <button onClick={setLow}>Low</button>
      </div>
    </div>
  );
}

export default Affairs;
