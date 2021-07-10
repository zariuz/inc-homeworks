import React from 'react';
import {AffairType} from './HW2';
import style from './Affairs.module.css';

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

  const priority = props.affair.priority;
  const color = priority === 'low' ? 'green' : priority === 'middle' ? 'orange' : 'red';

  return (
    <div className={style.affairItem}>
      <div className={style.affairEl}>{props.affair.name}</div>
      <div className={style.affairEl} style={{color}}>
        [{priority}]
      </div>
      <div className={style.affairEl}>
        <button onClick={deleteCallback}>X</button>
      </div>
    </div>
  );
}

export default Affair;
