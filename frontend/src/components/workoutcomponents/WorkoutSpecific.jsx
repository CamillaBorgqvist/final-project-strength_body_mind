import { useLocation, Link } from "react-router-dom";
import { useSavedWorkout } from "../../context/SaveWorkoutContext";
import data from "../../data.json";
import "../../css/workoutspecific.css"
import { useState } from "react";

export const WorkoutSpecific = () => {
  const location = useLocation(); //get access to values from Link
  const {saveWorkout} = useSavedWorkout();
  const { choice, image } = location.state || {}; 
  const [ message, setMessage] = useState("");

  // slår ihop the data from json and filters on users choise 
  const allExercises = Object.values(data).flat();
  const selectedExercises = allExercises.filter(ex => ex.program === choice);

  /*if (selectedExercises.length === 0) {
    return <p>Inga övningar hittades för "{choice}".</p>;*/
  

  const handleSaveWorkout = () => {
    const workoutToSave = {
      choice,
      image,
      exercises: selectedExercises
    };

    saveWorkout(workoutToSave)
    setMessage("Passet har sparats")
  }

  return (
    <section className="workout-specific">
      {image && (
        <img src={image} alt={choice} className="program-image" />
      )}
      <h3>{choice.replaceAll("-", " ").toUpperCase()}</h3>

      <div className="exercise-container">
        {selectedExercises.map((exercise, index) => (
          <div className="exercise-card" key={index}>
            <img src={exercise.image} alt={exercise.exercise} />
            <div className="exercise-description">
              <h5>{exercise.exercise}</h5>
              <p>{exercise.description}</p>
            </div>  
          </div>
        ))}
      </div>

      <div className="workout-button-container">  
        <Link to="/Workoutdetails" state={{ choice, image, exercises: selectedExercises }}> 
          <button className="workoutnow-button"> Träna nu </button> 
        </Link>

        <button className="saveworkout-button" onClick={handleSaveWorkout}> Spara pass </button>
      </div>

      {message && <p className="save-message">{message}</p>}
    </section>
  );
}