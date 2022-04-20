import {SyntheticEvent, useRef, useState} from "react";
import { getStateProps} from "../../libs/configType";
import Home from "../button/home";

export default function DetControlForm({ parentCallback, conConfig }: getStateProps) {

	const canRef = useRef<HTMLInputElement>(null);

	const [force, setForce] = useState(conConfig?.force_generate ? "On" : "Off")
	const [notForce, setNotForce] = useState(conConfig?.force_not_generate ? "On" : "Off")
	const forceRef = useRef(null);
	const notForceRef = useRef(null);

	const onClick = () => {
		if (canRef.current) console.log(canRef.current.value);
	}

	const onCancel = () => {
		if (canRef.current) canRef.current.value = "";
	}

	const onSwitch = (event: SyntheticEvent<HTMLButtonElement>) => {
		event.currentTarget.innerText === "On" ? event.currentTarget.innerText = "Off" : event.currentTarget.innerText = "On"

		if(event.currentTarget.value === "force"){
			force === "On" ? setForce("Off") : setForce("On")
		} else{
			notForce === "On" ? setNotForce("Off") : setNotForce("On")
		}
	}

	// @ts-ignore
	return (
		<div className="relative flex flex-col items-center w-96 h-96 w-auto my-auto mx-auto transition-all duration-500">
			<div className="w-auto">
				<Home parentCallback={parentCallback}/>
				<div className="px-5 py-1 select-none text-center w-auto my-2 ml-8 text-xl">감응 프로그램 제어</div>
			</div>

			<div className="flex  w-96 mt-10">
				<div className="flex flex-col w-1/3 ml-2 px-3 w-full select-none font-semibold">
					<p className="font-semibold text-center my-1">타입</p>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">표준
						편차
					</div>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">강제
						감응
					</div>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">강제
						미감응
					</div>
				</div>
				<div className="flex flex-col w-1/3 px-5 w-full select-none font-semibold">
					<p className="font-semibold text-center my-1">현재 상태</p>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">{conConfig?.std_dev}</div>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">{conConfig?.force_generate ? "On" : "Off"}</div>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">{conConfig?.force_not_generate ? "On" : "Off"}</div>
				</div>
				<div className="flex flex-col w-1/3 px-5 w-full select-none font-semibold">
					<p className="font-semibold text-center my-1">변경 값</p>
					<input
						className="px-2 py-1 my-2 w-full font-semibold border-white text-gray-500 text-center bg-black border rounded bg-neutral-900 focus:bg-white focus:text-black transition-colors"
						defaultValue={conConfig?.std_dev}
					/>


					<button
						className="w-auto px-2 py-1 my-2 w-full bg-black select-none text-gray-500 font-semibold border-white border rounded text-center hover:text-green-400 transition duration-300"
						onClick={onSwitch}
						ref={forceRef}
						value="force"
					>
						{force}
					</button>

					<button
						className="w-auto px-2 py-1 my-2 w-full bg-black select-none text-gray-500 font-semibold border-white border rounded text-center hover:text-green-400 transition duration-300"
						onClick={onSwitch}
						ref={notForceRef}
						value="notForce"
					>
						{notForce}
					</button>
				</div>
			</div>


			<div className="flex justify-end text-white mt-8 gap-3">
				<button
					className="px-5 py-2 bg-black border-white border rounded-xl w-auto ml-1
									hover:text-red-600 hover:ring-offset-1
									transition duration-200"
					type="submit"
					onClick={onCancel}>
					취소
				</button>
				<button
					className="px-5 py-2 bg-black border-white border rounded-xl w-auto ml-1
									hover:text-green-400 hover:ring-offset-1
									transition duration-300"
					type="submit"
					onClick={onClick}>
					적용
				</button>
			</div>
		</div>

	)
}