export default (props) => {
  const rows = props.pastEmploymentState.map((item) => {
    return (
      <tr>
        <td>{item.company}</td>
        <td>{item.jobdescription}</td>
        <td>{item.start}</td>
        <td>{item.end}</td>
      </tr>
    );
  });

  function addPastEmployment(e) {
    e.preventDefault();
    const company = e.target.form[0].value;
    const jobdescription = e.target.form[1].value;
    const start = e.target.form[2].value;
    const end = e.target.form[3].value;
    props.setPastEmploymentState([
      ...props.pastEmploymentState,
      { company, jobdescription, start, end },
    ]);
  }
  if (props.editState) {
    return (
      <>
        <div className="pastWork">
          <h2>Past Employment</h2>
          <form>
            <table>
              <tr>
                <td>
                  <input name="Company" type="text" placeholder="Company" />
                </td>
                <td>
                  <input
                    name="Job description"
                    type="text"
                    placeholder="Job description"
                  />
                </td>
                <td>
                  <input name="Start" type="date" placeholder="Start" />
                </td>
                <td>
                  <input name="End" type="date" placeholder="End" />
                </td>
              </tr>
            </table>
            <button type="submit" onClick={(e) => addPastEmployment(e)}>
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="pastWork">
        <h2>Past Employment</h2>

        <table>
          <tr>
            <td>Company</td>
            <td>Job description</td>
            <td>Start date</td>
            <td>End date</td>
          </tr>
          {rows}
        </table>
      </div>
    </>
  );
};
