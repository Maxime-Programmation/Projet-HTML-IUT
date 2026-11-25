// --- Curseur de note ---
const curseur = document.getElementById("intervalle");
const valeurNote = document.getElementById("valeurNote");

curseur.addEventListener("input", function () {
    valeurNote.textContent = curseur.value;
});

// --- Style alternatif ---
const feuilleAlt = document.getElementById("feuilleAlt");
const boutonStyle = document.getElementById("styleAlternatif");

boutonStyle.addEventListener("click", function () {
    feuilleAlt.disabled = !feuilleAlt.disabled;
});