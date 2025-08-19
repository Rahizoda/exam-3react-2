import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, TextField } from '@mui/material';

const Contact = () => {
  return (
      <>
       <p className='mt-[130px] ml-[60px] text-xl'><span className='text-gray-500'>Home \ </span>Contact</p>
       
          <div className='flex flex-col md:flex-row justify-around items-center mt-[50px]'>
              
              <div className='flex flex-col justify-around shadow-[5px_5px_5px_gray] p-[30px_60px]  border-gray-400 border '>
                  <div>
                  <h2 className='text-2xl'><CallIcon sx={{bgcolor:"#DB4444", color:"white", width:"60px", height:"60px", padding:"10px", borderRadius:"55%", marginRight:"10px" }}/> Call To Us</h2> <br />
                  <h3>We are available 24/7, 7 days a week.</h3> <br />
                  <h3>Phone: +8801611112222</h3> <br />
                  </div> <hr /> <br />
                  <div> 
                      <h2 className='text-2xl'><MailOutlineIcon sx={{bgcolor:"#DB4444", color:"white", width:"60px", height:"60px", padding:"10px", borderRadius:"55%", marginRight:"10px" }}/> Write To US</h2> <br />
                      <h3>Fill out our form and we will contact <br /> you within 24 hours.</h3> <br />
                      <h3>Emails: customer@exclusive.com</h3>  <br />
                      <h3>Emails: support@exclusive.com</h3>
                  </div>
              </div>

              <div className='shadow-[5px_5px_5px_gray] p-[50px] border-gray-400 border'>
                  <div className='flex flex-col md:flex-row gap-[10px]'>
                      <TextField label='Name' variant='outlined'/>
                      <TextField label='Email' variant='outlined'/>
                      <TextField label='Phone' variant='outlined' />
                  </div> <br /><br />
                   <textarea className='h-[200px] p-[20px] w-[100%] border rounded-[5px]' type="text" name="" id="" placeholder='Your Massage ' />
                   <Button sx={{bgcolor:"#DB4444", color:"white", padding:"10px 30px", }}>Send Massage</Button>
              </div>
          </div>
      </>
  );
}

export default Contact;
