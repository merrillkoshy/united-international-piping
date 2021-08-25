import "@/public/css/style.scss";
// import '@/public/css/bootstrap.min.css'
import "animate.css";
import "@/public/css/boxicons.min.css";
import "@/public/css/flaticon.css";
import "@/public/css/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
// import '@/public/css/style.css'
// import '@/public/css/responsive.css'

import Layout from "@/components/_App/Layout";

import { ToastProvider } from "react-toast-notifications";

export default function App({ Component, pageProps }) {
	return (
		<ToastProvider
			placement="bottom-left"
			autoDismissTimeout={6000}
			autoDismiss
		>
			<Layout />
			<Component {...pageProps} />
		</ToastProvider>
	);
}
