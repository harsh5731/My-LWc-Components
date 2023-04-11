import { LightningElement,wire,api } from 'lwc';
import emailAddress from '@salesforce/apex/SendEmail.mailAddress'
import sendEmailMethod from '@salesforce/apex/SendEmail.sendEmailMethod'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class SendEmail extends LightningElement {

showSpinner = false;
checkboxVal = false;
fileType ;
fileData = {};
 @wire(emailAddress) emailAdd;x
@api recordId;

showtemplate(){
    //checkboxVal = !this.checkboxVal;
    console.log("the checkbox is checked");
    this.showSpinner = !this.showSpinner;
}
 catchValue(){ }

    sendEmail(){
        const {base64, filename, recordId} = this.fileData
        let email = this.template.querySelector('.emailAddress').value;
          var arr =email.split(',');
          //arr.push(email);
          console.log(arr);
        let subject = this.template.querySelector('.subject').value;
        let body = this.template.querySelector('.body').value;
        console.log('values to be passed ', email, subject, body);
            
        sendEmailMethod({ toEmailAddressList : arr, subject : subject, body : body, base64, filename, recordId})
    }

    handleFileUploaded(event){
        const file = event.target.files[0]
        var reader = new FileReader()
        reader.onload = () => {
            var base64 = reader.result.split(',')[1]
            this.fileData = {
                'filename': file.name,
                'base64': base64,
                'recordId': this.recordId
            }
            console.log(this.fileData);
            this.fileType = file.type;
        }

        reader.readAsDataURL(file)   
    }

            uploadFiles(){
                    const {base64, filename, recordId} = this.fileData
                    uploadFile({ base64, filename, recordId }).then(result=>{
                        this.fileData = {};
                        let title = `${filename} uploaded successfully!!`
                        this.toast(title)
                    })
            }
            get getImageBlob(){
                return this.fileData && this.fileData.base64 ? 'data:'+this.fileType+';base64,'+this.fileData.base64 : '';
            }

     }