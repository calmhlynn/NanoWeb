import type {NextPage} from 'next'
import BaseForm from '../components/drawForm'
import {useState} from "react";
import MainForm from "../components/mainForm";
import { clickProps } from '../libs/configType';


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
				finger === "drawSetting"
					?
					<BaseForm parentCallback={childComponent}/>
					: null
			}
		</>
	)
}

export default Home
