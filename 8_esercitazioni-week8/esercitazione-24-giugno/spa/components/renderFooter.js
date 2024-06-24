// TODO 3: Footer con logo e menu con sotto menu in stile footer Apple (https://apple.com)

export function renderFooter() {
	const navFooterEl = createFooterEl();

	return `
    <footer>
      <img src="https://picsum.photos/50" alt="Logo" width="50" height="50">
      ${navFooterEl}
    </footer>
  `;
}

function createFooterEl() {
	const navItems = [
		{ label: "Home" },
		{ label: "Articles", children: [{ label: "Articles category 1" }, { label: "Articles category 2" }] },
		{ label: "Authors", children: [{ label: "Author 1" }, { label: "Author 2" }] },
	];
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
	const { label, href = "#", children = [] } = options;
	const subItems = children.map((singleChild) => createNavLinks(singleChild)).join("");
	const subItemsEl = `<ul>${subItems}</ul>`;

	return `
    <li>
      <a href="${href}">${label}</a>
      ${children.length > 0 ? subItemsEl : ""}
    </li>
  `;
}
