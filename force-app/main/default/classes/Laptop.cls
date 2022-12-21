public virtual class Laptop{
    public void laptopMethod(){
        System.debug('Laptop Dell');
    }
    public void processor(){
        System.debug('i7 processor');
    }
    public void storage(){
        System.debug('512 GB SSD');
    }
    public void graphicCard(){
        System.debug('Intel Iris Xe Graphic');
    }
    public void sum(Integer a, Integer b){ 
        System.debug('Sum: '+(a+b));
    }
    public void sum(Decimal a, Decimal b){
        System.debug('Sum:' +(a+b));
    }
}