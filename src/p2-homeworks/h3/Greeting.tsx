import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyEnterHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: boolean;
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
}) => {
  return (
    <div className={s.wrapper}>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={onKeyEnterHandler}
        className={error ? s.error : ''}
      />
      <button onClick={addUser}>add</button>
      <span className={s.total}>{totalUsers}</span>
      {error && <div className={s.errorMessage}>Введите корректное имя!</div>}
    </div>
  );
};

export default Greeting;
