import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSavedWorkout } from "../../context/SaveWorkoutContext";
import data from "../../data.json";
import "../../css/workoutspecific.css"
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export const WorkoutSpecific = () => {
  const location = useLocation(); //get access to values from Link
  const {saveWorkout} = useSavedWorkout();
  const { choice, image } = location.state || {}; 
  const [ message, setMessage] = useState("");
  const [ zoomedImage, setZoomedImage] = useState(null);
  const navigate = useNavigate ();

  // slår ihop the data from json and filters on users choise 
  const allExercises = Object.values(data).flat();
  const selectedExercises = allExercises.filter(ex => ex.program === choice);

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
  <>
    <h2>{choice.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase())}</h2>
    <button onClick={() => navigate(-1)} className="back-button" >
        <ArrowLeft className="back-arrow" />
      </button> 

    <section className="workout-specific">
      {image && (
        <img src={image} alt={choice} className="program-image" />
      )}
      
      <div className="exercise-container">
        {selectedExercises.map((exercise, index) => (
          <div className="exercise-card" key={index}>
            <img src={exercise.image} alt={exercise.exercise} onClick={() => setZoomedImage(exercise.image)} className="exercice-image"/>
            <div className="exercise-description">
              <h5>{exercise.exercise}</h5>
              <p>{exercise.description}</p>
            </div>  
          </div>
        ))}
      
        <div className="workout-button-container">  
          <Link to="/Workoutdetails" state={{ choice, image, exercises: selectedExercises }}> 
            <button className="workoutandsave-button"> Träna nu </button> 
          </Link>

          <button className="workoutandsave-button" onClick={handleSaveWorkout}> Spara pass </button>
          {message && <p className="save-message">{message}</p>}

          {zoomedImage && (
            <div className="image-modal">
              <button className="close-modal" onClick={() => setZoomedImage(null)}>
                ×
              </button>
              <img src={zoomedImage} alt="Zoomed exercise image" />
            </div>
          )}
        </div>
      </div>
    </section>
  </>    
  );
}