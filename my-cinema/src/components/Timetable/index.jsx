import React from 'react';

const MovieTimetable = (props) => {
  const { showInfo } = props;
  const { showList } = showInfo;
  const daysInfo = [];

  const getDays = () => {
    const days =[];
    for(let day in showInfo.showList) {
      daysInfo.push(showInfo.showList[day]);

      days.push(
        <div>
          {showList[day].map((f) => 
            <div>
              <p>{f.start}</p>
              <h5>{f.theater.name}</h5>
            </div>
            )}
        </div>
      )
    }

    return days;
  }

  return (
    <div>
      {getDays()}
    </div>
  )
}

export default MovieTimetable; 
