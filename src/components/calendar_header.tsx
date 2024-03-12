import dayjs from "dayjs"
import { CalendarRange, ChevronLeft, ChevronRight } from "lucide-react"
import { useCalendar } from "../context/calendar_context"

const CalendarHeader = () => {
	const {state, dispatch} = useCalendar()
	
	return (
		<header className="px-4 py-2 flex items-center justify-between gap-5 border border-theme-500">
			<CalendarRange className=" bg-theme-600 text-gray-50 rounded-md h-7 w-7 p-1"/>
			<h1 className="text-xl font-bold ml-2 text-theme-200">Planing de diffusion</h1>
			<div className="flex items-center justify-center grow">
				<div className="flex items-center gap-5">
					<div className="py-2 px-2 mr-2 hover:bg-theme-200 hover:text-theme-50 transition-all duration-200 rounded cursor-pointer" onClick={() => dispatch({type:'PREV_MONTH'})}>
						<ChevronLeft/>
					</div>
					<h2 className="grow text-xl font-bold text-theme-500 w-64">
						{dayjs(new Date(dayjs().year(), state.monthIndex)).format('MMMM YYYY')}
					</h2>
					<div className="py-2 px-2 mr-2 hover:bg-theme-200 hover:text-theme-50 transition-all duration-200 rounded cursor-pointer" onClick={() => dispatch({type:'NEXT_MONTH'})}>
						<ChevronRight />
					</div>
				</div>
			</div>
			<div className="flex items-center gap-5">

				<div className="border rounded py-2 px-4 mr-5 cursor-pointer bg-theme-50 text-theme-200" onClick={() => dispatch({type: 'TODAY'})}>Aujourd'hui</div>
			</div>
		</header>
	)
}

export default CalendarHeader