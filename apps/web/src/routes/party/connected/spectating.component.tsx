import { useCallback } from 'react';
import styled from 'styled-components';
import { usePartyScreenActor } from '../party-screen.hooks';
import { PartyScreenEvents } from '../party-screen.machine';
import { PlayerList } from './player-list.component';

export const Spectating = () => {
  const partyScreenActor = usePartyScreenActor();

  const handlePressJoin = useCallback(() => {
    partyScreenActor.send(PartyScreenEvents.PRESS_JOIN());
  }, [partyScreenActor]);

  return (
    <Container>
      <h3>Spectating...</h3>
      <PlayerList />
      <button onClick={handlePressJoin}>Join</button>
    </Container>
  );
};

const Container = styled.div``;