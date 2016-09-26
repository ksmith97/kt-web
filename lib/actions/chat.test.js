'use strict';

import * as actions from './chat.js';

describe('Chat actions', () => {
  it('sendMessage should create SEND_MESSAGE action', () => {
    expect(actions.sendMessage('test')).toEqual({
      type: 'SEND_MESSAGE',
      value: 'test'
    });
  });

  it('recieveMessage should create RECEIVE_MESSAGE action', () => {
    expect(actions.receiveMessage('test')).toEqual({
      type: 'RECEIVE_MESSAGE',
      value: 'test'
    });
  });

  it('joinRoom should create JOIN_ROOM action', () => {
    expect(actions.joinRoom('test')).toEqual({
      type: 'JOIN_ROOM',
      value: 'test'
    });
  });
});
