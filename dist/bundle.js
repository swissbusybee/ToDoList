!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=9)}([function(n,e){n.exports={tasks:{task:[{title:["Finish chores"],description:["Clean up"],duedate:["20191001"],priority:["5"],notes:["Basic note for task"],checklist:[{checkitem:["Check 1","Check 2","Check 3"]}],completed:["false"]},{title:["Study"],description:["Test next week"],duedate:["20191001"],priority:["5"],notes:["Basic note for task"],checklist:[{checkitem:["Check 1","Check 2","Check 3"]}],completed:["false"]},{title:["Water plants"],description:["200ml"],duedate:["20191001"],priority:["5"],notes:["Basic note for task"],checklist:[{checkitem:["Check 1","Check 2","Check 3"]}],completed:["false"]},{title:["Feed animals"],description:["Dogs and cats"],duedate:["20191001"],priority:["5"],notes:["Basic note for task"],checklist:[{checkitem:["Check 1","Check 2","Check 3"]}],completed:["false"]},{title:["Complete project"],description:["Need research paper"],duedate:["20191001"],priority:["5"],notes:["Basic note for task"],checklist:[{checkitem:["Check 1","Check 2","Check 3"]}],completed:["false"]}]}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot).concat(n," */")}));return[t].concat(o).concat([r]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],i={},r=0;r<n.length;r++){var o=n[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):t.push(i[a]={id:a,parts:[s]})}return t}function c(n,e){for(var t=0;t<n.length;t++){var i=n[t],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(m(i.parts[a],e))}else{for(var s=[];a<i.parts.length;a++)s.push(m(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:s}}}}function d(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var i=t.nc;i&&(n.attributes.nonce=i)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=p(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function g(n,e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r&&n.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var f=null,h=0;function m(n,e){var t,i,r;if(e.singleton){var o=h++;t=f||(f=d(e)),i=u.bind(null,t,o,!1),r=u.bind(null,t,o,!0)}else t=d(e),i=g.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n,e);return c(t,e),function(n){for(var i=[],o=0;o<t.length;o++){var a=t[o],d=r[a.id];d&&(d.refs--,i.push(d))}n&&c(s(n,e),e);for(var l=0;l<i.length;l++){var p=i[l];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete r[p.id]}}}}},function(n,e,t){var i=t(4);"string"==typeof i&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};t(2)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(1)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,e,t){var i=t(6);"string"==typeof i&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};t(2)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){e=n.exports=t(1)(!1);var i=t(7)(t(8));e.push([n.i,":root {\n  --task-settings-border-radius: 15px;\n  --task-settings-input-height: 25px;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-size: 16px;\n  background: rgb(179, 179, 179);\n  font-family: 'Open Sans', sans-serif;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\n.window-wrapper {\n  height: 100%;\n  width: 100%;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n\n}\n\n/* Task items as a list */\n.task-container {\n  display: flex;\n  flex-direction: row;\n  height: 3em;\n  width: 90%;\n  margin: 10px;\n  background: white;\n}\n\n.task-settings-main-heading {\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.task-item-project-color {\n  background: red;\n  height: 100%;\n  width: 8px;\n}\n\n.task-item-task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  /* outline: 1px black solid; */\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n}\n\n.task-item-task-details-title {\n  font-size: 1em;\n}\n\n.task-item-task-details-desc {\n  font-size: .7em;\n}\n\n.task-item-task-priority {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: auto;\n  /* outline: 1px black solid; */\n  padding: 0 5px;\n}\n\n.img-task-item-task-priority {\n  height: 12px;\n  width: auto;\n  padding: 0 2px;\n}\n\n.task-item-task-completed {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 70px;\n  /* outline: 1px black solid; */\n}\n\n.img-task-item-task-completed {\n  height: 32px;\n  width: auto;\n  padding: 0 10px;\n}\n\n/* END - Task items as a list */\n\n/* Task item as an individual */\n/* -------------------------- */\n.task-settings-main-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: calc(100% - 30px);\n  padding: 15px;\n}\n\n.task-settings {\n  margin: 20px 0 0 0;\n}\n\n.task-settings-heading {\n  margin-bottom: 7px;\n}\n\n.task-settings-title-container {\n}\n\n.task-settings-title {\n\n}\n\n.task-settings-input-container {\n}\n\n.input-task-settings {\n  height: var(--task-settings-input-height);\n  width: calc(100% - 10px);\n  border-radius: var(--task-settings-border-radius);\n  padding-left: 10px;\n\n}\n\n.input-task-settings-date {\n  height: var(--task-settings-input-height);\n  width: 50%;\n  padding-left: 5px;\n  border-radius: var(--task-settings-border-radius);\n}\n\n.task-settings-priority-container {\n\n}\n\n.select-task-settings-priority {\n  width: 50%;\n  border-radius: var(--task-settings-border-radius);\n  background: white;\n  padding-left: 5px;\n}\n\n.task-settings-notes-container {\n\n}\n\n.task-settings-notes {\n  \n}\n\n.task-settings-input-notes-container {\n}\n\n.textarea-task-settings-input-notes {\n  height: 100px;\n  width: calc(100% - 5px);\n  padding-left: 5px;\n  resize: none;\n  border-radius: var(--task-settings-border-radius);\n}\n\n\n.task-settings-checklist-container {\n\n}\n\n.task-settings-completed-container{\n\n}\n\n.task-settings-submit-task {\n  align-self: center;\n  margin-top: 30px;\n}\n\n.btn-task-setting-submit {\n  border-radius: 15px;\n  height: 35px;\n  width: 150px;\n  border: none;\n  outline: none;\n}\n\n/* Backgrounds */\n\n.bg1 {\n  background-image: url("+i+");\n  background-size: cover;\n  background-position: center;\n}\n\n.bg2 {\n  background: -moz-linear-gradient(45deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%); /* ff3.6+ */\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(255,0,255,1)), color-stop(100%, rgba(0,255,255,1))); /* safari4+,chrome */\n  background: -webkit-linear-gradient(45deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%); /* safari5.1+,chrome10+ */\n  background: -o-linear-gradient(45deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%); /* opera 11.10+ */\n  background: -ms-linear-gradient(45deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%); /* ie10+ */\n  background: linear-gradient(45deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%); /* w3c */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#ff00ff',GradientType=1 ); /* ie6-9 */ \n}\n\n.bg3 {\n  background: rgba(84, 190, 249, 1.0);\n  background: -webkit-linear-gradient(top left, rgba(84, 190, 249, 1.0), rgba(181, 118, 229, 1.0));\n  background: -moz-linear-gradient(top left, rgba(84, 190, 249, 1.0), rgba(181, 118, 229, 1.0));\n  background: linear-gradient(to bottom right, rgba(84, 190, 249, 1.0), rgba(181, 118, 229, 1.0));\n}\n\n\n\n\n",""])},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof(n=n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){n.exports=t.p+"ef11b08c72fff5a3a83cdafa3ce78789.jpeg"},function(n,e,t){"use strict";t.r(e);t(3),t(5);var i=(n,e)=>{let t=n,i=e,r=[];const o=()=>r,a=n=>{r=n};return Object.freeze({getType:()=>"Project",getTitle:()=>t,setTitle:n=>{t=n},getDescription:()=>i,setDescription:n=>{i=n},getTasks:o,setTasks:a,addTask:n=>{const e=o();if("Task"!==n.getType())throw new Error("Not a Task object being passed.");e.push(n),a(e)},removeTask:n=>{o()}})};var r=(n,e,t,i,r,o,a)=>{let s=n,c=e,d="20191001",l=t,p=i,u=r,g=o,f=a;return Object.freeze({getType:()=>"Task",getTitle:()=>s,setTitle:n=>{s=n},getDescription:()=>c,setDescription:n=>{c=n},getCreateDate:()=>d,setCreateDate:()=>{d="20191001"},getDueDate:()=>l,setDueDate:n=>{l=n},getPriority:()=>p,setPriority:n=>{p=n},getNotes:()=>u,setNotes:n=>{u=n},getChecklist:()=>g,setChecklist:n=>{g=n},getCompleted:()=>f,setCompleted:n=>{f=n}})},o=t(0),a=t.n(o);var s=()=>{return{populateTasks:()=>{const n=i("Test Project 1","Due on Monday");for(let e=0;e<a.a.tasks.task.length;e+=1){const t=a.a.tasks.task[e],i=r(t.title,t.description,t.duedate,t.priority,t.notes,t.checklist,t.completed);n.addTask(i)}return n}}};var c=()=>{let n=[];const e=()=>n,t=e=>{n=e};return Object.freeze({getType:()=>"Projects",getProjects:e,setProjects:t,addProject:n=>{const i=e();if("Project"!==n.getType())throw new Error("Object being passed is not a Project object.");i.push(n),t(i)},removeProject:n=>{e()}})};var d=()=>{const n=document.getElementById("display-task-items"),e=document.getElementById("task-settings-display"),t=()=>{(()=>e)().style.display="none"};return console.log("createEvents() run:"),document.getElementById("settings-submit-new-task").addEventListener("click",()=>{t()}),Object.freeze({display:()=>{},displayTasks:e=>{(()=>n)();console.log("displayTasks run:");const t=e[0].getTasks();console.log(t);for(let n=0;n<t.length;n+=1){t[n].getTitle(),t[n].getDescription();console.log(t[n].getTitle())}}})};(()=>{const n=c(),e=s();n.addProject(e.populateTasks()),d().displayTasks(n.getProjects())})()}]);