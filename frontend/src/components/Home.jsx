import { HeroSection } from "./HeroSection"
import { WorkoutOverview } from "./WorkoutOverview";
import { Link } from "react-router-dom"

export const Home = () => {

    const images = [
        { src: "/heartlogo.jpg", text: "Finn lunget med stretch och Yoga" },
        { src: "/situplogo.jpg", text: "Skapa ett pass som passar dig" },
        { src: "/dumbellogo.jpg", text: "Välj ett av våra färdiga pass" }
    ];

  return (
    <>    
    <section className="hero-container">
        < HeroSection />
    </section>

    <section className="home-first-section">
        <h2>När du enkelt vill komma igång med träningen</h2>
        <h4>Vi har gjort alla förberedelser så det enda du behöver tänka på är att trycka på Start!</h4>
        <div className="home-image-box">
            <img src="/home.jpg" alt="Woman stretching" className="home-image" />
            <img src="/home1.jpg" alt="Woman doing pushup" className="home-image" />
        </div>
        <h4> Passen är anpassade att kunna genomföras vart du än är. <br/> Hemma. På Landet. På Stranden</h4>
        <h2>Vad vi erbjuder</h2>
        <h4>Välj ett av våra färdiga träningspragram eller skapa ett som passar just dig.</h4>
    </section>

    <section className="home-scroll-section">
            {images.map((item, index) => (
                <div className="home-scroll-item" key={index}>
                    <img className="home-scroll-image" src={item.src} alt={`bild-${index}`} />
                    <p className="home-scroll-text">{item.text}</p>
                </div>
            ))}
    </section>

    <section className="workout-container">
        <h2>Välj ett av våra populära träningsprogram</h2>
        < WorkoutOverview />
    </section>

    <section className="home-second-section">
        <h2>Skapa ett konto för att ta del av all vår träning kostnadsfritt</h2>
        <Link to="/Signup"> <button className="sign-up-button"> Skapa konto </button> </Link>
    </section>


    </>
  )
}