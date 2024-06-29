export const createEl = (tag) => {
	return document.createElement(tag);
};

export const setClassList = (el, className) => {
	return (el.classList = className);
};

export const appendElements = (parent, ...children) => {
	children.forEach((child) => parent.append(child));
};

export const querySel = (selector) => {
	return document.querySelector(selector);
};
