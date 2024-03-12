import dayjs from "dayjs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useCalendar } from "../context/calendar_context"
import { generateCalendar, getSplitingDate } from "../libs/first_day_of_month"

type Props = {}

const SmallCalendar = (props: Props) => {
	const {state} = useCalendar()
	const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
	const [currentMonth, setCurrentMonth] = useState(generateCalendar(getSplitingDate()))

	useEffect(() => {
		setCurrentMonthIndex(state.monthIndex)
	}, [state])

	useEffect(() => {
		setCurrentMonth(generateCalendar(getSplitingDate(currentMonthIndex)))
	}, [currentMonthIndex])

	const nextMonth = () => {
		setCurrentMonthIndex(currentMonthIndex + 1)
	}

	const prevMonth = () => {
		setCurrentMonthIndex(currentMonthIndex - 1)
	}
	const isToday = (date:dayjs.Dayjs) => {
		return date.isSame(dayjs(), 'day')
	}

	const isBeforeToday = (date:dayjs.Dayjs) => {
		return date.isBefore(dayjs(), 'day')
	}
	return (
		<div className="">
			<header className="flex justify-between items-center">
					<div className="py-2 px-2 mr-2 hover:bg-theme-200 hover:text-theme-50 transition-all duration-200 rounded cursor-pointer" onClick={prevMonth}>
						<ChevronLeft/>
					</div>
					<h2 className="grow text-xs font-bold text-theme-500">
						{dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
					</h2>
					<div className="py-2 px-2 mr-2 hover:bg-theme-200 hover:text-theme-50 transition-all duration-200 rounded cursor-pointer" onClick={nextMonth}>
						<ChevronRight />
					</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6">
				{
					currentMonth[0].map((day, index) => (
						<span key={index} className="text-theme-500 text-xs">
							{day.format('dd').toUpperCase().split('.')[0]}
						</span>
					))
				}

				{
					currentMonth.map((week, index) => (
						week.map((day, index) => (
							<span 
								key={index} 
								className={`text-theme-500 text-xs py-2 flex justify-center cursor-pointer ${isToday(day) && "bg-theme-500 text-theme-50 rounded-full"} ${isBeforeToday(day) && "text-theme-100"}`}>
								{day.format('DD')}
							</span>
						))
					))
				}
			</div>
		</div>
	)
}

export default SmallCalendar