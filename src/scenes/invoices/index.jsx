import { Box, Typography, useTheme} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme.js';
import { mockDataInvoices } from "../../data/mockDdata";

import Header from '../../components/Header';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const columns = [
    
  
    { 
      field: "name",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.5,
      renderCell: ({ row: { cost } }) => {
        return (
          <Box
          color={
            (cost <= 10) ? colors.greenAccent[400]
            : (cost > 10 && cost < 35) ? colors.blueAccent[400]
            : colors.redAccent[400]
          }
          >{cost}</Box>
        )
      }
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1
    },
    
  ]
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="Invoices references" />
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
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
          color: `${colors.grey[100]} !important`,
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        }
      }}
      >
        <DataGrid
        checkboxSelection
        rows={mockDataInvoices}
        columns={columns}
        />
      </Box>
    </Box>
    
  )
}
export default Invoices