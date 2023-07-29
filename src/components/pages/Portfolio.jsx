import React from "react";
import { projects } from "../../data";

export default function Portfolio() {
    return (
        <div>
            <h1 id="portfolio-header" className="container fs-1 fw-bold">Portfolio</h1>
            <section id="portfolio" className="container">
                <div className="">
                    <p id="portfolio-p" className="fs-5" >Examples of projects I have coded</p>
                    <div className="row row-cols-2 text-decoration-none">
                        {projects.map((project) => (
                            <div style={{paddingBottom: "80px"}}>
                                <a
                                    href={project.link}
                                    key={project.image}
                                    target="blank"
                                    className="col text-decoration-none"
                                    >
                                    <div className="col">
                                        <img
                                            alt="gallery"
                                            className="img-fluid"
                                            style={{width: "600px", height: "350px"}}
                                            src={project.image}
                                        />
                                    </div>
                                    <h1 id="project-title" className="col">
                                        {project.title}
                                    </h1>
                                </a>
                                <div className="col">
                                    <h2 className="col text-secondary fs-4">
                                        {project.subtitle}
                                    </h2>
                                    <p className="col text-secondary">{project.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}