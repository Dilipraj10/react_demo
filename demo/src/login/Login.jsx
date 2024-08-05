import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Switch from "@mui/material/Switch";
import bgVideo from "./loginvideo.mp4"

function Login() {
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const toggleLoginType = () => {
    setIsAdminLogin(!isAdminLogin);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src={bgVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <div
        style={{
          justifyContent: "center",
          width: "35%",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "20px",
          }}
        >
          <h3>User Login</h3>
          <Switch checked={isAdminLogin} onChange={toggleLoginType} />
          <h3>Admin Login</h3>
        </div>

        {/* User Login Form */}
        <Form id="userForm" style={{ display: isAdminLogin ? "none" : "block" }}>
          <h3>User Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* Admin Login Form */}
        <Form
          id="adminForm"
          style={{ display: isAdminLogin ? "block" : "none", marginTop: "10px" }}
        >
          <h3>Admin Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
