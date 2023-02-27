import React from "react";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Input } from "@mui/material";
import Button from "@mui/material/Button";
import { LocalStorage } from "../../../helpers/storage";
import { useNavigate } from "react-router";
import { setAuth } from "../../../store/slices/userSlice";
import { authKey } from "../../../static/storageKey";
import { useDispatch } from "react-redux";
import { ModalWindow } from "../../../components";
import Box from "@mui/material/Box";

const style = {
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  body: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email === "admin@admin.com" && values.password === "12345") {
      LocalStorage.set(authKey, "true");
      dispatch(setAuth(LocalStorage.get(authKey)));
      navigate("/profile");
    } else {
      setOpen(true);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl style={{ margin: "10px" }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl style={{ margin: "10px" }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type={"password"}
            value={values.password}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      <ModalWindow open={open} handleClose={handleClose}>
        <Box sx={style.wrapper}>
          <Box sx={style.body}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your login or password is wrong
            </Typography>
            <Button onClick={handleClose}>Try again</Button>
          </Box>
        </Box>
      </ModalWindow>
    </div>
  );
};
