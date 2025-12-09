import { HeroSection } from "./HeroSection"
import { WorkoutOverview } from "./WorkoutOverview"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { FadeInSection } from "./FadeInScroll"

export const Home = () => {
    const isDesktop = useMediaQuery ({minWidth: 1000 });

    const images = [
        { src: "/situplogo.jpg", text: "Skapa ett pass som passar dig" },
        { src: "/dumbellogo.jpg", text: "Välj ett av våra färdiga gympass" },
        { src: "/heartlogo.jpg", text: "Finn lunget med stretch och Yoga" }
    ];

  return (
    <>    
    <section className="hero-container">
        < HeroSection />
    </section>
    
    <section className="home-first-section">
        {isDesktop ? (
            <div className="desktop-home-layout">
                
                {/*DESTOP*/}
                <FadeInSection>
                <h2>Tabata. Gym. Stretch. <span className="highlight-word">Färdiga pass.</span> Snabbt och enkelt.</h2>
                <div className="desktop-home-description">
                    <img src="/home.jpg" alt="Woman stretching" className="home-image" />
                    <div className="desktop-home-description-text">
                        <h4>Vi har gjort <span className="highlight-word">alla förberedelser</span> så det enda du behöver tänka på är att trycka på Start!</h4>
                        <h4> Passen är anpassade att kunna genomföras vart du än är. <br/><span className="highlight-word">Hemma. På Landet. På Stranden.</span> </h4>
                        <h4>Välj ett av våra <span className="highlight-word">färdiga träningsprogram</span> och kombinera dom så det passar dig.</h4>
                    </div>
                    <img src="/home1.jpg" alt="Woman doing pushup" className="home-image" />
                </div>
                </FadeInSection>
            </div>
        ) : (
        
        <>  {/*MOBILE*/}  
            <FadeInSection>  
            <h2>Tabata. Gym. Stretch. <span className="highlight-word">Färdiga pass.</span> Snabbt och enkelt.</h2>
            <div className="home-image-box">
                <img src="/home.jpg" alt="Woman stretching" className="home-image" />
                <img src="/home1.jpg" alt="Woman doing pushup" className="home-image" />
            </div>
            <div className="mobile-home-description">
                <h4>Vi har gjort <span className="highlight-word">alla förberedelser</span> så det enda du behöver tänka på är att trycka på Start!</h4>
                <h4> Passen är anpassade att kunna genomföras vart du än är. <br/><span className="highlight-word">Hemma. På Landet. På Stranden.</span> </h4>
                <h4>Välj ett av våra <span className="highlight-word">färdiga träningsprogram</span> och kombinera dom så det passar dig.</h4>
            </div>
            </FadeInSection>
        </>
        )}
    </section>

    <section className="home-scroll-section">
        {images.map((item, index) => (
            <FadeInSection>
            <div className="home-scroll-item" key={index}>
                <img className="home-scroll-image" src={item.src} alt={`bild-${index}`} />
                <p className="home-scroll-text">{item.text}</p>
            </div>
            </FadeInSection>
        ))}
    </section>

    <section className="workout-container">
        <FadeInSection>
        <h2>Vilken typ av träning är du sugen på idag?</h2>
        <WorkoutOverview showHeader={false} />
        </FadeInSection>
    </section>

    <section className="home-second-section">
        <FadeInSection>
        <h2>Skapa ett konto för att ta del av all vår träning kostnadsfritt</h2>
        <Link to="/Signup"> <button className="sign-up-button"> Skapa konto </button> </Link>
        </FadeInSection>
    </section>
    
    </>
  )
}