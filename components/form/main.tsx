import Image from "next/image";
import {SyntheticEvent, useState} from "react";
import { childProps, clickProps } from "../../libs/configType";




export default function MainForm({ parentCallback } : childProps) {

	const [active, setActive] = useState<clickProps>("MainView");

	const onClick = (event: SyntheticEvent<HTMLButtonElement>)  => {
		parentCallback(event.currentTarget.value as clickProps);
	}

	return (
		<div className="flex justify-between w-96 h-96">
			<div className="w-1/2 px-5 w-full h-full">
				<p className="font-semibold text-center pt-2 select-none">정보</p>
				<button className="border-white border rounded w-full py-2 my-2 px-2 bg-black hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="systemConfig">
					시스템 정보
				</button>
				<div className="flex flex-col py-2">
					<p className="font-semibold text-center my-1 select-none">설정</p>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto bg-black hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="drawSetting">
						검지영역 설정
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto bg-black hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="ipSetting">
						IP 설정
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto bg-black hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="canSetting">
						CAN 설정
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto bg-black hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="detectControl">
						프로그램 제어
					</button>
				</div>
			</div>
			<div className="w-1/2 px-5 w-full h-full">
				<p className="font-semibold text-center py-2 select-none">감응여부</p>
				<div className="text-center py-1 border-white border rounded pt-2 bg-black ">
					{active
						?
						<Image
							className="w-full select-none"
							src="/cancel.svg"
							alt="cancel"
							width={48}
							height={48}/>
						:
						<Image
							className="w-full select-none"
							src="/ok.svg"
							alt="ok"
							width={48}
							height={48}/>
					}
				</div>
				<div className="flex flex-col py-4">
					<p className="font-semibold text-center py-4 mt-5 select-none">화면보기</p>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto bg-black hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="DetectView">
						검지영상 보기
					</button>
					<button className="border-white border rounded py-2 px-2 my-2 w-auto bg-black hover:text-gray-400 transition-colors duration-300" onClick={onClick} value="OriginalView">
						원본영상 보기
					</button>
				</div>
			</div>
		</div>
	)
}