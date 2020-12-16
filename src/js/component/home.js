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
					<br />
					<br />
					<Game
						onNextTurn={this.nextTurn}
						currentPlayer={this.state.player}
						newWinner={this.setWinner}
					/>
				</div>
			);
		} /*Tru adding a else if condition with else if (this.state.winner == "" && this.state.player1 != "" && this.state.player2 != "") {
			return (
				<div>
					<StartUpScreen onSetTurn={this.setTurn} />
					<br />
					<h1>{this.state.player == "X" ? this.state.player1 : this.state.player2}&apos;s Turn</h1>
					<Game onNextTurn={this.nextTurn} currentPlayer={this.state.player} newWinner={this.setWinner}/>
				</div>);
		}*/ else if (
			this.state.winner != ""
		) {
			return (
				<div>
					<h1 className="congratulations">
						Congratulations{" "}
						{this.state.winner == "X"
							? this.state.player1
							: this.state.player2}
						! You won!
					</h1>
					<h2>Want to play again?</h2>
					<h2>Refresh if you want to change your usernames!</h2>
					<br />
					<br />
					<br />
					<Game
						onNextTurn={this.nextTurn}
						currentPlayer={this.state.player}
						newWinner={this.setWinner}
					/>
				</div>
			);
		}
	}
}
