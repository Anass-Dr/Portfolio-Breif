function Project({ project }) {
    return (
        <tr>
            <input type="hidden" name="_id" value={project._id} />
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.start_date}</td>
            <td>{project.due_date}</td>
            <td>
                <span className="badge badge-lg badge-dot">
                    <i className="bg-success"></i>
                    completed
                </span>
            </td>
            <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">
                    View
                </a>
                <button
                    type="button"
                    className="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );
}

export default Project;
