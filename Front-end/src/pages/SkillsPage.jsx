import { useState, useEffect } from "react";
import { endpoint, headers } from "../config/fetch";
import Dashboard from "./Dashboard";
import Skill from "../components/dashboard/skills/Skill";

function SkillsPage() {
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState({ name: "", icon: "" });

    useEffect(() => {
        const getSkills = async () => {
            const res = await fetch(`${endpoint}/skills`);
            const result = await res.json();
            if (res.status === 200) setSkills(result.data);
        };
        getSkills();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${endpoint}/skills`, {
            method: "post",
            headers,
            body: JSON.stringify(skill),
        });

        if (res.status === 201) setSkills((prev) => [...prev, skill]);
        setSkill({ name: "", icon: "" });
    };

    const handleDelete = async (name) => {
        const res = await fetch(`${endpoint}/skills/${name}`, {
            method: "delete",
            headers,
        });
        if (res.status === 204)
            setSkills((prev) => prev.filter((skill) => skill.name !== name));
    };

    return (
        <Dashboard>
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
                                        My Cool Skills
                                    </h1>
                                </div>
                                <div className="col-sm-auto col-12 mt-4 mt-sm-0">
                                    <div className="hstack gap-2 justify-content-sm-end">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#newSkill"
                                        >
                                            <span className="pe-2">
                                                <i className="bi bi-plus-square-dotted"></i>{" "}
                                            </span>
                                            <span>Create</span>
                                        </button>
                                        {/* Bootstrap Modal  */}
                                        <div
                                            className="modal fade"
                                            id="newSkill"
                                            tabIndex="-1"
                                            aria-labelledby="newSkillLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1
                                                            className="modal-title fs-5"
                                                            id="newSkillLabel"
                                                        >
                                                            Add new skill
                                                        </h1>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <form
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <div className="modal-body">
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="name"
                                                                    className="form-label"
                                                                >
                                                                    Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="name"
                                                                    name="name"
                                                                    value={
                                                                        skill.name
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setSkill(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                name: e
                                                                                    .target
                                                                                    .value,
                                                                            })
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="icon"
                                                                    className="form-label"
                                                                >
                                                                    Icon
                                                                </label>
                                                                <input
                                                                    type="url"
                                                                    className="form-control"
                                                                    id="icon"
                                                                    name="icon"
                                                                    value={
                                                                        skill.icon
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setSkill(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                icon: e
                                                                                    .target
                                                                                    .value,
                                                                            })
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                            >
                                                                Save changes
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
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
                                    <h5 className="me-auto">All skills</h5>
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
                                            <a
                                                href="#!"
                                                className="dropdown-item"
                                            >
                                                Action{" "}
                                            </a>
                                            <a
                                                href="#!"
                                                className="dropdown-item"
                                            >
                                                Another action{" "}
                                            </a>
                                            <a
                                                href="#!"
                                                className="dropdown-item"
                                            >
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
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {skills.map((skill, indx) => (
                                                <Skill
                                                    key={indx}
                                                    name={skill.name}
                                                    icon={skill.icon}
                                                    handleDelete={handleDelete}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Dashboard>
    );
}

export default SkillsPage;
