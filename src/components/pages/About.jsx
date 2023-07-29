import React from "react";

export default function About() {
    return (
        <section id="about" className="container">
            <h2>Full Stack Web Developer</h2>
            <div className="">
                <img
                    alt="headshot"
                    className="img-fluid"
                    style={{width: "250px", height: "250px"}}
                    src="./headshot.jpg"
                />
            </div>
        </section>
    )
}