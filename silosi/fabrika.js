import { Silos } from "./silos.js";

export class Fabrika{
    constructor(id, naziv, silosi)
    {
        this.id=id;
        this.naziv=naziv;
        this.silosi=silosi;
        this.container=null;
    }

    dodajSilos(silos)
    {
        this.silosi.push(silos);
    }

    crtajFabriku(host)
    {
        const fabrika = document.createElement("div");
        fabrika.classList.add("fabrika");
        host.appendChild(fabrika);

        const imeisilosi = document.createElement("div");
        imeisilosi.classList.add("imeisilosi");
        fabrika.appendChild(imeisilosi);

        const imefabrike = document.createElement("h3");
        imefabrike.innerHTML=this.naziv;
        imeisilosi.appendChild(imefabrike);

        const sviSilosi = document.createElement("div");
        sviSilosi.classList.add("sviSilosi");
        imeisilosi.appendChild(sviSilosi);

        this.silosi.forEach(silos => {
            const silos1 = new Silos(silos.id, silos.oznaka, silos.kapacitet, silos.trenutnaVrednost);
            silos1.crtajSilos(sviSilosi);
        })
        this.crtajFormu(fabrika);
    }

    crtajFormu(host)
    {
        const forma = document.createElement("div");
        forma.classList.add("forma");
        host.appendChild(forma);

        let label = document.createElement("label");
        label.innerHTML = "Silos: ";
        forma.appendChild(label);
        let option;

        let select = document.createElement("select");
        select.classList.add()
        forma.appendChild(select);
        this.silosi.forEach(silos => {
            option = document.createElement("option");
            option.text = silos.oznaka;
            option.value = silos.oznaka;
            select.appendChild(option);
        });

        label = document.createElement("label");
        label.innerHTML = "Kolicina: ";
        forma.appendChild(label);

        let input = document.createElement("input");
        input.type = "number";
        input.classList.add("kolicinaInput");
        forma.appendChild(input);

        const dugme = document.createElement("button");
        dugme.classList.add("dugme");
        dugme.innerHTML = "Sipaj picko";
        dugme.onclick = () => {
            const vrednost = input.value;
            const silosOznaka = select.value;
            this.silosi.forEach(s => {
                const silos = new Silos(s.id, s.oznaka, s.kapacitet, s.trenutnaVrednost)
                if(silos.oznaka == silosOznaka){
                    silos.azurirajSilos(vrednost, this.id);
                }
            })
            //Silos silos = this.silosi.find(x => x.oznaka === silosOznaka);
            //silos.AzurirajSilos(vrednost, this.id);
        }
        forma.appendChild(dugme);

    }
}