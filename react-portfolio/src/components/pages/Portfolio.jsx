import React from "react";
import { projects } from "../../data";

export default function Portfolio() {
    return (
        <div>
            <h1 className="container">Portfolio</h1>
            <section id="portfolio" className="container">
                <div className="">
                    <p>Checkout the apps I have created below!</p>
                    <div className="row row-cols-2">
                        {projects.map((project) => (
                            <div>
                                <a
                                    href={project.link}
                                    key={project.image}
                                    target="blank"
                                    className="col">
                                    <div className="col">
                                        <img
                                            alt="gallery"
                                            className="img-fluid"
                                            src={project.image}
                                        />
                                    </div>
                                    <h1 className="col">
                                        {project.title}
                                    </h1>
                                </a>
                                <div className="col">
                                    <h2 className="col">
                                        {project.subtitle}
                                    </h2>
                                    <p className="col">{project.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}