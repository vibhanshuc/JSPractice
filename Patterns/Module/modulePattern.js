var myNS = myNS || {};

myNS.ModulePatternCalculator = function(eq) {  // uppercase C to denote it is Constructor
    'use strict';

    // pvt members and functions
    var eqCtl = document.getElementById(eq);


    //public members and functions
    return {   // return an object literal
        add: function (x, y) {
            eqCtl.innerHTML = x + y;
        }
    };
};
