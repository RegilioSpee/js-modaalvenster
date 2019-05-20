/*
modaal object moet deze properties hebben:
1. achtergrond 
2. modaal met daarin:
    -sluitknop
    -inhoud uit de DOM
    -knoppen uit de DOM

3. en de volgende methods:
    -achtergrond maken
    -sluitknop maken
    -modaal maken
    -openen modaal
    -sluiten modaal
*/

const modaalVenster = {
  alleInhoud: document.querySelectorAll(".modaalContent"),
  alleKnoppen: document.querySelectorAll(".modaal-knop"),

  maakBackground() {
    let background = document.createElement("div");
    background.classList.add("modaal-achtergrond");
    background.addEventListener("click", () => this.sluiten());
    return background;
  },
  maakModaal() {
    let modaal = document.createElement("div");
    modaal.className = "modaal";
    modaal.addEventListener("click", evt => evt.stopPropagation());
    return modaal;
  },
  maakSluitKnop() {
    let sluitKnop = document.createElement("div");
    sluitKnop.className = "sluit-knop";
    sluitKnop.innerHTML = "&#x00D7";
    sluitKnop.addEventListener("click", () => this.sluiten());
    return sluitKnop;
  },
  open(elem) {
    this.background = this.maakBackground();
    this.sluitKnop = this.maakSluitKnop();
    this.modaal = this.maakModaal();
    this.modaal.appendChild(this.sluitKnop);
    this.modaal.appendChild(elem);
    this.background.appendChild(this.modaal);
    document.body.appendChild(this.background);
  },
  sluiten() {
    this.modaal.innerHTML = "";
    document.body.removeChild(this.background);
  }
};

//initieren inhoud verwijderen en knoppen
for (let i = 0; i < modaalVenster.alleInhoud.length; i++) {
  modaalVenster.alleInhoud[i].parentNode.removeChild(
    modaalVenster.alleInhoud[i]
  );
}
for (let i = 0; i < modaalVenster.alleKnoppen.length; i++) {
  modaalVenster.alleKnoppen[i].addEventListener("click", () => {
    let inhoud = modaalVenster.alleInhoud[i];
    modaalVenster.open(inhoud);
  });
}
