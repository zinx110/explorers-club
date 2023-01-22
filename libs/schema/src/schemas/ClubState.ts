import { MapSchema, Schema, type } from '@colyseus/schema';

export class ClubPlayer extends Schema {
  @type('string') userId!: string;
  @type('string') name!: string;
  @type('boolean') connected = true;
  @type('number') slotNumber!: number;
}

export class ClubState extends Schema {
  @type('string') hostUserId!: string;
  @type('string') selectedGame!:
    | 'trivia_jam'
    | 'diffusionary'
    | 'codebreakers'
    | 'little_vigilante';
  @type('string') gameRoomId: string | undefined;
  @type({ map: ClubPlayer }) public players: MapSchema<ClubPlayer> =
    new MapSchema<ClubPlayer>();
  @type({ map: 'string' }) gameConfigsSerialized = new MapSchema<string>();
}
