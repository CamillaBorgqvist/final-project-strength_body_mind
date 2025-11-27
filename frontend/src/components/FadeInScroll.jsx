import { useEffect, useRef } from "react";

export const FadeInSection = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }
      },
      { threshold: 0.2 } // triggar när 20% syns
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="fade-in">{children}</div>;
};