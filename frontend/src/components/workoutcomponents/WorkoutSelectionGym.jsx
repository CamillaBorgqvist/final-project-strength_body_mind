import { Link } from "react-router-dom"
import "../../css/workoutselectioncard.css"

export const WorkoutSelectionGym = () => {

  return (
    <section className="pick-workout-section">
      <Link to="/Workoutspecific" state={{ choice: "gym-back", image: "/gymback.jpg" }} className="workout-card">
      <img src="/gymback.jpg" alt="Gym machine" />
      <div className="overlay">
        <h6>Gym - Rygg</h6>
        <p>6 övningar - 3 set</p>
      </div>
    </Link>

    <Link to="/Workoutspecific" state={{ choice: "gym-legs", image: "/gymlegs.jpg" }} className="workout-card">
      <img src="/gymlegs.jpg" alt="Gym picture" />
      <div className="overlay">
        <h6>Gym - Ben</h6>
        <p>6 övningar - 3 set</p>
      </div>
    </Link>

    <Link to="/Workoutspecific" state={{ choice: "gym-chest", image: "/gymchest.jpg" }} className="workout-card">
      <img src="/gymchest.jpg" alt="Gym chest" />
      <div className="overlay">
        <h6>Gym - Bröst&Axlar</h6>
        <p>6 övningar - 3 set</p>
      </div>
    </Link>
    </section>
  )
}