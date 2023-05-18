import React from 'react'
import { Box, IconButton, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from '../theme'
import InputBase from '@mui/material/InputBase'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from 'react';

const Navbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width="100%"

    >

      {/* searchbar */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >

        <InputBase type="text" sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* icons */}

      <Box
        display="flex"
        alignItems="center"
      >

        <IconButton type="button" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsIcon />
        </IconButton>
        <IconButton type="button">
          <SettingsIcon />
        </IconButton>
        <IconButton type="button">
          <PersonOutlineOutlinedIcon />
        </IconButton>


      </Box>


    </Box>
  )
}

export default Navbar