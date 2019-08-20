 	import React from 'react'

import Navbar from 'react-bootstrap/Navbar';

const style = {
	header: {
		height: "10%",
		backgroundColor: "rgb(26, 115, 232)"
	},

	headerImg: {
		width: "10rem",
		height: "4rem"
	}
}

class Header extends React.Component { 
	render() {
		return (
			<Navbar variant="dark"  style={style.header}>
				<Navbar.Brand href="https://github.com/mbepler">
					<img
						alt="my_github"
						src="https://miro.medium.com/max/1170/1*zvwgIycD5ePCTv1fUNdeJg.png" 
						className="d-inline-block align-top"
						style={style.headerImg}
					/>
				</Navbar.Brand>
			</Navbar>
		);
	}

}

export default Header