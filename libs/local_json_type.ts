export interface errorCheckProps {
	can: boolean;
	lmb: boolean;
}

export interface networkProps {
	ip: string;
	subnet: string;
	gateway: string;
}
export interface sigControlProps {
	force_generate: boolean;
	force_not_generate: boolean;
}

export interface jsonProps {
	active: boolean;
	can_id: number;
	error_check: errorCheckProps;
	last_boot_time: string;
	network: networkProps;
	region_vector: string;
	road_name: string | null;
	signal_control: sigControlProps;
	std_dev_value: number;
}
export interface jsonType{
	data: jsonProps
}
