export const createEl = (element, attrs = {}, parent = document.body) => {
	const el = document.createElement(element);
	for (let prop in attrs) {
		if (prop in el) {
			el[prop] = attrs[prop];
			continue;
		}

		el.setAttribute(prop, attrs[prop]);
	}
	parent.append(el);
	return el;
};

// esempio:
// const asideEl = document.querySelector("aside");
// createElement("div", { className: "prova-class", innerHTML: "ciao mondo" }, asideEl);
