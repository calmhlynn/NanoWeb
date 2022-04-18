import Image from "next/image";
import {SyntheticEvent, useState} from "react";
import { childProps } from "../libs/configType";

type clickProps = "systemConfig" | "drawSetting" | "ipSetting" | "stdDevSetting" | "signalSetting" | "DetectView" | "OriginalView" | "MainView"



export default function MainForm({ parentCallback } : childProps) {

	const [active, setActive] = useState<clickProps>("MainView");

	const onClick = (event: SyntheticEvent<HTMLButtonElement>)  => {
		parentCallback(event.currentTarget.value as clickProps);
	}

	return (
		<div className="flex justify-between w-96 h-96">
			<div className="w-1/2 px-5 w-full h-full">
				<p className="font-semibold text-center pt-2">정보</p>
				<button className="border-white border rounded w-full py-2 my-2 px-2 hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="systemConfig">
					시스템 정보
				</button>
				<div className="flex flex-col py-2">
					<p className="font-semibold text-center my-1">설정</p>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="drawSetting">
						검지영역 설정
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="ipSetting">
						IP 설정
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="stdDevSetting">
						표준편차 설정
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="signalSetting">
						검지신호 설정
					</button>
				</div>
			</div>
			<div className="w-1/2 px-5 w-full h-full">
				<p className="font-semibold text-center py-2">감응여부</p>
				<div className="text-center py-1 border-white border rounded pt-2">
					{active
						?
						<Image
							className="w-full"
							src="/cancel.svg"
							alt="cancel"
							width={48}
							height={48}/>
						:
						<Image
							src="/ok.svg"
							alt="ok"
							width={48}
							height={48}/>
					}
				</div>
				<div className="flex flex-col py-4">
					<p className="font-semibold text-center py-4">화면보기</p>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="DetectView">
						검지영상 보기
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="OriginalView">
						원본영상 보기
					</button>
				</div>
			</div>
		</div>
	)
}