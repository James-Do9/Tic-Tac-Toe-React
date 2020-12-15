import React from "react";
import { StartUpScreen } from "./StartUpScreen";
import { Game } from "./game";
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player1: null,
			player2: null,
			player: "",
			winner: ""
		};
	}
	setTurn = (symbol, player1, player2) => {
		this.setState({ player: symbol, player1: player1, player2: player2 });
	};
	nextTurn = (symbol, player1, player2) => {
		this.setState({ player: this.state.player == "X" ? "O" : "X" });
	};
	setWinner = player => {
		this.setState({ winner: player });
	};
	render() {
		if (this.state.winner == "") {
			return (
				<div>
					<StartUpScreen onSetTurn={this.setTurn} />
					<Game
						onNextTurn={this.nextTurn}
						currentPlayer={this.state.player}
						newWinner={this.setWinner}
					/>
				</div>
			);
		} else if (this.state.winner != "") {
			return (
				<div>
					<h1>Congratulations {this.state.winner} !</h1>
				</div>
			);
		}
	}
}
