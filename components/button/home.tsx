import {useRouter} from "next/router";
import React, {SyntheticEvent} from "react";
import {clickTypes, getStateProps} from "../../libs/configType";

export default function HomeButton({ parentCallback }: getStateProps) {


	const router = useRouter();

	const homeClick = (event: SyntheticEvent<HTMLButtonElement>) => {
		router.push("/");
		parentCallback(event.currentTarget.value as clickTypes);
	}

	return (
		<button
			className="absolute ml-3 px-2 py-1 left-0 bg-black border-white border-2 rounded-xl w-auto my-2 hover:text-gray-400 transition duration-300"
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
	)
}