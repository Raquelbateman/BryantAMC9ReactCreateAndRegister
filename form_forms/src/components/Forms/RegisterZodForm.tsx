import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstname: z
    .string()
    .min(2, { message: "First name must be at least 3 characters" }),
  lastname: z
    .string()
    .min(2, { message: "Last name must be at least 3 characters" }),
  email: z.string().trim().toLowerCase().email(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must contain at least 8 characters" }),
  confirmpassword: z
    .string()
    .trim()
    .min(8, { message: "Password must contain at least 8 characters" })
})
.refine((data) => data.password === data.confirmpassword, {
        message: "Passwords must match",
        path: ["confirmpassword"],
    
});


type FormData = z.infer<typeof schema>;
// interface FormData{
//     firstname:string,
//     lastname:string

// }

const RegisterZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors);

  const onHelpSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb-3 myContainer">
          <h1 className="text-center" id="signUp">
            Register New Account
          </h1>
          <div className="inputFields">
            <div className="row">
              <div className="col">
                <label className="form-label">First Name</label>
                <input
                  {...register("firstname")}
                  type="text"
                  id="firstName"
                  className="form-control"
                />
                {errors.firstname && (
                  <p className="text-danger">{errors.firstname.message}</p>
                )}
              </div>
              <div className="col">
                <label className="form-label">Last Name</label>
                <input
                  {...register("lastname")}
                  type="text"
                  id="lastName"
                  className="form-control"
                />
                {errors.lastname && (
                  <p className="text-danger">{errors.lastname.message}</p>
                )}
              </div>
            </div>
            <label className="form-label">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="form-control"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
            <label className="form-label">Password</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="form-control"
            />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
              <label className="form-label">Confirm Password</label>
            <input
              {...register("confirmpassword")}
              type="password"
              id="confirmPassword"
              className="form-control"
            />
             {errors.confirmpassword && (
                <p className="text-danger">{errors.confirmpassword.message}</p>
              )}
            <button
              className="mt-2 btn btn-primary"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default RegisterZodForm;
