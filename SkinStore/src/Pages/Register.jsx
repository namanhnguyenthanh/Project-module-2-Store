import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Pages_Css/Register.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import * as yup from "yup";
const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [userRegister, setUserRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fullname, email, password, confirmPassword } = userRegister;

  const handleOnClick = (a) => {
    navigate(a);
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleAutoRegister = () => {
    // Xử lý đăng kí tự động với tài khoản Google
  };

  const handleChangeRegister = (e) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userRegister);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios.post("http://localhost:8000/users", userRegister);
  // };
  const validationSchema = yup.object().shape({
    fullname: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(userRegister, { abortEarly: false });
      // Nếu không có lỗi validation, gửi dữ liệu lên server
      await axios.post("http://localhost:8000/users", userRegister);
    } catch (err) {
      // Nếu có lỗi validation, cập nhật state `errors`
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <div className={styles.registerPage_LogoMainOutCon}>
        <div className={styles.registerPage_LogoMainCon}>
          <div className={styles.registerPage_Logodiv}>
            <img
              src="https://s1.thcdn.com/enterprise/assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg"
              alt=""
              onClick={() => handleOnClick("/")}
            />
          </div>
        </div>

        <div className={styles.registerForm_mainCont}>
          <div className={styles.registerForm}>
            <p>About You</p>
            <p
              style={{ textAlign: "left", marginTop: "30px", fontSize: "15px" }}
            >
              Sign Up With
            </p>
            <ButtonGroup
              variant="outline"
              spacing="30"
              width="100%"
              marginBottom="30px"
            >
              <Button
                borderRadius={0}
                border="1px"
                borderColor="#2E3337"
                padding="25px"
                _hover={{ backgroundColor: "#f2f2f2", border: "none" }}
                w="full"
              >
                <GrFacebook className={styles.reacticons} />
                Facebook
              </Button>
              <Button
                borderRadius={0}
                border="1px"
                borderColor="#2E3337"
                _hover={{ backgroundColor: "#f2f2f2", border: "none" }}
                padding="25px"
                w="full"
                onClick={handleAutoRegister}
              >
                <FcGoogle className={styles.reacticons} />
                Google
              </Button>
            </ButtonGroup>
            <br />
            <hr />
            <p
              style={{ textAlign: "left", marginTop: "10px", fontSize: "15px" }}
            >
              Or create an email account
            </p>
            <form onSubmit={handleSubmit}>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Full Name"
                value={fullname}
                name="fullname"
                onChange={handleChangeRegister}
                isInvalid={!!errors.fullname}
              />
              {errors.fullname && (
                <FormErrorMessage>{errors.fullname}</FormErrorMessage>
              )}
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                name="email"
                onChange={handleChangeRegister}
                placeholder="Enter Email"
                isInvalid={!!errors.email}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChangeRegister}
                    isInvalid={!!errors.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                )}
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={handleChangeRegister}
                    value={confirmPassword}
                    name="confirmPassword"
                    isInvalid={!!errors.confirmPassword}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {errors.confirmPassword && (
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              )}

              <Button
                type="submit"
                backgroundColor="#2E3337"
                color="white"
                borderRadius={0}
                _hover={{ bg: "teal.600" }}
                w="full"
                marginTop="30px"
              >
                CONTINUE
              </Button>
              <p
                style={{
                  textAlign: "left",
                  marginTop: "30px",
                  fontSize: "15px",
                }}
              >
                By proceeding, you are confirming that you agree to our Terms
                and Conditions and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
