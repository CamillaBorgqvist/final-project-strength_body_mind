import { useEffect, useState } from "react"
import { WorkoutOverview } from "./WorkoutOverview";
import { useSavedWorkout } from "../context/SaveWorkoutContext";
import { Link } from "react-router-dom"

export const WelcomeSignedIn = () => {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState("")
  const { savedWorkouts } = useSavedWorkout()
  const { deleteWorkout } = useSavedWorkout ()

  useEffect(() => {
    const token = localStorage.getItem("accessToken")

    const fetchProfile = async () => {
      try {
        const response = await fetch("https://strength-body-mind.onrender.com/profile", {
          headers: { Authorization: `Bearer ${token}` }
        })
        const data = await response.json()
        if (response.ok) {
          setUserData(data)
        } else {
          setError(data.message || "Otillåten åtkomst")
        }
      } catch (err) {
        setError("Serverfel")
      }
    }

    fetchProfile()
  }, [])

  if (error) return <p>{error}</p>
  if (!userData) return <h4>Laddar...</h4>

  return ( 
    <>
      <h2>Välkommen {userData.name}</h2>
      <h2>Vilket pass vill du träna idag?</h2>
      <WorkoutOverview showHeader={false} />
      
      <section className="saved-workouts-section">
          <h2>Dina sparade pass</h2>

          {savedWorkouts.length === 0 && (
            <h4>Du har inga sparade pass än.</h4>
          )}

          <div className="saved-workouts-card-section">
              {savedWorkouts.map((workout) => (
                  <div key={workout._id} className="workout-card-wrapper">
                    <button className="delete-button" onClick={(e) => {
                        e.preventDefault();
                        deleteWorkout(workout._id);
                      }}
                    >
                      &times;
                    </button>
                    <Link
                      to="/Workoutspecific"
                      state={{ choice: workout.choice, image: workout.image }}
                      className="workout-card"
                    >
                      <img src={workout.image} alt={workout.choice} />
                      <div className="overlay">
                        <h6>{workout.choice.replaceAll("-", " ").toUpperCase()}</h6>
                        <p>{workout.exercises.length} övningar</p>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>  
      </section> 
    </>  
  )
}
