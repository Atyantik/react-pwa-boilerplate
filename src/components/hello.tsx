import { useSyncData } from '@reactpwa/core';
import { FC } from 'react';
import { HomeData } from '../services/data';

const Hello: FC = () => {
  const { data, syncScript } = useSyncData('home.data', HomeData);
  return (
    <>
      <h2>{data.content}</h2>
      {syncScript}
    </>
  );
};

export default Hello;
