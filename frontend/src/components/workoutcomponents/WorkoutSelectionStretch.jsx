import { Link } from "react-router-dom"
import "../../css/workoutselectioncard.css"

export const WorkoutSelectionStretch = () => {

  return (
    <section className="pick-workout-section">
      <Link to="/Workoutspecific" state={{ choice: "stretch-lowerbody", image: "/stretch1.jpg" }} className="workout-card">
      <img src="/stretch1.jpg" alt="Stretch" />
      <div className="overlay">
        <h6>Stretch - Lower Body</h6>
        <p>6 övningar - 10 min</p>
      </div>
    </Link>

    <Link to="/Workoutspecific" state={{ choice: "stretch-overbody", image: "/stretch2.jpg" }} className="workout-card">
      <img src="/stretch2.jpg" alt="Stretch" />
      <div className="overlay">
        <h6>Stretch - Over Body</h6>
        <p>6 övningar - 10 min</p>
      </div>
    </Link>
    </section>
  )
}