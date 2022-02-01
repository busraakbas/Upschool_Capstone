import Form from "../../components/form";
import "../pagesStyles.css";
import Header from "../../components/header/header";
const Login = () => {
  return (
    <div id="loginContainer">
      <Header state={true} />
      <Form />
    </div>
  );
};

export default Login;
