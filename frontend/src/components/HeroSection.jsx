import { useState, useEffect} from "react";

export const HeroSection = () => {

    const images = [
        "/hero.jpg",
        "/hero1.jpg",
        "/hero2.jpg"
    ];
    const [currentImg, setCurrentImg] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentImg ((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval (interval);
    }, []);


  return (
    <section className="hero-section">
        {images.map((src, index) => (
            <img key={index} src={src} alt="Fitness images" className={`hero-image ${index === currentImg ? "active" : ""}`} />
        ))}
        <div className="hero-text">
            <h1>Strength Body Mind</h1>
            <h2>Träningspass för alla tillfällen, för alla</h2>
        </div>
    </section>
  );
}