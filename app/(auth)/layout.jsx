import React from 'react'

function AuthLayout({children}) {
  return (
    <div className='flex justify-center pt-30'>
      {children}
    </div>
  )
}

export default AuthLayout
