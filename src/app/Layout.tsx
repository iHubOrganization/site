// src/app/Layout.tsx
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
// import { SideBar } from "../widgets/SideBar"; // Если используется

const Layout = () => {
	return (
		<Box display='flex' flexDirection='column' minHeight='100vh'>
			{/* <SideBar /> */}
			<Outlet />
		</Box>
	)
}

export default Layout
