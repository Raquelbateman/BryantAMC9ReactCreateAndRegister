import { FieldValue, FieldValues, useForm } from "react-hook-form";





const RegisterForm = () => {

    const {register, handleSubmit,formState} = useForm()
    console.log(formState);

    const onHelpSubmit = (data:FieldValues) => {
      console.log(data);
    }
    
    return (
      <>


        <form onSubmit={handleSubmit(onHelpSubmit)}>
          <div className="mb-3 myContainer">
          <h1 className="text-center" id="signUp">Register</h1>
            <div className="inputFields">
            <div className="row">
              <div className="col">
                <label  className="form-label">
                  First Name
                </label>
                <input {...register('firstname')} type="text" id="firstName" className="form-control" />
              </div>
              <div className="col">
                <label className="form-label">
                  Last Name
                </label>
                <input {...register('lastname')} type="text" id="lastName" className="form-control" />
              </div>
            </div>
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input {...register('email')} type="email" id="email" className="form-control" />
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input {...register('password')} type="password" id="password" className="form-control" />
            <label htmlFor="" className="form-label">
              Confirm Password
            </label>
            <input {...register('confirmpassword')}type="password" id="confirmPassword" className="form-control" />
            <button className="mt-3 btn btn-primary"  id="submitButton" type="submit">
              Submit
            </button>
            </div>
          </div>
        </form>
      </>
    );
  };
  
  export default RegisterForm;
  