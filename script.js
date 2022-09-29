let fields = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
let currentPlayer = [0];
let currentShape = 'cross';


function fillShape(id) {
    fields[id] = currentShape;
    showShape();
    changePlayer();

    console.log(currentPlayer);
    console.log(fields);
    checkWinner();
}

function changePlayer() {
    if (currentPlayer == 0) {
        currentPlayer = 1;
        currentShape = 'circle';
    } else {
        currentPlayer = 0;
        currentShape = 'cross';
    }

}

function showShape() {
    for (let i = 0; i < fields.length; i++) {
        const element = fields[i];
        if (element == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
        if (element == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
    }
}

function checkWinner() {
    let amountColumns = 3;
    let amountRows = 3;
    let amountFields = amountColumns * amountRows;
    let winner;
    for (let i = 0; i < amountFields - (2 * amountColumns); i++) {
        if (checkComumn(i, amountColumns)) {
            winner = fields[i];
        }
    }
    for (let i = 0; i < 7; i += 3) {
        if (fields[i] == fields[i + 1] && fields[i] == fields[i + 2] && fields[i] != 'none') {
            winner = fields[i];
        }
    }
    if (fields[4] == fields[0] && fields[4] == fields[8] && fields[4] != 'none') {
        winner = fields[4];
    }
    if (fields[4] == fields[2] && fields[4] == fields[6] && fields[4] != 'none') {
        winner = fields[4];
    }
    if (winner) {
        console.log('Gewonnen hat', winner);
    }
}

function checkComumn(i, amountColumns) {
    return fields[i] == fields[i + amountColumns] && fields[i] == fields[i + amountColumns * 2] && fields[i] != 'none'
}