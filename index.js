function ajoutTache() {
	var valeurInput = document.getElementById("input_tache").value;

	if (valeurInput != "") {
		var elementListe = document.createElement("li");
		elementListe.innerText = valeurInput;

		document.getElementById("taches").appendChild(elementListe);

		document.getElementById("input_tache").value = "";
	} else {
		alert("Je suis vide");
	}
}
