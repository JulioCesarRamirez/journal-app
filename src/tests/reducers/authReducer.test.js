import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Testing authReducer', () => {
  it('should do login', () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Juan',
      },
    };
    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: 'abc',
      name: 'Juan',
    });
  });
  it('should do logout', () => {
    const initState = {
      uid: 'jasdfjalkdfj',
      name: 'Juan',
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });

  it('should not do any changes', () => {
    const initState = {
      uid: 'jasdfjalkdfj',
      name: 'Juan',
    };
    const action = {
      type: 'hshs',
    };
    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});
