let userScore = document.querySelector(".user-score");
let machineScore = document.querySelector(".machine-score");
let results = document.querySelector(".results");

document.querySelector(".icon-rock").addEventListener("click", playGame);
document.querySelector(".icon-paper").addEventListener("click", playGame);
document.querySelector(".icon-scissors").addEventListener("click", playGame);

function playGame(e) {
	let moveUser;
	let moveMachine;

	if (
		e.target.className == "fas fa-hand-rock" ||
		e.target.className == "icon-rock"
	) {
		moveUser = "Rock";
	} else if (
		e.target.className == "fas fa-hand-paper" ||
		e.target.className == "icon-paper"
	) {
		moveUser = "Paper";
	} else if (
		e.target.className == "fas fa-hand-scissors" ||
		e.target.className == "icon-scissors"
	) {
		moveUser = "Scissors";
	}

	moveMachine = Math.floor(Math.random() * (4 - 1)) + 1;
	switch (moveMachine) {
		case 1:
			moveMachine = "Rock";
			break;
		case 2:
			moveMachine = "Paper";
			break;
		case 3:
			moveMachine = "Scissors";
			break;
	}
	console.log(`Movimiento usuario: ${moveUser}`);
	console.log(`Movimiento maquina: ${moveMachine}`);
	console.log(`-----------------------------------`);

	whoWins(moveUser, moveMachine);
	return true;
}

function whoWins(moveUser, moveMachine) {
	if (
		(moveUser === "Rock" && moveMachine === "Scissors") ||
		(moveUser === "Paper" && moveMachine === "Rock") ||
		(moveUser === "Scissors" && moveMachine === "Paper")
	) {
		userScore.innerText = Number(userScore.innerText) + 1;
		results.innerText = `${moveUser} beats ${moveMachine}. You Win :)`;
		return true;
	} else if (
		(moveUser === "Rock" && moveMachine === "Rock") ||
		(moveUser === "Paper" && moveMachine === "Paper") ||
		(moveUser === "Scissors" && moveMachine === "Scissors")
	) {
		results.innerText = `Match DRAW. Both chose ${moveUser}`;
		return true;
	} else if (
		(moveUser === "Rock" && moveMachine === "Paper") ||
		(moveUser === "Paper" && moveMachine === "Scissors") ||
		(moveUser === "Scissors" && moveMachine === "Rock")
	)
		machineScore.innerText = Number(machineScore.innerText) + 1;
		results.innerText = `${moveMachine} beats ${moveUser}. You lose :(`;
		return true;
}
