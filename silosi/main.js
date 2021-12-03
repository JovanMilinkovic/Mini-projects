import {Fabrika} from "./fabrika.js";
import {Silos} from "./silos.js";
fetch("https://localhost:5001/Fabrika/PreuzmiFabrike").then(p => {
    p.json().then(data => {
        data.forEach(fabrika => {
            const fab1 = new Fabrika(fabrika.id, fabrika.naziv, fabrika.silosi);
            fab1.crtajFabriku(document.body);
        });
    })
})