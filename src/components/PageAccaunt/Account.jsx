import { Button, TextField } from '@mui/material';
import React from 'react';

const Account = () => {
  return (
      <>
          <p className='text-xl mt-[130px] ml-[70px]'><span className='text-gray-500'>Home \ </span>My Account</p>

          <div className='flex flex-col mt-[50px] md:flex-row items-start justify-around'>
              
              <div className='flex flex-col text-xl items-start gap-[10px]'>
                  <h2>Manage My Account</h2>
                  <p className='text-gray-500 ml-[30px] mt-[10px] mb-[5px]'>My Profile</p>
                  <p className='text-gray-500 ml-[30px] mt-[10px] mb-[5px]'>Address Book</p>
                  <p className='text-gray-500 ml-[30px] mt-[10px] mb-[5px]'>My Payment Options</p>
                  <h2>My Orders</h2>
                  <p className='text-gray-500 ml-[30px] mt-[10px] mb-[5px]'>My Returns</p>
                  <p className='text-gray-500 ml-[30px] mt-[10px] mb-[5px]'>My Cancellations</p>
                  <h2>My WishList</h2>
              </div>

              <div className='w-[60%] border border-gray-400 p-[24px] shadow-[5px_5px_5px_gray] rounded-[5px]'>
                  <h1 className='text-2xl'>Profile</h1>

                  <div className='w-[100%] gap-2 flex items-center m-[20px_0px]'>
                      <TextField label='FirstName' fullWidth variant='outlined'/>
                      <TextField label='LastName' variant='outlined' fullWidth/>
                  </div>
                  <div className='w-[100%] gap-2 flex items-center '>
                      <TextField label='Email Adress' fullWidth variant='outlined' />
                      <TextField label='Street adress' fullWidth variant='outlined' />
                  </div> <br /><br />

                  <div>
                      <h2 className='text-2xl'>Password Changes</h2> <br />
                      <TextField label='Current passwod' fullWidth variant='outlined' /> <br /> 
                      <div className='flex w-[100%] items-center gap-2 m-[20px_0px]'>
                          <TextField label='New passwod' fullWidth variant='outlined'/>
                          <TextField label='Confirm new passwod' fullWidth variant='outlined'/>
                      </div>
                      <div className='ml-[560px] mt-[20px]'>
                          <Button sx={{color:"#DB4444", border:""}}>cenel</Button>
                          <Button sx={{bgcolor:"#DB4444", color:"white"}}>Save Changes</Button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Account;
