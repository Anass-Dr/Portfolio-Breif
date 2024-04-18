function ProjectForm() {
    return (
        <div
            className="offcanvas offcanvas-end w-full w-lg-1/3"
            data-bs-scroll="true"
            data-bs-backdrop="true"
            tabIndex="-1"
            id="offcanvasCreate"
            aria-labelledby="offcanvasCreateLabel"
        >
            <div className="offcanvas-header border-bottom py-5 bg-surface-secondary">
                <h5 className="offcanvas-title" id="offcanvasCreateLabel">
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
                                <i className="bi bi-lock-fill me-1"></i> Only
                                you will be able to see this project
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
                            <h6 className="mb-1 lh-relaxed">Make it public</h6>
                            <span className="d-block text-muted text-sm">
                                <i className="bi bi-people-fill me-1"></i>{" "}
                                Everyone in this workspace will be able to see
                                this project
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
                        <button type="button" className="btn btn-neutral">
                            <i className="bi bi-plus-lg me-2"></i>New client
                        </button>
                    </div>
                </div>
                <div className="row gx-4">
                    <div className="col-md-6">
                        <div>
                            <label className="form-label">Start date</label>
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
                            <label className="form-label">Due date</label>
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
                <button type="button" className="btn btn-sm btn-primary">
                    Save
                </button>
            </div>
        </div>
    );
}

export default ProjectForm;
