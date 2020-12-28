import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awsome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>
      </div>
      <div className="notes__image">
        <img
          src="https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg"
          alt="noteImage"
        />
      </div>
    </div>
  );
};
