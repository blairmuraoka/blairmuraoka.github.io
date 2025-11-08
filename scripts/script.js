console.log("Garu")
const garou = document.getElementById("garou");
const w = { x: window.innerWidth, y: window.innerHeight };
const g = { x: garou.offsetWidth, y: garou.offsetHeight };
const curr = { x: 1, y: 1 };
const inc = { x: true, y: true };
const boundaries = {
    xMax: w.x - g.x - 1,
    xMin: 1,
    yMax: w.y - g.y - 1,
    yMin: 1
};
console.log(boundaries)
let firstTranslate = true;

// garou.style.right = '969px'
setInterval(() => {
    if (!firstTranslate) {
        // Left wall
        if (curr.x == boundaries.xMin || curr.x == boundaries.xMax) {
            inc.x = !inc.x;
        }
        // Top wall
        if (curr.y == boundaries.yMin || curr.y == boundaries.yMax) {
            inc.y = !inc.y;
        }

        if ((curr.x == boundaries.xMax && curr.y == boundaries.yMin) ||   // Top left
            (curr.x == boundaries.xMin && curr.y == boundaries.yMin) ||   // Top right
            (curr.x == boundaries.xMin && curr.y == boundaries.yMax) ||   // Bottom right
            (curr.x == boundaries.xMax && curr.y == boundaries.yMax)) {   // Bottom left
            console.log('Garuuu')
            document.body.style.background = "#044";
        }
    }
    else {
        firstTranslate = false;
    }
    garou.style.top = inc.y ? `${curr.y++}px` : `${curr.y--}px`;
    garou.style.right = inc.x ? `${curr.x++}px` : `${curr.x--}px`;

}, 1);