import { Link, useNavigate } from "react-router-dom"
import "../../css/workoutselectioncard.css"
import { ArrowLeft } from "lucide-react"

export const WorkoutSelectionGym = () => {
  const navigate = useNavigate ();

  return (
  <>
    <div className="header-pick-workout">
      <h2>Gym Workout</h2>
      <p>Med våra tre gympass får kroppen all träning den behöver för veckan. 
        Vi ger dig 6 övningar per pass och du väljer själv vikt för att utmana dig. Varva gärna ner med ett av våra Stretchpass efteråt </p>
      <button onClick={() => navigate(-1)} className="back-button" >
        <ArrowLeft className="back-arrow" />
      </button>  
    </div>

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
  </>  
  )
}