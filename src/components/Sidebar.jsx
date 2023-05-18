import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from '../theme';
// import { motion } from "framer-motion";
import { links } from "../data/dummy"


const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);




  return (
    <Box
      sx={{
        width: !isCollapsed ? "350px" : "80px",
        height: "100vh",


      }}
      padding="10px"
      style={{
        background: colors.primary[400]
      }}

    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={!isCollapsed && "space-between"}
        paddingLeft={!isCollapsed ? "32px" : "12px"}
        marginBottom="20px"
        color={colors.grey[300]}
      >
        <Typography fontWeight={700} fontSize="18px">{!isCollapsed && "Admin"}</Typography>
        <IconButton type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>


      <Box mb="25px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width={!isCollapsed ? "100px" : "50px"}
            height={!isCollapsed ? "100px" : "50px"}
            src="/images/user.png"
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            {!isCollapsed && "Ed Roh"}
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            {!isCollapsed && "VP Fancy Admin"}
          </Typography>
        </Box>
      </Box>


      <Box
        sx={{
          marginTop: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0px"
        }}
      >
        {
          links.map(item => (
            <Box key={item.title}>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "14px 0 5px 20px" }}
              >
                {!isCollapsed && item.title}
              </Typography>
              {
                item.links.map(link => (
                  <NavLink
                    to={link.path}
                    key={link.name}
                    className={({ isActive }) => (isActive ? "activeLink" : "normalLink")}
                    style={{
                      color: colors.grey[100],
                      margin: !isCollapsed ? "18px 0" : "24px 0",
                      paddingLeft: !isCollapsed ? "32px" : "14px",
                    }}
                  >
                    {link.icon}
                    <Typography>{!isCollapsed && link.name}</Typography>

                  </NavLink>
                ))
              }
            </Box>
          ))
        }
      </Box>

    </Box>
  )
}

export default SideBar