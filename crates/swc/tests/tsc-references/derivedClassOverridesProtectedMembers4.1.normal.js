//// [derivedClassOverridesProtectedMembers4.ts]
import { _ as _call_super } from "@swc/helpers/_/_call_super";
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
var x;
var y;
var Base = function Base() {
    "use strict";
    _class_call_check(this, Base);
};
var Derived1 = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived1, Base);
    function Derived1() {
        _class_call_check(this, Derived1);
        return _call_super(this, Derived1, arguments);
    }
    return Derived1;
}(Base);
var Derived2 = /*#__PURE__*/ function(Derived1) {
    "use strict";
    _inherits(Derived2, Derived1);
    function Derived2() {
        _class_call_check(this, Derived2);
        return _call_super(this, Derived2, arguments);
    }
    return Derived2;
}(Derived1);
