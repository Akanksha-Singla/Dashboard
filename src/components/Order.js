import React from 'react'
import Sidenav from './Sidenav'
import Box from "@mui/material/Box"

const Order = () => {
  return (
    <>
      <Box sx={{display:"flex"}}>
      <Sidenav/>
      <Box component="main" sx={{flexGrow:1 ,p:3}}>
      <h1>Order</h1>
      </Box>
      </Box>
    </>
  )
}

export default Order


