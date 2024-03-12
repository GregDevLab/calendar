import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CalendarProvider } from "./context/calendar_context"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CalendarProvider>
			<App />
		</CalendarProvider>
	</React.StrictMode>,
)
