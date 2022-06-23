import React, { useState } from "react";

//create your first component
const TrafficLight = () => {

	// states
	const [currentLight, setCurrentLight] = useState(null);
	const [isPartyOn, setIsPartyOn] = useState(false)
	const [purpleIsShowing, setPurpleIsShowing] = useState(false)
	const [myInterval, setMyInterval] = useState(null)


	// styles state
	const styles = {
		default: `m-2 p-4 border rounded-circle`,
	}

	const handleParty = () => {
		const colors = ['red', 'yellow', 'green']
		let colorIndex = 1;
		setPurpleIsShowing(false)

		setIsPartyOn(true)

		setCurrentLight(colors[0])

		const partyInterval = () =>
			setInterval(() => {
				setCurrentLight(colors[colorIndex])

				if (colorIndex === 2) {
					colorIndex = 0
				} else {
					colorIndex++
				}
			}, 1000)

		setMyInterval(partyInterval)

	}

	const handleStopParty = () => {
		clearInterval(myInterval)
		setCurrentLight('')
		setIsPartyOn(false)
	}

	const handlePurple = () => {
		setPurpleIsShowing(true)
		setCurrentLight('purple')
	}

	const handleSelector = (e) => {
		setCurrentLight(e.target.name)
		setPurpleIsShowing(false)


	}

	return (
		<div className="bg-dark vh-100 d-flex flex-column justify-content-center align-items-center">
			<div className=" d-flex flex-column rounded p-2" style={{ backgroundColor: 'black' }}>

				<div className={styles.default} style={currentLight === 'red' ? { backgroundColor: 'red' } : {}} />
				<div className={styles.default} style={currentLight === 'yellow' ? { backgroundColor: 'yellow' } : {}} />
				<div className={styles.default} style={currentLight === 'green' ? { backgroundColor: 'green' } : {}} />
				{
					purpleIsShowing
						? <div className={styles.default} style={currentLight === 'purple' ? { backgroundColor: 'purple' } : {}} />
						: ''
				}

			</div>

			<div className="mt-4">

				<button name="red" onClick={e => handleSelector(e)} className="btn btn-danger m-2">Red</button>

				<button name="yellow" onClick={e => handleSelector(e)} className="btn btn-warning m-2">Yellow</button>

				<button name="green" onClick={e => handleSelector(e)} className="btn btn-success m-2">Green</button>

				<button name="purple" onClick={e => handlePurple()} className="btn btn-outline-light m-2">Purple</button>
			</div>
			<div>
				<button className="btn btn-light w-100" onClick={() => isPartyOn ? handleStopParty() : handleParty()}>{isPartyOn ? "Stop" : "Let's Party!!!"}</button>
			</div>
		</div>
	);
};

export default TrafficLight;
