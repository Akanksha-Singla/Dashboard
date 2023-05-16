import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import  Divider  from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
// import  Search  from '@mui/material/Search';


  
const columns = [
  { id: 'name', label: 'Product' ,minWidth: 100},
  { id: 'code', label: 'Category', minWidth: 100 },
  {
    id: 'discount',
    label: 'Discount Percentage',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
// },
// {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
// },
{
  id:"delete",
  label:"Delete",
  minWidth:70,
  align:'right',
  format: (value) => value.toLocaleString('en-US'),
},
{
    id:"edit",
    label:"Edit",
    minWidth:70,
    align:'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  
];



export default function ProductList() {

const[rows,setData] = useState([])

const fetchProduct = async ()=>{
    const response  = await  fetch("https://dummyjson.com/products")
    const json = await response.json();
    console.log(json.products)
    setData(json.products)
 }
  

useEffect(()=>{
    // getData();
    fetchProduct();
},[])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteData = (id)=>{console.log(id)
    const newData = rows.filter((row)=> { return row.id !== id})
    console.log(newData)
    setData(newData)
}

const smartPhone = ()=>

{    
   const newData = rows.filter((row)=> {return row.category == "smartphones"}
)
setData(newData)}

const viewAll = ()=>
{
  
    const newData = rows.filter((row)=> {return row.category !== "abc"})
    setData(newData)
 }

 const laptops = ()=>
{   
  
  
   const newData = rows.filter((row)=> {return row.category == "laptop"})
     setData(newData)
 }
 const fragrances = ()=>
{
  
    const newData = rows.filter((row)=> {return row.category == "fragrances"})
    setData(newData)
 }
 
 const homeDecoration = ()=>
{  
  
    const newData = rows.filter((row)=> {return row.category == "home-decoration"})
    setData(newData)
 }
 const skinCare = ()=>
{  
  
    const newData = rows.filter((row)=> {return row.category == "skincare"})
    setData(newData)
 }
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
     <Stack direction="row" spacing={1}>
     <Typography gutterBottom varient="h2" component ="div" sx={{padding:"20px"}}>
    <b>Product List</b>
    </Typography>
  
            <Button variant="contained"style={{margin:"10px" ,backgroundColor:"rgb(53,138,148)"}}onClick={()=>{viewAll()} }>View All</Button>
            <Button variant="contained" style={{margin:"10px",   backgroundColor:"rgb(53,138,148)" }}onClick={()=>{smartPhone()}}>Smart Phone</Button>
            <Button variant="contained"style={{margin:"10px",  backgroundColor:"rgb(53,138,148)" }} onClick={()=>{laptops()}}>
             Laptop
           </Button>
            <Button variant="contained" style={{margin:"10px", backgroundColor:"rgb(53,138,148)" }} onClick={()=>{fragrances()}}>
            Fragrances
           </Button>
            <Button variant="contained" style={{margin:"10px",backgroundColor:"rgb(53,138,148)" }} onClick={()=>{homeDecoration()}}>
             Home Decoration
           </Button>
            <Button variant="contained" style={{margin:"10px",backgroundColor:"rgb(53,138,148)" }} onClick={()=>{skinCare()}}>
             Skin Care
           </Button>
    </Stack>
       <Divider/>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
            //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>
                   <div style={{display:"flex",gap:"2"}}>
                    <img
                    src={row.thumbnail}
                    alt='img'
                    style={{height:50, width:50,objectFit:"cover", borderRadius:"50%"}}></img>
                    <span style={{display:"flex",alignItems:"center", fontSize:"large",padding:"8px"}}>{row.title.toUpperCase()}</span>
                    </div>
                    </TableCell>
                    <TableCell>
                   <div style={{display:"flex",gap:"2"}}>
                    <span style={{fontSize:"large",padding:"8px"}}>{row.category.toUpperCase()}</span>
                    </div>
                    </TableCell>
                   
                    <TableCell>
                   <div style={{display:"flex",gap:"2"}}>
                    <span style={{fontSize:"large",padding:"8px"}}>{row.discountPercentage}</span>
                    </div>
                    </TableCell>
                    <TableCell>
                   <div style={{display:"flex",gap:"2"}}>
                   <span style={{fontSize:"10px",padding:"8px"}} onClick={()=>{deleteData(row.id)
                    }}> <DeleteIcon/></span>
                    </div>
                    </TableCell>
                    <TableCell>
                   <div style={{display:"flex",gap:"2"}}>
                    <span style={{fontSize:"10px",padding:"8px"}}> <EditIcon/></span>
                    </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
