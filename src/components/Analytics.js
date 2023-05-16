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
import Geochart from './charts/Geochart'
import RealTimeChart from './charts/RealTimeChart'
import MiddleBar from './MiddleBar'

const Analytics = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
      <Box sx={{display:"flex"}}>
      <Sidenav/>
      <Box component="main" sx={{flexGrow:1 ,p:3}}>
      <MiddleBar/>
      <Box height={20}/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
      <Card sx={{ height: 60 + "vh" }}>
      <CardContent><Geochart/></CardContent>
      </Card>
      
       </Grid>
      <Grid item xs={4}>
       <Card sx={{ height: 60 + "vh" }}>
      <CardContent><RealTimeChart/></CardContent>
      </Card>
      
        </Grid>
        </Grid>

      </Box>
      </Box>
    </>
  )
}

export default Analytics


