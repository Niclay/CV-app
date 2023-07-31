export default (props) => {
  const rows = props.skillState.map((item) => {
    return (
      <tr>
        <td>{item.skill}</td>
        <td>{item.level}</td>
      </tr>
    );
  });

  function addSkill(e) {
    e.preventDefault();
    const skill = e.target.form[0].value;
    const level = e.target.form[1].value;
    props.setSkillState([...props.skillState, { skill, level }]);
  }
  if (props.editState) {
    return (
      <div className="skillsEditForm">
        <h2>My skills</h2>
        <form>
          <table>
            <tr>
              <input name="Skill" type="text" placeholder="Skill" />
              <input name="Level" type="text" placeholder="Level" />
            </tr>
            <tr>
              <button type="submit" onClick={(e) => addSkill(e)}>
                Add
              </button>
            </tr>
          </table>
        </form>
      </div>
    );
  }

  return (
    <>
      <h2>My skills</h2>
      <table>
        <tr>
          <td>Skill</td>
          <td>Level</td>
        </tr>
        {rows}
      </table>
    </>
  );
};
