const FormUseState = () => {
  return (
    <>
      <h1 className="text-center">Form Using UseState</h1>
      <form>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" />
          <label htmlFor="" className="form-label">Age</label>
          <input type="number" id="age" className="form-control" />
          <button className="mt-3 btn btn-primary" type='submit'>Submit</button>
        </div>
       
      </form>
    </>
  );
};

export default FormUseState;
