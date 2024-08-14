import React from 'react'

function Header() {
  return (
    <div >
    <div className=' flex justify-between  m-10'>
      <div>MyBlogs</div>
      <div className='flex justify-between  gap-4'>
       <div>Login</div>
       <div>Register</div>
      </div>
    </div>
   </div>
  )
}

export default Header
