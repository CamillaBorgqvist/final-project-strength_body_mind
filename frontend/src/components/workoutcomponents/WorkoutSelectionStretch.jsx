import { Link, useNavigate } from "react-router-dom"
import "../../css/workoutselectioncard.css"
import { ArrowLeft } from "lucide-react"

export const WorkoutSelectionStretch = () => {
  const navigate = useNavigate ();

  return (
  <>
    <div className="header-pick-workout">
      <h2>Stretch</h2>
      <p>Med våra stretchpass får du möjlighet att mjuka upp och sträcka ut musklerna.
        Stretchpassen kan du göra helt fristående som dagens lugnare träning eller efter en tyngre träningspass.</p>
      <button onClick={() => navigate(-1)} className="back-button" >
        <ArrowLeft className="back-arrow" />
      </button>  
    </div>

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
  </>
  )
}