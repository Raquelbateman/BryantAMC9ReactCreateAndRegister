import { useForm } from "react-hook-form";



const LoginForm = () => {

  
  return (
    <>
      <form>
        <div className="mb-3 myContainer">
        <h1 className="text-center" id="signUp">Login</h1>
          <div className="inputFields">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="text" id="email" className="form-control" />
          <label htmlFor="" className="form-label">
            Enter Password
          </label>
          <input type="text" id="password" className="form-control" />
          <button className="mt-3 btn btn-primary"  id="submitButton" type="submit">
            Submit
          </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
