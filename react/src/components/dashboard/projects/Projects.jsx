import Project from "./Project";

function Projects() {
    return (
        <div className="flex-lg-1 h-screen overflow-y-lg-auto">
            <header>
                <div className="container-fluid">
                    <div className="border-bottom pt-6">
                        <div className="row align-items-center">
                            <div className="col-sm col-12">
                                <h1 className="h2 ls-tight">
                                    <span className="d-inline-block me-3">
                                        😎
                                    </span>
                                    My Cool Projects
                                </h1>
                            </div>
                            <div className="col-sm-auto col-12 mt-4 mt-sm-0">
                                <div className="hstack gap-2 justify-content-sm-end">
                                    <a
                                        href="#modalExport"
                                        className="btn btn-sm btn-neutral border-base"
                                        data-bs-toggle="modal"
                                    >
                                        <span className="pe-2">
                                            <i className="bi bi-people-fill"></i>{" "}
                                        </span>
                                        <span>Share</span>{" "}
                                    </a>
                                    <a
                                        href="#offcanvasCreate"
                                        className="btn btn-sm btn-primary"
                                        data-bs-toggle="offcanvas"
                                    >
                                        <span className="pe-2">
                                            <i className="bi bi-plus-square-dotted"></i>{" "}
                                        </span>
                                        <span>Create</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-tabs overflow-x border-0">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    View all
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Most recent
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Popular
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="py-6 bg-surface-secondary">
                <div
                    className="offcanvas offcanvas-end w-full w-lg-1/3"
                    data-bs-scroll="true"
                    data-bs-backdrop="true"
                    tabIndex="-1"
                    id="offcanvasCreate"
                    aria-labelledby="offcanvasCreateLabel"
                >
                    <div className="offcanvas-header border-bottom py-5 bg-surface-secondary">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasCreateLabel"
                        >
                            Create a new project
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset text-xs"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body vstack gap-5">
                        <div>
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Project name"
                            />
                            <span className="d-block mt-2 text-sm text-muted">
                                Make it unique.
                            </span>
                        </div>
                        <div>
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                placeholder="Project description ..."
                                rows="2"
                            ></textarea>
                            <span className="d-block mt-2 text-sm text-muted">
                                Make it unique.
                            </span>
                        </div>
                        <hr className="my-0" />
                        <div>
                            <label className="form-label">Select view</label>
                            <div className="hstack gap-3">
                                <div className="form-item-checkable">
                                    <input
                                        className="form-item-check"
                                        type="radio"
                                        name="project-view"
                                        id="project-view-kanban"
                                        checked="checked"
                                    />
                                    <label
                                        className="form-item"
                                        htmlFor="project-view-kanban"
                                    >
                                        <span className="form-item-click d-inline-flex align-items-center justify-content-center form-control w-24 h-24 text-center text-muted">
                                            <i
                                                className="bi bi-kanban"
                                                style={{ fontSize: "2rem" }}
                                            ></i>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-item-checkable">
                                    <input
                                        className="form-item-check"
                                        type="radio"
                                        name="project-view"
                                        id="project-view-list"
                                    />
                                    <label
                                        className="form-item"
                                        htmlFor="project-view-list"
                                    >
                                        <span className="form-item-click d-inline-flex align-items-center justify-content-center form-control w-24 h-24 text-center text-muted">
                                            <i
                                                className="bi bi-view-list"
                                                style={{ fontSize: "2rem" }}
                                            ></i>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-item-checkable">
                                    <input
                                        className="form-item-check"
                                        type="radio"
                                        name="project-view"
                                        id="project-view-table"
                                    />
                                    <label
                                        className="form-item"
                                        htmlFor="project-view-table"
                                    >
                                        <span className="form-item-click d-inline-flex align-items-center justify-content-center form-control w-24 h-24 text-center text-muted">
                                            <i
                                                className="bi bi-table"
                                                style={{ fontSize: "2rem" }}
                                            ></i>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="vstack gap-4">
                            <div className="d-flex gap-3">
                                <input
                                    className="form-check-input flex-shrink-0 text-lg"
                                    type="radio"
                                    name="projecy-privacy"
                                    checked="checked"
                                />
                                <div className="pt-1 form-checked-content">
                                    <h6 className="mb-1 lh-relaxed">Private</h6>
                                    <span className="d-block text-muted text-sm">
                                        <i className="bi bi-lock-fill me-1"></i>{" "}
                                        Only you will be able to see this
                                        project
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <input
                                    className="form-check-input flex-shrink-0 text-lg"
                                    type="radio"
                                    name="projecy-privacy"
                                />
                                <div className="pt-1 form-checked-content">
                                    <h6 className="mb-1 lh-relaxed">
                                        Make it public
                                    </h6>
                                    <span className="d-block text-muted text-sm">
                                        <i className="bi bi-people-fill me-1"></i>{" "}
                                        Everyone in this workspace will be able
                                        to see this project
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="row gx-4">
                            <div className="col-md">
                                <div>
                                    <label className="form-label">Client</label>
                                    <select className="form-select">
                                        <option>Webpixels</option>
                                        <option>Apple</option>
                                        <option>Elrond</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-auto align-self-end">
                                <span className="d-inline-block py-3 font-semibold text-muted">
                                    or
                                </span>
                            </div>
                            <div className="col-md-auto align-self-end">
                                <button
                                    type="button"
                                    className="btn btn-neutral"
                                >
                                    <i className="bi bi-plus-lg me-2"></i>New
                                    client
                                </button>
                            </div>
                        </div>
                        <div className="row gx-4">
                            <div className="col-md-6">
                                <div>
                                    <label className="form-label">
                                        Start date
                                    </label>
                                    <div className="input-group input-group-inline datepicker">
                                        <span className="input-group-text pe-2">
                                            <i className="bi bi-calendar"></i>{" "}
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Select date"
                                            data-input
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className="form-label">
                                        Due date
                                    </label>
                                    <div className="input-group input-group-inline datepicker">
                                        <span className="input-group-text pe-2">
                                            <i className="bi bi-calendar"></i>{" "}
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Select date"
                                            data-input
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer py-2 bg-surface-secondary">
                        <button
                            type="button"
                            className="btn btn-sm btn-neutral"
                            data-bs-dismiss="offcanvas"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-primary"
                        >
                            Save
                        </button>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="modalExport"
                    tabIndex="-1"
                    aria-labelledby="modalExport"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content shadow-3">
                            <div className="modal-header">
                                <div className="icon icon-shape rounded-3 bg-soft-primary text-primary text-lg me-4">
                                    <i className="bi bi-globe"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Share to web</h5>
                                    <small className="d-block text-xs text-muted">
                                        Publish and share link with anyone
                                    </small>
                                </div>
                                <div className="ms-auto">
                                    <div className="form-check form-switch me-n2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckChecked"
                                            checked="checked"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        ></label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center mb-5">
                                    <div>
                                        <p className="text-sm">
                                            Anyone with this link
                                            <span className="font-bold text-heading">
                                                can view
                                            </span>
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <a
                                            href="#"
                                            className="text-sm font-semibold"
                                        >
                                            Settings
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-group input-group-inline">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="username"
                                            value="https://webpixels.io/your-amazing-link"
                                        />
                                        <span className="input-group-text">
                                            <i className="bi bi-clipboard"></i>
                                        </span>
                                    </div>
                                    <span className="mt-2 valid-feedback">
                                        Looks good!
                                    </span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="me-auto">
                                    <a
                                        href="#"
                                        className="text-sm font-semibold"
                                    >
                                        <i className="bi bi-clipboard me-2"></i>
                                        Copy link
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-neutral"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-success"
                                >
                                    Share file
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="vstack gap-4">
                        <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
                            <div className="d-flex gap-3">
                                <div className="input-group input-group-sm input-group-inline">
                                    <span className="input-group-text pe-2">
                                        <i className="bi bi-search"></i>{" "}
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-sm px-3 btn-neutral d-flex align-items-center"
                                    >
                                        <i className="bi bi-funnel me-2"></i>{" "}
                                        <span>Filters</span>
                                        <span className="vr opacity-20 mx-3"></span>
                                        <span className="text-xs text-primary">
                                            2
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h5 className="me-auto">All projects</h5>
                                <div className="dropdown">
                                    <a
                                        className="text-muted"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="#!" className="dropdown-item">
                                            Action{" "}
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            Another action{" "}
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            Something else here
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover table-nowrap">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Completion</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Project />
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer border-0 py-5">
                                <span className="text-muted text-sm">
                                    Showing 10 items out of 250 results found
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Projects;
