import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({

  email: z.string().trim().toLowerCase().email(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must contain at least 8 characters" })
})

type FormData = z.infer<typeof schema>;

const LoginZodForm = () => {

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
      <form onSubmit={handleSubmit(onHelpSubmit)} >
        <div className="mb-3 myContainer">
          <h1 className="text-center" id="signUp">
            Login
          </h1>
          <div className="inputFields">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="form-control"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
            <label htmlFor="" className="form-label">
              Enter Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="form-control"
            />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            <button
              style={{
                width: "500px",
              }}
              className="mt-3 btn btn-primary"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
            <p id="passwordForgot"className="text-center">Forgot password?</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginZodForm;
