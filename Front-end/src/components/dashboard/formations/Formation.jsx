function Formation({ formation }) {
    return (
        <tr>
            <input type="hidden" name="_id" value={formation._id} />
            <td>{formation.school}</td>
            <td>{formation.degree}</td>
            <td>{formation.field}</td>
            <td>{formation.start_date}</td>
            <td>{formation.due_date}</td>
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

export default Formation;
