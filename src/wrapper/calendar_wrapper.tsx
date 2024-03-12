
import { CalendarProvider } from '../context/calendar_context'

type Props = {
	children: React.ReactNode
}

const CalendarWrapper = (props: Props) => {
	
	return (
		<CalendarProvider >
			<div>
				{props.children}
			</div>
		</CalendarProvider>
	)
}

export default CalendarWrapper