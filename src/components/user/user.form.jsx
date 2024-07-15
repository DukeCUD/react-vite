import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(">> check info", fullName, gmail, password, phoneNumber);

  const handleClick = () => {
    alert("Click");
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
          <span> Gmail</span>
          <Input
            value={gmail}
            onChange={(event) => setGmail(event.target.value)}
            placeholder="Gmail"
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
            value={phoneNumber}
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
