import { useLocation } from "react-router-dom";
import { TimerInterval } from "../TimerInterval";
import { useState } from "react";

export const WorkoutDetails = () => {
  const location = useLocation();
  const { choice, image, exercises } = location.state || {};
  const [ zoomedImage, setZoomedImage] = useState(null);
  

  const timerSettings = {
    "stretch-lowerbody": { work: 45, rest: 7, rounds: 2 },
    "stretch-overbody": { work: 45, rest: 7, rounds: 2 },
    "tabata-strength-overbody": { work: 20, rest: 10, rounds: 8 },
    "tabata-strength-lowerbody": { work: 20, rest: 10, rounds: 8 },
    "tabata-cardio": { work: 20, rest: 10, rounds: 8 }
  };

  const settings = timerSettings [choice];

  return (
    <section className="workout-details">
      {image && <img src={image} alt={choice} className="program-image" />}
      <h3>{choice.replaceAll("-", " ").toUpperCase()}</h3>

      <div className="exercise-container">
        {exercises.map((exercise, index) => (
          <div className="exercise-card exercise-card-details" key={index}>
            <div className="exercise-image-description">
              <img src={exercise.image} alt={exercise.exercise} onClick={() => setZoomedImage(exercise.image)} className="exercice-image" />
              <div className="exercise-description">
                <h5>{exercise.exercise}</h5>
                <p>{exercise.description}</p>
              </div>  
            </div>  

            <div className="timer-style">
              {settings && (
                <TimerInterval
                  work={settings.work}
                  rest={settings.rest}
                  rounds={settings.rounds}
                />
              )} 
            </div>
          </div>  
        ))}
      </div>

      {zoomedImage && (
        <div className="image-modal">
          <button className="close-modal" onClick={() => setZoomedImage(null)}>
            ×
          </button>
          <img src={zoomedImage} alt="Zoomed exercise image" />
        </div>
      )}
    </section>
  );
};
