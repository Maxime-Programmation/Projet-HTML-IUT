// --- Style alternatif ---
const feuilleAlt = document.getElementById("feuilleAlt");
const boutonStyle = document.getElementById("styleAlternatif");

boutonStyle.addEventListener("click", function () {
    feuilleAlt.disabled = !feuilleAlt.disabled;
});