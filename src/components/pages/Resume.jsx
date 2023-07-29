import React from "react";

export default function Resume() {
  return <section id="resume-section" className="container">
    <h1 id="resume-header" className="mb-4 fw-bold">Resume</h1>
    <h2 id="resume-download">Download a copy of my resume</h2>
    <a className="mb-4 link-secondary" href = "./resume.pdf" target = "_blank">Jenna's Resume</a>
    <h2 id="proficiencies-header" className="mt-4">Proficiencies</h2>
    <ul id="proficiencies-list" className="mb-5">
      <li>HTML, CSS (Bootstrap, TailwindCSS, Bulma), JavaScript,<br />
        JQuery, React.js, IndexedDB, Node.js, Express.js, SQL,<br />
        Sequelize, MongoDB, Mongoose, NoSQL, APIs
      </li>
    </ul>
    <div className="pt-5"></div>
    <div className="pt-5"></div>
    <div className="pt-5"></div>
    <div className="pt-5"></div>
  </section>
}