export  class customer{

    constructor(id,name,address,contact) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._contact = contact;
    }

    get id(){
        return "ID_" + this._id;
    }
    get name(){
        return"Name_" + this._name;
    }
    get address(){
        return"Address_" + this._address;
    }
    get contact(){
        return"Contact" + this._contact;
    }
    set id(id){
        this._id=id * 100;
    }
    set name(name){
        this._name=name ;
    }
    set address(address){
        this._address=address ;
    }
    set contact(contact){
        this._contact=contact ;
    }

}