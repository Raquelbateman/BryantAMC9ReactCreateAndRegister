const FormUseState = () => {
  return (
    <>
      <form>
        <div className="mb-3 myContainer">
        <h1 className="text-center" id="signUp">Register</h1>
          <div className="inputFields">
          <div className="row">
            <div className="col">
              <label htmlFor="" className="form-label">
                First Name
              </label>
              <input type="text" id="firstName" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="" className="form-label">
                Last Name
              </label>
              <input type="text" id="lastName" className="form-control" />
            </div>
          </div>
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="text" id="email" className="form-control" />
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="text" id="password" className="form-control" />
          <label htmlFor="" className="form-label">
            {" "}
            Confirm Password
          </label>
          <input type="text" id="confirmPassword" className="form-control" />
          <button className="mt-3 btn btn-primary"  id="submitButton" type="submit">
            Submit
          </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormUseState;
