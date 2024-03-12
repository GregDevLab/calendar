import { Dayjs } from "dayjs";
import Day from "./day";

interface MonthProps {
	month: Dayjs[][]
}
const Month = ({month}:MonthProps) => {
	console.log("🚀 ~ Month ~ month:", month)
	return (
		<div className="flex-1 grid grid-cols-7 grid-rows-5 ">
			{
				month.map((week:Dayjs[], index:number) => {
					return week.map((day:Dayjs, j:number) => {
						return (
							<div key={`${index}-${j}`} className="border border-theme-100">
								<Day day={day} index={index}/>
							</div>
						)
					})
				})
			}
		</div>
	)
}

export default Month