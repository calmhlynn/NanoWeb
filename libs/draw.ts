import React from "react";
import {curry} from "@fxts/core";



type CanvasRenderProps = CanvasRenderingContext2D | null | undefined;
type DrawOption = "drawing" | "done";

export const numArrayPush = curry(async (func: Function, point: number[]) => {
	return func(point);
})

export const drawOption = (l: number[][], canvasRef: React.RefObject<HTMLCanvasElement>, option: DrawOption) => {
	if (l.length < 2) return 0;
	let frontPoint = 0;
	let endPoint = 0;
	if (option === "drawing") {
		if (l.length > 1) {
			frontPoint = l.length - 2;
			endPoint = l.length - 1;
		}
	} else if (option === "done") {
		frontPoint = l.length - 1;
		endPoint = 0;
	}

	const ctx: CanvasRenderProps = canvasRef.current?.getContext("2d");
	if (ctx) {
		ctx.lineWidth = 2;
		ctx.strokeStyle = "white";
	}

	ctx?.moveTo(l[frontPoint][0], l[frontPoint][1]);
	ctx?.lineTo(l[endPoint][0], l[endPoint][1]);
	ctx?.stroke();
}


export const drawReset = (l: number[][], canvasRef: React.RefObject<HTMLCanvasElement>, width: number, height: number) => {
	l.length = 0;
	const ctx: CanvasRenderProps = canvasRef.current?.getContext('2d');
	if(ctx) {
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();
	}
}