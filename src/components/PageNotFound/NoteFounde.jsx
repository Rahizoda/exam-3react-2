import { Button } from '@mui/material'
import React from 'react'

const NoteFounde = () => {
  return (
      <div className='m-[150px_0px] text-center'>
          
          <h1 className='text-6xl'>404 Not Found</h1> <br />
          <p>Your visited page not found. You may go home page.</p> <br />
          <Button onClick={()=>window.location = '/' } sx={{bgcolor:"#DB4444", color:"white", padding:"15px 30px" }}>Back to home page</Button>
      
    </div>
  )
}

export default NoteFounde
