import React from "react";
import axios from "axios";

import Form from "./form";

const RegisterForm = () => {
  // const [user, setUser] = useState({ email: null, username: null, password: null, confirmpassword: null });

  const addNewUser = async (data) => {
    const addUser = {
      email: data.email,
      username: data.username,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };
    // await axios.post("api/register", {
    //   email: addUser.email,
    //   username: addUser.username,
    //   password: addUser.password,
    //   confirmpassword: addUser.confirmpassword,
    // });
    // await setUser({
    //   ...addUser,
    // });
    console.log(addUser);
  };

  // React.useEffect(() => {
  //   register({ user: "reactSelect" }); // custom register react-select
  // }, [register]);

  return (
    <>
      <Form onSubmitFn={addNewUser} />
    </>
  );
};

export default RegisterForm;
