import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyEnterHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
  addUser: () => void;
  setOnBlur: () => void;
  error: string;
  totalUsers: number;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  onKeyEnterHandler,
  error,
  totalUsers,
  setOnBlur,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.input}>
        <SuperInputText value={name}
                        error={error}
                        onChange={setNameCallback}
                        onKeyPress={onKeyEnterHandler}
                        onBlur={setOnBlur}
        />
      </div>
      <div className={s.button}>
        <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
        <span className={s.total}>{totalUsers}</span>
      </div>
    </div>
  );
};

export default Greeting;
