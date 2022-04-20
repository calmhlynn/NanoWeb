import {sigControlProps} from "./local_json_type";

export type clickTypes = "systemConfig" | "drawSetting" | "ipSetting" | "canSetting" | "detectControl" | "DetectView" | "OriginalView" | "MainView"


export interface sysConfig {
	ip: string;
	gw: string;
	road_name: string | null;
	can_id: number;
	sig_forced: boolean
}

export interface conConfig {
	std_dev: number;
	force_generate: boolean;
	force_not_generate: boolean;
}


export interface getStateProps {
	sysConfig? : sysConfig;
	active? : boolean;
	conConfig? : conConfig;
	parentCallback : (finger: clickTypes) => void;
}