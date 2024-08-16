import "./intro.css";
import Link from "next/link";
function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introcontent">
          <span className="HI">Hi,</span>
          <span className="introtext">
            I'm
            <span className="introname">
              Taher Selim
              <br />
            </span>
            Full Stack Web Developer
          </span>
          <p className="intropara">
            I'm a passionate Full Stack Web Developer <br /> with a strong
            foundation in both front-end and back-end technologies.
          </p>
          <Link href="/">
            <button className="btn">Hire Me</button>
          </Link>
        </div>
        <img src="/BackGround.png" alt="BGimg" className="bg" />
      </section>
    </div>
  );
}

export default Intro;
