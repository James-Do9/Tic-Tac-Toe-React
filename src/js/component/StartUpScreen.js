/* Plan:
Create an h1 with <h1>Tic Tac Toe in React.js</h1>
Create a div containing <h2>Pick a weapon</h2> that changes to <h2> Player _'s turn</h2> when the game loads up
Create a modal
Create a validation form for entering the names
Have an array of all winning combinations of tic tac toe
Have an array with a player's set of "x"s or "o"s
Save the variable "x" or "o" when clicking (onclick) for the player's turn
Make it alternate to the other variable when clicking
Create a start over button that resets the game
*/
import React from "react";
import PropTypes from "prop-types";

export class StartUpScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Tic Tac Toe in React.js</h1>
				<h2>Pick a weapon!</h2>
				<div className="text-center mt-5">
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#playerSelect">
						Click here players!
					</button>
					<div
						className="modal fade"
						id="playerSelect"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true">
						<div
							className="modal-dialog modal-dialog-centered"
							role="document">
							<div className="modal-content">
								<div>
									<br />
									<h5
										className="modal-title mx-auto"
										id="exampleModalLongTitle">
										Choose your weapon
									</h5>
								</div>
								<div className="modal-body d-inline-flex">
									<input
										type="text"
										className="form-control"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										placeholder="Player 1 Username"
										onChange={evt =>
											(this.player1 = evt.target.value)
										}
									/>
									<input
										type="text"
										className="form-control"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										placeholder="Player 2 Username"
										onChange={evt =>
											(this.player2 = evt.target.value)
										}
									/>
								</div>
								<div className="d-flex justify-content-around">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal"
										onClick={() =>
											this.props.onSetTurn(
												"X",
												this.player1,
												this.player2
											)
										}>
										<span className="xMarker">X</span>
									</button>
									<button
										type="button"
										className="btn btn-primary"
										data-dismiss="modal"
										onClick={() =>
											this.props.onSetTurn(
												"O",
												this.player1,
												this.player2
											)
										}>
										<span className="oMarker">O</span>
									</button>
								</div>
								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
StartUpScreen.propTypes = {
	onSetTurn: PropTypes.func
};
