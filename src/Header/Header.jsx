import React from 'react'

import Navbar from 'react-bootstrap/Navbar';

const style = {
	header: {
		height: "10%",
		backgroundColor: "#008267"
	},

	headerImg: {
		width: "8rem",
		height: "8rem"
	}
}

class Header extends React.Component { 
	constructor() {
		super();
	}

	render() {
		return (
			<Navbar variant="dark"  style={style.header}>
				<Navbar.Brand href="/">
					<img
						alt=""
						src="https://www.senior.com.br/wp-content/themes/senior-2016/images/logo-desktop.svg"
						className="d-inline-block align-top"
						style={style.headerImg}
					/>
				</Navbar.Brand>
			</Navbar>
		);
	}

}

export default Header