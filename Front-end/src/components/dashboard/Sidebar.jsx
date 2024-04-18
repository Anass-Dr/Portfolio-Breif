import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav
            className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg scrollbar"
            id="sidebar"
        >
            <div className="container-fluid">
                <button
                    className="navbar-toggler ms-n2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarCollapse"
                    aria-controls="sidebarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a
                    className="navbar-brand d-inline-block py-lg-2 mb-lg-5 px-lg-6 me-0"
                    href="../../index.html"
                >
                    <img
                        src="../src/assets/dashboard/img/logos/clever-primary.svg"
                        alt="..."
                    />
                </a>
                <div className="navbar-user d-lg-none">
                    <div className="dropdown">
                        <a
                            href="#"
                            id="sidebarAvatar"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <div className="avatar-parent-child">
                                <img
                                    alt="..."
                                    src="../src/assets/dashboard/img/people/img-profile.jpg"
                                    className="avatar avatar- rounded-circle"
                                />
                                <span className="avatar-child avatar-badge bg-success"></span>
                            </div>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="sidebarAvatar"
                        >
                            <a href="#" className="dropdown-item">
                                Profile
                            </a>
                            <a href="#" className="dropdown-item">
                                Settings
                            </a>
                            <a href="#" className="dropdown-item">
                                Billing
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="sidebarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#sidebar-projects"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebar-projects"
                            >
                                <i className="bi bi-briefcase"></i> Projects
                            </a>
                            <div className="collapse" id="sidebar-projects">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <Link
                                            to="/admin/projects"
                                            className="nav-link"
                                        >
                                            Overview
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="../projects/details.html"
                                            className="nav-link"
                                        >
                                            Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="../projects/create-project.html"
                                            className="nav-link"
                                        >
                                            Create Project
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#sidebar-formations"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebar-formations"
                            >
                                <i className="bi bi-briefcase"></i> Formations
                            </a>
                            <div className="collapse" id="sidebar-formations">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <Link
                                            to="/admin/formations"
                                            className="nav-link"
                                        >
                                            Overview
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="../projects/details.html"
                                            className="nav-link"
                                        >
                                            Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="../projects/create-project.html"
                                            className="nav-link"
                                        >
                                            Create Project
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/skills">
                                <i className="bi bi-briefcase"></i> Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#sidebar-files"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebar-files"
                            >
                                <i className="bi bi-file-earmark-text"></i>{" "}
                                Files
                            </a>
                            <div className="collapse" id="sidebar-files">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a
                                            href="../files/overview.html"
                                            className="nav-link"
                                        >
                                            Overview
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="../files/table-view.html"
                                            className="nav-link"
                                        >
                                            Table View
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="../files/media-gallery.html"
                                            className="nav-link"
                                        >
                                            Media Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-auto"></div>
                    <div className="my-4 px-lg-6 position-relative">
                        <div className="dropup w-full">
                            <button
                                className="btn-primary d-flex w-full py-3 ps-3 pe-4 align-items-center shadow shadow-3-hover rounded-3"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span className="me-3">
                                    <img
                                        alt="..."
                                        src="../src/assets/dashboard/img/people/img-profile.jpg"
                                        className="avatar avatar-sm rounded-circle"
                                    />{" "}
                                </span>
                                <span className="flex-fill text-start text-sm font-semibold">
                                    Tahlia Mooney{" "}
                                </span>
                                <span>
                                    <i className="bi bi-chevron-expand text-white text-opacity-70"></i>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end w-full">
                                <div className="dropdown-header">
                                    <span className="d-block text-sm text-muted mb-1">
                                        Signed in as
                                    </span>
                                    <span className="d-block text-heading font-semibold">
                                        Tahlia Mooney
                                    </span>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-house me-3"></i>Home{" "}
                                </a>
                                <Link
                                    className="dropdown-item"
                                    to="/admin/profile"
                                >
                                    <i className="bi bi-pencil me-3"></i>
                                    Profile{" "}
                                </Link>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-gear me-3"></i>
                                    Settings
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-box-arrow-left me-3"></i>
                                    Logout
                                </a>
                            </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-center align-items-center mt-6 d-none">
                            <div>
                                <i className="bi bi-moon-stars me-2 text-warning me-2"></i>
                                <span className="text-heading text-sm font-bold">
                                    Dark mode
                                </span>
                            </div>
                            <div className="ms-auto">
                                <div className="form-check form-switch me-n2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="switch-dark-mode"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
