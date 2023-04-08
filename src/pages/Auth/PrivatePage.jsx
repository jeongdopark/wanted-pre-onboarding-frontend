import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router'
const PrivatePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      // 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트
      navigate('/signin')
    }
  }, [])

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default PrivatePage
