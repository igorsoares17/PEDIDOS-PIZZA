class Request {

    constructor() {

        this.amounts1 = [];
        this.amounts2 = [30, 32, 32, 35, 35, 37.5];
        this.result = 0;

        for (let x = 0; x < 6; x++) {

            this.amounts1[x] = 0;
        }

        this.buttons = document.getElementsByClassName("qtdItem");
        this.cxButtons = document.getElementsByClassName("cxButtons");
        this.areaPrice = document.getElementsByClassName("quantity");
        this.clickListener();

    }

    clickListener() {

        Array.from(this.buttons).forEach((btn, index) => {

            btn.addEventListener('click', () => {

                if (this.amounts1[index] == 0) {

                    this.createBtnSub(index);
                    this.createQuantity(index);   
                } 

                else {


                }

                this.amounts1[index] += 1;
                this.addQuantity(index);
                this.total = document.getElementById("zero");
                this.getResult();

            })
        })
    }

    createBtnSub(index) {

        let arrayButtons = Array.from(this.cxButtons);
        let newButton = document.createElement("button");
        arrayButtons[index].appendChild(newButton);
        newButton.setAttribute("class", "qtdItemMinus");
        newButton.innerHTML = "-"

        arrayButtons[index].style.justifyContent = "space-around"; 

    }

    getResult() {

        this.result = ((this.amounts1[0] * this.amounts2[0]) + (this.amounts1[1] * this.amounts2[1]) + (this.amounts1[2] * this.amounts2[2]) + (this.amounts1[3] * this.amounts2[3]) + (this.amounts1[4] * this.amounts2[4]) + (this.amounts1[5] * this.amounts2[5]));
        this.total.innerHTML = this.result;

    }

    createQuantity(index) {

        this.number = document.createElement("p");
        this.number.setAttribute("class", "number")
        this.areaPrice[index].appendChild(this.number);
    }

    addQuantity(index) {

        this.number.innerHTML = `(${this.amounts1[index]})`;
        this.areaPrice[index].style.justifyContent = "center";
    }

}

let request = new Request('');