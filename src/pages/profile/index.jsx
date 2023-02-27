import React from "react";
import { Loader } from "../../components";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/slices/userSlice";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      setUser(res.data);
      dispatch(setUserInfo(res.data));
    });
  }, []);

  if (!user) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Avatar alt={user.name} src={`https://i.pravatar.cc/150?u=${user.id}`} />
      <Typography variant="h5">{user.name}</Typography>
      <Typography variant="subtitle1">{user.email}</Typography>
      <Typography variant="subtitle2">{user?.phone}</Typography>
    </Box>
  );
};
