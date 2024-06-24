## Lunedì 24/06

### Esercizi:

#### 1. Holy Grail

usando questo HTML:

```html
<div class="app">
	<header class="header">Header</header>
	<main class="main">Main content</main>
	<section class="left">Left sidebar</section>
	<aside class="right">Right sidebar</aside>
	<footer class="footer">Footer</footer>
</div>
```

1. Ricreare il template del "Holy Grail" in HTML/CSS usando Flex: https://cdn.matthewjamestaylor.com/titles/holy-grail-3-column-responsive-layout-diagram.png
2. Ricreare il template del "Holy Grail" in HTML/CSS usando Grid: https://cdn.matthewjamestaylor.com/titles/holy-grail-3-column-responsive-layout-diagram.png

#### 2. Single Page Application

partendo da questo HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>My page</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="./style.css" />
	</head>
	<body>
		<div id="app"></div>
		<script type="module" src="/index.js"></script>
	</body>
</html>
```

- Creare una pagina usando solo JS che contenga:
  - Header con Logo e Menu (almeno 2 link)
  - Footer con logo e menu con sotto menu in stile footer Apple (https://apple.com)
  - Sidebar con elementi statici
  - Main con una lista di articoli presi da https://jsonplaceholder.typicode.com/posts.
    - Per ogni articolo mostrare: titolo, testo ed autore.

---
