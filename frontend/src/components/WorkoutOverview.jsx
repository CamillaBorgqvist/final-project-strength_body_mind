import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft} from "lucide-react"

export const WorkoutOverview = ({showHeader = true}) => {
  const navigate = useNavigate ();

  const workouts = [
        {
        image: "/tabata.jpg",
        header: "Tabata",
        description: "Här hittar du olika pass som kan genomföras övarallt utan redskap",
        link: "/WorkoutselectionTabata"
        },
        {
        image: "/gym.jpg",
        header: "Gym",
        description: "Vi hjälper dig med övningarna till ditt nästa gympass",
        link: "/WorkoutselectionGym"
        },
        {
        image: "/stretch.jpg",
        header: "Stretch & Yoga",
        description: "Mjuka upp kroppen med våra lugnare Stretch pass",
        link: "/WorkoutselectionStretch"
        },
    ]; 

  return (
  <>  

    {showHeader && (
    <div className="header-pick-workout">
        <h2>Workout Overview</h2>
        <p>Här får du en överblick över alla våra träningapass. Tabata passen är perfekta för dig på språng och kan genomföras överallt utan redskap. 
          Gympassen är skapade med tre olika fokus så inga muskler missas. 
          Stretch passen är perfekta att genomföras som de är eller efter ett styrkapass.  Med våra Tabata pass får du en snabb och effektiv träning med olika fokusområden.
        </p>
        <button onClick={() => navigate(-1)} className="back-button" >
          <ArrowLeft className="back-arrow" />
        </button>  
      </div>
    )}

    <section className="woukout-overview-section"> 
        {workouts.map((item, index) => (
            <div className="workout-type-item" key={index}>
              <img className="workout-type-item-image" src={item.image} alt={item.header} />
              <h3>{item.header}</h3>
              <p>{item.description}</p>
              <Link to={item.link}> 
                <button className="select-workout-button"> Hitta pass </button> 
              </Link>
            </div>
          ))}
    </section>

  </>      
  )
}