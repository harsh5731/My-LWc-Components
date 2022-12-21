import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track num1;
    @track num2;
    @track result;
    @track tabControll=false;

    memoryArray = [];

    handleChanheNum1(e){
        this.num1=e.target.value
        // console.log(typeof(this.num1))
    }

    handleChanheNum2(e){
        this.num2=e.target.value
    }

    handleClick(e){
        let  mathopereator=e.target.label
        if(mathopereator==='Add'){
            this.result=parseInt(this.num1)+parseInt(this.num2);

        }else if(mathopereator==='Substract'){
            this.result=parseInt(this.num1)-parseInt(this.num2);

        }else if(mathopereator==='Multiply'){
            this.result=parseInt(this.num1)*parseInt(this.num2);

        }else if(mathopereator==='Divide'){
            this.result=parseInt(this.num1)/parseInt(this.num2);

        }


        this.createMemory(mathopereator, this.num1, this.num2,this.result)
    }

    createMemory(operation, val1, val2, result){
        var a={};
        a.num1=val1;
        a.num2=val2;
        a.operation=operation;
        a.result=result;
        console.log(a);
        this.memoryArray.push(a);

        
    }
    showMemory(){
        this.tabControll = !this.tabControll;

        console.log(this.memoryArray)
    }
    
   
}