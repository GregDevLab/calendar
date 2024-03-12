import { Dayjs } from "dayjs"


type DayProps = {
	day: Dayjs
	index: number
}

const Day = ({day, index}: DayProps) => {
	const isToday = day.isSame(new Date(), 'day')
	const isBefore = day.isBefore(new Date(), 'day')
	return (
		<div className={`flex flex-col`}>
			<header className="flex flex-col items-center">
				{!index && <p className="text-sm m-1" >{day.format('ddd').toUpperCase().split('.')[0]}</p>}
				<p className={`text-sm m-1 rounded-full h-7 w-7 flex items-center justify-center ${isBefore && 'bg-theme-100 text-theme-50'} ${isToday && 'text-theme-50 bg-theme-500'}`}>
					{day.format('DD')}
				</p>
			</header>
		</div>
	)
}

export default Day