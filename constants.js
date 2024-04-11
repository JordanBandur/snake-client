const IP = 'localhost';
const PORT = 50541;
const INITIALS = "Name: JB";

const KEYMAP = {
  MOVE_UP_KEY: "Move: up",
  MOVE_DOWN_KEY: "Move: down",
  MOVE_LEFT_KEY: "Move: left",
  MOVE_RIGHT_KEY: "Move: right"
};

const KEYMESSAGES = {
  EXIT: 'Exiting game...',
  MOVE_UP: 'Moving snake up',
  MOVE_DOWN: 'Moving snake down',
  MOVE_LEFT: 'Moving snake left',
  MOVE_RIGHT: 'Moving snake right'
};

const PLAYERMESSAGES = {
  1: "Say: Eat my scales!",
  2: "Say: Later, lil bro!",
  3: "Say: Know you place!"
};

module.exports = {
  IP,
  PORT,
  INITIALS,
  KEYMAP,
  KEYMESSAGES,
  PLAYERMESSAGES
};