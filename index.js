//parth 2
var calculator = {
    read : function ( x, y ) {
        x = prompt(),
        y = prompt();
        return (x, y)
    },
    sum : function ( x, y ) {
          this.x + this.y 
    }
};

calculator.read();
console.log(calculator.sum());

//parth 3
// var user = {
//     name : "Tom"
// };

// function format(beginMsg, endMsg) {
//     console.log(beginMsg + this.name + endMsg);
// }

// var tomFormat = 


//electricKettle

class electricKettle ( _status ) {
    this._status = true; // true - включен, false - выключен
    this._capState = false; // крышка закрыта, true - открыта

}

electricKettle.prototype.openCap = function () {
    this._capState = true;
    console.log("Крышка открыта")
};

electricKettle.prototype.closeCap = function () {
    this._capState = false;
    console.log("Крышка закрыта")
};

electricKettle.prototype.getCapState = function () {
    return this._capState ? "open" : "close";
};

