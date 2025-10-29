import { Link } from "react-router-dom";

export const WorkoutOverview = () => {

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
  )
}