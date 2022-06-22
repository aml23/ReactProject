import { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "Aml",
    email: "Aml@gmail.com",
    userName:"",
    password:null,
    confirmPassword:"",
  });

  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    userNameError:null,
    passwordassworsError:null,
    confirmPasswordError:null,
  });

  const handleChange = (evt) => {
    if (evt.target.name === "name") {
      setUser({ ...user, name: evt.target.value });
    } else if (evt.target.name === "email") {
      setUser({ ...user, email: evt.target.value });
    }else if (evt.target.name === "userName") {
      setUser({ ...user, userName: evt.target.value });
    }else if (evt.target.name === "password") {
      setUser({ ...user, password: evt.target.value });
    }else if (evt.target.name === "confirmPassword") {
      setUser({ ...user, confirmPassword: evt.target.value });
    }

    if (evt.target.name === "name") {
      setErrors({
        ...errors,
        nameError:
          evt.target.value.length === 0
            ? "This field is required"
            : null,
      });
    }else if (evt.target.name === "email")
    {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        setErrors({
          ...errors,
          emailError:
            evt.target.value.length === 0
            ? "This field is required"
            :regex.test(evt.target.value) === false
              ? "Email is not valid"
              : null,
      });
    }else if (evt.target.name === "userName")
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

    }else if (evt.target.name === "confirmPassword")
    {
          setErrors({
          ...errors,
          confirmPasswordError:
            evt.target.value.length === 0
            ? "This field is required"
            :evt.target.value != user.password
            ? "invalid input"
            : null,
      });
    }
  };

  const handleSubmit=(e)=>{
  e.preventDefault();
    console.log("submit")
  }
  return (
    <div className="container">
    <br/><br/>
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${(errors.nameError)?'border-danger':''}`}
          placeholder="Enter your name"
          value={user.name}
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <small className="text-danger">{errors.nameError}</small>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="text"
          className={`form-control ${(errors.emailError)?'border-danger':''}`}
          placeholder="Enter your email"
          value={user.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <small className="text-danger">{errors.emailError}</small>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
        user Name
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
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
        password
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
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
        confirmPassword
        </label>
        <input
          type="text"
          className={`form-control ${(errors.confirmPasswordError)?'border-danger':''}`}
          placeholder="confirmPassword"
          value={user.confirmPassword}
          name="confirmPassword"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <small className="text-danger">{errors.confirmPasswordError}</small>
      </div>
      <button type="submit" className="btn btn-success mb-3">login</button>
      </form>
    </div>
  );
}

