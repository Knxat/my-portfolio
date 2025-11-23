import { useEffect, useRef } from "react";
import './About.css';

function About() {
  const paraRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          } else {
            entry.target.classList.remove("fade-in-visible");
          }
        });
      },
      { threshold: 0.8 }
    );

    paraRefs.current.forEach((p) => p && observer.observe(p));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about">
      <h1>Hey! I'm Daniel Tran, a Computer Engineer</h1>
      <p ref={(el) => (paraRefs.current[0] = el)} className="fade-in">
        I chose to learn hardware and build robots because they are the unseen computers that
        people interact with in the physical world. Through experience, I’ve found that working
        on hands-on projects that combine both software and hardware is really fun, since
        you get to watch small components come together into one big system.
      </p>
      <p ref={(el) => (paraRefs.current[1] = el)} className="fade-in fade-delay">
        I'm always looking to improve my hardware, software, and simulation skills as I work
        toward becoming a well-rounded engineer.
      </p>
    </section>
  );
}

export default About;
