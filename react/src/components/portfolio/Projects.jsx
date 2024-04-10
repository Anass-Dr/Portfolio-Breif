import { useState, useEffect } from "react";
import { endpoint } from "../../config/fetch";
import Project from "./Project";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${endpoint}/projects`);
            const result = await res.json();
            if (res.status === 200) setProjects(result.data);
        };
        getData();
    });
    return (
        <div className="art-content">
            <div className="art-curtain"></div>

            <div
                className="art-top-bg"
                style={{
                    backgroundImage: "url(src/assets/portfolio/img/bg.jpg)",
                }}
            >
                <div className="art-top-bg-overlay"></div>
            </div>

            <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                    <div className="container-fluid">
                        <div className="row p-30-0">
                            <div className="col-lg-12">
                                <div className="art-filter mb-30">
                                    <a
                                        href="#"
                                        data-filter="*"
                                        className="art-link art-current"
                                    >
                                        All Categories
                                    </a>
                                    <a
                                        href="#"
                                        data-filter=".webTemplates"
                                        className="art-link"
                                    >
                                        Web Templates
                                    </a>
                                    <a
                                        href="#"
                                        data-filter=".logos"
                                        className="art-link"
                                    >
                                        Logos
                                    </a>
                                    <a
                                        href="#"
                                        data-filter=".drawings"
                                        className="art-link"
                                    >
                                        Drawings
                                    </a>
                                    <a
                                        href="#"
                                        data-filter=".ui"
                                        className="art-link"
                                    >
                                        UI Elements
                                    </a>
                                </div>
                            </div>

                            <div className="art-grid art-grid-2-col art-gallery">
                                {projects.map((project, indx) => (
                                    <Project key={indx} project={project} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/portfolio/img/brands/1.png"
                                    alt="brand"
                                />
                            </div>

                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/portfolio/img/brands/2.png"
                                    alt="brand"
                                />
                            </div>

                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/portfolio/img/brands/3.png"
                                    alt="brand"
                                />
                            </div>

                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/portfolio/img/brands/1.png"
                                    alt="brand"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <footer>
                            <div className="art-copy">© 2021 Artur Carter</div>
                            <div>
                                Template author:&#160;{" "}
                                <a
                                    href="https://themeforest.net/user/millerdigitaldesign"
                                    target="_blank"
                                    data-no-swup
                                >
                                    Nazar Miller
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
