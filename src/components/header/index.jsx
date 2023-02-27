import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { useNavigate, useLocation } from "react-router";
import { LocalStorage } from "../../helpers/storage";

import "./style.css";
import { authKey } from "../../static/storageKey";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/slices/userSlice";
import { Select } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation("translation");
  const { isAuth, userInfo } = useSelector((state) => state.user);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleRemoveStorage = () => {
    LocalStorage.remove(authKey);
    dispatch(setAuth(LocalStorage.get(authKey)));
    setAnchorElUser(null);
    navigate("/");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleToLogin = () => {
    navigate("/login");
  };

  const handleChangeLang = async (e) => {
    await i18n.changeLanguage(e.target.value);
  };

  return (
    <AppBar
      position="static"
      enableColorOnDark={true}
      sx={{ background: grey["800"] }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={open}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handleClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {location.pathname !== "/" && (
                <MenuItem onClick={handleClose}>
                  <Link className={"menu_link"} to={"/"}>
                    {t("header.home")}
                  </Link>
                </MenuItem>
              )}
              {location.pathname !== "/news" && (
                <MenuItem onClick={handleClose}>
                  <Link className={"menu_link"} to={"/news"}>
                    {t("header.news")}
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {location.pathname !== "/" && (
              <Link className={"nav_link"} to={"/"}>
                {t("header.home")}
              </Link>
            )}
            {location.pathname !== "/news" && (
              <Link className={"nav_link"} to={"/news"}>
                {t("header.news")}
              </Link>
            )}
          </Box>

          <Box>
            <Select
              defaultValue={"en"}
              autoWidth={true}
              onChange={handleChangeLang}
              sx={{ color: "#fff", border: "none", outline: "none" }}
            >
              <MenuItem value={"en"}>en</MenuItem>
              <MenuItem value={"uk"}>uk</MenuItem>
            </Select>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!isAuth ? (
              <Button color="inherit" onClick={handleToLogin}>
                {t("header.login")}
              </Button>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        Boolean(userInfo)
                          ? `https://i.pravatar.cc/150?u=${userInfo.id}`
                          : "/static/images/avatar/2.jpg"
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"/profile"} className={"menu_link"}>
                      {t("header.profile")}
                    </Link>
                    l
                  </MenuItem>
                  <MenuItem onClick={handleRemoveStorage}>
                    <Link
                      className={"menu_link"}
                      style={{ color: "red" }}
                      to={"/"}
                    >
                      {t("header.out")}
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
