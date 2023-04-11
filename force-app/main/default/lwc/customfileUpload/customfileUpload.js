import { LightningElement,api, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import uploadFile from '@salesforce/apex/FileUploaderClass.uploadFile';
import deleteVersion from '@salesforce/apex/FileUploaderClass.deleteVersion';
//import style from '@salesforce/resourceUrl/styles';
export default class CustomfileUpload extends LightningElement {

    @api recordId;
    fileData
    @track nameArr = [];
    @track show = false;
    @track arr2 = ['test6','test7'];
    @track updatedArray = [];

    //custom function
    handleData(e){
    console.log('Button is Clicked');
    for(let i=0; i<5; i++){
        this.nameArr.push('test'+i);    
    }
    console.log('Second Data-->',this.arr2);
    console.log('Data-->',this.nameArr);
    this.show = !this.show ; 
    this.nameArr = this.nameArr.concat(this.arr2);
    console.log('Updated Data-->',this.nameArr);
    }

    //fileupload code
    openfileUpload(event) {
        const file = event.target.files[0]
        var reader = new FileReader()
        reader.onload = () => {
            var base64 = reader.result.split(',')[1]
            this.fileData = {
                'filename': file.name,
                'base64': base64,
                'recordId': this.recordId
            }
            console.log(this.fileData)
        }
        reader.readAsDataURL(file)
    }
    
    handleClick(){
        const {base64, filename, recordId} = this.fileData
        uploadFile({ base64, filename, recordId }).then(result=>{
            this.fileData = null
            let title = `${filename} uploaded successfully!!`
            this.toast(title)
        })
    }

    toast(title){
        const toastEvent = new ShowToastEvent({
            title, 
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }

    deleteVersion(){
        console.log('button is clicked');
     deleteVersion({recId:this.recordId}).then((result) =>{
        console.log('You deleted the File',result);

     }).catch(error);
    }
    // connectedCallback() {
    //     loadStyle(this, style)
    //   }
    
    
    


}