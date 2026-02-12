import React from 'react'
import { StyledHomeDiv, StyledHomeH1 } from './home.styles'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

  return (
    <StyledHomeDiv>
        <StyledHomeH1>Get the best-value courier</StyledHomeH1>
        <h2>All your shipping partners in one platform</h2>
        <Button variant="contained"
            sx={{
                borderRadius: '30px',
                textTransform: 'none'
            }}
            onClick={() => navigate(`/steps`)}
        >
            Get Started
        </Button>    
    </StyledHomeDiv>
  )
}

export default Home