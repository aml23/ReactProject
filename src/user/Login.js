import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    userName:"",
    password:null,
  });

  const [errors, setErrors] = useState({
    userNameError:null,
    passwordassworsError:null,
  });

  const handleChange = (evt) => {
   if (evt.target.name === "userName") {
      setUser({ ...user, userName: evt.target.value });
    }else if (evt.target.name === "password") {
      setUser({ ...user, password: evt.target.value });
    }

    if (evt.target.name === "userName")
    {
          const regex = /^\S*$/;
          setErrors({
          ...errors,
          userNameError:
            evt.target.value.length === 0
            ? "This field is required"
            :regex.test(evt.target.value) === false
              ? "user Name contains spaces"
              : null,
      });
    }else if (evt.target.name === "password")
    {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          setErrors({
          ...errors,
          passwordError:
            evt.target.value.length === 0
            ? "This field is required"
            :regex.test(evt.target.value) === false
              ? "invalid password"
              : null,
      });

    }
  };

  const handleSubmit=(e)=>{
  e.preventDefault();
    console.log("submit")
  }
  return (
    <div className="container g-0">
    <br/>
    <form onSubmit={(e)=>{handleSubmit(e)}} className="mb-5">

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
        User Name
        </label>
        <input
          type="text"
          className={`form-control ${(errors.userNameError)?'border-danger':''}`}
          placeholder="Enter user Name"
          value={user.userName}
          name="userName"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <small className="text-danger">{errors.userNameError}</small>
      </div>
      <div className="mb-5">
        <label htmlFor="formGroupExampleInput2" className="form-label">
        Password
        </label>
        <input
          type="text"
          className={`form-control ${(errors.passwordError)?'border-danger':''}`}
          placeholder="Enter the password"
          value={user.password}
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <small className="text-danger">{errors.passwordError}</small>
      </div>
      <button type="submit" className="btn btn-success ">Login</button>
      </form>
      <br></br><br></br>
      <br></br> <br></br>   
      <br></br><br></br>
      <br></br>
    

    </div>

  );
}

