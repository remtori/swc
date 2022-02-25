function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
// @noEmit: true
// @allowJs: true
// @checkJs: true
// @strict: true
// @noImplicitThis: false
// @Filename: a.js
/** @param {number} x */ function C(x) {
    this.x = x;
}
C.prototype.m = function() {
    this.y = 12;
};
var c = new C(1);
c.x = undefined // should error
;
c.y = undefined // ok
;
/** @param {number} x */ function A(x) {
    if (!_instanceof(this, A)) {
        return new A(x);
    }
    this.x = x;
}
var k = A(1);
var j = new A(2);
k.x === j.x;
