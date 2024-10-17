class Request {

    constructor() {

        this.numbers = [];
        this.amounts1 = [];
        this.amounts2 = [30, 32, 32, 35, 35, 37.5];
        this.result = 0;

        for (let x = 0; x < 6; x++) {

            this.amounts1[x] = 0;
        }

        this.buttonsAdd = document.getElementsByClassName("qtdItem");
        this.cxButtons = document.getElementsByClassName("cxButtons");
        this.areaPrice = document.getElementsByClassName("quantity");
        this.corpButtons = Array.from(document.getElementsByClassName("cxButtons"))

    }

    clickListener(idElement) {

        

        if (this.amounts1[idElement] == 0) {

            this.amounts1[idElement] += 1;
            this.createBtnSub(idElement);
            this.createQuantity(idElement);
                    
        }

        else {

            this.amounts1[idElement] += 1;
            
        }
                
        this.addQuantity(idElement);
        this.total = document.getElementById("zero");
        this.getResult();
       
    }

    createBtnSub(idElement) {

        this.corpButtons[idElement].innerHTML = `
        <button id="${idElement}" class="qtdItem" onclick="request.clickListener(this.id)">+</button>
        <button id="${idElement}" onclick="request.buttonSubListener(${idElement})" class="qtdItemMinus">-</button>
        `;
        this.buttonsAdd = document.getElementsByClassName("qtdItem");
    }

    getResult() {

        this.result = ((this.amounts1[0] * this.amounts2[0]) + (this.amounts1[1] * this.amounts2[1]) + (this.amounts1[2] * this.amounts2[2]) + (this.amounts1[3] * this.amounts2[3]) + (this.amounts1[4] * this.amounts2[4]) + (this.amounts1[5] * this.amounts2[5]));
        this.total.innerHTML = this.result;

    }

    createQuantity(idElement) {

        this.numbers[idElement] = document.createElement("p");
        this.numbers[idElement].setAttribute("class", "number")
        this.areaPrice[idElement].appendChild(this.numbers[idElement]);
    }

    addQuantity(idElement) {

        this.numbers[idElement].innerHTML = `(${this.amounts1[idElement]})`;
        this.areaPrice[idElement].style.justifyContent = "center";
    }

    buttonSubListener(idElement) {

        if (this.amounts1[idElement] == 1) {

            this.amounts1[idElement] -= 1;
            this.numbers[idElement].remove();

            let buttonRemove = document.querySelector(`button[id="${idElement}"][class="qtdItemMinus"]`);
            buttonRemove.remove();
        }

        else {

            this.amounts1[idElement] -= 1;
            this.addQuantity(idElement);
        }
                
            this.getResult();
    }    
}

let request = new Request('');  