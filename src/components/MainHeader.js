import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainHeader = () => {
  return (
    
    <div>
        <Outlet>
             Home
        </Outlet>
    </div>

  )
}
