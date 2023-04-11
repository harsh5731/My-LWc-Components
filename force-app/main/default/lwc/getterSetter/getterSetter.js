//We must import api here to use it
import {LightningElement, api} from 'lwc';

export default class GettersAndSettersExample extends LightningElement {
   _personObject;

   //Public property
   @api
   get person(){
       return this._personObject;
   }

   set person(value){

       //Objects that are passed to components are Read Only
       //Therefore this component cannot modify the person object passed from parent component
       //To mutate the object we can create a shallow copy of the object

       let tempObject = {
           //Use a spread operator
           ...value,
           //Make name upperCase
           Name: value.Name.toUpperCase(),
          
       };

       //Set personObject property to our new updated person object
       this._personObject = tempObject;
   }

}