import './Footer.css';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer className="footer">
      <section id="contact" className="section contact">
        <h2>Contact me!</h2>
        <p>Email: <a href="mailto:dannnntran71@gmail.com">dannnntran71@gmail.com
          </a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/danieltran71/" target="_blank" rel="noreferrer">linkedin.com/in/danieltran72
        </a></p>
        <p className="resume-line">
          <span className="pdf-icon">
            <Icon icon="mdi:file-pdf-box" width="48" />
          </span>
          <a href="/DT_resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </p>

      </section>
    </footer>
    
  );
}
export default Footer;
