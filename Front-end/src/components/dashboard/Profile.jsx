function Profile() {
    return (
        <div className="flex-lg-1 h-screen overflow-y-lg-auto">
            <header className="bg-surface-secondary">
                <div
                    className="bg-cover"
                    style={{
                        height: "300px",
                        backgroundImage:
                            "url(src/assets/dashboard/img/covers/img-profile.jpg)",
                        backgroundPosition: "center center",
                    }}
                ></div>
                <div className="container-fluid max-w-screen-xl">
                    <div className="row g-0">
                        <div className="col-auto">
                            <a
                                href="#"
                                className="avatar w-40 h-40 border border-body border-4 rounded-circle shadow mt-n16"
                            >
                                <img
                                    alt="..."
                                    src="src/assets/dashboard/img/people/img-profile.jpg"
                                    className="rounded-circle"
                                />
                            </a>
                        </div>
                        <div className="col ps-4 pt-4">
                            <h6 className="text-xs text-uppercase text-muted mb-1">
                                UI Designer
                            </h6>
                            <h1 className="h2">Tahlia Mooney</h1>
                            <div className="d-flex gap-2 flex-wrap mt-3 d-none d-sm-block">
                                <a
                                    href="#"
                                    className="bg-white bg-opacity-50 bg-opacity-100-hover border rounded px-3 py-1 font-semibold text-heading text-xs"
                                >
                                    UI/UX
                                </a>
                                <a
                                    href="#"
                                    className="bg-white bg-opacity-50 bg-opacity-100-hover border rounded px-3 py-1 font-semibold text-heading text-xs"
                                >
                                    Mobile Apps
                                </a>
                                <a
                                    href="#"
                                    className="bg-white bg-opacity-50 bg-opacity-100-hover border rounded px-3 py-1 font-semibold text-heading text-xs"
                                >
                                    UI Research
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-tabs overflow-x ms-1 mt-4">
                        <li className="nav-item">
                            <a href="#!" className="nav-link active font-bold">
                                My profile
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="py-6 bg-surface-secondary">
                <div className="container-fluid max-w-screen-xl">
                    <div className="row g-6">
                        <div className="col-xl-8">
                            <div className="vstack gap-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="mb-3">Biography</h5>
                                        <p className="text-sm lh-relaxed mb-4">
                                            Personal profiles are the perfect
                                            way for you to grab their attention
                                            and persuade recruiters to continue
                                            reading your CV because you’re
                                            telling them from the off exactly
                                            why they should hire you. Of course,
                                            you’ll need to know how to write an
                                            effective statement first, but we’ll
                                            get on to that in a bit.
                                        </p>
                                        <p className="text-sm lh-loose mb-4">
                                            When we strive to become better than
                                            we are everything around us becomes
                                            better too. This is a wider card
                                            with supporting text below. Personal
                                            profiles are the perfect way for you
                                            to grab their attention and persuade
                                            recruiters to continue reading your
                                            CV because you’re telling them from
                                            the off exactly why they should hire
                                            you. Of course, you’ll need to know
                                            how to write an effective statement
                                            first, but we’ll get on to that in a
                                            bit.
                                        </p>
                                        <a
                                            href="#"
                                            className="link-primary font-semibold text-sm"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-4">My Files</h5>
                                    <div className="row g-5">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card shadow-4-hover">
                                                <div className="p-2">
                                                    <a
                                                        href="#"
                                                        className="d-block"
                                                    >
                                                        <img
                                                            className="img-fluid rounded-2"
                                                            alt="..."
                                                            src="src/assets/dashboard/img/media/img-800x800-1.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="px-4 pt-2 pb-4">
                                                    <h6 className="font-semibold mb-2">
                                                        Website Redesign
                                                    </h6>
                                                    <div className="d-flex align-items-center">
                                                        <div className="text-xs text-muted">
                                                            <i className="bi bi-lock me-1"></i>
                                                            Private
                                                        </div>
                                                        <div className="text-xs text-muted ms-auto">
                                                            3 hrs ago
                                                        </div>
                                                    </div>
                                                    <span className="d-block"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card shadow-4-hover">
                                                <div className="p-2">
                                                    <a
                                                        href="#"
                                                        className="d-block"
                                                    >
                                                        <img
                                                            className="img-fluid rounded-2"
                                                            alt="..."
                                                            src="src/assets/dashboard/img/media/img-800x800-2.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="px-4 pt-2 pb-4">
                                                    <h6 className="font-semibold mb-2">
                                                        Website Redesign
                                                    </h6>
                                                    <div className="d-flex align-items-center">
                                                        <div className="text-xs text-muted">
                                                            <i className="bi bi-lock me-1"></i>
                                                            Private
                                                        </div>
                                                        <div className="text-xs text-muted ms-auto">
                                                            3 hrs ago
                                                        </div>
                                                    </div>
                                                    <span className="d-block"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card shadow-4-hover">
                                                <div className="p-2">
                                                    <a
                                                        href="#"
                                                        className="d-block"
                                                    >
                                                        <img
                                                            className="img-fluid rounded-2"
                                                            alt="..."
                                                            src="src/assets/dashboard/img/media/img-800x800-3.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="px-4 pt-2 pb-4">
                                                    <h6 className="font-semibold mb-2">
                                                        Website Redesign
                                                    </h6>
                                                    <div className="d-flex align-items-center">
                                                        <div className="text-xs text-muted">
                                                            <i className="bi bi-lock me-1"></i>
                                                            Private
                                                        </div>
                                                        <div className="text-xs text-muted ms-auto">
                                                            3 hrs ago
                                                        </div>
                                                    </div>
                                                    <span className="d-block"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card shadow-4-hover">
                                                <div className="p-2">
                                                    <a
                                                        href="#"
                                                        className="d-block"
                                                    >
                                                        <img
                                                            className="img-fluid rounded-2"
                                                            alt="..."
                                                            src="src/assets/dashboard/img/media/img-800x800-4.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="px-4 pt-2 pb-4">
                                                    <h6 className="font-semibold mb-2">
                                                        Website Redesign
                                                    </h6>
                                                    <div className="d-flex align-items-center">
                                                        <div className="text-xs text-muted">
                                                            <i className="bi bi-lock me-1"></i>
                                                            Private
                                                        </div>
                                                        <div className="text-xs text-muted ms-auto">
                                                            3 hrs ago
                                                        </div>
                                                    </div>
                                                    <span className="d-block"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card shadow-4-hover">
                                                <div className="p-2">
                                                    <a
                                                        href="#"
                                                        className="d-block"
                                                    >
                                                        <img
                                                            className="img-fluid rounded-2"
                                                            alt="..."
                                                            src="src/assets/dashboard/img/media/img-800x800-5.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="px-4 pt-2 pb-4">
                                                    <h6 className="font-semibold mb-2">
                                                        Website Redesign
                                                    </h6>
                                                    <div className="d-flex align-items-center">
                                                        <div className="text-xs text-muted">
                                                            <i className="bi bi-lock me-1"></i>
                                                            Private
                                                        </div>
                                                        <div className="text-xs text-muted ms-auto">
                                                            3 hrs ago
                                                        </div>
                                                    </div>
                                                    <span className="d-block"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card shadow-4-hover">
                                                <div className="p-2">
                                                    <a
                                                        href="#"
                                                        className="d-block"
                                                    >
                                                        <img
                                                            className="img-fluid rounded-2"
                                                            alt="..."
                                                            src="src/assets/dashboard/img/media/img-800x800-6.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="px-4 pt-2 pb-4">
                                                    <h6 className="font-semibold mb-2">
                                                        Website Redesign
                                                    </h6>
                                                    <div className="d-flex align-items-center">
                                                        <div className="text-xs text-muted">
                                                            <i className="bi bi-lock me-1"></i>
                                                            Private
                                                        </div>
                                                        <div className="text-xs text-muted ms-auto">
                                                            3 hrs ago
                                                        </div>
                                                    </div>
                                                    <span className="d-block"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="vstack gap-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="mb-4">Location</h5>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-geo-alt-fill me-2 text-muted"></i>
                                            <a
                                                href="#"
                                                className="text-sm text-heading text-primary-hover"
                                            >
                                                San Francisco, California
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="mb-4">Social</h5>
                                        <div className="vstack gap-4">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-globe me-2 text-muted"></i>
                                                <a
                                                    href="#"
                                                    className="text-sm text-heading text-primary-hover"
                                                >
                                                    mywebsite.com
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-journal-album me-2 text-muted"></i>
                                                <a
                                                    href="#"
                                                    className="text-sm text-heading text-primary-hover"
                                                >
                                                    clever.mywebsite.com
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-github me-2 text-muted"></i>
                                                <a
                                                    href="#"
                                                    className="text-sm text-heading text-primary-hover"
                                                >
                                                    GitHub
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-dribbble me-2 text-muted"></i>
                                                <a
                                                    href="#"
                                                    className="text-sm text-heading text-primary-hover"
                                                >
                                                    Dribbble
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-twitter me-2 text-muted"></i>
                                                <a
                                                    href="#"
                                                    className="text-sm text-heading text-primary-hover"
                                                >
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Profile;
