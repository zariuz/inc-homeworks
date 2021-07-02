import React, { useState } from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
  _id: number;
  name: string;
  priority: string;
};
export type FilterType = 'all' | AffairPriorityType;

// constants
export const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
];

// pure helper functions
export const filterAffairs = (
  affairs: typeof defaultAffairs,
  filter: FilterType,
): any => {
  if (filter === 'all') return affairs;
  if (filter === 'low') {
    return affairs.filter((obj) => obj.priority === 'low');
  }
  if (filter === 'middle') {
    return affairs.filter((obj) => obj.priority === 'middle');
  }
  if (filter === 'high') {
    return affairs.filter((obj) => obj.priority === 'high');
  }
};
export const deleteAffair = (affairs: typeof defaultAffairs, _id: number): any => {
  const delAffairs = affairs.filter((obj) => obj._id !== _id);
  return delAffairs;
};

function HW2() {
  const [affairs, setAffairs] = useState<typeof defaultAffairs>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <hr />
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
