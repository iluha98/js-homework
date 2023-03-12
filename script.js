const cells = document.querySelectorAll('.cell');
const info = document.querySelector('.info');
const newGame = document.querySelector('.btn');
play(cells);

function play(cells) {
    let count = 0;

    for(let cell of cells){
        cell.addEventListener('click', function step () {
            if(count % 2 == 0) {
                cell.textContent = 'x';
            } else {
                cell.textContent = 'o';
            }
            cell.removeEventListener('click', step);

            if (win(cells)) {
				info.textContent = `Выиграл игрок - ${this.textContent}`;
			} else if(count === 8){
				info.textContent = 'Ничья';
			}
			
            count++;
        })
    }
}
function win(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			cells[comb[0]].textContent == cells[comb[1]].textContent &&
			cells[comb[1]].textContent == cells[comb[2]].textContent &&
			cells[comb[0]].textContent != ''
		) {
			return true;
		}
	}
}
newGame.addEventListener('click', () => {
	window.location.reload()
})