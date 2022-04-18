

export type clickProps = "systemConfig" | "drawSetting" | "ipSetting" | "stdDevSetting" | "signalSetting" | "DetectView" | "OriginalView" | "MainView"
export interface childProps {
	parentCallback: (finger: clickProps) => void;
}