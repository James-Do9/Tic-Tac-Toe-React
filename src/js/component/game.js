import React from "react";
import PropTypes from "prop-types";
export class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			squareValues: ["", "", "", "", "", "", "", "", ""]
		};
	}

	updateNextMove(squarePressed) {
		//mapping through state and returning new square values
		var newSquareValues = this.state.squareValues.map((item, position) => {
			return position == squarePressed && item == ""
				? this.props.currentPlayer
				: item;
		});
		if (this.state.squareValues[squarePressed] == "") {
			this.props.onNextTurn(squarePressed);
		}
		this.setState({ squareValues: newSquareValues });
		this.checkForWinner(newSquareValues);
		if (!newSquareValues.includes("")) {
			this.setState({
				squareValues: ["", "", "", "", "", "", "", "", ""]
			});
		}
	}
	//check to see if box was filled, if not fill it
	checkForWinner(newSquareValues) {
		//for each winboards  if it == new square values they win
		let winBoards = [
			[1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[0, 0, 1, 0, 1, 0, 1, 0, 0]
		];
		var winner = "";
		winBoards.forEach(winningCombo => {
			var counter = 0;
			for (let i = 0; i < winningCombo.length; i++) {
				if (winningCombo[i] == 1) {
					if (newSquareValues[i] == this.props.currentPlayer) {
						counter++;
						if (counter > 2) {
							this.props.newWinner(this.props.currentPlayer);
							this.setState({
								squareValues: [
									"",
									"",
									"",
									"",
									"",
									"",
									"",
									"",
									""
								]
							});
						}
					}
				}
			}
		});
	}

	render() {
		return (
			<div>
				<div className="square-board">
					<div
						className="square"
						onClick={() => this.updateNextMove(0)}>
						{this.state.squareValues[0]}
					</div>
					<div
						className="square"
						onClick={() => this.updateNextMove(1)}>
						{this.state.squareValues[1]}
					</div>
					<div
						className="square"
						onClick={() => this.updateNextMove(2)}>
						{this.state.squareValues[2]}
					</div>

					<div
						className="square"
						onClick={() => this.updateNextMove(3)}>
						{this.state.squareValues[3]}
					</div>
					<div
						className="square"
						onClick={() => this.updateNextMove(4)}>
						{this.state.squareValues[4]}
					</div>
					<div
						className="square"
						onClick={() => this.updateNextMove(5)}>
						{this.state.squareValues[5]}
					</div>

					<div
						className="square"
						onClick={() => this.updateNextMove(6)}>
						{this.state.squareValues[6]}
					</div>
					<div
						className="square"
						onClick={() => this.updateNextMove(7)}>
						{this.state.squareValues[7]}
					</div>
					<div
						className="square"
						onClick={() => this.updateNextMove(8)}>
						{this.state.squareValues[8]}
					</div>
				</div>
			</div>
		);
	}
}
Game.propTypes = {
	currentPlayer: PropTypes.string,
	onNextTurn: PropTypes.func,
	newWinner: PropTypes.func
};
