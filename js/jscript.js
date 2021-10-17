
//lisätään tehtävä todo-listalle
function addTask() {
    //haetaan taulukon runko muuttujaan
    var table = document.getElementById("tbody");
    //haetaan tekstikenttä muuttujaan
    var field = document.getElementById("tekstikentta");
    //tarkistetaan, että tehtävä ei ole tyhjä tai liian lyhyt
    if (field.value.length < 3) {
        //jos tyhjä / liian lyhyt, annetaan virheilmoitus
        //ja korostetaan tekstikenttä punaisella
        alert("Kirjoita oikea tehtävä!");
        field.style.borderColor = "red";
    } else {
        //korjataan mahdollinen tekstikentän korostus
        field.style.borderColor = "black";
        //lisätään rivi luetteloon perään
        var row = table.insertRow(-1);
        //lisätään ensimmäinen solu
        var cell = row.insertCell(0);
        //lisätään mahdollisuus poistaa yliviivaus
        cell.onclick = function uncheck() {
            row.style = "text-decoration: none"
        }

        //lisätään ensimmäiseen soluun tekstikentän teksti
        cell.innerHTML = field.value;
    }
    //tyhjennetään tekstikenttä
    field.value = "";
    //luodaan toinen solu ja otetaan muuttujaan
    var cell2 = row.insertCell(1);
    //luodaan input-elementti ja otetaan muuttujaan
    var valinta = document.createElement("input");
    //lisätään input-elementtiin onclick-event, joka yliviivaa rivillä olevan tekstin
    valinta.onclick = function check() {
        row.style = "text-decoration: line-through";
    }
    //määritellään input checkboxiksi ja annetaan tunnisteita
    valinta.type = "checkbox";
    valinta.name = "cbox";
    valinta.id = "cb";

    //liitetään solu rivin perään
    cell2.appendChild(valinta);
}
//poistetaan checkmarkatut tehtävä luettelosta
function removeTask() {
    //haetaan taulukon ensimmäinen tbody-elementti muuttujaan
    var table = document.getElementById("ToDoListTable").tBodies[0];
    //haetaan rivien määrä muuttujaan
    var rowCount = table.rows.length;
    //käydään for-loopilla läpi taulukon kaikki rivit
    for (var i = 0; i < rowCount; i++) {
        //haetaan rivi i muuttujaan
        var row = table.rows[i];
        //haetaan checkbox muuttujaan
        var cb = row.cells[1].getElementsByTagName("input")[0];
        //tarkistetaan, onko checkbox checkattu, jos on, rivi poistetaan
        if ("checkbox" == cb.type && true == cb.checked) {
            table.deleteRow(i);
            //vähennetään indexistä yksi, jotta looppi ei sekoa, kun uusia rivejä lisätään
            i--;
        }
    }
}