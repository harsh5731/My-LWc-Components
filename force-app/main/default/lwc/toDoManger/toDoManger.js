import { LightningElement,track } from 'lwc';

export default class ToDoManger extends LightningElement {

    @track time = "12:31";
    greeting = "Good AfterNoon";

    @track todos = [];  

    connectedCallback(){
        this.getTime();
        this.setGreeting();

        setInterval(()=>{
            this.getTime();     
            console.log("Set Interval is working");

        },1000*60);
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)}:${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }

    getHour(hour){
        return hour===0 ? 12 : hour > 12 ? (hour-12) : hour;    
    }

    getMidDay(hour){
        return hour >=12 ? "PM" : "AM"; 
    }
    getDoubleDigit(digit){
        return digit <10 ? "0"+digit : digit;

    }

    setGreeting(hour){
        if(hour = 12 ){
            this.greeting = 'Good Morning';
        }
        else if(hour == 12 && hour<17){
            this.greeting = "Good Afternoon";
        }
        else {
            this.greeting = "Good Evening";
        }

    }
    addtodohandler(){
        const inputBox = this.template.querySelector("lightning-input ");
        const todo = {
            todoid: this.todos.length,
            todoName: inputBox.value,
            done: false,
            todoDate:new Date()
        }
        this.todos.push(todo);
        inputBox.value="";
    }

    get upcomingTask(){

        return this.todos && this.todos.length ? this.todos.filter(todo => !todo.done) 
        : [];
    }

    get completedTask(){
        
        return this.todos && this.todos.length ? this.todos.filter(todo =>todo.done):[];
    }
}