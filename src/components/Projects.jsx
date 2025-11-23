import { useState, useRef, useEffect } from "react";
import "./Projects.css";
import { Icon } from "@iconify/react";


function Projects() {
  // --- IMAGE SETS ---
  const robotImages = [
    "/images/robot1.png",
    "/images/robot2.png",
    "/videos/robot3.mp4",
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ocdVrImages = ["/images/vr1.png", 
                       "/images/vr2.png",
                       "/images/vr3.png",
                       "/images/vr4.png"];

  const [vrIndex, setVrIndex] = useState(0);
  const [fade, setFade] = useState(false);

  function changeVrImage(dir) {
  setFade(true);

  setTimeout(() => {
    setVrIndex((prev) => (prev + dir + ocdVrImages.length) % ocdVrImages.length);
    setFade(false); 
  }, 350); 
}




  const cardRefs = useRef([]);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const card = entry.target;

                // Only animate if not already visible
                if (!card.classList.contains("visible")) {
                  const cardIndex = cardRefs.current.indexOf(card);

                  setTimeout(() => {
                    card.classList.add("visible");
                  }, cardIndex * 150); 
                }
              }
            });
          },
          { threshold: 0.35 }
        );

        cardRefs.current.forEach((card) => {
          if (card) observer.observe(card);
        });

        return () => {
          cardRefs.current.forEach((card) => {
            if (card) observer.unobserve(card);
          });
        };
      }, []);


  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {/* PROJECT 1 */}
        <div
          className="project-card-full fade-up"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="project-text">
            <h3>Autonomous Firefighting Robot</h3>
            <p className="project-description">
              Competed in the IEEE R5 Robotics Competition with a team of undergraduate engineers 
              to design and build an autonomous ground firefighting robot capable of detecting 
              obstacles and navigating through an arena for a simulated fire.
              I was responsible for things such as:
              <br /><br />
              <b>Autonomy subsystem:</b>
              <ul>
                <li>
                  Implemented the obstacle avoidance logic, path-planning behavior, and handled I2C communication for the sensor package.
                </li>
              </ul>
              <b>Hardware Integration:</b>
              <ul>
                <li>
                  Integrated the sensor package (IMU, sonar, depth camera) and motor controllers with the Raspberry Pi.
                </li>
              </ul>
              <b>Testing and Validation:</b>
              <ul>
                <li>
                  Conducted extensive testing in both simulated (Gazebo) and real-world environments to ensure reliable performance.
                </li>
              </ul>
              <b>Documentation and Reporting:</b>
              <ul>
                <li>
                  Maintained detailed notebook entries and presented project updates and design decisions to engineering panels.
                </li>
              </ul>
            </p>

            <p className="project-skills">
              <b>Specific Technologies Used:</b><br />
              ROS2 Humble, Python3, Raspberry Pi 4B, Roboclaw 2x7A, IMU (MPU-6050), Sonar (HC-04),
              Gazebo Simulation, git.
            </p>
            <div className="tech-icons">
              <Icon icon="logos:ros" width="34" />
              <Icon icon="logos:python" width="34" />
              <Icon icon="logos:raspberry-pi" width="34" />
              <Icon icon="logos:git-icon" width="34" />
              <Icon icon="mdi:robot" width="34" />
            </div>

          </div>

          <div className="project-media grid-1-2">
            <img src={robotImages[0]} alt="Robot Large" className="grid-image-large" />
            <div className="grid-small-stack">
              <img src={robotImages[1]} alt="Robot Small 1" className="grid-image-small" />
              <video
                src={robotImages[2]}
                className="grid-image-small"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div
          className="project-card-full fade-up"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="project-text">
            <h3>OCD VR Simulation</h3>
            <p className="project-description">
              Capstone project with the goal to convey the troubles of living with obsessive-compulsive disorder (OCD). The project involved extensive research on OCD to ensure an accurate and empathetic portrayal, like consulting with the LSU Psychology Department.<br /><br />The vehicle of the project is a VR simulation
              that places the user in a first-person perspective of a college student's morning with OCD, experiencing intrusive thoughts and compulsions.<br /><br /> 
              
              My contributions to the project included:
              <ul>
                <li>Developed the interactive environment using Unity, Blender, and C# scripting.</li>
                <li>Implemented a dynamic visual effect that blurred the user's perspective to simulate fixation with Unity Shaders. </li>
                <li>Integrated the visual FX with audio cues to simulate intrusive thoughts and compulsive behaviors. Thus encouraging the player to perform relieving rituals 
                  such as fixing crooked furniture and keeping a clean space.</li>
                <li>Collaborating with a multidisciplinary team and communicating with professors to ensure the accuracy and sensitivity of the portrayal.</li>
                <li>Ensuring the demo of the project was safe to use for the public showcase.</li>
              </ul>

            </p>

            <p className="project-skills">
              <b>Technologies Used:</b><br />
              Unity, Unity Shaders, VR Builder, Blender, C#, Oculus Quest 2, git, 
            </p>
            <div className="tech-icons">
              <Icon icon="logos:unity" width="34" />
              <Icon icon="logos:c-sharp" width="34" />
              <Icon icon="logos:git-icon" width="34" />
              <Icon icon="solar:magic-stick-2-linear" width="34" />
            </div>

          </div>

          <div className="project-media">
  <button
    className="slide-btn left"
    onClick={() => changeVrImage(-1)}
  >
    ❮
  </button>

  <div className="slideshow-single">
    <img
      key={vrIndex} 
      src={ocdVrImages[vrIndex]}
      className={`slideshow-image ${fade ? "fade-out" : "fade-in"}`}
      alt="VR Project"
    />
  </div>

  <button
    className="slide-btn right"
    onClick={() => changeVrImage(1)}
  >
    ❯
  </button>
</div>

        </div>

        {/* PROJECT 3 */}
        <div className="project-card-full-small fade-up" ref={(el) => (cardRefs.current[2] = el)}>
          <div className="project-text">
            <h3>Arduino Synthesizer</h3>
            <p className="project-description">
              A custom-built Arduino synthesizer using PWM sound generation and MIDI-like controls.<br /><br />
              Additional functions include scale shifting and note displaying on the 7-segment display.

              <br /><br />
              <br />
              
              <br />
            </p>

            <p className="project-skills">
              <b>Technologies Used:</b><br />
              Arduino library, 7-segment display, push buttons, speakers, electrical tools
            </p>
          </div>

          <div className="project-media">
            <img src="/images/synth.png" alt="Synth Project" className="single-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
