'use strict';

export const sendMessage = (value) => ({
  type: 'SEND_MESSAGE',
  value
});

export const receiveMessage = (value) => ({
    type: 'RECEIVE_MESSAGE',
    value
});

export const joinRoom = (value) => ({
    type: 'JOIN_ROOM',
    value
});
