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
    setName(e.currentTarget.value);
    if (name.length < 1) {
      setError(true);
    }
    if (name.length > 0) {
      setError(false);
    }
  };
  const onKeyEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (name.length > 1) {
        addUserCallback(name);
        setName('');
        setError(false);
      }
    }
  };
  const addUser = () => {
    if (name.length > 1) {
      addUserCallback(name);
      setName('');
      setError(false);
    }
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
    />
  );
};

export default GreetingContainer;
