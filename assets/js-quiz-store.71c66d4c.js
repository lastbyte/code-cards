import{n as z,Z as I,w as L,o as J,g as B,u as N,x as d,s as u,G as Y,$ as M,a0 as D,c as R,a1 as V,a2 as $}from"./index.941bf803.js";import{l as P,m as U,v as G,n as X}from"./QBtn.7cc78782.js";const K=[null,document,document.body,document.scrollingElement,document.documentElement];function ce(e,t){let n=U(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return K.includes(n)?window:n}function Z(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ee(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let _;function ue(){if(_!==void 0)return _;const e=document.createElement("p"),t=document.createElement("div");P(e,{width:"100%",height:"200px"}),P(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),_=n-o,_}function te(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function he(e,t,n){let o;function r(){o!==void 0&&(I.remove(o),o=void 0)}return z(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){o={condition:()=>n.value===!0,handler:t},I.add(o)}}}const pe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},de=["beforeShow","show","beforeHide","hide"];function me({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:r,processOnMount:m}){const i=B(),{props:s,emit:l,proxy:T}=i;let c;function C(a){e.value===!0?b(a):j(a)}function j(a){if(s.disable===!0||a!==void 0&&a.qAnchorHandled===!0||t!==void 0&&t(a)!==!0)return;const p=s["onUpdate:modelValue"]!==void 0;p===!0&&(l("update:modelValue",!0),c=a,N(()=>{c===a&&(c=void 0)})),(s.modelValue===null||p===!1)&&k(a)}function k(a){e.value!==!0&&(e.value=!0,l("beforeShow",a),o!==void 0?o(a):l("show",a))}function b(a){if(s.disable===!0)return;const p=s["onUpdate:modelValue"]!==void 0;p===!0&&(l("update:modelValue",!1),c=a,N(()=>{c===a&&(c=void 0)})),(s.modelValue===null||p===!1)&&W(a)}function W(a){e.value!==!1&&(e.value=!1,l("beforeHide",a),r!==void 0?r(a):l("hide",a))}function F(a){s.disable===!0&&a===!0?s["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):a===!0!==e.value&&(a===!0?k:W)(c)}L(()=>s.modelValue,F),n!==void 0&&G(i)===!0&&L(()=>T.$route.fullPath,()=>{n.value===!0&&e.value===!0&&b()}),m===!0&&J(()=>{F(s.modelValue)});const S={show:j,hide:b,toggle:C};return Object.assign(T,S),S}let f=0,w,v,y,x=!1,Q,E,H,h=null;function ne(e){oe(e)&&Y(e)}function oe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=M(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=n||o?e.deltaY:e.deltaX;for(let m=0;m<t.length;m++){const i=t[m];if(te(i,o))return o?r<0&&i.scrollTop===0?!0:r>0&&i.scrollTop+i.clientHeight===i.scrollHeight:r<0&&i.scrollLeft===0?!0:r>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function q(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function g(e){x!==!0&&(x=!0,requestAnimationFrame(()=>{x=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:o}=document.scrollingElement;(y===void 0||t!==window.innerHeight)&&(y=n-t,document.scrollingElement.scrollTop=o),o>y&&(document.scrollingElement.scrollTop-=Math.ceil((o-y)/8))}))}function A(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:r}=window.getComputedStyle(t);w=ee(window),v=Z(window),Q=t.style.left,E=t.style.top,H=window.location.href,t.style.left=`-${w}px`,t.style.top=`-${v}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,d.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",g,u.passiveCapture),window.visualViewport.addEventListener("scroll",g,u.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",q,u.passiveCapture))}d.is.desktop===!0&&d.is.mac===!0&&window[`${e}EventListener`]("wheel",ne,u.notPassive),e==="remove"&&(d.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",g,u.passiveCapture),window.visualViewport.removeEventListener("scroll",g,u.passiveCapture)):window.removeEventListener("scroll",q,u.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Q,t.style.top=E,window.location.href===H&&window.scrollTo(w,v),y=void 0)}function ae(e){let t="add";if(e===!0){if(f++,h!==null){clearTimeout(h),h=null;return}if(f>1)return}else{if(f===0||(f--,f>0))return;if(t="remove",d.is.ios===!0&&d.is.nativeMobile===!0){h!==null&&clearTimeout(h),h=setTimeout(()=>{A(t),h=null},100);return}}A(t)}function fe(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ae(t))}}}function ye(){let e=null;const t=B();function n(){e!==null&&(clearTimeout(e),e=null)}return D(n),z(n),{removeTimeout:n,registerTimeout(o,r){n(),X(t)===!1&&(e=setTimeout(o,r))}}}const _e={dark:{type:Boolean,default:null}};function ge(e,t){return R(()=>e.dark===null?t.dark.isActive:e.dark)}const O={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},re=Object.keys(O);O.all=!0;function be(e){const t={};for(const n of re)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?O:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const ie=["INPUT","TEXTAREA"];function we(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&ie.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function ve(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),V.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const xe=[{id:"1",code:`
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();`,title:"1. What's the output?",options:[{text:"`Lydia` and `undefined`",correct:!1,__typename:"Option"},{text:"`Lydia` and `ReferenceError`",correct:!1,__typename:"Option"},{text:"`ReferenceError` and `21`",correct:!1,__typename:"Option"},{text:"`undefined` and `ReferenceError`",correct:!0,__typename:"Option"}],explanation:"Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.",__typename:"Question"},{id:"2",code:`
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}`,title:"2. What's the output?",options:[{text:"`0 1 2` and `0 1 2`",correct:!1,__typename:"Option"},{text:"`0 1 2` and `3 3 3`",correct:!1,__typename:"Option"},{text:"`3 3 3` and `0 1 2`",correct:!0,__typename:"Option"}],explanation:"Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.",__typename:"Question"},{id:"3",code:`
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());`,title:"3. What's the output?",options:[{text:"`20` and `62.83185307179586`",correct:!1,__typename:"Option"},{text:"`20` and `NaN`",correct:!0,__typename:"Option"},{text:"`20` and `63`",correct:!1,__typename:"Option"},{text:"`NaN` and `63`",correct:!1,__typename:"Option"}],explanation:"Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.\n\nWith arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n\nThere is no value `radius` on that object, which returns `undefined`.",__typename:"Question"},{id:"4",code:`
+true;
!"Lydia";`,title:"4. What's the output?",options:[{text:"`1` and `false`",correct:!0,__typename:"Option"},{text:"`false` and `NaN`",correct:!1,__typename:"Option"},{text:"`false` and `false`",correct:!1,__typename:"Option"}],explanation:"The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.\n\nThe string `'Lydia'` is a truthy value. What we're actually asking, is \"is this truthy value falsy?\". This returns `false`.",__typename:"Question"},{id:"5",code:`
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};`,title:"5. Which one is true?",options:[{text:"`mouse.bird.size` is not valid",correct:!0,__typename:"Option"},{text:"`mouse[bird.size]` is not valid",correct:!1,__typename:"Option"},{text:'`mouse[bird["size"]]` is not valid',correct:!1,__typename:"Option"},{text:"All of them are valid",correct:!1,__typename:"Option"}],explanation:'In JavaScript, all object keys are strings (unless it\'s a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.\n\n`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`\n\nHowever, with dot notation, this doesn\'t happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we\'re actually asking `undefined.size`. This isn\'t valid, and will throw an error similar to `Cannot read property "size" of undefined`.',__typename:"Question"},{id:"6",code:`
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);`,title:"6. What's the output?",options:[{text:"`Hello`",correct:!0,__typename:"Option"},{text:"`Hey!`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!1,__typename:"Option"}],explanation:'In JavaScript, all objects interact by _reference_ when setting them equal to each other.\n\nFirst, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.\n\n<img src="https://i.imgur.com/ko5k0fs.png" width="200">\n\nWhen you change one object, you change all of them.',__typename:"Question"},{id:"7",code:`
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);`,title:"7. What's the output?",options:[{text:"`true` `false` `true`",correct:!1,__typename:"Option"},{text:"`false` `false` `true`",correct:!1,__typename:"Option"},{text:"`true` `false` `false`",correct:!0,__typename:"Option"},{text:"`false` `true` `true`",correct:!1,__typename:"Option"}],explanation:"`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n\nWhen we use the `==` operator, it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.\n\nHowever, when we use the `===` operator, both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`",__typename:"Question"},{id:"8",code:`
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));`,title:"8. What's the output?",options:[{text:"`orange`",correct:!1,__typename:"Option"},{text:"`purple`",correct:!1,__typename:"Option"},{text:"`green`",correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!0,__typename:"Option"}],explanation:"The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since `freddie` is a child, the function is not passed down, and not available on the `freddie` instance: a `TypeError` is thrown.",__typename:"Question"},{id:"9",code:`
let greeting;
greetign = {}; // Typo!
console.log(greetign);`,title:"9. What's the output?",options:[{text:"`{}`",correct:!0,__typename:"Option"},{text:"`ReferenceError: greetign is not defined`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:'It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as `global.greetign = {}` (or `window.greetign = {}` in a browser).\n\nIn order to avoid this, we can use `"use strict"`. This makes sure that you have declared a variable before setting it equal to anything.',__typename:"Question"},{id:"10",code:`
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";`,title:"10. What happens when we do this?",options:[{text:"Nothing, this is totally fine!",correct:!0,__typename:"Option"},{text:"`SyntaxError`. You cannot add properties to a function this way.",correct:!1,__typename:"Option"},{text:'`"Woof"` gets logged.',correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"}],explanation:`This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.`,__typename:"Question"},{id:"11",code:`
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
  return \`\${this.firstName} \${this.lastName}\`;
};

console.log(member.getFullName());`,title:"11. What's the output?",options:[{text:"`TypeError`",correct:!0,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"},{text:"`Lydia Hallie`",correct:!1,__typename:"Option"},{text:"`undefined` `undefined`",correct:!1,__typename:"Option"}],explanation:"You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,\n\n```js\nPerson.prototype.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n```\n\nwould have made `member.getFullName()` work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every `Person` instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!",__typename:"Question"},{id:"12",code:`
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);`,title:"12. What's the output?",options:[{text:'`Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`',correct:!0,__typename:"Option"},{text:'`Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`',correct:!1,__typename:"Option"},{text:'`Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`',correct:!1,__typename:"Option"},{text:'`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`',correct:!1,__typename:"Option"}],explanation:"For `sarah`, we didn't use the `new` keyword. When using `new`, it refers to the new empty object we create. However, if you don't add `new` it refers to the **global object**!\n\nWe said that `this.firstName` equals `\"Sarah\"` and `this.lastName` equals `\"Smith\"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.",__typename:"Question"},{id:"13",code:"",title:"13. What are the three phases of event propagation?",options:[{text:"Target > Capturing > Bubbling",correct:!1,__typename:"Option"},{text:"Bubbling > Target > Capturing",correct:!1,__typename:"Option"},{text:"Target > Bubbling > Capturing",correct:!1,__typename:"Option"},{text:"Capturing > Target > Bubbling",correct:!0,__typename:"Option"}],explanation:`During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.

<img src="https://i.imgur.com/N18oRgd.png" width="200">`,__typename:"Question"},{id:"14",code:"",title:"14. All object have prototypes.",options:[{text:"true",correct:!1,__typename:"Option"},{text:"false",correct:!0,__typename:"Option"}],explanation:"All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.",__typename:"Question"},{id:"15",code:`
function sum(a, b) {
  return a + b;
}

sum(1, "2");`,title:"15. What's the output?",options:[{text:"`NaN`",correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!1,__typename:"Option"},{text:'`"12"`',correct:!0,__typename:"Option"},{text:"`3`",correct:!1,__typename:"Option"}],explanation:'JavaScript is a **dynamically typed language**: we don\'t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.\n\nIn this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`\'2\'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what\'s happening here is `"1" + "2"` which returns `"12"`.',__typename:"Question"},{id:"16",code:`
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);`,title:"16. What's the output?",options:[{text:"`1` `1` `2`",correct:!1,__typename:"Option"},{text:"`1` `2` `2`",correct:!1,__typename:"Option"},{text:"`0` `2` `2`",correct:!0,__typename:"Option"},{text:"`0` `1` `2`",correct:!1,__typename:"Option"}],explanation:"The **postfix** unary operator `++`:\n\n1. Returns the value (this returns `0`)\n2. Increments the value (number is now `1`)\n\nThe **prefix** unary operator `++`:\n\n1. Increments the value (number is now `2`)\n2. Returns the value (this returns `2`)\n\nThis returns `0 2 2`.",__typename:"Question"},{id:"17",code:`
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo\`\${person} is \${age} years old\`;`,title:"17. What's the output?",options:[{text:'`"Lydia"` `21` `["", " is ", " years old"]`',correct:!1,__typename:"Option"},{text:'`["", " is ", " years old"]` `"Lydia"` `21`',correct:!0,__typename:"Option"},{text:'`"Lydia"` `["", " is ", " years old"]` `21`',correct:!1,__typename:"Option"}],explanation:"If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!",__typename:"Question"},{id:"18",code:`function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(\`Hmm.. You don't have an age I guess\`);
  }
}

checkAge({ age: 18 });`,title:"18. What's the output?",options:[{text:"`You are an adult!`",correct:!1,__typename:"Option"},{text:"`You are still an adult.`",correct:!1,__typename:"Option"},{text:"`Hmm.. You don't have an age I guess`",correct:!0,__typename:"Option"}],explanation:"When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.\n\nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n\nThis is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.",__typename:"Question"},{id:"19",code:`
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);`,title:"19. What's the output?",options:[{text:'`"number"`',correct:!1,__typename:"Option"},{text:'`"array"`',correct:!1,__typename:"Option"},{text:'`"object"`',correct:!0,__typename:"Option"},{text:'`"NaN"`',correct:!1,__typename:"Option"}],explanation:'The rest parameter (`...args`.) lets us "collect" all remaining arguments into an array. An array is an object, so `typeof args` returns `"object"`',__typename:"Question"},{id:"20",code:`
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();`,title:"20. What's the output?",options:[{text:"`21`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!0,__typename:"Option"},{text:"`TypeError`",correct:!1,__typename:"Option"}],explanation:'With `"use strict"`, you can make sure that you don\'t accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn\'t use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.',__typename:"Question"},{id:"21",code:`
const sum = eval("10*10+5");`,title:"21. What's value of `sum`?",options:[{text:"`105`",correct:!0,__typename:"Option"},{text:'`"105"`',correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!1,__typename:"Option"},{text:'`"10*10+5"`',correct:!1,__typename:"Option"}],explanation:"`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.",__typename:"Question"},{id:"22",code:`
sessionStorage.setItem("cool_secret", 123);`,title:"22. How long is cool_secret accessible?",options:[{text:"Forever, the data doesn't get lost.",correct:!1,__typename:"Option"},{text:"When the user closes the tab.",correct:!0,__typename:"Option"},{text:"When the user closes the entire browser, not only the tab.",correct:!1,__typename:"Option"},{text:"When the user shuts off their computer.",correct:!1,__typename:"Option"}],explanation:"The data stored in `sessionStorage` is removed after closing the _tab_.\n\nIf you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.",__typename:"Question"},{id:"23",code:`
var num = 8;
var num = 10;

console.log(num);`,title:"23. What's the output?",options:[{text:"`8`",correct:!1,__typename:"Option"},{text:"`10`",correct:!0,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"}],explanation:"With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n\nYou cannot do this with `let` or `const` since they're block-scoped.",__typename:"Question"},{id:"24",code:`
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);`,title:"24. What's the output?",options:[{text:"`false` `true` `false` `true`",correct:!1,__typename:"Option"},{text:"`false` `true` `true` `true`",correct:!1,__typename:"Option"},{text:"`true` `true` `false` `true`",correct:!0,__typename:"Option"},{text:"`true` `true` `true` `true`",correct:!1,__typename:"Option"}],explanation:"All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.\n\nIt doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.",__typename:"Question"},{id:"25",code:`
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);`,title:"25. What's the output?",options:[{text:'`{ a: "one", b: "two" }`',correct:!1,__typename:"Option"},{text:'`{ b: "two", a: "three" }`',correct:!1,__typename:"Option"},{text:'`{ a: "three", b: "two" }`',correct:!0,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"}],explanation:"If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.",__typename:"Question"},{id:"26",code:"",title:'26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.',options:[{text:"true",correct:!0,__typename:"Option"},{text:"false",correct:!1,__typename:"Option"},{text:"it depends",correct:!1,__typename:"Option"}],explanation:"The base execution context is the global execution context: it's what's accessible everywhere in your code.",__typename:"Question"},{id:"27",code:`
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}`,title:"27. What's the output?",options:[{text:"`1` `2`",correct:!1,__typename:"Option"},{text:"`1` `2` `3`",correct:!1,__typename:"Option"},{text:"`1` `2` `4`",correct:!0,__typename:"Option"},{text:"`1` `3` `4`",correct:!1,__typename:"Option"}],explanation:"The `continue` statement skips an iteration if a certain condition returns `true`.",__typename:"Question"},{id:"28",code:`
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();`,title:"28. What's the output?",options:[{text:'`"Just give Lydia pizza already!"`',correct:!0,__typename:"Option"},{text:"`TypeError: not a function`",correct:!1,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:"`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!",__typename:"Question"},{id:"29",code:`
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);`,title:"29. What's the output?",options:[{text:"`123`",correct:!1,__typename:"Option"},{text:"`456`",correct:!0,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"}],explanation:'Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.\n\nHowever, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["object Object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["object Object"] = 456`.\n\nThen, we log `a[b]`, which is actually `a["object Object"]`. We just set that to `456`, so it returns `456`.',__typename:"Question"},{id:"30",code:`
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();`,title:"30. What's the output?",options:[{text:"`First` `Second` `Third`",correct:!1,__typename:"Option"},{text:"`First` `Third` `Second`",correct:!0,__typename:"Option"},{text:"`Second` `First` `Third`",correct:!1,__typename:"Option"},{text:"`Second` `Third` `First`",correct:!1,__typename:"Option"}],explanation:`We have a \`setTimeout\` function and invoked it first. Yet, it was logged last.

This is because in browsers, we don't just have the runtime engine, we also have something called a \`WebAPI\`. The \`WebAPI\` gives us the \`setTimeout\` function to start with, and for example the DOM.

After the _callback_ is pushed to the WebAPI, the \`setTimeout\` function itself (but not the callback!) is popped off the stack.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Now, \`foo\` gets invoked, and \`"First"\` is being logged.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

\`foo\` is popped off the stack, and \`baz\` gets invoked. \`"Third"\` gets logged.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

The WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

This is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

\`bar\` gets invoked, \`"Second"\` gets logged, and it's popped off the stack.`,__typename:"Question"},{id:"31",code:`<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>`,title:"31. What is the event.target when clicking the button?",options:[{text:"Outer `div`",correct:!1,__typename:"Option"},{text:"Inner `div`",correct:!1,__typename:"Option"},{text:"`button`",correct:!0,__typename:"Option"},{text:"An array of all nested elements.",correct:!1,__typename:"Option"}],explanation:"The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`",__typename:"Question"},{id:"32",code:`<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>`,title:"32. When you click the paragraph, what's the logged output?",options:[{text:"`p` `div`",correct:!0,__typename:"Option"},{text:"`div` `p`",correct:!1,__typename:"Option"},{text:"`p`",correct:!1,__typename:"Option"},{text:"`div`",correct:!1,__typename:"Option"}],explanation:"If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.",__typename:"Question"},{id:"33",code:`
const person = { name: "Lydia" };

function sayHi(age) {
  return \`\${this.name} is \${age}\`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));`,title:"33. What's the output?",options:[{text:"`undefined is 21` `Lydia is 21`",correct:!1,__typename:"Option"},{text:"`function` `function`",correct:!1,__typename:"Option"},{text:"`Lydia is 21` `Lydia is 21`",correct:!1,__typename:"Option"},{text:"`Lydia is 21` `function`",correct:!0,__typename:"Option"}],explanation:"With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!\n\n`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.",__typename:"Question"},{id:"34",code:`
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());`,title:"34. What's the output?",options:[{text:'`"object"`',correct:!1,__typename:"Option"},{text:'`"number"`',correct:!0,__typename:"Option"},{text:'`"function"`',correct:!1,__typename:"Option"},{text:'`"undefined"`',correct:!1,__typename:"Option"}],explanation:'The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.\n\nFYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it\'s of type `"object"`.',__typename:"Question"},{id:"35",code:`
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;`,title:"35. Which of these values are falsy?",options:[{text:"`0`, `''`, `undefined`",correct:!0,__typename:"Option"},{text:"`0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`",correct:!1,__typename:"Option"},{text:"`0`, `''`, `new Boolean(false)`, `undefined`",correct:!1,__typename:"Option"},{text:"All of them are falsy",correct:!1,__typename:"Option"}],explanation:"There are only six falsy values:\n\n- `undefined`\n- `null`\n- `NaN`\n- `0`\n- `''` (empty string)\n- `false`\n\nFunction constructors, like `new Number` and `new Boolean` are truthy.",__typename:"Question"},{id:"36",code:`
console.log(typeof typeof 1);`,title:"36. What's the output?",options:[{text:'`"number"`',correct:!1,__typename:"Option"},{text:'`"string"`',correct:!0,__typename:"Option"},{text:'`"object"`',correct:!1,__typename:"Option"},{text:'`"undefined"`',correct:!1,__typename:"Option"}],explanation:'`typeof 1` returns `"number"`.\n`typeof "number"` returns `"string"`',__typename:"Question"},{id:"37",code:`
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);`,title:"37. What's the output?",options:[{text:"`[1, 2, 3, 7 x null, 11]`",correct:!1,__typename:"Option"},{text:"`[1, 2, 3, 11]`",correct:!1,__typename:"Option"},{text:"`[1, 2, 3, 7 x empty, 11]`",correct:!0,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"}],explanation:`When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of \`undefined\`, but you will see something like:

\`[1, 2, 3, 7 x empty, 11]\`

depending on where you run it (it's different for every browser, node, etc.)`,__typename:"Question"},{id:"38",code:`
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();`,title:"38. What's the output?",options:[{text:"`1` `undefined` `2`",correct:!0,__typename:"Option"},{text:"`undefined` `undefined` `undefined`",correct:!1,__typename:"Option"},{text:"`1` `1` `2`",correct:!1,__typename:"Option"},{text:"`1` `undefined` `undefined`",correct:!1,__typename:"Option"}],explanation:"The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.\n\nLater, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.\n\nOutside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.",__typename:"Question"},{id:"39",code:"",title:"39. Everything in JavaScript is either a...",options:[{text:"primitive or object",correct:!0,__typename:"Option"},{text:"function or object",correct:!1,__typename:"Option"},{text:"trick question! only objects",correct:!1,__typename:"Option"},{text:"number or object",correct:!1,__typename:"Option"}],explanation:"JavaScript only has primitive types and objects.\n\nPrimitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.\n\nWhat differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.",__typename:"Question"},{id:"40",code:`
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);`,title:"40. What's the output?",options:[{text:"`[0, 1, 2, 3, 1, 2]`",correct:!1,__typename:"Option"},{text:"`[6, 1, 2]`",correct:!1,__typename:"Option"},{text:"`[1, 2, 0, 1, 2, 3]`",correct:!0,__typename:"Option"},{text:"`[1, 2, 6]`",correct:!1,__typename:"Option"}],explanation:"`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.\n\nThen, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`",__typename:"Question"},{id:"41",code:`
!!null;
!!"";
!!1;`,title:"41. What's the output?",options:[{text:"`false` `true` `false`",correct:!1,__typename:"Option"},{text:"`false` `false` `true`",correct:!0,__typename:"Option"},{text:"`false` `true` `true`",correct:!1,__typename:"Option"},{text:"`true` `true` `false`",correct:!1,__typename:"Option"}],explanation:'`null` is falsy. `!null` returns `true`. `!true` returns `false`.\n\n`""` is falsy. `!""` returns `true`. `!true` returns `false`.\n\n`1` is truthy. `!1` returns `false`. `!false` returns `true`.',__typename:"Question"},{id:"42",code:`
setInterval(() => console.log("Hi"), 1000);`,title:"42. What does the `setInterval` method return in the browser?",options:[{text:"a unique id",correct:!0,__typename:"Option"},{text:"the amount of milliseconds specified",correct:!1,__typename:"Option"},{text:"the passed function",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:"It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.",__typename:"Question"},{id:"43",code:`
[..."Lydia"];`,title:"43. What does this return?",options:[{text:'`["L", "y", "d", "i", "a"]`',correct:!0,__typename:"Option"},{text:'`["Lydia"]`',correct:!1,__typename:"Option"},{text:'`[[], "Lydia"]`',correct:!1,__typename:"Option"},{text:'`[["L", "y", "d", "i", "a"]]`',correct:!1,__typename:"Option"}],explanation:"A string is an iterable. The spread operator maps every character of an iterable to one element.",__typename:"Question"},{id:"44",code:`
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);`,title:"44. What's the output?",options:[{text:"`[0, 10], [10, 20]`",correct:!1,__typename:"Option"},{text:"`20, 20`",correct:!1,__typename:"Option"},{text:"`10, 20`",correct:!0,__typename:"Option"},{text:"`0, 10 and 10, 20`",correct:!1,__typename:"Option"}],explanation:'Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn\u2019t _return_ the value, it _yields_ the value.\n\nFirst, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.\n\nThen, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.',__typename:"Question"},{id:"45",code:`
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));`,title:"45. What does this return?",options:[{text:'`"one"`',correct:!1,__typename:"Option"},{text:'`"two"`',correct:!0,__typename:"Option"},{text:'`"two" "one"`',correct:!1,__typename:"Option"},{text:'`"one" "two"`',correct:!1,__typename:"Option"}],explanation:"When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.",__typename:"Question"},{id:"46",code:`
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);`,title:"46. What's the output?",options:[{text:"`null`",correct:!1,__typename:"Option"},{text:"`[null]`",correct:!1,__typename:"Option"},{text:"`[{}]`",correct:!1,__typename:"Option"},{text:'`[{ name: "Lydia" }]`',correct:!0,__typename:"Option"}],explanation:'First, we declare a variable `person` with the value of an object that has a `name` property.\n\n<img src="https://i.imgur.com/TML1MbS.png" width="200">\n\nThen, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don\'t have the _same_ reference!)\n\n<img src="https://i.imgur.com/FSG5K3F.png" width="300">\n\nThen, we set the variable `person` equal to `null`.\n\n<img src="https://i.imgur.com/sYjcsMT.png" width="300">\n\nWe are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.',__typename:"Question"},{id:"47",code:`
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}`,title:"47. What's the output?",options:[{text:'`{ name: "Lydia" }, { age: 21 }`',correct:!1,__typename:"Option"},{text:'`"name", "age"`',correct:!0,__typename:"Option"},{text:'`"Lydia", 21`',correct:!1,__typename:"Option"},{text:'`["name", "Lydia"], ["age", 21]`',correct:!1,__typename:"Option"}],explanation:"With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it\u2019s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.",__typename:"Question"},{id:"48",code:`
console.log(3 + 4 + "5");`,title:"48. What's the output?",options:[{text:'`"345"`',correct:!1,__typename:"Option"},{text:'`"75"`',correct:!0,__typename:"Option"},{text:"`12`",correct:!1,__typename:"Option"},{text:'`"12"`',correct:!1,__typename:"Option"}],explanation:'Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.\n\n`3 + 4` gets evaluated first. This results in the number `7`.\n\n`7 + \'5\'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.',__typename:"Question"},{id:"49",code:`
const num = parseInt("7*6", 10);`,title:"49. What's the value of `num`?",options:[{text:"`42`",correct:!1,__typename:"Option"},{text:'`"42"`',correct:!1,__typename:"Option"},{text:"`7`",correct:!0,__typename:"Option"},{text:"`NaN`",correct:!1,__typename:"Option"}],explanation:'Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn\'t a valid number in the radix, it stops parsing and ignores the following characters.\n\n`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.',__typename:"Question"},{id:"50",code:`
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});`,title:"50. What's the output`?",options:[{text:"`[]`",correct:!1,__typename:"Option"},{text:"`[null, null, null]`",correct:!1,__typename:"Option"},{text:"`[undefined, undefined, undefined]`",correct:!0,__typename:"Option"},{text:"`[ 3 x empty ]`",correct:!1,__typename:"Option"}],explanation:'When mapping over the array, the value of `num` is equal to the element it\u2019s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.\n\nHowever, we don\u2019t return a value. When we don\u2019t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.',__typename:"Question"},{id:"51",code:`
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);`,title:"51. What's the output?",options:[{text:'`{ name: "Lydia" }, "1997"`',correct:!0,__typename:"Option"},{text:'`{ name: "Sarah" }, "1998"`',correct:!1,__typename:"Option"},{text:'`{ name: "Lydia" }, "1998"`',correct:!1,__typename:"Option"},{text:'`{ name: "Sarah" }, "1997"`',correct:!1,__typename:"Option"}],explanation:'Arguments are passed by _value_, unless their value is an object, then they\'re passed by _reference_. `birthYear` is passed by value, since it\'s a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).\n\nThe variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it\'s not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.\n\nThe value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`\'s `name` property is now equal to the value `"Lydia"`',__typename:"Question"},{id:"52",code:`
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();`,title:"52. What's the output?",options:[{text:"`It worked! Hello world!`",correct:!1,__typename:"Option"},{text:"`Oh no an error: undefined`",correct:!1,__typename:"Option"},{text:"`SyntaxError: can only throw Error objects`",correct:!1,__typename:"Option"},{text:"`Oh no an error: Hello world!`",correct:!0,__typename:"Option"}],explanation:"With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`.\n\nWith the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`.",__typename:"Question"},{id:"53",code:`
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);`,title:"53. What's the output?",options:[{text:'`"Lamborghini"`',correct:!1,__typename:"Option"},{text:'`"Maserati"`',correct:!0,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!1,__typename:"Option"}],explanation:'When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `"Maserati"`, so `myCar.make` is equal to `"Maserati"`.',__typename:"Question"},{id:"54",code:`
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);`,title:"54. What's the output?",options:[{text:'`"undefined", "number"`',correct:!0,__typename:"Option"},{text:'`"number", "number"`',correct:!1,__typename:"Option"},{text:'`"object", "number"`',correct:!1,__typename:"Option"},{text:'`"number", "undefined"`',correct:!1,__typename:"Option"}],explanation:'`let x = y = 10;` is actually shorthand for:\n\n```javascript\ny = 10;\nlet x = y;\n```\n\nWhen we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.\n\nThen, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they\'re declared in; the immediately-invoked function (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it\'s declared in. This means that `x` is not defined. Values who haven\'t been assigned a value or declared are of type `"undefined"`. `console.log(typeof x)` returns `"undefined"`.\n\nHowever, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `"number"`. `console.log(typeof y)` returns `"number"`.',__typename:"Question"},{id:"55",code:`
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(\`Woof I am \${this.name}\`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();`,title:"55. What's the output?",options:[{text:'`"Woof I am Mara"`, `TypeError`',correct:!0,__typename:"Option"},{text:'`"Woof I am Mara"`, `"Woof I am Mara"`',correct:!1,__typename:"Option"},{text:'`"Woof I am Mara"`, `undefined`',correct:!1,__typename:"Option"},{text:"`TypeError`, `TypeError`",correct:!1,__typename:"Option"}],explanation:"We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.\n\nWhen we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.",__typename:"Question"},{id:"56",code:`
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);`,title:"56. What's the output?",options:[{text:"`[1, 1, 2, 3, 4]`",correct:!1,__typename:"Option"},{text:"`[1, 2, 3, 4]`",correct:!1,__typename:"Option"},{text:"`{1, 1, 2, 3, 4}`",correct:!1,__typename:"Option"},{text:"`{1, 2, 3, 4}`",correct:!0,__typename:"Option"}],explanation:"The `Set` object is a collection of _unique_ values: a value can only occur once in a set.\n\nWe passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.",__typename:"Question"},{id:"57",code:`
// counter.js
let counter = 10;
export default counter;`,title:"57. What's the output?",options:[{text:"`10`",correct:!1,__typename:"Option"},{text:"`11`",correct:!1,__typename:"Option"},{text:"`Error`",correct:!0,__typename:"Option"},{text:"`NaN`",correct:!1,__typename:"Option"}],explanation:"An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.\n\nWhen we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.",__typename:"Question"},{id:"58",code:`
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);`,title:"58. What's the output?",options:[{text:"`false`, `true`",correct:!0,__typename:"Option"},{text:'`"Lydia"`, `21`',correct:!1,__typename:"Option"},{text:"`true`, `true`",correct:!1,__typename:"Option"},{text:"`undefined`, `undefined`",correct:!1,__typename:"Option"}],explanation:"The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.\n\nThe `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.",__typename:"Question"},{id:"59",code:`
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);`,title:"59. What's the output?",options:[{text:"`[[1, 2, 3, 4, 5]]`",correct:!1,__typename:"Option"},{text:"`[1, 2, 3, 4, 5]`",correct:!1,__typename:"Option"},{text:"`1`",correct:!0,__typename:"Option"},{text:"`[1]`",correct:!1,__typename:"Option"}],explanation:'We can unpack values from arrays or properties from objects through destructuring. For example:\n\n```javascript\n[a, b] = [1, 2];\n```\n\n<img src="https://i.imgur.com/ADFpVop.png" width="200">\n\nThe value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:\n\n```javascript\n[y] = [1, 2, 3, 4, 5];\n```\n\n<img src="https://i.imgur.com/NzGkMNk.png" width="200">\n\nThis means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.',__typename:"Question"},{id:"60",code:`
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);`,title:"60. What's the output?",options:[{text:'`{ admin: true, user: { name: "Lydia", age: 21 } }`',correct:!1,__typename:"Option"},{text:'`{ admin: true, name: "Lydia", age: 21 }`',correct:!0,__typename:"Option"},{text:'`{ admin: true, user: ["Lydia", 21] }`',correct:!1,__typename:"Option"},{text:"`{ admin: true }`",correct:!1,__typename:"Option"}],explanation:'It\'s possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: "Lydia", age: 21 }`.',__typename:"Question"},{id:"61",code:`
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));`,title:"61. What's the output?",options:[{text:'`{ name: "Lydia", age: 21 }`, `["name", "age"]`',correct:!1,__typename:"Option"},{text:'`{ name: "Lydia", age: 21 }`, `["name"]`',correct:!0,__typename:"Option"},{text:'`{ name: "Lydia"}`, `["name", "age"]`',correct:!1,__typename:"Option"},{text:'`{ name: "Lydia"}`, `["age"]`',correct:!1,__typename:"Option"}],explanation:'With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.\n\nProperties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you\'re adding to an object.',__typename:"Question"},{id:"62",code:`
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);`,title:"62. What's the output?",options:[{text:'`"{"level":19, "health":90}"`',correct:!0,__typename:"Option"},{text:'`"{"username": "lydiahallie"}"`',correct:!1,__typename:"Option"},{text:'`"["level", "health"]"`',correct:!1,__typename:"Option"},{text:'`"{"username": "lydiahallie", "level":19, "health":90}"`',correct:!1,__typename:"Option"}],explanation:'The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.\n\nIf the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.\n\nIf the replacer is a _function_, this function gets called on every property in the object you\'re stringifying. The value returned from this function will be the value of the property when it\'s added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.',__typename:"Question"},{id:"63",code:`
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);`,title:"63. What's the output?",options:[{text:"`10`, `10`",correct:!0,__typename:"Option"},{text:"`10`, `11`",correct:!1,__typename:"Option"},{text:"`11`, `11`",correct:!1,__typename:"Option"},{text:"`11`, `12`",correct:!1,__typename:"Option"}],explanation:"The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.\n\n`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.",__typename:"Question"},{id:"64",code:`
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);`,title:"64. What's the output?",options:[{text:"`20`, `40`, `80`, `160`",correct:!1,__typename:"Option"},{text:"`20`, `40`, `20`, `40`",correct:!1,__typename:"Option"},{text:"`20`, `20`, `20`, `40`",correct:!0,__typename:"Option"},{text:"`NaN`, `NaN`, `20`, `40`",correct:!1,__typename:"Option"}],explanation:'In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.\n\nThe default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.\n\nThe third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`. \n\nThe fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.',__typename:"Question"},{id:"65",code:`
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));`,title:"65. What's the output?",options:[{text:"`1` `2` and `3` `3` and `6` `4`",correct:!1,__typename:"Option"},{text:"`1` `2` and `2` `3` and `3` `4`",correct:!1,__typename:"Option"},{text:"`1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`",correct:!1,__typename:"Option"},{text:"`1` `2` and `undefined` `3` and `undefined` `4`",correct:!0,__typename:"Option"}],explanation:"The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value. \n\nIn this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.\n\nThe value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.\n\nOn the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.  \n\nIf you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged. \n\nOn the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.",__typename:"Question"},{id:"66",code:`
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1 
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4 
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};`,title:"66. With which constructor can we successfully extend the `Dog` class?",options:[{text:"1",correct:!1,__typename:"Option"},{text:"2",correct:!0,__typename:"Option"},{text:"3",correct:!1,__typename:"Option"},{text:"4",correct:!1,__typename:"Option"}],explanation:"In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.\n\nWith the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`. \n\nThe `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly  using constructor 2.",__typename:"Question"},{id:"67",code:`// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;`,title:"67. What's the output?",options:[{text:"`running index.js`, `running sum.js`, `3`",correct:!1,__typename:"Option"},{text:"`running sum.js`, `running index.js`, `3`",correct:!0,__typename:"Option"},{text:"`running sum.js`, `3`, `running index.js`",correct:!1,__typename:"Option"},{text:"`running index.js`, `undefined`, `running sum.js`",correct:!1,__typename:"Option"}],explanation:"With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.\n\nThis is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console.",__typename:"Question"},{id:"68",code:`console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))`,title:"68. What's the output?",options:[{text:"`true`, `true`, `false`",correct:!0,__typename:"Option"},{text:"`false`, `true`, `false`",correct:!1,__typename:"Option"},{text:"`true`, `false`, `true`",correct:!1,__typename:"Option"},{text:"`true`, `true`, `true`",correct:!1,__typename:"Option"}],explanation:"Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.",__typename:"Question"},{id:"69",code:`
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))`,title:"69. What's the output?",options:[{text:'`"Lydia Hallie"`, `"Lydia Hallie"`',correct:!1,__typename:"Option"},{text:'`"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)',correct:!1,__typename:"Option"},{text:'`" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)',correct:!0,__typename:"Option"},{text:'`"Lydia Hallie"`, `"Lyd"`,',correct:!1,__typename:"Option"}],explanation:'With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `"Lydia Hallie"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.\n\nIf the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.',__typename:"Question"},{id:"70",code:`
console.log("\u{1F951}" + "\u{1F4BB}");`,title:"70. What's the output?",options:[{text:'`"\u{1F951}\u{1F4BB}"`',correct:!0,__typename:"Option"},{text:"`257548`",correct:!1,__typename:"Option"},{text:"A string containing their code points",correct:!1,__typename:"Option"},{text:"Error",correct:!1,__typename:"Option"}],explanation:'With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `"\u{1F951}"` with the string `"\u{1F4BB}"`, resulting in `"\u{1F951}\u{1F4BB}"`.',__typename:"Question"},{id:"71",code:`function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back \u2764\uFE0F";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back \u2764\uFE0F`,title:"71. How can we log the values that are commented out after the console.log statement?",options:[{text:'`game.next("Yes").value` and `game.next().value`',correct:!1,__typename:"Option"},{text:'`game.next.value("Yes")` and `game.next.value()`',correct:!1,__typename:"Option"},{text:'`game.next().value` and `game.next("Yes").value`',correct:!0,__typename:"Option"},{text:'`game.next.value()` and `game.next.value("Yes")`',correct:!1,__typename:"Option"}],explanation:'A generator function "pauses" its execution when it sees the `yield` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling `game.next().value`.\n\nEvery line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_\n\nWhen we call `game.next("Yes").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `"Yes"` in this case. The value of the variable `answer` is now equal to `"Yes"`. The condition of the if-statement returns `false`, and `JavaScript loves you back \u2764\uFE0F` gets logged.',__typename:"Question"},{id:"72",code:"\nconsole.log(String.raw`Hello\\nworld`);",title:"72. What's the output?",options:[{text:"`Hello world!`",correct:!1,__typename:"Option"},{text:"`Hello` <br />&nbsp; &nbsp; &nbsp;`world`",correct:!1,__typename:"Option"},{text:"`Hello\\nworld`",correct:!0,__typename:"Option"},{text:"`Hello\\n` <br /> &nbsp; &nbsp; &nbsp;`world`",correct:!1,__typename:"Option"}],explanation:'`String.raw` returns a string where the escapes (`\\n`, `\\v`, `\\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:\n\n`` const path = `C:\\Documents\\Projects\\table.html` ``\n\nWhich would result in:\n\n`"C:DocumentsProjects able.html"`\n\nWith `String.raw`, it would simply ignore the escape and print:\n\n`C:\\Documents\\Projects\\table.html`\n\nIn this case, the string is `Hello\\nworld`, which gets logged.',__typename:"Question"},{id:"73",code:`
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);`,title:"73. What's the output?",options:[{text:'`"I made it!"`',correct:!1,__typename:"Option"},{text:'`Promise {<resolved>: "I made it!"}`',correct:!1,__typename:"Option"},{text:"`Promise {<pending>}`",correct:!0,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:'An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.\n\nIf we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:\n\n`data.then(res => console.log(res))`\n\nThis would\'ve logged `"I made it!"`',__typename:"Question"},{id:"74",code:`
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);`,title:"74. What's the output?",options:[{text:"`['apple', 'banana']`",correct:!1,__typename:"Option"},{text:"`2`",correct:!0,__typename:"Option"},{text:"`true`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:'The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `"banana"`) and had a length of `1`. After adding the string `"apple"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.\n\nThe `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.',__typename:"Question"},{id:"75",code:`
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);`,title:"75. What's the output?",options:[{text:"`{ x: 100, y: 20 }`",correct:!1,__typename:"Option"},{text:"`{ x: 10, y: 20 }`",correct:!0,__typename:"Option"},{text:"`{ x: 100 }`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"}],explanation:"`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).\n\nWhen we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object.\n\nSince `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.",__typename:"Question"},{id:"76",code:`
const { name: myName } = { name: "Lydia" };

console.log(name);`,title:"76. What's the output?",options:[{text:'`"Lydia"`',correct:!1,__typename:"Option"},{text:'`"myName"`',correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!0,__typename:"Option"}],explanation:'When we unpack the property `name` from the object on the right-hand side, we assign its value `"Lydia"` to a variable with the name `myName`.\n\nWith `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.\n\nSince we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.',__typename:"Question"},{id:"77",code:`
function sum(a, b) {
  return a + b;
}`,title:"77. Is this a pure function?",options:[{text:"Yes",correct:!0,__typename:"Option"},{text:"No",correct:!1,__typename:"Option"}],explanation:"A pure function is a function that _always_ returns the same result, if the same arguments are passed.\n\nThe `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.",__typename:"Question"},{id:"78",code:`
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return \`From cache! \${cache[num]}\`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return \`Calculated! \${result}\`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));`,title:"78. What is the output?",options:[{text:"`Calculated! 20` `Calculated! 20` `Calculated! 20`",correct:!1,__typename:"Option"},{text:"`Calculated! 20` `From cache! 20` `Calculated! 20`",correct:!1,__typename:"Option"},{text:"`Calculated! 20` `From cache! 20` `From cache! 20`",correct:!0,__typename:"Option"},{text:"`Calculated! 20` `From cache! 20` `Error`",correct:!1,__typename:"Option"}],explanation:"The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.\n\nIf we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.\n\nWe call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.\n\nThe second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.\n\nThe third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.",__typename:"Question"},{id:"79",code:`
const myLifeSummedUp = ["\u2615", "\u{1F4BB}", "\u{1F377}", "\u{1F36B}"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}`,title:"79. What is the output?",options:[{text:'`0` `1` `2` `3` and `"\u2615"` ` "\u{1F4BB}"` `"\u{1F377}"` `"\u{1F36B}"`',correct:!0,__typename:"Option"},{text:'`"\u2615"` ` "\u{1F4BB}"` `"\u{1F377}"` `"\u{1F36B}"` and `"\u2615"` ` "\u{1F4BB}"` `"\u{1F377}"` `"\u{1F36B}"`',correct:!1,__typename:"Option"},{text:'`"\u2615"` ` "\u{1F4BB}"` `"\u{1F377}"` `"\u{1F36B}"` and `0` `1` `2` `3`',correct:!1,__typename:"Option"},{text:'`0` `1` `2` `3` and `{0: "\u2615", 1: "\u{1F4BB}", 2: "\u{1F377}", 3: "\u{1F36B}"}`',correct:!1,__typename:"Option"}],explanation:'With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:\n\n`{0: "\u2615", 1: "\u{1F4BB}", 2: "\u{1F377}", 3: "\u{1F36B}"}`\n\nWhere the keys are the enumerable properties. `0` `1` `2` `3` get logged.\n\nWith a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it\'s currently iterating over, `"\u2615"` ` "\u{1F4BB}"` `"\u{1F377}"` `"\u{1F36B}"` get logged.',__typename:"Question"},{id:"80",code:`
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)`,title:"80. What is the output?",options:[{text:'`["1 + 2", "1 * 2", "1 / 2"]`',correct:!1,__typename:"Option"},{text:'`["12", 2, 0.5]`',correct:!1,__typename:"Option"},{text:"`[3, 2, 0.5]`",correct:!0,__typename:"Option"},{text:"`[1, 1, 1]`",correct:!1,__typename:"Option"}],explanation:"Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.\n\nThe element will be equal to the returned value.  `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.",__typename:"Question"},{id:"81",code:`
function sayHi(name) {
  return \`Hi there, \${name}\`
}

console.log(sayHi())`,title:"81. What is the output?",options:[{text:"`Hi there, `",correct:!1,__typename:"Option"},{text:"`Hi there, undefined`",correct:!0,__typename:"Option"},{text:"`Hi there, null`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"}],explanation:"By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.\n\nIn ES6, we can overwrite this default `undefined` value with default parameters. For example:\n\n`function sayHi(name = \"Lydia\") { ... }`\n\nIn this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`",__typename:"Question"},{id:"82",code:`
var status = "\u{1F60E}"

setTimeout(() => {
  const status = "\u{1F60D}"

  const data = {
    status: "\u{1F951}",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)`,title:"82. What is the output?",options:[{text:'`"\u{1F951}"` and `"\u{1F60D}"`',correct:!1,__typename:"Option"},{text:'`"\u{1F951}"` and `"\u{1F60E}"`',correct:!0,__typename:"Option"},{text:'`"\u{1F60D}"` and `"\u{1F60E}"`',correct:!1,__typename:"Option"},{text:'`"\u{1F60E}"` and `"\u{1F60E}"`',correct:!1,__typename:"Option"}],explanation:'The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `"\u{1F951}"`.\n\nWith the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `"\u{1F60E}"`. When logging `this.status`, `"\u{1F60E}"` gets logged.',__typename:"Question"},{id:"83",code:`
const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)`,title:"83. What is the output?",options:[{text:'`{ name: "Lydia", age: 21 }`',correct:!0,__typename:"Option"},{text:'`{ name: "Lydia", age: 21, city: "Amsterdam" }`',correct:!1,__typename:"Option"},{text:'`{ name: "Lydia", age: 21, city: undefined }`',correct:!1,__typename:"Option"},{text:'`"Amsterdam"`',correct:!1,__typename:"Option"}],explanation:'We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`. \n\nNote that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.\n\nThen, we set `city` equal to the string `"Amsterdam"`. This doesn\'t change the person object: there is no reference to that object.\n\nWhen logging the `person` object, the unmodified object gets returned.',__typename:"Question"},{id:"84",code:`function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))`,title:"84. What is the output?",options:[{text:'`"Sorry, you\'re too young."`',correct:!1,__typename:"Option"},{text:'`"Yay! You\'re old enough!"`',correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!0,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:"Variables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.",__typename:"Question"},{id:"85",code:`fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))`,title:"85. What kind of information would get logged?",options:[{text:"The result of the `fetch` method.",correct:!1,__typename:"Option"},{text:"The result of the second invocation of the `fetch` method.",correct:!1,__typename:"Option"},{text:"The result of the callback in the previous `.then()`.",correct:!0,__typename:"Option"},{text:"It would always be undefined.",correct:!1,__typename:"Option"}],explanation:"The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.",__typename:"Question"},{id:"86",code:`
function getName(name) {
  const hasName = //
}`,title:"86. Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?",options:[{text:"`!!name`",correct:!0,__typename:"Option"},{text:"`name`",correct:!1,__typename:"Option"},{text:"`new Boolean(name)`",correct:!1,__typename:"Option"},{text:"`name.length`",correct:!1,__typename:"Option"}],explanation:"With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.\n\nBy setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.\n\n`new Boolean(true)` returns an object wrapper, not the boolean value itself.\n\n`name.length` returns the length of the passed argument, not whether it's `true`.",__typename:"Question"},{id:"87",code:`
console.log("I want pizza"[0])`,title:"87. What's the output?",options:[{text:'`"""`',correct:!1,__typename:"Option"},{text:'`"I"`',correct:!0,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:"In order to get an character on a specific index in a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case we want to get the element which index is 0, the character `\"I'`, which gets logged.\n\nNote that this method is not supported in IE7 and below. In that case, use `.charAt()`",__typename:"Question"},{id:"88",code:`
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)`,title:"88. What's the output?",options:[{text:"`NaN`",correct:!1,__typename:"Option"},{text:"`20`",correct:!0,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:"You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`.  `num1 + num2` returns `20`.\n\nIf you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error.",__typename:"Question"},{id:"89",code:`
// module.js 
export default () => "Hello world"
export const name = "Lydia"

// index.js 
import * as data from "./module"

console.log(data)`,title:"89. What's the output?",options:[{text:'`{ default: function default(), name: "Lydia" }`',correct:!0,__typename:"Option"},{text:"`{ default: function default() }`",correct:!1,__typename:"Option"},{text:'`{ default: "Hello world", name: "Lydia" }`',correct:!1,__typename:"Option"},{text:"Global object of `module.js`",correct:!1,__typename:"Option"}],explanation:'With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `"Hello World"`, and the named export is a variable called `name` which has the value of the string `"Lydia"`. \n\nThe `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.',__typename:"Question"},{id:"90",code:`
class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person("John")
console.log(typeof member)`,title:"90. What's the output?",options:[{text:'`"class"`',correct:!1,__typename:"Option"},{text:'`"function"`',correct:!1,__typename:"Option"},{text:'`"object"`',correct:!0,__typename:"Option"},{text:'`"string"`',correct:!1,__typename:"Option"}],explanation:'Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:\n\n```javascript\nfunction Person() {\n  this.name = name\n}\n```\n\nCalling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.',__typename:"Question"},{id:"91",code:`
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))`,title:"91. What's the output?",options:[{text:"`[1, 2, 3, 4, 5]`",correct:!1,__typename:"Option"},{text:"`[1, 2, 3, 5]`",correct:!1,__typename:"Option"},{text:"`[1, 2, 3, 4]`",correct:!1,__typename:"Option"},{text:"`Error`",correct:!0,__typename:"Option"}],explanation:"The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`. \n\nThen, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.",__typename:"Question"},{id:"92",code:`function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)`,title:"92. What's the output?",options:[{text:"`{ constructor: ...}` `{ constructor: ...}`",correct:!1,__typename:"Option"},{text:"`{}` `{ constructor: ...}`",correct:!1,__typename:"Option"},{text:"`{ constructor: ...}` `{}`",correct:!1,__typename:"Option"},{text:"`{ constructor: ...}` `undefined`",correct:!0,__typename:"Option"}],explanation:"Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.",__typename:"Question"},{id:"93",code:`
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}`,title:"93. What's the output?",options:[{text:"`name` `Lydia` and `age` `21`",correct:!0,__typename:"Option"},{text:'`["name", "Lydia"]` and `["age", 21]`',correct:!1,__typename:"Option"},{text:'`["name", "age"]` and `undefined`',correct:!1,__typename:"Option"},{text:"`Error`",correct:!1,__typename:"Option"}],explanation:'`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:\n\n`[ [ \'name\', \'Lydia\' ], [ \'age\', 21 ] ]` \n\nUsing the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray. \n\nThe first subarray is `[ "name", "Lydia" ]`, with `x` equal to `"name"`, and `y` equal to `"Lydia"`, which get logged.\nThe second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, and `y` equal to `21`, which get logged.',__typename:"Question"},{id:"94",code:`
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")`,title:"94. What's the output?",options:[{text:'`["banana", "apple", "pear", "orange"]`',correct:!1,__typename:"Option"},{text:'`[["banana", "apple"], "pear", "orange"]`',correct:!1,__typename:"Option"},{text:'`["banana", "apple", ["pear"], "orange"]`',correct:!1,__typename:"Option"},{text:"`SyntaxError`",correct:!0,__typename:"Option"}],explanation:`\`...args\` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error. 

\`\`\`javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
\`\`\`

The above example works. This returns the array \`[ 'banana', 'apple', 'orange', 'pear' ]\``,__typename:"Question"},{id:"95",code:`function nums(a, b) {
  if
  (a > b)
  console.log('a is bigger')
  else 
  console.log('b is bigger')
  return 
  a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))`,title:"95. What's the output?",options:[{text:"`a is bigger`, `6` and `b is bigger`, `3`",correct:!1,__typename:"Option"},{text:"`a is bigger`, `undefined` and `b is bigger`, `undefined`",correct:!0,__typename:"Option"},{text:"`undefined` and `undefined`",correct:!1,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"}],explanation:"In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc. \n\nHere, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:\n\n```javascript\n  return;\n  a + b\n```\n\nThis means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!",__typename:"Question"},{id:"96",code:`
class Person {
  constructor() {
    this.name = "Lydia"
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah"
  }
}

const member = new Person()
console.log(member.name)`,title:"96. What's the output?",options:[{text:'`"Lydia"`',correct:!1,__typename:"Option"},{text:'`"Sarah"`',correct:!0,__typename:"Option"},{text:"`Error: cannot redeclare Person`",correct:!1,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"}],explanation:'We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.',__typename:"Question"},{id:"97",code:`const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))`,title:"97. What's the output?",options:[{text:"`{Symbol('a'): 'b'}` and `[\"{Symbol('a')\"]`",correct:!1,__typename:"Option"},{text:"`{}` and `[]`",correct:!1,__typename:"Option"},{text:'`{ a: "b" }` and `["a"]`',correct:!1,__typename:"Option"},{text:"`{Symbol('a'): 'b'}` and `[]`",correct:!0,__typename:"Option"}],explanation:`A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.

This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the \`Object.getOwnPropertySymbols()\` method).`,__typename:"Question"},{id:"98",code:`
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))`,title:"98. What's the output?",options:[{text:"`[1, [2, 3, 4]]` and `undefined`",correct:!0,__typename:"Option"},{text:'`[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`',correct:!1,__typename:"Option"},{text:'`[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`',correct:!1,__typename:"Option"},{text:'`Error` and `{ name: "Lydia", age: 21 }`',correct:!1,__typename:"Option"}],explanation:'The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:\n\n `[x, ...y] = [1, 2, 3, 4]`\n\n With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.\n\n The `getUser` function receives an object. With arrow functions, we don\'t _have_ to write curly brackets if we just return one value. However, if you want to return an _object_ from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object:\n\n```const getUser = user => ({ name: user.name, age: user.age })```\n\nSince no value gets returned in this case, the function returns `undefined`.',__typename:"Question"},{id:"99",code:`
const name = "Lydia"

console.log(name())`,title:"99. What's the output?",options:[{text:"`SyntaxError`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!0,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"}],explanation:"The variable `name` holds the value of a string, which is not a function, thus cannot invoke. \n\nTypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!\n\nSyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`. \nReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.",__typename:"Question"},{id:"100",code:"// \u{1F389}\u2728 This is my 100th question! \u2728\u{1F389}\n\nconst output = `${[] && 'Im'}possible!\nYou should${'' && `n't`} see a therapist after so much JavaScript lol`",title:"100. What's the value of output?",options:[{text:"`possible! You should see a therapist after so much JavaScript lol`",correct:!1,__typename:"Option"},{text:"`Impossible! You should see a therapist after so much JavaScript lol`",correct:!0,__typename:"Option"},{text:"`possible! You shouldn't see a therapist after so much JavaScript lol`",correct:!1,__typename:"Option"},{text:"`Impossible! You shouldn't see a therapist after so much JavaScript lol`",correct:!1,__typename:"Option"}],explanation:"`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `\"Im'` gets returned.\n\n`\"\"` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.",__typename:"Question"},{id:"101",code:`
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three)`,title:"101. What's the value of output?",options:[{text:"`false` `null` `[]`",correct:!1,__typename:"Option"},{text:'`null` `""` `true`',correct:!1,__typename:"Option"},{text:'`{}` `""` `[]`',correct:!0,__typename:"Option"},{text:"`null` `null` `true`",correct:!1,__typename:"Option"}],explanation:'With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.\n\n`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.\n\n`(null || false || "")`: all operands are falsy values. This means that the past operand, `""` gets returned. `two` is equal to `""`.\n\n`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.',__typename:"Question"},{id:"102",code:`const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('second')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()`,title:"102. What's the value of output?",options:[{text:"`I have resolved!`, `second` and `I have resolved!`, `second`",correct:!1,__typename:"Option"},{text:"`second`, `I have resolved!` and `second`, `I have resolved!`",correct:!1,__typename:"Option"},{text:"`I have resolved!`, `second` and `second`, `I have resolved!`",correct:!1,__typename:"Option"},{text:"`second`, `I have resolved!` and `I have resolved!`, `second`",correct:!0,__typename:"Option"}],explanation:"With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._\n\nWe can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently. \n\nIn the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty. \n\nWith the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.\n\nThis means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.",__typename:"Question"},{id:"103",code:`
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}`,title:"103. What's the value of output?",options:[{text:"`3`, `NaN`, `NaN`",correct:!1,__typename:"Option"},{text:"`3`, `7`, `NaN`",correct:!1,__typename:"Option"},{text:"`3`, `Lydia2`, `[object Object]2`",correct:!0,__typename:"Option"},{text:'`"12"`, `Lydia2`, `[object Object]2`',correct:!1,__typename:"Option"}],explanation:'The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string. \n\nThe first one is `1`, which is a numerical value. `1 + 2` returns the number 3.\n\nHowever, the second one is a string `"Lydia"`. `"Lydia"` is a string and `2` is a number: `2` gets coerced into a string. `"Lydia"` and `"2"` get concatenated, which results in the string `"Lydia2"`. \n\n`{ name: "Lydia" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[object Object]"`. `"[object Object]"` concatenated with `"2"` becomes `"[object Object]2"`.',__typename:"Question"},{id:"104",code:`
Promise.resolve(5)`,title:"104. What's its value?",options:[{text:"`5`",correct:!1,__typename:"Option"},{text:"`Promise {<pending>: 5}`",correct:!1,__typename:"Option"},{text:"`Promise {<resolved>: 5}`",correct:!0,__typename:"Option"},{text:"`Error`",correct:!1,__typename:"Option"}],explanation:"We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value. If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.\n\nIn this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`.",__typename:"Question"},{id:"105",code:`
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)`,title:"105. What's its value?",options:[{text:"`Not the same!`",correct:!1,__typename:"Option"},{text:"`They are the same!`",correct:!0,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"}],explanation:"Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references. \n\nWe set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.\n\nThis means that both values have a reference to the same spot in memory, thus they are equal.\n\nThe code block in the `else` statement gets run, and `They are the same!` gets logged.",__typename:"Question"},{id:"106",code:`
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])`,title:"106. What's its value?",options:[{text:"`true`",correct:!1,__typename:"Option"},{text:"`false`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!0,__typename:"Option"}],explanation:"In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig[\"colors\"]`). \n\nWith dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.",__typename:"Question"},{id:"107",code:"console.log('\u2764\uFE0F' === '\u2764\uFE0F')",title:"107. What's its value?",options:[{text:"`true`",correct:!0,__typename:"Option"},{text:"`false`",correct:!1,__typename:"Option"}],explanation:'Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we\'re comparing two equal strings to each other, which returns true.',__typename:"Question"},{id:"108",code:`const emojis = ['\u2728', '\u{1F951}', '\u{1F60D}']

emojis.map(x => x + '\u2728')
emojis.filter(x => x !== '\u{1F951}')
emojis.find(x => x !== '\u{1F951}')
emojis.reduce((acc, cur) => acc + '\u2728')
emojis.slice(1, 2, '\u2728') 
emojis.splice(1, 2, '\u2728')`,title:"108. Which of these methods modifies the original array?",options:[{text:"`All of them`",correct:!1,__typename:"Option"},{text:"`map` `reduce` `slice` `splice`",correct:!1,__typename:"Option"},{text:"`map` `slice` `splice`",correct:!1,__typename:"Option"},{text:"`splice`",correct:!0,__typename:"Option"}],explanation:"With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'\u{1F951}'` and `'\u{1F60D}'`) and added the \u2728 emoji instead. \n\n`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.",__typename:"Question"},{id:"109",code:`const food = ['\u{1F355}', '\u{1F36B}', '\u{1F951}', '\u{1F354}']
const info = { favoriteFood: food[0] }

info.favoriteFood = '\u{1F35D}'

console.log(food)`,title:"109. What's the output?",options:[{text:"`['\u{1F355}', '\u{1F36B}', '\u{1F951}', '\u{1F354}']`",correct:!0,__typename:"Option"},{text:"`['\u{1F35D}', '\u{1F36B}', '\u{1F951}', '\u{1F354}']`",correct:!1,__typename:"Option"},{text:"`['\u{1F35D}', '\u{1F355}', '\u{1F36B}', '\u{1F951}', '\u{1F354}']`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"}],explanation:"We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'\u{1F355}'`. A string is a primitive data type. In JavaScript, primitive data types act by reference \n\nIn JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'\u{1F355}'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)\n\nThen, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['\u{1F355}', '\u{1F36B}', '\u{1F951}', '\u{1F354}']`.",__typename:"Question"},{id:"110",code:`
JSON.parse()`,title:"110. What does this method do?",options:[{text:"Parses JSON to a JavaScript value",correct:!0,__typename:"Option"},{text:"Parses a JavaScript object to JSON",correct:!1,__typename:"Option"},{text:"Parses any JavaScript value to JSON",correct:!1,__typename:"Option"},{text:"Parses JSON to a JavaScript object only",correct:!1,__typename:"Option"}],explanation:`With the \`JSON.parse()\` method, we can parse JSON string to a JavaScript value. 

\`\`\`javascript
// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }
\`\`\``,__typename:"Question"},{id:"111",code:`let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()`,title:"111. What's the output?",options:[{text:"Lydia",correct:!1,__typename:"Option"},{text:"Sarah",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!0,__typename:"Option"}],explanation:"Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`. \n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`. \n\nIf we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`. \n\n```javascript\nlet name = 'Lydia'\n\nfunction getName() {\n  console.log(name)\n}\n\ngetName() // Lydia\n```",__typename:"Question"},{id:"112",code:`function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)`,title:"112. What's the output?",options:[{text:"`a` and `a`",correct:!1,__typename:"Option"},{text:"`a` and `undefined`",correct:!1,__typename:"Option"},{text:"`['a', 'b', 'c']` and `a`",correct:!0,__typename:"Option"},{text:"`a` and `['a', 'b', 'c']`",correct:!1,__typename:"Option"}],explanation:"With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).\n\nIn `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.\n\n```javascript\nconsole.log(one.next().value) // ['a', 'b', 'c']\nconsole.log(one.next().value) // undefined\n```\n\nIn `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned. \n\n```javascript\nconsole.log(two.next().value) // 'a'\nconsole.log(two.next().value) // 'b'\nconsole.log(two.next().value) // 'c'\nconsole.log(two.next().value) // undefined\n```",__typename:"Question"},{id:"113",code:"console.log(`${(x => x)('I love')} to program`)",title:"113. What's the output?",options:[{text:"`I love to program`",correct:!0,__typename:"Option"},{text:"`undefined to program`",correct:!1,__typename:"Option"},{text:"`${(x => x)('I love') to program`",correct:!1,__typename:"Option"},{text:"`TypeError`",correct:!1,__typename:"Option"}],explanation:"Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.",__typename:"Question"},{id:"114",code:`let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null`,title:"114. What will happen?",options:[{text:"The `setInterval` callback won't be invoked",correct:!1,__typename:"Option"},{text:"The `setInterval` callback gets invoked once",correct:!1,__typename:"Option"},{text:"The `setInterval` callback will still be called every second",correct:!0,__typename:"Option"},{text:"We never invoked `config.alert()`, config is `null`",correct:!1,__typename:"Option"}],explanation:"Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won't get garbage collected. Since it's not garbage collected, the `setInterval` callback function will still get invoked every 1000ms (1s).",__typename:"Question"},{id:"115",code:`const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')`,title:"115. Which method(s) will return the value `'Hello world!'`?",options:[{text:"1",correct:!1,__typename:"Option"},{text:"2",correct:!0,__typename:"Option"},{text:"2 and 3",correct:!1,__typename:"Option"},{text:"All of them",correct:!1,__typename:"Option"}],explanation:"When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`. \n\n1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.\n3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.",__typename:"Question"},{id:"116",code:`
const person = {
  name: "Lydia",
  age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1
  x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)`,title:"116. What's the output?",options:[{text:'`{name: "Sarah", age: 22}`',correct:!1,__typename:"Option"},{text:'`{name: "Sarah", age: 23}`',correct:!1,__typename:"Option"},{text:'`{name: "Lydia", age: 22}`',correct:!0,__typename:"Option"},{text:'`{name: "Lydia", age: 23}`',correct:!1,__typename:"Option"}],explanation:'Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object. \n\nFirst, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: "Lydia", age: 22 }`.\n\nThen, we invoke the `changeAgeAndName` function, however we don\'t pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it\'s a new object, it doesn\'t affect the values of the properties on the `person` object. `person` is still equal to `{ name: "Lydia", age: 22 }`.',__typename:"Question"},{id:"117",code:`
function sumValues(x, y, z) {
	return x + y + z;
}`,title:"117. Which of the following options will return `6`?",options:[{text:"`sumValues([...1, 2, 3])`",correct:!1,__typename:"Option"},{text:"`sumValues([...[1, 2, 3]])`",correct:!1,__typename:"Option"},{text:"`sumValues(...[1, 2, 3])`",correct:!0,__typename:"Option"},{text:"`sumValues([1, 2, 3])`",correct:!1,__typename:"Option"}],explanation:"With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.",__typename:"Question"},{id:"118",code:`
let num = 1;
const list = ["\u{1F973}", "\u{1F920}", "\u{1F970}", "\u{1F92A}"];

console.log(list[(num += 1)]);`,title:"118. What's the output?",options:[{text:"`\u{1F920}`",correct:!1,__typename:"Option"},{text:"`\u{1F970}`",correct:!0,__typename:"Option"},{text:"`SyntaxError`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!1,__typename:"Option"}],explanation:"With the `+=` operand, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is \u{1F970}, `console.log(list[2])` prints \u{1F970}.",__typename:"Question"},{id:"119",code:`
const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return \`\${this.firstName} \${this.lastName}\`;
	}
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());`,title:"119. What's the output?",options:[{text:"`undefined` `undefined` `undefined` `undefined`",correct:!1,__typename:"Option"},{text:"`Mara` `undefined` `Lydia Hallie` `undefined`",correct:!0,__typename:"Option"},{text:"`Mara` `null` `Lydia Hallie` `null`",correct:!1,__typename:"Option"},{text:"`null` `ReferenceError` `null` `ReferenceError`",correct:!1,__typename:"Option"}],explanation:"With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.\n\n`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`.\n`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.\n`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`.\n`member.getLastName?.()`: `member` is not defined: `member.getLastName()` is nullish. The expression returns `undefined`.",__typename:"Question"},{id:"120",code:`const groceries = ["banana", "apple", "peanuts"];

if (groceries.indexOf("banana")) {
	console.log("We have to buy bananas!");
} else {
	console.log(\`We don't have to buy bananas!\`);
}`,title:"120. What's the output?",options:[{text:"We have to buy bananas!",correct:!1,__typename:"Option"},{text:"We don't have to buy bananas",correct:!0,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`1`",correct:!1,__typename:"Option"}],explanation:'We passed the condition `groceries.indexOf("banana")` to the if-statement. `groceries.indexOf("banana")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don\'t have to buy bananas!` gets logged.',__typename:"Question"},{id:"121",code:`
const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);`,title:"121. What's the output?",options:[{text:"`function language(lang) { this.languages.push(lang }`",correct:!1,__typename:"Option"},{text:"`0`",correct:!1,__typename:"Option"},{text:"`[]`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!0,__typename:"Option"}],explanation:"The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.",__typename:"Question"},{id:"122",code:`
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");`,title:"122. What's the output?",options:[{text:"`false` `true`",correct:!1,__typename:"Option"},{text:"`true` `false`",correct:!1,__typename:"Option"},{text:"`false` `false`",correct:!0,__typename:"Option"},{text:"`true` `true`",correct:!1,__typename:"Option"}],explanation:'`typeof name` returns `"string"`. The string `"string"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === "object"` and `false === "string"` both return`false`.\n\n(If we wanted to check whether the type was (un)equal to a certain type, we should\'ve written `!==` instead of `!typeof`)',__typename:"Question"},{id:"123",code:`
const add = x => y => z => {
	console.log(x, y, z);
	return x + y + z;
};

add(4)(5)(6);`,title:"123. What's the output?",options:[{text:"`4` `5` `6`",correct:!0,__typename:"Option"},{text:"`6` `5` `4`",correct:!1,__typename:"Option"},{text:"`4` `function` `function`",correct:!1,__typename:"Option"},{text:"`undefined` `undefined` `6`",correct:!1,__typename:"Option"}],explanation:"The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`.",__typename:"Question"},{id:"124",code:`
async function* range(start, end) {
	for (let i = start; i <= end; i++) {
		yield Promise.resolve(i);
	}
}

(async () => {
	const gen = range(1, 3);
	for await (const item of gen) {
		console.log(item);
	}
})();`,title:"124. What's the output?",options:[{text:"`Promise {1}` `Promise {2}` `Promise {3}`",correct:!1,__typename:"Option"},{text:"`Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`",correct:!1,__typename:"Option"},{text:"`1` `2` `3`",correct:!0,__typename:"Option"},{text:"`undefined` `undefined` `undefined`",correct:!1,__typename:"Option"}],explanation:"The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promsie, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.",__typename:"Question"},{id:"125",code:`
const myFunc = ({ x, y, z }) => {
	console.log(x, y, z);
};

myFunc(1, 2, 3);`,title:"125. What's the output?",options:[{text:"`1` `2` `3`",correct:!1,__typename:"Option"},{text:"`{1: 1}` `{2: 2}` `{3: 3}`",correct:!1,__typename:"Option"},{text:"`{ 1: undefined }` `undefined` `undefined`",correct:!1,__typename:"Option"},{text:"`undefined` `undefined` `undefined`",correct:!0,__typename:"Option"}],explanation:"`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.",__typename:"Question"},{id:"126",code:`function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat({
    'en-US',
    { style: 'unit', unit: 'mile-per-hour' }
  }).format(speed)

  const formattedAmount = new Intl.NumberFormat({
    'en-US',
    { style: 'currency', currency: 'USD' }
  }).format(amount)

  return \`The driver drove \${formattedSpeed} and has to pay \${formattedAmount}\`
}

console.log(getFine(130, 300))`,title:"126. What's the output?",options:[{text:"The driver drove 130 and has to pay 300",correct:!1,__typename:"Option"},{text:"The driver drove 130 mph and has to pay \\$300.00",correct:!0,__typename:"Option"},{text:"The driver drove undefined and has to pay undefined",correct:!1,__typename:"Option"},{text:"The driver drove 130.00 and has to pay 300.00",correct:!1,__typename:"Option"}],explanation:"With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currentcy` in `USD` results in `$300.00`.",__typename:"Question"},{id:"127",code:`
const spookyItems = ["\u{1F47B}", "\u{1F383}", "\u{1F578}"];
({ item: spookyItems[3] } = { item: "\u{1F480}" });

console.log(spookyItems);`,title:"127. What's the output?",options:[{text:'`["\u{1F47B}", "\u{1F383}", "\u{1F578}"]`',correct:!1,__typename:"Option"},{text:'`["\u{1F47B}", "\u{1F383}", "\u{1F578}", "\u{1F480}"]`',correct:!0,__typename:"Option"},{text:'`["\u{1F47B}", "\u{1F383}", "\u{1F578}", { item: "\u{1F480}" }]`',correct:!1,__typename:"Option"},{text:'`["\u{1F47B}", "\u{1F383}", "\u{1F578}", "[object Object]"]`',correct:!1,__typename:"Option"}],explanation:'By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we\'re assigning the value "\u{1F480}" to `spookyItems[3]`. This means that we\'re modifying the `spookyItems` array, we\'re adding the "\u{1F480}" to it. When logging `spookyItems`, `["\u{1F47B}", "\u{1F383}", "\u{1F578}", "\u{1F480}"]` gets logged.',__typename:"Question"},{id:"128",code:`
const name = "Lydia Hallie";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));`,title:"128. What's the output?",options:[{text:"`true` `false` `true` `false`",correct:!1,__typename:"Option"},{text:"`true` `false` `false` `false`",correct:!1,__typename:"Option"},{text:"`false` `false` `true` `false`",correct:!0,__typename:"Option"},{text:"`false` `true` `false` `true`",correct:!1,__typename:"Option"}],explanation:"With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.\n\nWith the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.",__typename:"Question"},{id:"129",code:`
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();`,title:"129. What's the output?",options:[{text:'`"number"`',correct:!1,__typename:"Option"},{text:'`"string"`',correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`ReferenceError`",correct:!0,__typename:"Option"}],explanation:"Variables declared with the `const` keyword are not referencable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.",__typename:"Question"},{id:"130",code:`const myPromise = Promise.resolve("Woah some cool data");

(async () => {
	try {
		console.log(await myPromise);
	} catch {
		throw new Error(\`Oops didn't work\`);
	} finally {
		console.log("Oh finally!");
	}
})();`,title:"130. What's the output?",options:[{text:"`Woah some cool data`",correct:!1,__typename:"Option"},{text:"`Oh finally!`",correct:!1,__typename:"Option"},{text:"`Woah some cool data` `Oh finally!`",correct:!0,__typename:"Option"},{text:"`Oops didn't work` `Oh finally!`",correct:!1,__typename:"Option"}],explanation:'In the `try` block, we\'re logging the awaited value of the `myPromise` variable: `"Woah some cool data"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn\'t run. The code in the `finally` block _always_ runs, `"Oh finally!"` gets logged.',__typename:"Question"},{id:"131",code:`
const emojis = ["\u{1F951}", ["\u2728", "\u2728", ["\u{1F355}", "\u{1F355}"]]];

console.log(emojis.flat(1));`,title:"131. What's the output?",options:[{text:"`['\u{1F951}', ['\u2728', '\u2728', ['\u{1F355}', '\u{1F355}']]]`",correct:!1,__typename:"Option"},{text:"`['\u{1F951}', '\u2728', '\u2728', ['\u{1F355}', '\u{1F355}']]`",correct:!0,__typename:"Option"},{text:"`['\u{1F951}', ['\u2728', '\u2728', '\u{1F355}', '\u{1F355}']]`",correct:!1,__typename:"Option"},{text:"`['\u{1F951}', '\u2728', '\u2728', '\u{1F355}', '\u{1F355}']`",correct:!1,__typename:"Option"}],explanation:"With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['\u{1F951}']` and `['\u2728', '\u2728', ['\u{1F355}', '\u{1F355}']]` in this case. Concatenating these two arrays results in `['\u{1F951}', '\u2728', '\u2728', ['\u{1F355}', '\u{1F355}']]`.",__typename:"Question"},{id:"132",code:`
class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++;
	}
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);`,title:"<a name=20191224></a>132. What's the output?",options:[{text:"`0`",correct:!1,__typename:"Option"},{text:"`1`",correct:!1,__typename:"Option"},{text:"`2`",correct:!1,__typename:"Option"},{text:"`3`",correct:!0,__typename:"Option"}],explanation:'`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.\n\n<img src="https://i.imgur.com/KxLlTm9.png" width="400">\n\nThen, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we\'re just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.\n\nWe invoke the `counterTwo.increment()`, which sets the `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.\n\n<img src="https://i.imgur.com/BNBHXmc.png" width="400">',__typename:"Question"},{id:"133",code:`
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
	myPromise.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log("Timeout!", 0));
	console.log("Last line!");
}

async function funcTwo() {
	const res = await myPromise;
	console.log(await res);
	setTimeout(() => console.log("Timeout!", 0));
	console.log("Last line!");
}

funcOne();
funcTwo();`,title:"133. What's the output?",options:[{text:"`Promise! Last line! Promise! Last line! Last line! Promise!`",correct:!1,__typename:"Option"},{text:"`Last line! Timeout! Promise! Last line! Timeout! Promise!`",correct:!1,__typename:"Option"},{text:"`Promise! Last line! Last line! Promise! Timeout! Timeout!`",correct:!1,__typename:"Option"},{text:"`Last line! Promise! Promise! Last line! Timeout! Timeout!`",correct:!0,__typename:"Option"}],explanation:"First, we invoke `funcOne`. On the first line of `funcOne`, we call the `myPromise` promise, which is an _asynchronous_ operation. While the engine is busy completing the promise, it keeps on running the function `funcOne`. The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop here.)\n\nBoth the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line!` gets logged first, since this is not an asynchonous operation. This is the last line of `funcOne`, the promise resolved, and `Promise!` gets logged. However, since we're invoking `funcTwo()`, the call stack isn't empty, and the callback of the `setTimeout` function cannot get added to the callstack yet.\n\nIn `funcTwo` we're, first _awaiting_ the myPromise promise. With the `await` keyword, we pause the execution of the function until the promise has resolved (or rejected). Then, we log the awaited value of `res` (since the promise itself returns a promise). This logs `Promise!`.\n\nThe next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API.\n\nWe get to the last line of `funcTwo`, which logs `Last line!` to the console. Now, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log(\"Timeout!\")` from `funcOne`, and `() => console.log(\"Timeout!\")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout!`, and gets popped off the stack. Then, the second callback logs `Timeout!`, and gets popped off the stack. This logs `Last line! Promise! Promise! Last line! Timeout! Timeout!`",__typename:"Question"},{id:"134",code:`
// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";`,title:"134. How can we invoke `sum` in `index.js` from `sum.js?`",options:[{text:"`sum(4)`",correct:!1,__typename:"Option"},{text:"`sum.sum(4)`",correct:!1,__typename:"Option"},{text:"`sum.default(4)`",correct:!0,__typename:"Option"},{text:"Default aren't imported with `*`, only named exports",correct:!1,__typename:"Option"}],explanation:`With the asterisk \`*\`, we import all exported values from that file, both default and named. If we had the following file:

\`\`\`javascript
// info.js
export const name = "Lydia";
export const age = 21;
export default "I love JavaScript";

// index.js
import * as info from "./info";
console.log(info);
\`\`\`

The following would get logged:

\`\`\`javascript
{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
\`\`\`

For the \`sum\` example, it means that the imported value \`sum\` looks like this:

\`\`\`javascript
{ default: function sum(x) { return x + x } }
\`\`\`

We can invoke this function, by calling \`sum.default\``,__typename:"Question"},{id:"135",code:`
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;`,title:"135. What's the output?",options:[{text:"`Added a new property!`",correct:!1,__typename:"Option"},{text:"`Accessed a property!`",correct:!1,__typename:"Option"},{text:"`Added a new property!` `Accessed a property!`",correct:!0,__typename:"Option"},{text:"Nothing gets logged",correct:!1,__typename:"Option"}],explanation:'With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In tis case, we pass the `handler` object which contained to properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.\n\nThe first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.\n\nFirst, we added a new property `name` to the proxy object (`person.name = "Lydia"`). `set` gets invoked, and logs `"Added a new property!"`.\n\nThen, we access a property value on the proxy object, the `get` property on the handler object got invoked. `"Accessed a property!"` gets logged.',__typename:"Question"},{id:"136",code:`
const person = { name: "Lydia Hallie" };

Object.seal(person);`,title:"136. Which of the following will modify the `person` object?",options:[{text:'`person.name = "Evan Bacon"`',correct:!0,__typename:"Option"},{text:"`person.age = 21`",correct:!1,__typename:"Option"},{text:"`delete person.name`",correct:!1,__typename:"Option"},{text:"`Object.assign(person, { age: 21 })`",correct:!1,__typename:"Option"}],explanation:"With `Object.seal` we can prevent new properies from being _added_, or existing properties to be _removed_.\n\nHowever, you can still modify the value of existing properties.",__typename:"Question"},{id:"137",code:`
const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);`,title:"137. Which of the following will modify the `person` object?",options:[{text:'`person.name = "Evan Bacon"`',correct:!1,__typename:"Option"},{text:"`delete person.address`",correct:!1,__typename:"Option"},{text:'`person.address.street = "101 Main St"`',correct:!0,__typename:"Option"},{text:'`person.pet = { name: "Mara" }`',correct:!1,__typename:"Option"}],explanation:"The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.\n\nHowever, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.",__typename:"Question"},{id:"138",code:`
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
	console.log(num, value);
}

myFunc();
myFunc(3);`,title:"138. What's the output?",options:[{text:"`2` `4` and `3` `6`",correct:!0,__typename:"Option"},{text:"`2` `NaN` and `3` `NaN`",correct:!1,__typename:"Option"},{text:"`2` `Error` and `3` `6`",correct:!1,__typename:"Option"},{text:"`2` `4` and `3` `Error`",correct:!1,__typename:"Option"}],explanation:"First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.\n\nThen, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.",__typename:"Question"},{id:"139",code:`
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)`,title:"139. What's the output?",options:[{text:"`10`",correct:!1,__typename:"Option"},{text:"`11`",correct:!1,__typename:"Option"},{text:"`undefined`",correct:!1,__typename:"Option"},{text:"`SyntaxError`",correct:!0,__typename:"Option"}],explanation:"In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!",__typename:"Question"},{id:"140",code:`
const teams = [
	{ name: "Team 1", members: ["Paul", "Lisa"] },
	{ name: "Team 2", members: ["Laura", "Tim"] }
];

function* getMembers(members) {
	for (let i = 0; i < members.length; i++) {
		yield members[i];
	}
}

function* getTeams(teams) {
	for (let i = 0; i < teams.length; i++) {
		// \u2728 SOMETHING IS MISSING HERE \u2728
	}
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }`,title:"140. What's the output?",options:[{text:"`yield getMembers(teams[i].members)`",correct:!1,__typename:"Option"},{text:"`yield* getMembers(teams[i].members)`",correct:!0,__typename:"Option"},{text:"`return getMembers(teams[i].members)`",correct:!1,__typename:"Option"},{text:"`return yield getMembers(teams[i].members)`",correct:!1,__typename:"Option"}],explanation:"In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.\n\nIf we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.",__typename:"Question"},{id:"141",code:`
const person = {
	name: "Lydia Hallie",
	hobbies: ["coding"]
};

function addHobby(hobby, hobbies = person.hobbies) {
	hobbies.push(hobby);
	return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person.hobbies);

console.log(person.hobbies);`,title:"141. What's the output?",options:[{text:'`["coding"]`',correct:!1,__typename:"Option"},{text:'`["coding", "dancing"]`',correct:!1,__typename:"Option"},{text:'`["coding", "dancing", "baking"]`',correct:!0,__typename:"Option"},{text:'`["coding", "running", "dancing", "baking"]`',correct:!1,__typename:"Option"}],explanation:'The `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.\n\nFirst, we invoke the `addHobby` function, and pass `"running"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `y`, `"running"` gets added to this empty array.\n\nThen, we invoke the `addHobby` function, and pass `"dancing"` as the value for `hobby`. We didn\'t pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.\n\nLast, we invoke the `addHobby` function, and pass `"bdaking"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.\n\nAfter pushing `dancing` and `baking`, the value of `person.hobbies` is `["coding", "dancing", "baking"]`',__typename:"Question"},{id:"142",code:`class Bird {
	constructor() {
		console.log("I'm a bird. \u{1F9A2}");
	}
}

class Flamingo extends Bird {
	constructor() {
		console.log("I'm pink. \u{1F338}");
		super();
	}
}

const pet = new Flamingo();`,title:"142. What's the output?",options:[{text:"`I'm pink. \u{1F338}`",correct:!1,__typename:"Option"},{text:"`I'm pink. \u{1F338}` `I'm a bird. \u{1F9A2}`",correct:!0,__typename:"Option"},{text:"`I'm a bird. \u{1F9A2}` `I'm pink. \u{1F338}`",correct:!1,__typename:"Option"},{text:"Nothing, we didn't call any method",correct:!1,__typename:"Option"}],explanation:'We create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `"I\'m pink. \u{1F338}"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. THe constructor in `Bird` gets called, and logs `"I\'m a bird. \u{1F9A2}"`.',__typename:"Question"},{id:"143",code:`
const emojis = ["\u{1F384}", "\u{1F385}\u{1F3FC}", "\u{1F381}", "\u2B50"];

/* 1 */ emojis.push("\u{1F98C}");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "\u{1F942}"];
/* 4 */ emojis.length = 0;`,title:"143. Which of the options result(s) in an error?",options:[{text:"1",correct:!1,__typename:"Option"},{text:"1 and 2",correct:!1,__typename:"Option"},{text:"3 and 4",correct:!1,__typename:"Option"},{text:"3",correct:!0,__typename:"Option"}],explanation:"The `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The propeties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.",__typename:"Question"},{id:"144",code:`
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]`,title:'144. What do we need to add to the `person` object to get `["Lydia Hallie", 21]` as the output of `[...person]`?',options:[{text:"Nothing, object are iterable by default",correct:!1,__typename:"Option"},{text:"`*[Symbol.iterator]() { for (let x in this) yield* this[x] }`",correct:!1,__typename:"Option"},{text:"`*[Symbol.iterator]() { yield* Object.values(this) }`",correct:!0,__typename:"Option"},{text:"`*[Symbol.iterator]() { for (let x in this) yield this }`",correct:!1,__typename:"Option"}],explanation:'Objects aren\'t iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.',__typename:"Question"}],Oe=$("jsQuizStore",{state:()=>({explanation:!1,questionIndex:"1"}),getters:{},actions:{toggleExplanation(){this.explanation=!this.explanation},nextQuestion(){this.questionIndex=`${+this.questionIndex+1}`},setQuestion(e){this.questionIndex=e},prevQuestion(){this.questionIndex=`${+this.questionIndex-1}`}}});export{Z as a,ee as b,ue as c,be as d,ve as e,_e as f,ce as g,de as h,ge as i,ye as j,me as k,he as l,fe as m,Oe as n,xe as o,we as s,pe as u};
