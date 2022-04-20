import {childProps} from "../../libs/configType";
import Home from "../button/home";
import React, {useRef} from "react";

export default function CanForm({ parentCallback }: childProps) {

	const canRef = useRef<HTMLInputElement>(null);

	const onClick = () => {
		if(canRef.current) console.log(canRef.current.value);
	}

	const onCancel = () => {
		if(canRef.current) canRef.current.value = "";
	}

	return (
		<div className="relative flex flex-col items-center w-96 h-96 w-auto my-auto mx-auto transition-all duration-500">
			<div className="w-auto">
				<Home parentCallback={parentCallback}/>
				<div className="px-5 py-1 select-none text-center w-auto my-2 ml-8 text-xl">CAN 설정</div>
			</div>

			<div className="flex justify-around w-96">
				<div className="w-auto px-2 py-1 w-full select-none bg-black font-semibold border-white border rounded mt-24">CAN
					ID
				</div>
				<input
					className="w-auto pr-4 py-1 pr-2 mt-24 w-full font-semibold border-white bg-black border rounded bg-neutral-900 text-right focus:bg-white focus:text-black transition-colors"
					type="text"
					ref={canRef}
					maxLength={2}
				/>
			</div>
			<div className="flex justify-end text-white mt-24 gap-3">
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