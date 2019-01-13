Extension for Chrome(,Opera, etc.) browser. Creates an action bar menu with icon.png icon.
Function: opens a new page at www.iit.bme.hu and auto selects "MSc" for "Képzési szint" and "Villamosmérnök" for "Szak".

icon.png: discussed above.
manifest.json: mandatory stuff for the extension. We say here to run iit.js.
iit.js: browser specific things: opens a new tab, and opens www.iit.bme.hu, where runs the mySelector.js.
mySelector.js: selects "MSc" for "Képzési szint" and "Villamosmérnök" for "Szak".