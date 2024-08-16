import "./works.css";
function Works() {
  return (
    <section id="works">
      <h2 className="worktitle">My Work</h2>
      <span className="workdescription">
        I take pride in writing clean, efficient, and maintainable code. My
        approach to development is user-centric, ensuring that every project I
        work on is not only functional but also visually appealing and easy to
        navigate.
      </span>
      <div className="worksimages">
        <img src="/My design.png" alt="workImg" className="worksimg" />
        <img src="/My design.png" alt="workImg" className="worksimg" />
        <img src="/My design.png" alt="workImg" className="worksimg" />
        <img src="/My design.png" alt="workImg" className="worksimg" />
        <img src="/My design.png" alt="workImg" className="worksimg" />
        <img src="/My design.png" alt="workImg" className="worksimg" />
      </div>
      <button className="btn"> See More</button>
    </section>
  );
}
export default Works;
