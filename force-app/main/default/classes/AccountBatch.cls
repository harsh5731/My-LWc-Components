global class AccountBatch implements database.Batchable <sobject>{
     List<String> accountDetails = new List<String>();
    global database.QueryLocator start(database.BatchableContext bc){
        string query = 'SELECT Id, Name FROM Account';
        
        return database.getQueryLocator(query);
    }
    global void execute(database.BatchableContext bc, List <Account> accList){
        List<Account> accUpdatedList = new List<Account>();
        for(Account acc : accList){            
               accUpdatedList.add(acc);
        }
        update accUpdatedList;
        //Database.SaveResult[] srList = Database.update(accList, false);
        
        if(accUpdatedList != NULL && !accUpdatedList.isEmpty())
        {
            for(Account accObj: accUpdatedList)
            {
                accountDetails.add(accObj.Id + ',' + accObj.Name + ',' + accObj.Description);
            }
        }
    }
      global void finish(Database.BatchableContext BC) {
        
        //Creating CSV file
        String csvFile;
        String csvColumnHeader = 'S.No, Account Id, Description\n';
        List<String> csvRowValues = new List<String>();
        
              //To add an attachment, Messaging.EmailFileAttachment class is used
        Messaging.EmailFileAttachment attach;
        if(accountDetails != NULL && !accountDetails.isEmpty())
        {
            csvFile = csvColumnHeader + String.join(accountDetails,'\n');
            attach = new Messaging.EmailFileAttachment();
            attach.setContentType('text/csv');
            attach.setFileName('Account File.csv');
            attach.setInline(true);
            attach.Body = Blob.valueOf(csvFile);
        }     
         //Creating recipient list
        List<String> recipientList = new List<String>();
        recipientList.add('harsh.Kumar@techilaservices.com');
       List<Messaging.SingleEmailMessage> mailsList = new List<Messaging.SingleEmailMessage>();
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(recipientList);
        mail.setSubject('List of Accounts');
        String body = 'hi how are you';
        mail.setHtmlBody(body);
        if(attach != NULL)
        {
            mail.setFileAttachments(new Messaging.EmailFileAttachment[] { attach });//Set File Attachment
        }
        mailsList.add(mail);
        Messaging.SendEmailResult[] sendEmailResults = Messaging.sendEmail(mailsList);

         /* AsyncApexJob apexJob = [Select Id, Status, NumberOfErrors, JobItemsProcessed,TotalJobItems, CreatedBy.Email FROM AsyncApexJob WHERE Id =:bc.getJobId()];
      
        Messaging.SingleEmailMessage sendMail = new Messaging.SingleEmailMessage();
        //String[] toAddresses = new String[] {a.CreatedBy.Email};
       // mail.setToAddresses(toAddresses);
        sendMail.setSubject('Batch Report' + apexJob.Status+' , '+ apexJob.Id);
        sendMail.setPlainTextBody('Records Processed ' + apexJob.TotalJobItems +   ', Faliures '+ apexJob.NumberOfErrors);
        List<String> mailIdLists = new List<String> {'vivek.kumar@techilaservices.com'};
    //    String[] sendTo = new String[]{};
            sendMail.setToAddresses(mailIdLists);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { sendMail });
    
    */
          //

    
      }
}