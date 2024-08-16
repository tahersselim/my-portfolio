import "./skills.css";
function Skills() {
  return (
    <section id="skills">
      <span className="skilltitle">Services I Provide</span>
      <span className="skilldescripton">
        I'm a passionate Full Stack Web Developer with a strong foundation in
        both front-end and back-end technologies. My goal is to create seamless
        and efficient web applications that provide excellent user experiences.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src="/frotend.png" alt="fronend IMG" className="skillbarImg" />
          <div className="skillbartext">
            <h2>Front-End</h2>
            <p>HTML, CSS, JavaScript, React, Vue.js</p>
          </div>
        </div>
        <div className="skillbar">
          <img src="/backend.png" alt="BackEndIMG" className="skillbarImg" />
          <div className="skillbartext">
            <h2>Back-End</h2>
            <p> Node.js, Express, PHP</p>
          </div>
        </div>
        <div className="skillbar">
          <img src="/database.png" alt="DatabaseImg" className="skillbarImge" />
          <div className="skillbartext">
            <h2>Databases</h2>
            <p>MongoDB, MySQL, PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
