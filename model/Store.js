export class item{

    constructor(code,name,quantity,price) {
        this._code = code;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }
    get code(){
        return "code_" + this._code;
    }
    get name(){
        return"name_" + this._name;
    }
    get qty(){
        return"quantity_" + this._quantity;
    }
    get price(){
        return"price_" + this._price;
    }

    set code(code){
        this._code=code;
    }
    set name(name){
        this._name=name ;
    }

    set quantity(quantity){
        this._quantity=quantity ;
    }
    set price(price){
        this._price=price ;
    }
}