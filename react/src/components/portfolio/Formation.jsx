function Formation({ formation }) {
    return (
        <div className="art-timeline-item">
            <div className="art-timeline-mark-light"></div>
            <div className="art-timeline-mark"></div>

            <div className="art-a art-timeline-content">
                <div className="art-card-header">
                    <div className="art-left-side">
                        <h5>{formation.school}</h5>
                        <div className="art-el-suptitle mb-15">
                            {formation.degree}
                        </div>
                    </div>
                    <div className="art-right-side">
                        <span className="art-date">
                            {formation.start_date} - {formation.due_date}
                        </span>
                    </div>
                </div>

                <p>
                    Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                    dolorum provident rerum aut hic quasi placeat iure tempora
                    laudantium ipsa ad debitis unde? Iste voluptatibus minus
                    veritatis qui ut.
                </p>
                <a
                    data-fancybox="diplome"
                    data-no-swup
                    href="files/certificate.jpg"
                    className="art-link art-color-link art-w-chevron"
                >
                    Diplome
                </a>
            </div>
        </div>
    );
}

export default Formation;
