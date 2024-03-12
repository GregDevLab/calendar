import CreateEvent from "./create-event"
import SmallCalendar from "./small-calendar"

const Sidebar = () => {
	return (
		<aside className="border border-theme-500 p-5 w-64 flex flex-col gap-5">
			<CreateEvent />
			<SmallCalendar />
		</aside>
	)
}

export default Sidebar