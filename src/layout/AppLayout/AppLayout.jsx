import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const AppLayout = () => {
	return (
		<>
			<Header />
			<Nav />
			<Outlet />
			<Footer />
		</>
	)
}
export default AppLayout;