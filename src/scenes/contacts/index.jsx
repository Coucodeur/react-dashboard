import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme.js';
import { mockDataContacts } from "../../data/mockDdata";

import Header from '../../components/Header';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    { 
      field: "registrarId",
      headerName: "Registrar ID",
    },
    { 
      field: "name",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    { field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    
  ]
  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="Managing the contacts" />
      <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          border: "none"
        },
        "& .MuiDataGrid-row": {
          border: "none"
        },
        "& .name-column--cell": {
          color: colors.greenAccent[400]
        },
        "& .MuiDataGrid-columnHeader":{
          backgroundColor: colors.blueAccent[400],
          borderBottom: "none"
        },
        "& .css-tgsonj": {
          borderTop: "none"
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: colors.blueAccent[400],
        },
        "& .test-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
      }}
      >
        <DataGrid
        rows={mockDataContacts}
        columns={columns}
        />
      </Box>
    </Box>
    
  )
}
export default Contacts