import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);

describe('Testing auth actions', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  it('should do login and logout', () => {
    const uid = 'ABC123';
    const displayName = 'Julio';

    const loginAction = login(uid, displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    });
    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });
  it('should do logout', async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.logout,
    });

    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });

  it('should startLoginEmailPassword', async () => {
    await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));

    const actions = store.getActions();

    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: 'WIB3G85tbXeeHMLKXgSAQlEE0nv2',
        displayName: null,
      },
    });
  });
});
