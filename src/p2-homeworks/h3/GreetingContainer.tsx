import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setName(e.currentTarget.value);
  };
  const onKeyEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addUser();
    }
  };
  const setOnBlur = () => {
    !name && setError(true);
  };
  const addUser = () => {
    if (name.trim()) {
      addUserCallback(name);
    } else {
      setError(true);
    }
    setName('');
  };

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onKeyEnterHandler={onKeyEnterHandler}
      error={error}
      totalUsers={totalUsers}
      setOnBlur={setOnBlur}
    />
  );
};

export default GreetingContainer;
