// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Divider from '@mui/material/Divider';

// const outerBoxSx = {
//   width: 320,
//   border: 2,
//   borderRadius: 5,
// };

// const headerGridSx = {
//   borderTopLeftRadius: 10,
//   borderTopRightRadius: 10,
//   '--Grid-borderWidth': '2px',
//   borderTop: 'var(--Grid-borderWidth) solid',
//   borderLeft: 'var(--Grid-borderWidth) solid',
//   borderColor: 'divider',
//   '& > div': {
//     borderRight: 'var(--Grid-borderWidth) solid',
//     borderBottom: 'var(--Grid-borderWidth) solid',
//     borderColor: 'divider',
//   },
// };

// const bodyGridBaseSx = {
//   '--Grid-borderWidth': '2px',
//   borderTop: 'var(--Grid-borderWidth) solid',
//   borderLeft: 'var(--Grid-borderWidth) solid',
//   borderColor: 'divider',
//   '& > div': {
//     borderRight: 'var(--Grid-borderWidth) solid',
//     borderBottom: 'var(--Grid-borderWidth) solid',
//     borderColor: 'divider',
//   },
// };

// const linedCellSx = {
//   minHeight: 200,
//   backgroundColor: '#ffffff',
//   backgroundImage: 'linear-gradient(#e0e0e0 1px, transparent 1px)',
//   backgroundSize: '100% 24px',
// };

// const summaryCellSx = {
//   borderRadius: 10,
//   minHeight: 100,
//   backgroundColor: '#ffffff',
//   backgroundImage: 'linear-gradient(#e0e0e0 1px, transparent 1px)',
//   backgroundSize: '100% 28px',
// };

// const cellStyle = {
//   padding: 3,
//   borderBottom: 'none',
// };

// export default function BasicTextFields() {
//   return (
//     <Box sx={outerBoxSx}>
//       <Paper sx={{ borderRadius: 5 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <Grid container sx={headerGridSx}>
//                 <Grid size={4}>
//                   <TableCell sx={cellStyle}>KeyPoints</TableCell>
//                 </Grid>
//                 <Grid size={8}>
//                   <TableCell sx={cellStyle}>Title:</TableCell>
//                 </Grid>
//               </Grid>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             <TableRow>
//               <Grid container sx={{ ...bodyGridBaseSx, height: 380 }}>
//                 <Grid size={4}>
//                   <TableCell sx={cellStyle}>points</TableCell>
//                 </Grid>
//                 <Grid size={8} sx={linedCellSx}>
//                   <TableCell sx={cellStyle}>
//                     <span>content</span>
//                   </TableCell>
//                 </Grid>
//               </Grid>
//             </TableRow>

//             <TableRow>
//               <TableCell colSpan={2} sx={{ padding: 0 }}>
//                 <Divider />
//               </TableCell>
//             </TableRow>

//             <TableRow>
//               <Grid container sx={summaryCellSx}>
//                 <Grid size={12}>
//                   <TableCell sx={cellStyle}>
//                     <h2 style={{ margin: 0 }}>Summary:</h2>
//                     <span style={{ width: '100%' }}>
//                       {/* {summary} */}
//                     </span>
//                   </TableCell>
//                 </Grid>
//               </Grid>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </Paper>
//     </Box>
//   );
// }


// import Box from '@mui/material/Box';
// import { green, red } from '@mui/material/colors';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Divider from '@mui/material/Divider';

// const tableContainerSx = {
//   width: 360,
//   whiteSpace: 'normal',
//   wordBreak: 'break-word',
//   border: '2px solid',
//   borderRadius: 5,
//   borderTopRightRadius: 0,
//   overflow: 'hidden', // Ensures borders don't clip rounded corners
//   borderColor: 'divider',
// };

// const cellBaseSx = {
//   borderRight: '2px solid',
//   borderBottom: '2px solid',
//   borderColor: 'divider',
//   padding: 1.5,
//   verticalAlign: 'top',
//   '&:last-child': {
//     borderRight: 0,
//   },
// };

// const linedCellSx = {
//   ...cellBaseSx,
//   borderLeft: '2px solid #ffcccc',
//   lineHeight: '24px',
//   textWrap: 'wrap',
//   height: 200,
//   backgroundColor: '#ffffff',
//   backgroundImage: 'linear-gradient(#87CEEB 1px, transparent 1px)',
//   backgroundAttachment: 'local',
//   backgroundSize: '100% 24px',
// };

// const summaryCellSx = {
//   ...cellBaseSx,
//   height: 100,
//   borderRight: 0,
//   backgroundColor: '#ffffff',
//   backgroundImage: 'linear-gradient(#87CEEB 1px, transparent 1px)',
//   backgroundAttachment: 'local',
//   backgroundSize: '100% 24px',
// };

// export default function BasicTextFields() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         position: 'relative',
//       }}
//     >
//       <TableContainer component={Paper} sx={tableContainerSx}>
//         <Table sx={{ tableLayout: 'fixed' }}>
//           <TableHead style={{ backgroundColor: '#13c8f5' }}>
//             <TableRow>
//               <TableCell sx={{ ...cellBaseSx, width: '25%' }}>
//                 <h3 style={{ margin: '0' }}>Key Points</h3>
//               </TableCell>
//               <TableCell sx={{ ...cellBaseSx, width: '70%' }}>
//                 <h2 style={{ margin: 0, padding: 0 }}>
//                   Title: <span> title</span>
//                 </h2>
//               </TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {/* Main Body Row */}
//             <TableRow sx={{ textWrap: 'wrap' }}>
//               <TableCell
//                 sx={{
//                   ...cellBaseSx,
//                   height: 320,
//                   paddingTop: 0.2,
//                   borderRight: 'none',
//                 }}
//               >
//                 points
//               </TableCell>
//               <TableCell
//                 sx={{
//                   ...linedCellSx,
//                   paddingTop: 0.2,
//                 }}
//               >
//                 content dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsldalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;
//               </TableCell>
//             </TableRow>

//             {/* Summary Row - colSpan makes it take the full width */}
//             <TableRow>
//               <TableCell
//                 colSpan={2}
//                 sx={{
//                   ...summaryCellSx,
//                   p: 0.7,
//                   paddingLeft: 1.5,
//                   lineHeight: '24px',
//                 }}
//               >
//                 <h2 style={{ margin: 0, fontSize: '1rem' }}>Summary:</h2>
//                 {/* {summary} */}
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl dalkj;la;jlaskjdlkja;lld;adjsl
//                 dalkj;la;jlaskjdlkja;lld;adjsl
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Stack
//         direction="column"
//         spacing={0.5}
//         sx={{
//           top: 0,
//           right: '0',
//           margin: 0,
//           border: '2px solid rgba(224, 224, 224, 7)',
//           boxShadow: '5',
//         }}
//       >
//         <IconButton sx={{ p: 0, color: green[500] }}>
//           <FileDownloadIcon />
//         </IconButton>
//         <Divider />
//         <IconButton sx={{ p: 0, color: red[500] }}>
//           <DeleteIcon />
//         </IconButton>
//       </Stack>
//     </Box>
//   );
// }
