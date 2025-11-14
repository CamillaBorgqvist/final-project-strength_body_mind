import { Link, useNavigate } from "react-router-dom"
import "../../css/workoutselectioncard.css"
import { ArrowLeft} from "lucide-react"

export const WorkoutSelectionTabata = () => {
  const navigate = useNavigate();

  return (
  <>  
    <div className="header-pick-workout">
      <h2>Tabata Workout</h2>
      <p>Med våra Tabata pass får du en snabb och effektiv träning med olika fokusområden.
        Tabata är en form av högintensiv intervallträning. Den bygger på korta, intensiva träningsintervaller följda av korta viloperioder. Träningapassen tar max 24 minuter!  </p>
      <button onClick={() => navigate(-1)} className="back-button" >
        <ArrowLeft className="back-arrow" />
      </button>  
    </div>


    <section className="pick-workout-section">
      <Link to="/Workoutspecific" state={{ choice: "tabata-strength-lowerbody", image: "/tabata.jpg" }} className="workout-card">
      <img src="/tabata.jpg" alt="Tabata Strength" />
      <div className="overlay">
        <h6>Tabata - Strength Lower Body</h6>
        <p>6 övningar - 24 min</p>
      </div>
    </Link>

    <Link to="/Workoutspecific" state={{ choice: "tabata-strength-overbody", image: "/tabata2.jpg" }} className="workout-card">
      <img src="/tabata2.jpg" alt="Tabata Strength" />
      <div className="overlay">
        <h6>Tabata - Strength Over Body</h6>
        <p>6 övningar - 24 min</p>
      </div>
    </Link>

    <Link to="/Workoutspecific" state={{ choice: "tabata-cardio", image: "/tabata1.jpg" }} className="workout-card">
      <img src="/tabata1.jpg" alt="Tabata Cardio" />
      <div className="overlay">
        <h6>Tabata - Cardio</h6>
        <p>5 övningar - 20 min</p>
      </div>
    </Link>
    </section>
  </>  
  )
}