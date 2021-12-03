export class Silos{
    constructor(id, oznaka, kapacitet, trenutnaVrednost)
    {
        this.id=id;
        this.oznaka=oznaka;
        this.kapacitet=kapacitet;
        this.trenutnaVrednost=trenutnaVrednost;
        this.miniContainer=document.createElement("div");
        this.kolicina = document.createElement("label");
    }

    crtajSilos(host){
        const ceoSilos = document.createElement("div");
        ceoSilos.classList.add("ceoSilos");
        host.appendChild(ceoSilos);

        const ime = document.createElement("label");
        ime.innerHTML = this.oznaka;
        ceoSilos.appendChild(ime);

        this.kolicina.innerHTML = this.trenutnaVrednost + "t/" + this.kapacitet + "t";
        ceoSilos.appendChild(this.kolicina);

        const silos = document.createElement("div");
        silos.classList.add("silos");
        ceoSilos.appendChild(silos);

        this.miniContainer.classList.add("fill");
        silos.appendChild(this.miniContainer);

        const h = this.kapacitet;
        const x = this.trenutnaVrednost;
        const l = (100 * x) / h;

        this.miniContainer.style.height = `${l}%`;
        console.log(this.miniContainer);
    }

    azurirajSilos(novaKolicina, idF)
    {
        const h = this.kapacitet;
        let l = 0;
        console.log(novaKolicina);
        fetch("https://localhost:5001/Silos/AzuzirajSilos/"+idF+"/"+this.id, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaKolicina)
        }).then((resp) => {
            if(resp.ok){
                resp.json().then(data => {
                    l = (100 * data) / h;
                    this.miniContainer.style.height = `${l}%`;
                    this.kolicina.innerHTML = data+"t/"+this.kapacitet + "t";
                    console.log(l);
                });
            }
            else
                alert("Silos je pun.");
        });
    }
}