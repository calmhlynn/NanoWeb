import React, {useRef, useState} from "react";
import {pipe} from "@fxts/core";
import {drawOption, drawReset, numArrayPush} from "../../libs/draw";
import {childProps, clickProps} from "../../libs/configType";
import HomeButton from "../button/home";

export default function Draw({ parentCallback }: childProps) {

	const regionPoint: number[][] = [];

	const width: number = 320;
	const height: number = 240;

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [really, setReally] = useState<boolean>(false);

	const drawLine = async ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
		const { offsetX, offsetY } = nativeEvent;
		pipe(
			[offsetX, offsetY],
			numArrayPush((a: number[]) => {
				regionPoint.push(a);
				return regionPoint;
			}),
			clickLine
		)
	}
	const clickLine = (l: number[][]) => {
		drawOption(l, canvasRef, "drawing");
	}

	const drawClick = () => {
		drawOption(regionPoint, canvasRef, "done");
		setReally(true);
	}

	const deleteClick = () => {
		drawReset(regionPoint, canvasRef, width, height);
		setReally(false);
	}

	const childComponent = (finger: clickProps) => {
		parentCallback(finger);
	}

	return (

		<div className="relative flex flex-col items-center w-96 h-96 w-auto mx-auto">
			<div className="w-auto">
				<HomeButton parentCallback={childComponent}/>
				<div className="px-5 py-1 text-center w-auto my-2 ml-8 text-xl">검지영역 설정</div>
			</div>
			<div className={`relative w-[${width}px] h-[${height}px] mt-2`}>
				<canvas
					className={`absolute w-[${width}px] h-[${height}px] border-white border-2 rounded z-20`}
					ref={canvasRef}
					onClick={drawLine}
					width={width}
					height={height}
				/>
				<img
					className={`w-[${width}px] h-[${height}px] bg-gray-800 border-white border-2 rounded z-10`}
					src={`http://61.211.241.239/nphMotionJpeg?Resolution=320x240&Quality=Standard`}
					alt="view"
				/>
			</div>

			{really
				?
				<div className="flex justify-end text-white mt-4">
					<div className="border-white mt-2 p-1">
						검지영역을 설정하시겠습니까?
					</div>
					<button
						className="px-5 py-2 bg-black border-white border rounded-xl w-auto ml-1
									hover:text-red-600 hover:ring-offset-1
									transition duration-200"
						type="submit"
						onClick={deleteClick}>
						취소
					</button>
					<button
						className="px-5 py-2 bg-black border-white border rounded-xl w-auto ml-1
									hover:text-green-600 hover:ring-offset-1
									transition duration-300"
						type="submit"
						onClick={drawClick}>
						완료
					</button>
				</div>
				:
				<div className="flex justify-end text-white mt-5">
					<button
						className="px-5 py-1 bg-black border-white border rounded-xl w-auto ml-1
									hover:text-red-600 hover:ring-offset-1
									transition duration-200"
						type="submit"
						onClick={deleteClick}>
						초기화
					</button>
					<button
						className="px-5 py-1 bg-black border-white border rounded-xl w-auto ml-1
									hover:text-green-600 hover:ring-offset-1
									transition duration-300"
						type="submit"
						onClick={drawClick}>
						완료
					</button>
				</div>
			}

		</div>
	);
}
