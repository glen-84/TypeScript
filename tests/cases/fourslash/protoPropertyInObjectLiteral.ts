/// <reference path='fourslash.ts' />

////var o1 = {
////    "__proto__": 10
////};
////var o2 = {
////    __proto__: 10
////};
////o1./*1*/
////o2./*2*/

goTo.marker('1');
verify.completionListContains("__proto__", '(property) "__proto__": number');
edit.insert("__proto__ = 10;");
goTo.marker('1');
verify.quickInfoIs('(property) "__proto__": number');
goTo.marker('2');
verify.completionListContains("__proto__", '(property) __proto__: number');
edit.insert("__proto__ = 10;");
goTo.marker('2');
verify.quickInfoIs('(property) __proto__: number');