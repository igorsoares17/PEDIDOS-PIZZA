class Request {

    constructor() {

        this.amounts = [];

        for (let x = 0; x < 6; x++) {

            this.amounts[x] = 0;
        }

        this.buttons = document.getElementsByClassName("qtdItem");
        this.cxButtons = document.getElementsByClassName("cxButtons");
        this.clickListener();

    }

    clickListener() {

        Array.from(this.buttons).forEach((btn, index) => {

            btn.addEventListener('click', () => {

                if (this.amounts[index] == 0) {

                    this.createBtnSub(index);   
                } 

                else {


                }
            })
        })
    }

    createBtnSub(index) {

    
    }

}

let request = new Request('');