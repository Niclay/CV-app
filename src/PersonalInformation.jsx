export default function PersonalInformation(props) {
  function onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    props.setPersonalInformationState({
      ...props.personalInformationState,
      [name]: value,
    });
  }

  if (props.editState)
    return (
      <>
        <div className="personalInformation">
          <h2>About me</h2>
          <div className="personalInformationInput">
            <form className="personalInformationInputForm">
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                value={props.personalInformationState.first_name}
                onChange={(e) => onInputChange(e)}
              />
              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={props.personalInformationState.last_name}
                onChange={(e) => onInputChange(e)}
              />
              <input
                name="birthday"
                type="date"
                placeholder="Birthday"
                value={props.personalInformationState.birthday}
                onChange={(e) => onInputChange(e)}
              />
              <input
                name="mail"
                type="email"
                placeholder="Mail"
                value={props.personalInformationState.mail}
                onChange={(e) => onInputChange(e)}
              />
            </form>
          </div>
        </div>
      </>
    );
  return (
    <>
      <div>
        <h2>About me</h2>
        <table className="personalInformationTable">
          <tr>
            <td>{props.personalInformationState.first_name}</td>
          </tr>
          <tr>
            <td>{props.personalInformationState.last_name}</td>
          </tr>
          <tr>
            <td>{props.personalInformationState.birthday}</td>
          </tr>
          <tr>
            <td>{props.personalInformationState.mail}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
