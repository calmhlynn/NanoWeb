import React, {SyntheticEvent, useRef} from "react";
import {pipe} from "@fxts/core";
import {drawOption, drawReset, numArrayPush} from "../libs/draw";
import {childProps, clickProps} from "../libs/configType";

export default function SubmitForm({ parentCallback }: childProps) {

	const regionPoint: number[][] = [];

	const width: number = 320;
	const height: number = 240;

	const canvasRef = useRef<HTMLCanvasElement>(null);


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
	}

	const deleteClick = () => {
		drawReset(regionPoint, canvasRef, width, height);
	}

	const homeClick = (event: SyntheticEvent<HTMLButtonElement>) => {
		parentCallback(event.currentTarget.value as clickProps);
	}


	return (


		<div className="relative flex flex-col items-center w-72 w-auto re">

			<div className="w-auto">
				<button
					className="absolute ml-2 px-2 py-1 left-0 bg-black border-white border-2 rounded-xl w-auto my-2 hover:text-gray-400 transition duration-300"
					onClick={homeClick}
					value="MainView"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
					</svg>
				</button>
				<div className="px-5 py-1 bg-black border-white border-2 rounded-xl text-center w-auto my-2">검지영역 설정</div>
			</div>
			<div className={`relative w-[${width}px] h-[${height}px] bg-amber-600`}>
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

			<div className="flex justify-end text-white my-2">
				<button
					className="px-5 py-1 bg-black border-white border-2 rounded-xl w-auto ml-1
									hover:text-red-600 hover:ring-offset-1
									transition duration-200"
					type="submit"
					onClick={deleteClick}>
					Cancel
				</button>
				<button
					className="px-5 py-1 bg-black border-white border-2 rounded-xl w-auto ml-1
									hover:text-green-600 hover:ring-offset-1
									transition duration-300"
					type="submit"
					onClick={drawClick}>
					Draw
				</button>
			</div>
		</div>
	);
}