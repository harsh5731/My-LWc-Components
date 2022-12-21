public class Assignment6 {
    public static void result(){
        AggregateResult[] groupedResults = [SELECT Industry, AVG(NumberOfEmployees),SUM(NumberOfEmployees), 
                                            MAX(NumberOfEmployees) FROM Account GROUP BY Industry];
        
        for (AggregateResult ar : groupedResults)  {
            System.debug(
                		 'Industry: ' + ar.get('Industry') + ' -->> ' 
                         + 'Average number of employees: ' + ar.get('expr0')+' , '
                         +'Sum Of Employees: '+ar.get('expr1')+' , '
                         +'Max Number Of Employees: '+ar.get('expr2'));
        }

    }
}