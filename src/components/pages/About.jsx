import React from "react";

export default function About() {
    return (
        <section id="about" className="container">
            <h2 id="about-header" className="mb-5 fw-bold fs-1" >Full Stack Web Developer</h2>
            <div className="mb-4">
                <img
                    alt="headshot"
                    className="img-fluid"
                    style={{width: "250px", height: "250px"}}
                    src="./Headshot.jpg"
                />
                <p id="about-me-paragraph" className="pt-5">I recently finished the University of Minnesota Full Stack Coding Boot Camp. I have a background in design and was motivated by my love of solving puzzles to make a career change. I really enjoyed all aspects of web development, but some of my favorites are styling the page and React. I would love to take my over a decade of management experience and work for your company.</p>
            </div>
        </section>
    )
}