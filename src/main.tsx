import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './app/Layout'
import './index.css'
import MainPage from './pages/MainPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: { main: '#0077B6' },
		secondary: { main: '#e04929' }
	},
	typography: {
		fontFamily: '"Clear Sans", sans-serif',
		fontWeightMedium: 500
	}
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme={theme}>
		<RouterProvider router={router} />
		<ToastContainer
			position='top-right' // Позиция внизу по центру
			autoClose={5000} // Время отображения 5 секунд
			hideProgressBar={false} // Прогресс-бар
			newestOnTop={false} // Новые уведомления не перекрывают старые
			closeOnClick // Закрытие при клике
			rtl={false} // Поддержка RTL
			pauseOnFocusLoss // Пауза при потере фокуса
			draggable // Перетаскиваемые уведомления
			pauseOnHover // Пауза при наведении мыши
			style={{
				width: '100%', // Ширина для лучшего отображения на телефоне
				maxWidth: '450px', // Ограничение ширины на планшетах и десктопах
				fontSize: '1em', // Увеличенный шрифт для читабельности
				padding: '10px' // Дополнительные отступы для удобства
			}}
		/>
	</ThemeProvider>
)
