import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./app/Layout.tsx";
import "./index.css";
import MainPage from "./pages/MainPage.tsx";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
	<>
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
	</>
)
