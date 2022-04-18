import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="mx-2 my-2 w-96 h-96 w-full mx-auto border-white border-2 my-5 py-2">
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
