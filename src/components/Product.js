import React from 'react'
import ProductList from './Products/ProductList'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PublishIcon from '@mui/icons-material/Publish';
import AddIcon from '@mui/icons-material/Add';


const Product = () => {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{display:"flex"}}>
      <Sidenav/>
    <Box component="main" sx={{flexGrow:1 ,p:3}}>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box  sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}>
      <Stack direction="row" spacing={125}>
      <span style={{display:"flex", margin:"10px",fontSize:"large", color: "black", alignItems:"center"}}>Products</span>
      <Stack direction="row" spacing={2}>
      <Button variant="outlined" style={{margin:"10px"  }} startIcon={<PublishIcon/>}>
       <span>Import</span> 
      </Button>
      <Button variant="contained" style={{margin:"10px",backgroundColor:"rgb(53,138,148)" }} startIcon={<AddIcon/>}>
      <span>Add New</span>
      </Button>
    </Stack>
    </Stack>
        </Box>
        </Grid>
      </Grid>
    </Box>
    {/* <Box height={40}/> sx={{ flexGrow: 1 }}*/}
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <ProductList/>
        </Grid>
      </Grid>
    </Box>
     
      </Box>
      </Box>
    </>
  )
}

export default Product

