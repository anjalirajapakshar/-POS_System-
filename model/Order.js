export class item{

    constructor(code,name,qty,price) {
        this.code = code;
        this._name = name;
        this._qty = qty;
        this._price = price;
    }
    get code(){
        return "ID_" + this._code;
    }
    get name(){
        return"Description_" + this._name;
    }
    get qty(){
        return"Quantity_" + this._qty;
    }
    get price(){
        return"Unit-Price_" + this._price;
    }

    set code(code){
        this._code=code;
    }
    set name(name){
        this._name=name ;
    }

    set qty(qty){
        this._qty=qty ;
    }
    set price(price){
        this._price=price ;
    }
}