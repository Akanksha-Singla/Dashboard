import React from 'react'
import Sidenav from './Sidenav'
import Box from "@mui/material/Box"
import Navbar from './Navbar'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  Stack from '@mui/material/Stack'
import Barchart from './charts/Barchart'
import Piechart from './charts/Piechart'
import MiddleBar from './MiddleBar'
import LineGraph from './charts/LineGraph'
import Analytics from './Analytics'
import Product from './Product'
import Divider  from '@mui/material/Divider'
import './Dash.css'
const Home = () => {
  return (
    <div className='bgColor'>
     <Navbar/>
    <Box height={70}/>
      <Box sx={{display:"flex"}}>
      <Sidenav/>
      <Box component="main" sx={{flexGrow:1 ,p:3}}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
     <Stack spacing ="3" direction="row">
     <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Wallet
        </Typography>
        <LineGraph/>
        <Typography variant="body2" color="text.secondary">
          $2253
        </Typography>
      </CardContent>
      </Card>
      
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Wallet
        </Typography>
        <LineGraph/>
        <Typography variant="body2" color="text.secondary">
          $2253
        </Typography>
      </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Wallet
        </Typography>
        <LineGraph/>
        <Typography variant="body2" color="text.secondary">
          $2253
        </Typography>
      </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Wallet
        </Typography>
        <LineGraph/>
        <Typography variant="body2" color="text.secondary">
          $2253
        </Typography>
      </CardContent>
      </Card>
      </Stack>
        </Grid>
        </Grid>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
      <Card sx={{ height: 60 + "vh" }}>
      <CardContent><MiddleBar/>
        <Barchart></Barchart></CardContent>
      </Card>
      
       </Grid>
      <Grid item xs={4}>
       <Card sx={{ height: 60 + "vh" }}>
      <CardContent>
        <MiddleBar/>
        <Piechart/></CardContent>
      </Card>
      </Grid>
      </Grid>
      </Box>
      </Box>
      <Divider/>
     <Analytics/>
     <Divider/>
     <Product/>
   
    </div>
  )
}

export default Home


