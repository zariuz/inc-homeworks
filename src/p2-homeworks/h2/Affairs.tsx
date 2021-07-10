import React from 'react';
import Affair from './Affair';
import {AffairType, FilterType} from './HW2';
import style from './Affairs.module.css';

type AffairsPropsType = {
  data: Array<AffairType>;
  setFilter: (filter: FilterType) => void;
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
        <button className={style.btn} onClick={setAll}>
          All
        </button>
        <button className={style.btn} onClick={setHigh}>
          High
        </button>
        <button className={style.btn} onClick={setMiddle}>
          Middle
        </button>
        <button className={style.btn} onClick={setLow}>
          Low
        </button>
      </div>
    </div>
  );
}

export default Affairs;
