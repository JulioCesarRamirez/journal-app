import {
  finishLoading,
  removeError,
  setError,
  starLoading,
} from '../../actions/ui';

import { types } from '../../types/types';

describe('Testing ui actions', () => {
  it('should work all the actions', () => {
    const action = setError('Help!');
    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'Help!',
    });
    const removeErrorAction = removeError();
    const startLoadingAction = starLoading();
    const finishLoadingAction = finishLoading();

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    });
    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    });
    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
