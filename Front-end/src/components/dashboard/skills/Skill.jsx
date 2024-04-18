function Skill({ name, icon, handleDelete }) {
    return (
        <tr>
            <td>
                <img
                    alt="..."
                    src={icon}
                    className="avatar avatar-sm rounded-circle me-2"
                />
                <a className="text-heading font-semibold" href="#">
                    {name}
                </a>
            </td>
            <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">
                    Edit
                </a>
                <button
                    type="button"
                    className="btn btn-sm btn-square btn-neutral text-danger-hover"
                    onClick={() => handleDelete(name)}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );
}

export default Skill;
