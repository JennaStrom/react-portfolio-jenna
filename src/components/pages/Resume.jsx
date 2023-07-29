import React from "react";

export default function Resume() {
  return <section className="container">
    <h1 id="resume-header" className="mb-4">Resume</h1>
    <h2 id="resume-download" className="mb-4">Download a copy of my resume</h2>
    <h2 id="proficiencies-header" className="">Proficiencies</h2>
    <ul id="proficiencies-list">
      <li>HTML, CSS (Bootstrap, TailwindCSS, Bulma), JavaScript,<br />
        JQuery, React.js, IndexedDB, Node.js, Express.js, SQL,<br />
        Sequelize, MongoDB, Mongoose, NoSQL, APIs
      </li>
    </ul>
  </section>
}