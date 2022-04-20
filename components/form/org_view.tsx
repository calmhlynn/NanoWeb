import HomeButton from "../button/home";
import React from "react";
import {getStateProps, clickTypes} from "../../libs/configType";
import {useRouter} from "next/router";

export default function OrgViewForm({ parentCallback }: getStateProps) {

	const width = 320;
	const height = 240;
	const router = useRouter();

	const childComponent = (finger: clickTypes) => {
		router.reload();
		parentCallback(finger);
	}

	return (
		<div className="relative flex flex-col items-center w-96 h-96 w-auto mx-auto">
			<div className="w-auto">
				<HomeButton parentCallback={childComponent}/>
				<div className="px-5 py-1 text-center w-auto my-2 ml-8 text-xl">카메라 원본 화면</div>
			</div>
			<div className={`relative w-[${width}px] h-[${height}px] mt-6`}>
				<img
					className={`w-[${width}px] h-[${height}px] bg-gray-800 border-white border-2 rounded z-10`}
					src={`http://61.211.241.239/nphMotionJpeg?Resolution=320x240&Quality=Standard`}
					alt="view"
				/>
			</div>
		</div>
	)
}
