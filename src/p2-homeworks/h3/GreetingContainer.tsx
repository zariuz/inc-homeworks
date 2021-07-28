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
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const nameTrim = e.currentTarget.value.trim()

    if(nameTrim){
      setName(nameTrim)
      error && setError('')
    } else {
      setName('')
      setError('Name is required!')
    }
  };

  const addUser = () => {
    addUserCallback(name);
    setName('');
  };

  const onKeyEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (name && e.key === 'Enter') {
      addUser();
    }
  };

  const setOnBlur = () => {
    !name && setError('Name is required!');
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
