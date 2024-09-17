import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="login">
      <Image src="/Pathao-logo.svg" width={100} height={100} />
      <span>
        User Name: <Input placeholder="Enter user name" />
      </span>
      <span>
        Password: <Input placeholder="Enter password" />
      </span>
      <span>
        <Button className="loginbtn">Login</Button>
      </span>
      <span>
        Don't have an account? <a href="/register">Sign Up</a>
      </span>
    </div>
  );
};
export default Login;
