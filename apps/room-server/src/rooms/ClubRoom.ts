import { Room, Client } from 'colyseus';
import { ClubState, Player } from '@explorers-club/schema';
import {
  ClubRoomEnterNameCommand,
  ClubRoomSelectGameCommand,
  ClubRoomStartGameCommand,
  CLUB_ROOM_ENTER_NAME,
  CLUB_ROOM_SELECT_GAME,
  CLUB_ROOM_START_GAME,
} from '@explorers-club/commands';

export class ClubRoom extends Room<ClubState> {
  ROOMS_CHANNEL = '#rooms';

  async onCreate(options) {
    const { roomId } = options;

    const state = new ClubState();
    this.setState(state);
    this.roomId = roomId;
    this.state.selectedGame = 'trivia_jam';

    this.onMessage(
      CLUB_ROOM_ENTER_NAME,
      (client, command: ClubRoomEnterNameCommand) => {
        const { playerName } = command;
        const existingNames = Array.from(state.players.entries()).map(
          ([_, player]) => player.name
        );
        if (!existingNames.includes(playerName)) {
          const player = new Player({
            name: playerName,
          });
          state.players[client.sessionId] = player;
        }
      }
    );

    this.onMessage(
      CLUB_ROOM_SELECT_GAME,
      (client, command: ClubRoomSelectGameCommand) => {
        console.log(client.sessionId, command);
      }
    );

    this.onMessage(CLUB_ROOM_START_GAME, (client) => {
      console.log('start');
    });
  }

  onJoin(client: Client) {
    console.log(client.sessionId, 'joined!', this.roomId, this.roomName);
  }

  async onLeave(client: Client) {
    // When player leaves, hold for 30 seconds before they disconnect
    const player = this.state.players.get(client.sessionId);
    if (!player) {
      return;
    }

    this.state.players.get(client.sessionId).connected = false;
    try {
      await this.allowReconnection(client, 30);
      this.state.players.get(client.sessionId).connected = true;
    } catch (ex) {
      this.state.players.delete(client.sessionId);
    }
  }

  onDispose() {
    console.log('disposing', this.roomId);
  }
}