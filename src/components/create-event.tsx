import { CirclePlus } from "lucide-react"

type Props = {}

const CreateEvent = (props: Props) => {
	return (
		<div className="border border-theme-100 p-2 rounded-full flex items-center shadow-md cursor-pointer hover:shadow-2xl shadow-theme-50 transition-all duration-200 text-theme-500 justify-center">
			<CirclePlus />
		</div>
	)
}

export default CreateEvent