import React from "react";
import { projects } from "../../data";

export default function Portfolio() {
    <section id="portfolio">
        <h1>Portfolio</h1>
        <p>Checkout the apps I have created below!</p>
        <div className="">
            {projects.map((project) => (
                <a
                    href={project.link}
                    key={project.image}
                    className="">
                    <div className="">
                        <img
                            alt="gallery"
                            className=""
                            src={project.image}
                        />
                        <div className="">
                            <h2 className="">
                                {project.subtitle}
                            </h2>
                            <h1 className="">
                                {project.title}
                            </h1>
                            <p className="">{project.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </section>
}