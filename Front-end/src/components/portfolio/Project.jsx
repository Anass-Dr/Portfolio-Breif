function Project({ project }) {
    return (
        <div className="art-grid-item ui">
            <a
                data-fancybox="gallery"
                data-no-swup
                href="src/assets/portfolio/img/works/original-size/8.jpg"
                className="art-a art-portfolio-item-frame art-horizontal"
            >
                <img
                    src="src/assets/portfolio/img/works/thumbnail/8.jpg"
                    alt="item"
                />
                <span className="art-item-hover">
                    <i className="fas fa-expand"></i>
                </span>
            </a>
            <div className="art-item-description">
                <h5 className="mb-15">{project.name}</h5>
                <div className="mb-15">{project.description}</div>
                <a
                    href="portfolio-single.html"
                    className="art-link art-color-link art-w-chevron"
                >
                    Read more
                </a>
            </div>
        </div>
    );
}

export default Project;
