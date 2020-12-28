import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1018473934%2F0x0.jpg%3Ffit%3Dscale)',
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal-entry-title">Un nuevo dia</p>
        <p className="journal-entry-content">
          Non nostrud consequat minim qui nisi esse tempor.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
