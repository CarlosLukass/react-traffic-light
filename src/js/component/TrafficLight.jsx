import React, { useRef, useState } from "react";

//create your first component
const TrafficLight = () => {

	// states
	const [currentLight, setCurrentLight] = useState({
		color: null,
		circle: null,
	});
	const [isPartyOn, setIsPartyOn] = useState(false)
	const [myInterval, setMyInterval] = useState(null)

	// Circle divs refereces
	const red = useRef(null)
	const yellow = useRef(null)
	const green = useRef(null)

	// styles state
	const styles = {
		default: `m-2 p-4 border rounded-circle`,
		red: 'red',
		yellow: 'yellow',
		green: 'green',
		purple: 'purple'
	}

	const handleParty = () => {
		const colors = ['red', 'yellow', 'green']
		let colorIndex = 1;

		const divs = {
			'red': red.current,
			'yellow': yellow.current,
			'green': green.current
		}

		setIsPartyOn(true)

		setCurrentLight({
			color: colors[0]
		})

		const partyInterval = () =>
			setInterval(() => {
				setCurrentLight({
					color: colors[colorIndex],
					circle: divs[colors[colorIndex]]
				})

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
		setCurrentLight({
			color: '',
			circle: '',
		})
		setIsPartyOn(false)
	}

	const handlePurple = (e) => {
		const circle = currentLight.circle;
		circle.style.backgroundColor = e.target.name
	}

	const handleSelector = (e, selector) => {
		setCurrentLight({
			color: e.target.name,
			circle: selector.current
		})


	}

	return (
		<div className="bg-dark vh-100 d-flex flex-column justify-content-center align-items-center">
			<div className=" d-flex flex-column rounded p-2" style={{ backgroundColor: 'black' }}>

				<div ref={red} className={styles.default} style={currentLight.color === 'red' ? { backgroundColor: 'red' } : {}} />
				<div ref={yellow} className={styles.default} style={currentLight.color === 'yellow' ? { backgroundColor: 'yellow' } : {}} />
				<div ref={green} className={styles.default} style={currentLight.color === 'green' ? { backgroundColor: 'green' } : {}} />

			</div>

			<div className="mt-4">

				<button name="red" onClick={e => handleSelector(e, red)} className="btn btn-danger m-2">Red</button>

				<button name="yellow" onClick={e => handleSelector(e, yellow)} className="btn btn-warning m-2">Yellow</button>

				<button name="green" onClick={e => handleSelector(e, green)} className="btn btn-success m-2">Green</button>

				<button name="purple" onClick={e => handlePurple(e)} className="btn btn-outline-light m-2">Purple</button>
			</div>
			<div>
				<button className="btn btn-light w-100" onClick={() => isPartyOn ? handleStopParty() : handleParty()}>{isPartyOn ? "Stop" : "Let's Party!!!"}</button>
			</div>
		</div>
	);
};

export default TrafficLight;
