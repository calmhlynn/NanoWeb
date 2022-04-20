import Home from "../button/home";
import React from "react";
import {childProps} from "../../libs/configType";
import {SubmitHandler, useForm} from "react-hook-form";

interface InputForm {
	ip: string;
	subnet: string;
	gateway: string;
}

export default function IpSettingForm({ parentCallback }: childProps) {

	const { register, handleSubmit, reset } = useForm<InputForm>({
		defaultValues: {
			ip: "",
			subnet: "255.255.255.0",
			gateway: ""
		}
	});

	const onSubmit: SubmitHandler<InputForm> = data => console.log(data);

	const Confirm = () => {
		console.log("ㅎㅇ");
	}

	const Cancel = () => {
		reset();
	}

	return (

		<div className="relative flex flex-col items-center w-96 h-96 w-auto my-auto mx-auto transition-all duration-500">
			<div className="w-auto">
				<Home parentCallback={parentCallback}/>
				<div className="px-5 py-1 select-none text-center w-auto my-2 ml-8 text-xl">IP 설정</div>
			</div>
			<div className="flex w-96 py-3 ml-4 px-2 mt-9 text-center">
				<div className="flex flex-col w-1/3 gap-2">
					<div className="w-auto px-2 py-1 w-full select-none bg-black font-semibold border-white border rounded">IP</div>
					<div className="w-auto px-2 py-1 w-full select-none bg-black font-semibold border-white border rounded">서브넷마스크</div>
					<div className="w-auto px-2 py-1 w-full select-none bg-black font-semibold border-white border rounded">GW</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col w-full gap-2 mx-2">
						<input
							type="text"
							{...register("ip", { required: true })}
							className="w-auto pr-4 py-1 pr-2 w-full font-semibold border-white bg-black border rounded bg-neutral-900 text-right focus:bg-white focus:text-black transition-colors"/>
						<input
							type="text"
							{...register("subnet", { required: true })}
							className="w-auto pr-4 py-1 pr-2 w-full font-semibold border-white bg-black border rounded bg-neutral-900 text-right focus:bg-white focus:text-black transition-colors"/>
						<input
							type="text"
							{...register("gateway", { required: true })}
							className="w-auto pr-4 py-1 pr-2 w-full font-semibold border-white bg-black border rounded bg-neutral-900 text-right focus:bg-white focus:text-black transition-colors"/>
					</div>
					<div className="absolute border-white text-xl -ml-16 mt-6 p-1">
						설정시 시스템이 재부팅됩니다.
					</div>
					<div className="absolute flex justify-end text-white mt-20 -ml-4">
						<button
							className="px-5 py-2 bg-black border-white border rounded-xl w-auto
									hover:text-red-600 hover:ring-offset-1
									transition duration-200"
							type="submit"
							onClick={Cancel}>
							취소
						</button>
						<button
							className="px-5 py-2 bg-black border-white border rounded-xl w-auto ml-1
									hover:text-green-400 hover:ring-offset-1
									transition duration-300"
							type="submit"
							onClick={Confirm}>
							적용
						</button>
					</div>
				</form>
			</div>

		</div>

	)
}