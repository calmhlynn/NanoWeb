import type {NextPage} from 'next'
import Draw from '../components/form/draw'
import {useState} from "react";
import MainForm from "../components/form/main";
import {clickProps} from '../libs/configType';
import StateForm from "../components/form/state";
import IpSettingForm from "../components/form/ip_setting";
import CanForm from "../components/form/can";
import DetControlForm from "../components/form/control";


const Home: NextPage = () => {

	const [finger, setFinger] = useState<clickProps>("MainView")

	const childComponent = (finger: clickProps) => {
		setFinger(finger);
	}

	return (
		<>
			{finger === "MainView"
				?
				<MainForm parentCallback={childComponent}/>
				:
				finger === "systemConfig"
					?
					<StateForm parentCallback={childComponent}/>
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
									<DetControlForm parentCallback={childComponent}/>
									: null
			}
		</>
	)
}

export default Home
