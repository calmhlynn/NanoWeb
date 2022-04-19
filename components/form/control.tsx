import {useRef} from "react";
import {childProps} from "../../libs/configType";
import Home from "../button/home";

export default function DetControlForm({ parentCallback }: childProps) {

	const canRef = useRef<HTMLInputElement>(null);

	const onClick = () => {
		if (canRef.current) console.log(canRef.current.value);
	}

	const onCancel = () => {
		if (canRef.current) canRef.current.value = "";
	}

	return (
		<div className="relative flex flex-col items-center w-96 h-96 w-auto my-auto mx-auto transition-all duration-500">
			<div className="w-auto">
				<Home parentCallback={parentCallback}/>
				<div className="px-5 py-1 select-none text-center w-auto my-2 ml-8 text-xl">감응 프로그램 제어</div>
			</div>

			<div className="flex  w-96 mt-10">
				<div className="flex flex-col w-1/3 px-3 w-full select-none font-semibold">
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
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">B</div>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">B</div>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">B</div>
				</div>
				<div className="flex flex-col w-1/3 px-5 w-full select-none font-semibold">
					<p className="font-semibold text-center my-1">변경 값</p>

					<input className="pr-4 px-2 py-1 my-2 w-full font-semibold border-white bg-black border rounded bg-neutral-900 text-right focus:bg-white focus:text-black transition-colors"/>
					<div className="w-auto px-2 py-1 my-2 w-full bg-black select-none font-semibold border-white border rounded text-center">스위치</div>
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
									hover:text-green-600 hover:ring-offset-1
									transition duration-300"
					type="submit"
					onClick={onClick}>
					적용
				</button>
			</div>
		</div>

	)
}