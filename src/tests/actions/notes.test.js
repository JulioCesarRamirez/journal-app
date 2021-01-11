import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startNewNote,
  startLoadingNotes,
  startSaveNote,
} from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    return 'https://hola-mundo.com/photo.jpg';
  }),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: 'TESTING',
  },
  notes: {
    active: {
      id: 'wzcKhOnkQo92GvMqt2A9',
      title: 'Hola',
      body: 'Mundo',
    },
  },
};

let store = mockStore(initState);

describe('Testing notes actions', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  it('should create a new note startNewNote', async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
      },
    });

    const docId = actions[0].payload.id;
    await db.doc(`/TESTING/journal/notes/${docId}`).delete();
  });

  xit('should return startLoadingNotes  the notes', async () => {
    await store.dispatch(startLoadingNotes('TESTING'));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });
  });

  it('should startSaveNote and update the note', async () => {
    const note = {
      id: 'u6cLg3ImZHbOhzdrQkBe',
      title: 'titulo',
      body: 'body note',
    };

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);
  });
});
