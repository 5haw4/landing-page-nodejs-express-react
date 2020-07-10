import React, { useState, useEffect } from 'react';

//main CSS for blueprintjs
import "../node_modules/normalize.css/normalize.css"
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css"

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Description from './components/Description'
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [userData, setUserData] = useState({})
	const [prices, setPrices] = useState([])

	//on initial mount fetching the needed data
	useEffect(() => {
		fetch(`/api/v1/data${window.location.search}`, {
			credentials: "include" //to include http only cookies
		}).then(r => r.json())
		.then(({ error = true, message = "Unknown error occurred", data }) => {
			if(error) throw({ message })
			setUserData(data.user)
			setPrices(data.pricing)
			setIsLoading(false)
		}).catch((err) => {
			const { message = "Unknown error occurred" } = err
			console.log(err);
			alert(message)
			setIsLoading(false)
		})
	}, [])

	return (
		<>
			{/* top navbar with info about the IP and IP location, etc.. */}
			<Navbar isLoading={isLoading} ipData={userData.ipData} />
			<div id="content">
				{/* secondery menu & top call to action section */}
				<TopSection isLoading={isLoading} userData={userData} />
				<Description />
				{/* feature comparison table and pricing cards */}
				<BottomSection isLoading={isLoading} prices={prices} />
			</div>
			<Footer isLoading={isLoading} isMobile={userData.isMobile} browser={userData.browser} />
		</>
	);
}

export default App;
