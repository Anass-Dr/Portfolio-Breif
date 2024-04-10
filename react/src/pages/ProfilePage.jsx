import { useState, useEffect } from "react";
import { endpoint, headers } from "../config/fetch";
import Dashboard from "./Dashboard";

function ProfilePage() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`${endpoint}/users`);
            const result = await res.json();
            if (res.status === 200) setUser(result.data);
        };
        getUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${endpoint}/users`, {
            method: "post",
            headers,
            body: JSON.stringify(user),
        });
    };

    return (
        <Dashboard>
            <div className="flex-lg-1 h-screen overflow-y-lg-auto">
                <header>
                    <div className="container-fluid">
                        <div className="border-bottom pt-6">
                            <div className="row align-items-center">
                                <div className="col-sm-6 col-12">
                                    <h1 className="h2 ls-tight">
                                        General Information
                                    </h1>
                                </div>
                                <div className="col-sm-6 col-12"></div>
                            </div>
                            <ul className="nav nav-tabs overflow-x border-0">
                                <li className="nav-item">
                                    <a
                                        href="general.html"
                                        className="nav-link active"
                                    >
                                        General
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="team.html" className="nav-link">
                                        Team
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="billing.html" className="nav-link">
                                        Billing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="security.html"
                                        className="nav-link"
                                    >
                                        Security
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="notifications.html"
                                        className="nav-link"
                                    >
                                        Notifications
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid max-w-screen-md vstack gap-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <a
                                                href="#"
                                                className="avatar avatar-lg bg-warning rounded-circle text-white"
                                            >
                                                <img
                                                    alt="..."
                                                    src="../src/assets/dashboard/img/people/img-profile.jpg"
                                                />
                                            </a>
                                            <div className="ms-4">
                                                <span className="h4 d-block mb-0">
                                                    Tahlia Mooney
                                                </span>
                                                <a
                                                    href="#"
                                                    className="text-sm font-semibold text-muted"
                                                >
                                                    View Profile
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-neutral"
                                        >
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-5">
                                <h4>Contact Information</h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-5">
                                    <div className="col-md-6">
                                        <div>
                                            <label className="form-label">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="first_name"
                                                value={user.first_name}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        first_name:
                                                            e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label className="form-label">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.last_name}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        last_name:
                                                            e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label className="form-label">
                                                Proficient
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="proficient"
                                                value={user.proficient}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        proficient:
                                                            e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label className="form-label">
                                                Birth Year
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={user.birth_year}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        birth_year:
                                                            e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label
                                                className="form-label"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={user.email}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        email: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label className="form-label">
                                                Phone number
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                value={user.phone}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        phone: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label className="form-label">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.city}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        city: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <label className="form-label">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.country}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        country: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 text-end">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-neutral me-2"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-sm btn-primary"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <hr className="my-6" />
                    </div>
                </main>
            </div>
        </Dashboard>
    );
}

export default ProfilePage;
