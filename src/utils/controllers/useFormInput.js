import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiConnect from "../api.handlers/apiConnect";
import saveToken from "./saveToken";

const useFormInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async () => {
    const logUser = { email, password };
    try {
      const data = await apiConnect.logIn(logUser);
      saveToken(data);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      throw error;
    }
  };
  const signUpUser = async () => {
    const newUser = { name, email, password };
    try {
      await apiConnect.signUp(newUser);
      await loginUser();
      setName("");
    } catch (error) {
      throw error;
    }
  };

  return {
    name,
    email,
    password,
    handleEmailInput,
    handleNameInput,
    handlePasswordInput,
    loginUser,
    signUpUser
  };
};

export default useFormInput;
