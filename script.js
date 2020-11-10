class Calculator{
    constructor(currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    binaryToDecimal(){

        for(var i = 0; i < this.currentOperand.length; i++){

            const num = parseInt(this.currentOperand.charAt(i));
            if(num > 1){
                this.currentOperand = "Error";
                return;
            }
            
        }

        const current = parseInt(this.currentOperand)
        if(isNaN(current)){
            this.currentOperand = "Error";
            return
        }
        

        let result = parseInt(current, 2)
        this.currentOperand = result
    }

    decimalToBinary(){

        for(var i = 0; i < this.currentOperand.length; i++){
            const num = parseInt(this.currentOperand.charCodeAt(i));
            if(num > 65){
                this.currentOperand = "Error";
                return;
            }
        }

        const current = parseInt(this.currentOperand)
        if(isNaN(current)){
            this.currentOperand = "Error";
            return
        } 

        let bin = (current >>> 0).toString(2);
    
        this.currentOperand = bin;
    }

    decimalToHex(){

        for(var i = 0; i < this.currentOperand.length; i++){
            const num = parseInt(this.currentOperand.charCodeAt(i));
            if(num > 65){
                this.currentOperand = "Error";
                return;
            }
        }

        const current = parseInt(this.currentOperand);
        if(isNaN(current)){
            this.currentOperand = "Error";
            return
        }

        let hexStr = current.toString(16);
        this.currentOperand = hexStr;
    }

    hexToDecimal(){

        const current = parseInt(this.currentOperand,16);
        if(isNaN(current)){
            this.currentOperand = "Error";
            return
        }

        this.currentOperand = current;
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const currentOperandTextElement = document.querySelector('[data-currentOperand]')
const BTDButtons = document.querySelector('[BTD]')
const DTBButtons = document.querySelector('[DTB]')
const DTHButtons = document.querySelector('[DTH]')
const HTDButtons = document.querySelector('[HTD]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-allClear]')

const calculator = new Calculator(currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

BTDButtons.addEventListener('click', button => {

    calculator.binaryToDecimal()
    
    calculator.updateDisplay()
    
})

DTBButtons.addEventListener('click', button => {

    calculator.decimalToBinary()
    
    calculator.updateDisplay()
    
})

DTHButtons.addEventListener('click', button => {

    calculator.decimalToHex()
    
    calculator.updateDisplay()
    
})

HTDButtons.addEventListener('click', button => {

    calculator.hexToDecimal()
    
    calculator.updateDisplay()
    
})
    
allClearButtons.addEventListener('click', button => {
    
    calculator.clear()
    
    calculator.updateDisplay()
    
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})


