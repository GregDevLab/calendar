import { useEffect, useState } from "react";
import './App.css';
import CalendarHeader from "./components/calendar_header";
import Month from "./components/month";
import Sidebar from "./components/sidebar";
import { useCalendar } from "./context/calendar_context";
import { generateCalendar, getSplitingDate } from "./libs/first_day_of_month";


function App() {
	const {state} = useCalendar()
	const [currentMonth, setCurrentMonth] = useState(generateCalendar(getSplitingDate()));

	useEffect(() => {
		setCurrentMonth(generateCalendar(getSplitingDate(state.monthIndex)))
		console.log("🚀 ~ CalendarHeader ~ state:", state)
	}, [state.monthIndex])

	return (
		<>
			<div className="h-screen flex flex-col max-h-[600px] border border-theme-500 rounded-lg overflow-hidden shadow-xl">
				<CalendarHeader />
				<div className="flex flex-1">
					<Sidebar />
					<Month month={currentMonth}/>
				</div>
			</div>
		</>
	)
}

export default App
