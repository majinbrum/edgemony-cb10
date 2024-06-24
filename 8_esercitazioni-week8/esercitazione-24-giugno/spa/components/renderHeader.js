// TODO 2: Header con Logo e Menu (almeno 2 link)

export function renderHeader() {
	const navHeaderEl = createNavEl();

	return `
    <header>
      <img src="https://picsum.photos/50" alt="Logo">
      ${navHeaderEl}
    </header>
  `;
}

function createNavEl() {
	const navItems = [{ label: "Articles" }, { label: "Authors" }];
	const navItemsEl = navItems.map((singleItem) => createNavLinks(singleItem)).join("");

	return `
    <nav>
        <ul>
          ${navItemsEl}
        </ul>
    </nav>
  `;
}

function createNavLinks(options) {
	const { label, href = "#" } = options;

	return `
    <li>
      <a href="${href}">${label}</a>
    </li>
  `;
}
