/*
<!-- card list -->
  <section class="card-list">
    <!-- card -->
	    <div class="card">
		    <img class="card__img" src=${pokemon[0].image} alt=${pokemon[0].name} />
		    <h2 class="card__title">${pokemon[0].name}</h2>
		    <span class="card__id">N°${pokemon[0].id}</span>
		    <p class="card__type">Type: ${pokemon[0].type}</p>
	    </div>
    <!-- end card -->
  </section>
<!-- end card list -->
*/

const cardElGen = (pokemon) => {
	const container = document.createElement("div");
	const imageEl = document.createElement("img");
	const titleEl = document.createElement("h2");
	const idEl = document.createElement("span");
	const typeEl = document.createElement("p");

	// container.className = "card";
	container.classList = `card ${pokemon.type}`;
	imageEl.className = "card__img";
	// imageEl.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
	imageEl.src = `${pokemon.image}`;
	imageEl.alt = `${pokemon.name}`;

	titleEl.className = "card__title";
	titleEl.textContent = `${pokemon.name}`;

	idEl.className = "card__id";
	idEl.textContent = `# 00${pokemon.id}`;

	typeEl.className = "card__type";
	typeEl.textContent = `Type: ${pokemon.type}`;

	container.append(imageEl, titleEl, idEl, typeEl);
	return container;
};

const cardListGen = () => {
	const container = document.createElement("div");

	container.className = "card-list";

	return container;
};

const buttonGen = (text, type) => {
	const button = document.createElement("button");
	button.className = "btn-filter";
	button.id = type;
	button.textContent = text;
	return button;
};

export { cardElGen, cardListGen, buttonGen };
