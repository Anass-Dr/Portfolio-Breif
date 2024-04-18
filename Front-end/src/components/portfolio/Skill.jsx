function Skill({ skill }) {
    return (
        <div className="art-hard-skills-item">
            <div className="art-skill-heading">
                <h6>{skill.name}</h6>
            </div>
            <div className="art-line-progress">
                <div id="lineprog1"></div>
            </div>
        </div>
    );
}

export default Skill;
