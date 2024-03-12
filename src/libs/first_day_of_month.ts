import dayjs from 'dayjs';
import 'dayjs/locale/fr';
interface IDate {
	year: number;
	month: number;
	firstDay: number;
}
dayjs.locale('fr')
export const getSplitingDate = (month:number = dayjs().month()):IDate => {
	const year = dayjs().year();
	const firstDay = dayjs(new Date(year, month, 1)).day();
	return {
		year,
		month,
		firstDay,
	};
};

export const generateCalendar = (date:IDate) => {
	let currentDay = 0 - date.firstDay + 1 ;
	const calendar = 
	new Array(5)
	.fill([])
	.map(() => {
		return new Array(7)
		.fill(null)
		.map(() =>{
			currentDay++;
			return dayjs(new Date(date.year, date.month, currentDay));
		})
	});

	return calendar;
}