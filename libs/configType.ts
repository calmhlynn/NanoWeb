

export type clickProps = "systemConfig" | "drawSetting" | "ipSetting" | "canSetting" | "detectControl" | "DetectView" | "OriginalView" | "MainView"
export interface childProps {
	parentCallback: (finger: clickProps) => void;
}