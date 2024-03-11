import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

export function Layout () {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="error" onClick={() => { navigate('/') }}>
              Movies
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>
  )
}
