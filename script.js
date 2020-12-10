function pageLoad() {
	/* Todo appot csinálunk alapértelmezésben 10 üres mező áll rendelkezésre
	de hozzátudunk adni újakat és minden sorban van egy checkbox textinput mező feladat leírásával
	és a egy törlés gomb amivel tudjuk a sort törölni */

	//Létrehozok egy változót a root-nak

	let rootE = document.getElementById("root");

	//El kell tárolnunk egy változóba a sorok számát és a sornak a html struktúráját(div checkbox text input button)

	let rowNumber = 10

	//Egy todo list sort elmenteni változóba

	let row =	`		
		<div class="row">
			<input type="checkbox" class="checkbox">
			<input type="text" class="text">
			<button type="button" class="delete">Delete</button>
		</div>
		`;

	//10* kell duplikálni az előző kommentben meghatározott sort for ciklussal és hozzáadjuk a roothoz

	for (let index = 0; index < rowNumber; index++) {
		rootE.insertAdjacentHTML("beforeend", row);
	}

	//rooton kívülre be kell rakni egy + gombot amivel hozzáadhatunk üres sorokat

	rootE.insertAdjacentHTML("afterend", `
		<button id="add">Új sor hozzáadása</button>
	`);

	//Hozzáadunk egy click eseményt a + gombhoz 

	function newItem() {
		rootE.insertAdjacentHTML("beforeend", row);

		//TODO: rá kéne tenni az 59es sorban lévő esemény figyelőt az újonnan hozzáadott sorokra is
	}

	document.getElementById("add").addEventListener("click", newItem);

	// Kijelölölm class név alapján az összes törlés gombot és elmentem egy változóba

	let removeBtns = rootE.querySelectorAll(".delete");
	//console.log(removeBtns);

	//click esemény adása for ciklussal a törlés gombokra

	function removeItem(e) {
		console.log(e.target);
		e.target.parentElement.remove();
	}

	for (let index = 0; index < removeBtns.length; index++) {
		removeBtns[index].addEventListener("click", removeItem);
	}

	//Hogy fogom tudni kijelölni azt az elemet amit majd ki szeretnénk törölni


	}

window.addEventListener("load", pageLoad);

