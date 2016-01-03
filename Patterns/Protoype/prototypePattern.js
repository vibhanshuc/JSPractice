var myNS = myNS || {};

myNS.PrototypePatternCalculator = function(eq) {
    'use strict';

    this.eqCtl = document.getElementById(eq);
};

// Calculator.prototype = {
//   add: function(x, y) {
//     var val = x + y;
//     this.eqCtl.innerHTML = val;
//   }
// }

myNS.PrototypePatternCalculator.prototype.add = function(x, y) {
    'use strict';

    this.eqCtl.innerHTML = x + y;
};