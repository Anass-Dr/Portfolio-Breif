import { useState, useEffect } from "react";
import { endpoint } from "../../config/fetch";
import Formation from "./Formation";

function Formations() {
    const [formations, setFormations] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${endpoint}/formations`);
            const result = await res.json();
            if (res.status === 200) setFormations(result.data);
        };
        getData();
    }, []);

    return (
        <div className="art-content">
            <div className="art-curtain"></div>

            <div
                className="art-top-bg"
                style={{ backgroundImage: "url(src/assets/img/bg.jpg)" }}
            >
                <div className="art-top-bg-overlay"></div>
            </div>

            <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                    <div className="container-fluid">
                        <div className="row p-30-0">
                            <div className="col-lg-6">
                                <div className="art-section-title">
                                    <div className="art-title-frame">
                                        <h4>Education</h4>
                                    </div>
                                </div>

                                <div className="art-timeline art-gallery">
                                    {formations.map((formation, indx) => (
                                        <Formation
                                            key={indx}
                                            formation={formation}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="art-section-title">
                                    <div className="art-title-frame">
                                        <h4>Work History</h4>
                                    </div>
                                </div>

                                <div className="art-timeline">
                                    <div className="art-timeline-item">
                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>Envato</h5>
                                                    <div className="art-el-suptitle mb-15">
                                                        Template author
                                                    </div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">
                                                        jan 2018 - may 2020
                                                    </span>
                                                </div>
                                            </div>
                                            <p>
                                                Placeat iure tempora laudantium
                                                ipsa ad debitis unde? Iste
                                                voluptatibus minus veritatis qui
                                                ut.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="art-timeline-item">
                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>Themeforest</h5>
                                                    <div className="art-el-suptitle mb-15">
                                                        Template author
                                                    </div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">
                                                        jan 2018 - may 2020
                                                    </span>
                                                </div>
                                            </div>
                                            <p>
                                                Adipisicing elit. Iusto, optio,
                                                dolorum provident rerum aut hic
                                                quasi placeat iure tempora
                                                laudantium ipsa ad debitis unde?
                                            </p>
                                            <a
                                                data-fancybox="recommendation"
                                                data-no-swup
                                                href="#art-recomendation-popup-1"
                                                className="art-link art-color-link art-w-chevron"
                                            >
                                                Recommendation
                                            </a>
                                        </div>

                                        <div
                                            className="art-recomendation-popup"
                                            style={{ display: "one" }}
                                            id="art-recomendation-popup-1"
                                        >
                                            <div className="art-a art-testimonial">
                                                <div className="testimonial-body">
                                                    <img
                                                        className="art-testimonial-face"
                                                        src="src/assets/img/testimonials/face-3.jpg"
                                                        alt="face"
                                                    />
                                                    <h5>Paul Trueman</h5>
                                                    <div className="art-el-suptitle mb-15">
                                                        Template author
                                                    </div>
                                                    <div className="mb-15">
                                                        Working with Artur has
                                                        been a pleasure. Better
                                                        yet - I alerted them of
                                                        a minor issue before
                                                        going to sleep. The
                                                        issue was fixed the next
                                                        morning. I couldn't ask
                                                        for better support.
                                                        Thank you Artur! This is
                                                        easily a 5 star
                                                        freelancer.
                                                    </div>
                                                </div>
                                                <div className="art-testimonial-footer">
                                                    <div className="art-left-side">
                                                        <ul className="art-star-rate">
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="art-right-side"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="art-timeline-item">
                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>Envato market</h5>
                                                    <div className="art-el-suptitle mb-15">
                                                        Template author
                                                    </div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">
                                                        jan 2018 - may 2020
                                                    </span>
                                                </div>
                                            </div>
                                            <p>
                                                Consectetur adipisicing elit.
                                                Excepturi, obcaecati, quisquam
                                                id molestias eaque asperiores
                                                voluptatibus cupiditate error
                                                assumenda delectus odit
                                                similique earum voluptatem
                                                doloremque dolorem ipsam quae
                                                rerum quis. Odit, itaque,
                                                deserunt corporis vero ipsum
                                                nisi eius odio natus ullam
                                                provident pariatur temporibus
                                                quia eos repellat consequuntur
                                                perferendis enim amet quae quasi
                                                repudiandae sed quod veniam
                                                dolore possimus rem voluptatum
                                                eveniet eligendi quis fugiat
                                                aliquam sunt similique aut
                                                adipisci.
                                            </p>
                                            <a
                                                data-fancybox="recommendation"
                                                data-no-swup
                                                href="#art-recomendation-popup-2"
                                                className="art-link art-color-link art-w-chevron"
                                            >
                                                Recommendation
                                            </a>
                                        </div>

                                        <div
                                            className="art-recomendation-popup"
                                            style={{ display: "none" }}
                                            id="art-recomendation-popup-2"
                                        >
                                            <div className="art-a art-testimonial">
                                                <div className="testimonial-body">
                                                    <img
                                                        className="art-testimonial-face"
                                                        src="src/assets/img/testimonials/face-4.jpg"
                                                        alt="face"
                                                    />
                                                    <h5>Paul Trueman</h5>
                                                    <div className="art-el-suptitle mb-15">
                                                        Template author
                                                    </div>
                                                    <div className="mb-15">
                                                        Working with Artur has
                                                        been a pleasure. Better
                                                        yet - I alerted them of
                                                        a minor issue before
                                                        going to sleep. The
                                                        issue was fixed the next
                                                        morning. I couldn't ask
                                                        for better support.
                                                        Thank you Artur! This is
                                                        easily a 5 star
                                                        freelancer.
                                                    </div>
                                                </div>
                                                <div className="art-testimonial-footer">
                                                    <div className="art-left-side">
                                                        <ul className="art-star-rate">
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="art-right-side"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="art-timeline-item">
                                        <div className="art-timeline-mark-light"></div>
                                        <div className="art-timeline-mark"></div>

                                        <div className="art-a art-timeline-content">
                                            <div className="art-card-header">
                                                <div className="art-left-side">
                                                    <h5>SoftService company</h5>
                                                    <div className="art-el-suptitle mb-15">
                                                        Template author
                                                    </div>
                                                </div>
                                                <div className="art-right-side">
                                                    <span className="art-date">
                                                        jan 2018 - tonight
                                                    </span>
                                                </div>
                                            </div>
                                            <p>
                                                Dolor sit amet, consectetur
                                                adipisicing elit. Iusto, optio,
                                                dolorum provident rerum.
                                            </p>
                                            <a
                                                data-fancybox="recommendation"
                                                data-no-swup
                                                href="#art-recomendation-popup-3"
                                                className="art-link art-color-link art-w-chevron"
                                            >
                                                Recommendation
                                            </a>
                                        </div>

                                        <div
                                            className="art-recomendation-popup"
                                            style={{ display: "none" }}
                                            id="art-recomendation-popup-3"
                                        >
                                            <div className="art-a art-testimonial">
                                                <div className="testimonial-body">
                                                    <img
                                                        className="art-testimonial-face"
                                                        src="src/assets/img/testimonials/face-2.jpg"
                                                        alt="face"
                                                    />
                                                    <h5>Paul Trueman</h5>
                                                    <div className="art-el-suptitle mb-15">
                                                        Template author
                                                    </div>
                                                    <div className="mb-15">
                                                        Working with Artur has
                                                        been a pleasure. Better
                                                        yet - I alerted them of
                                                        a minor issue before
                                                        going to sleep. The
                                                        issue was fixed the next
                                                        morning. I couldn't ask
                                                        for better support.
                                                        Thank you Artur! This is
                                                        easily a 5 star
                                                        freelancer.
                                                    </div>
                                                </div>
                                                <div className="art-testimonial-footer">
                                                    <div className="art-left-side">
                                                        <ul className="art-star-rate">
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li className="art-empty-item">
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="art-right-side"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/img/brands/1.png"
                                    alt="brand"
                                />
                            </div>

                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/img/brands/2.png"
                                    alt="brand"
                                />
                            </div>

                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/img/brands/3.png"
                                    alt="brand"
                                />
                            </div>

                            <div className="col-6 col-lg-3">
                                <img
                                    className="art-brand"
                                    src="src/assets/img/brands/1.png"
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

export default Formations;
