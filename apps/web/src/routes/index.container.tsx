import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { ColyseusContext } from '../state/colyseus.context';
import { IndexComponent } from './index.component';

export const Index = () => {
  const colyseusClient = useContext(ColyseusContext);

  const query = useQuery('rooms', async () => {
    return colyseusClient.getAvailableRooms('trivia_jam');
  });

  return <IndexComponent rooms={query.data} />;
};