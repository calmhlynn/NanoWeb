import type {NextPage} from 'next'
import Draw from '../components/form/draw'
import {useState} from "react";
import MainForm from "../components/form/main";
import {clickTypes} from '../libs/configType';
import StateForm from "../components/form/state";
import IpSettingForm from "../components/form/ip_setting";
import CanForm from "../components/form/can";
import DetControlForm from "../components/form/control";
import {jsonType} from '../libs/local_json_type';
import OrgViewForm from "../components/form/org_view";
import DetViewForm from "../components/form/det_view";


const Home: NextPage<jsonType> = ({ data }) => {

	const [finger, setFinger] = useState<clickTypes>("MainView")

	const childComponent = (finger: clickTypes) => {
		setFinger(finger);
	}
	//
	const sysConfig = {
		ip        : data.network.ip,
		gw        : data.network.gateway,
		road_name : data.road_name,
		can_id    : data.can_id,
		sig_forced: data.signal_control.force_generate
	}

	const conConfig = {
		std_dev: data.std_dev_value,
		force_generate: data.signal_control.force_generate,
		force_not_generate: data.signal_control.force_not_generate,
	}

	return (
		<>
			{finger === "MainView"
				?
				<MainForm
					parentCallback={childComponent}
					active={data.active}/>
				:
				finger === "systemConfig"
					?
					<StateForm
						parentCallback={childComponent}
						sysConfig={sysConfig}/>
					:
					finger === "drawSetting"
						?
						<Draw parentCallback={childComponent}/>
						: finger === "ipSetting"
							?
							<IpSettingForm parentCallback={childComponent}/>
							: finger === "canSetting"
								?
								<CanForm parentCallback={childComponent}/>
								: finger === "detectControl"
									?
									<DetControlForm parentCallback={childComponent} conConfig={conConfig}/>
									: finger === "DetectView"
										?
										<DetViewForm parentCallback={childComponent}/>
										: finger === "OriginalView"
											?
											<OrgViewForm parentCallback={childComponent}/>
											: null
			}
		</>
	)
}

export default Home


export async function getServerSideProps() {

	const local_json: jsonType = require('../server.json')

	// console.log('srr data: ', local_json);

	return {
		props: {
			data: local_json
		}
	}
}
