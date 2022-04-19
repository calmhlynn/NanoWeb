import Home from "../button/home";
import React from "react";
import {childProps, clickProps} from "../../libs/configType";

export default function StateForm({ parentCallback }: childProps) {


	const childComponent = (finger: clickProps) => {
		parentCallback(finger);
	}

	return (
		<div className="relative flex flex-col items-center w-96 h-96 w-auto mx-auto transition-all duration-500">
			<div className="w-auto">
				<Home parentCallback={childComponent}/>
				<div className="px-5 py-1 select-none text-center w-auto ml-8 my-2 text-xl">시스템 정보</div>
			</div>
			<div className="flex w-96 py-3 ml-2 px-2 text-center">
				<div className="flex flex-col w-1/3 gap-2">
					<div className="w-auto px-2 py-1 w-full bg-black select-none font-semibold border-white border rounded">IP 정보</div>
					<div className="w-auto px-2 py-1 w-full bg-black select-none font-semibold border-white border rounded">GW 정보</div>
					<div className="w-auto px-2 py-1 w-full bg-black select-none font-semibold border-white border rounded">CAN 정보</div>
					<div className="w-auto px-2 py-1 w-full bg-black select-none font-semibold border-white border rounded">교차로 정보</div>
					<div className="w-auto px-2 py-1 w-full bg-black select-none font-semibold border-white border rounded">강제감응 여부</div>
				</div>
				<div className="flex flex-col w-2/3 gap-2 mx-2">
					<div className="w-auto px-2 py-1 w-full bg-black font-semibold border-white border rounded">192.168.1.20/24</div>
					<div className="w-auto px-2 py-1 w-full bg-black font-semibold border-white border rounded">192.168.1.1</div>
					<div className="w-auto px-2 py-1 w-full bg-black font-semibold border-white border rounded">ID: 13</div>
					<div className="w-auto px-2 py-1 w-full bg-black font-semibold border-white border rounded">평촌 김제한우삼거리 1번</div>
					<div className="w-auto px-2 py-1 w-full bg-black font-semibold border-white border rounded">강제감응 여부</div>
				</div>
			</div>
		</div>
	)
}