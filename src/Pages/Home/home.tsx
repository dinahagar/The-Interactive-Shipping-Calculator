import React from 'react'
import { StyledHomeDiv, StyledHomeH1 } from './home.styles'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <StyledHomeDiv>
        <StyledHomeH1>Get the best-value courier</StyledHomeH1>
        <h2>All your shipping partners in one platform</h2>
        <Button variant="contained"
            sx={{
                borderRadius: '30px',
                textTransform: 'none'
            }}
        >
            Get Started
        </Button>    
    </StyledHomeDiv>
  )
}

export default Home