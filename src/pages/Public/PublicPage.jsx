import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

const PublicPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo')
    }
  }, [])
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default PublicPage
