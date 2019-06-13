
const INVALID_TEAM = 'INVALID_TEAM';

const ZEROTH_ROUND_INNER_HTML = `
<button>X</button>
<div class="team"></div>
<div class="arrow-group">
    <div class="arrow-vertical-group">
        <div class="arrow-up"></div>
        <div class="arrow-down"></div>
    </div>
    <div class="arrow-right" onclick="onRightArrowClick('no-no', 0, 0)"></div>
</div>
`;

class Team {
    constructor(name) {
        this.name = name;
        this.setRound.bind(this);
    }

    setRound(round) {
        this.round = round;
    }
}

class Round {
    constructor(size) {
        this.teams = [];
        let i = 0;
        while (i < size) {
            this.teams.push(INVALID_TEAM);
            i = i + 1;
        }
    }

    setTeam(team, index) {
        if (index >= this.teams.length) {
            return;
        }
        this.teams[index] = team;
    }

    swapTeams(first, second) {
        if (!(first < this.teams.length && second < this.teams.length)) {
            return;
        }
        let temp = this.teams[first];
        this.teams[first] = this.teams[second];
        this.teams[second] = temp;
    }
}

const tournament = {
    rounds: []
}

const ORDINALS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];

function makeId(index, round) {
    return `${ORDINALS[index]}-${ORDINALS[round]}`;
}

function makeZerothRoundInner(index, round) {
    return `
    <button onclick="onDeleteButtonClick(${index})">X</button>
    <div class="team"></div>
    <div class="arrow-group">
        <div class="arrow-vertical-group">
            <div class="arrow-up" onclick="onMoveArrowClick(true, ${index})"></div>
            <div class="arrow-down" onclick="onMoveArrowClick(false, ${index})"></div>
        </div>
        <div class="arrow-right" onclick="onRightArrowClick('${makeId(index, round)}', ${index}, ${round})"></div>
    </div>
    `;
}

function makeMiddleRoundInner(index, round) {
    return `
    <div class="team"></div>
    <div class="arrow-group">
        <div class="arrow-right" onclick="onRightArrowClick('${makeId(index, round)}', ${index}, ${round})"></div>
    </div>
    `
}

function attachRoundInner(index, round) {
    const foundNode = document.getElementById(makeId(index, round));
    foundNode.innerHTML = makeZerothRoundInner(index, round);
}

function attachMiddleRoundInner(index, round) {
    const foundNode = document.getElementById(makeId(index, round));
    foundNode.innerHTML = makeMiddleRoundInner(index, round);
}

function startGame() {
    console.log(tournament['foo']);
    attachRoundInner(0, 0);
    attachRoundInner(2, 0);
    attachRoundInner(4, 0);
    attachRoundInner(6, 0);
    attachRoundInner(8, 0);
    attachRoundInner(10, 0);
    attachRoundInner(12, 0);
    attachRoundInner(14, 0);
    attachMiddleRoundInner(1, 1);
    attachMiddleRoundInner(5, 1);
    attachMiddleRoundInner(9, 1);
    attachMiddleRoundInner(13, 1);
    attachMiddleRoundInner(3, 2);
    attachMiddleRoundInner(11, 2);
}

function onDeleteButtonClick(index) {

}

function onStartGameClick() {
    tournament.rounds = [new Round(8), new Round(4), new Round(2), new Round(1)];
    startGame();
}

function onRightArrowClick(id, round, index, team) {
    // console.log(id);
    // const node = document.getElementById(id);
    // const teamChild = node.children.item(1);
    // console.log(teamChild);
    // teamChild.innerHTML = 'foo';
    const node = document.getElementById(makeId(round, index));
    console.log(node);
}


function onMoveArrowClick(isUp, index, team) {
    console.log(isUp);
    console.log(index);
}


function onDeleteArrowClick(index, team) {

}
