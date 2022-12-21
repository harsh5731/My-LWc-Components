public virtual class Car{
    public void carMethod() { 
        System.debug('Car - Audi');
    }
    public void engine(){
        System.debug('Engine-5500 CC');
    }
    public void BodyType(){ 
        System.debug('Body Type - Sedan');
    }
    public void Mileage(){ 
        System.debug('Mileage - 15.32');
    }
    public void price(Integer a, Integer b){ 
        System.debug('Price: '+(a+b));
    } 
    public void price (Decimal a, Decimal b){
        System.debug('Price: '+(a+b));
    }
    }