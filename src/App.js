import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Articles from "./pages/Articles.jsx";
// import ReadArticle from "./pages/readArticle";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/about" element={<About />} />
				{/* <Route path="/article/:slug" element={<ReadArticle />} /> */}
				<Route path="/contact" element={<Contact />} />
				<Route path="/*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
