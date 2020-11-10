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

        const current = parseInt(this.currentOperand)
        if(isNaN(current)){
            this.currentOperand = "Error";
            return
        }
        let result = parseInt(current, 2)
        this.currentOperand = result
    }

    decimalToBinary(){

        const current = parseInt(this.currentOperand)
        if(isNaN(current)){
            this.currentOperand = "Error";
            return
        } 

        let bin = (current >>> 0).toString(2);
    
        this.currentOperand = bin;
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const currentOperandTextElement = document.querySelector('[data-currentOperand]')
const BTDButtons = document.querySelector('[BTD]')
const DTBButtons = document.querySelector('[DTB]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-allClear]')
const Opeartion = document.querySelector('[data-operation]')

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
    
allClearButtons.addEventListener('click', button => {
    
    calculator.clear()
    
    calculator.updateDisplay()
    
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})


