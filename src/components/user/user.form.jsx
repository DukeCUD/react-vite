import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";
const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneNumber] = useState("");
  console.log(">> check info", fullName, email, password, phone);

  const handleClick = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
      fullName,
      email,
      password,
      phone,
    };
    axios.post(URL_BACKEND, data);
  };

  return (
    <div
      className="inputData"
      style={{ margin: "20px 0px", border: "20px sold black" }}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span> Full name</span>
          <Input
            placeholder="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span> Email</span>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <span> Password</span>
          <Input.Password
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Phone number"
          />
        </div>
        <div>
          <Button
            onClick={handleClick}
            style={{ backgroundColor: "#04aa6d" }}
            type="primary"
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
