import dayjs from "dayjs";
import { createContext, useContext, useReducer } from "react";

interface IState {
	monthIndex: number;
}

interface CalendarContextType {
	state: IState;
	dispatch: React.Dispatch<any>;
}

const initialState:IState = {
	monthIndex: dayjs().month(),
}
interface IAction {
	type: string;
}
const CalendarContext = createContext<CalendarContextType>({state: initialState, dispatch: () => {}})

const reducer = (state:IState, action:IAction):IState => {
	switch (action.type) {
		case 'NEXT_MONTH':
			return {...state,monthIndex: state.monthIndex + 1}
		case 'PREV_MONTH':
			return {...state, monthIndex: state.monthIndex - 1}
		case 'TODAY':
			return {...state, monthIndex: dayjs().month()}
		default:
			return state
	}
}

export const CalendarProvider = ({children}: {children: React.ReactNode}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<CalendarContext.Provider value={{state, dispatch}}>
			{children}
		</CalendarContext.Provider>
	)
}

export const useCalendar = () => {
	return useContext(CalendarContext)
}