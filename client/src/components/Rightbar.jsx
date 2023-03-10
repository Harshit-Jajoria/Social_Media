import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2.5} p={2} bgcolor="green"sx={{ display: { xs: 'none', sm: 'block' } }}>
    <Box position="fixed" >
      Rightbar
    </Box>
  </Box>
  )
}

export default Rightbar