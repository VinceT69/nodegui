(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{429:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,h=u["".concat(r,".").concat(p)]||u[p]||b[p]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),i=(n(0),n(429)),r={sidebar_label:"Handle Events",title:"Handle Events"},s={unversionedId:"guides/handle-events",id:"guides/handle-events",isDocsHomePage:!1,title:"Handle Events",description:"NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit or even something like window being hidden and shown.",source:"@site/docs/guides/handle-events.md",slug:"/guides/handle-events",permalink:"/docs/guides/handle-events",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/guides/handle-events.md",version:"current",sidebar_label:"Handle Events",sidebar:"guides",previous:{title:"Layout",permalink:"/docs/guides/layout"},next:{title:"Scroll Area",permalink:"/docs/guides/scroll-view"}},l=[{value:"Event handling",id:"event-handling",children:[{value:"How do I know which events are supported ?",id:"how-do-i-know-which-events-are-supported-",children:[]}]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit or even something like window being hidden and shown."),Object(i.b)("p",null,"In order to do this we need to attach an event listener to the respective widget."),Object(i.b)("p",null,"Technically, the event listener is a NodeJs ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter")," instance that listens to events from the underlying Qt widget. The native Qt widget would send all the events to the event emitter in NodeGui world and the user can essentially subscribe to it."),Object(i.b)("p",null,"Lets see an example to see how this looks in practice."),Object(i.b)("h2",{id:"event-handling"},"Event handling"),Object(i.b)("p",null,"The following example demonstrates how to add an event listener to a button widget."),Object(i.b)("img",{src:"https://github.com/nodegui/nodegui/releases/download/assets/event-example.gif",alt:"event example",style:{width:"100%",maxWidth:400}}),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const { QMainWindow, QPushButton } = require('@nodegui/nodegui');\n\nconst win = new QMainWindow();\n\nconst button = new QPushButton();\nbutton.setText('Click me');\nbutton.addEventListener('clicked', () => {\n    console.log('the button was clicked');\n});\n\nwin.setCentralWidget(button);\nwin.show();\nglobal.win = win;\n")),Object(i.b)("p",null,"The addEventListener function accepts an event type, followed by a handler for the event. You can register multiple handlers for the same event by calling addEventListener multiple times."),Object(i.b)("p",null,"Internally, Qt widgets in nodegui has two types of events.:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Signals: In short these are basically different for different widgets. So a button maybe have ",Object(i.b)("inlineCode",{parentName:"li"},"clicked"),", ",Object(i.b)("inlineCode",{parentName:"li"},"pressed")," signal, while a linedit may have ",Object(i.b)("inlineCode",{parentName:"li"},"textChanged")," signal."),Object(i.b)("li",{parentName:"ul"},"QEvents: These are common set of events for all the widgets/qobjects in NodeGui world. These are also helpful at times but typically you would end up using signals more than these common events.")),Object(i.b)("p",null,"In NodeGui you can listen to both Signals and QEvents using the same addEventListener function."),Object(i.b)("h3",{id:"how-do-i-know-which-events-are-supported-"},"How do I know which events are supported ?"),Object(i.b)("p",null,"In order to find all the supported events for a widget you can take a look at"),Object(i.b)("h4",{id:"all-signals-for-the-widgets"},"All Signals for the widgets:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nodegui.org/docs/api/generated/globals/#interfaces"}),"https://docs.nodegui.org/docs/api/generated/globals/#interfaces")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nodegui.org/docs/api/generated/globals/#type-aliases"}),"https://docs.nodegui.org/docs/api/generated/globals/#type-aliases"))),Object(i.b)("p",null,"You can subscribe to a signal like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const { QMainWindow, QCheckBox } = require('@nodegui/nodegui');\n\nconst win = new QMainWindow();\n\nconst checkbox = new QCheckBox();\ncheckbox.setText('Check/Uncheck me');\ncheckbox.addEventListener('clicked', (checked) => {\n    console.log('was checked', checked);\n});\n\nwin.setCentralWidget(checkbox);\nwin.show();\nglobal.win = win;\n")),Object(i.b)("p",null,"The value you receive in the callback depends on the signal. Refer to respective signal docs for more details. All the handlers are also typed. So if you are using typescript you should get correct autocomplete for it."),Object(i.b)("h4",{id:"all-common-qevents-for-the-widgets"},"All common QEvents for the widgets"),Object(i.b)("p",null,"In nodegui all these common QEvents are represented under an enum type: ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes")),Object(i.b)("p",null,"You can subscribe to a QEvent like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const { QMainWindow, QLabel, WidgetEventTypes, QMouseEvent } = require('@nodegui/nodegui');\n\nconst win = new QMainWindow();\n\nconst label = new QLabel();\nlabel.setText('Move your mouse here');\nlabel.setMouseTracking(true);\n\nlabel.addEventListener(WidgetEventTypes.MouseMove, (nativeEvt) => {\n    const mouseEvt = new QMouseEvent(nativeEvt);\n    console.log('mouseMoved at: ', { x: mouseEvt.x(), y: mouseEvt.y() });\n});\n\nwin.setCentralWidget(label);\nwin.show();\nglobal.win = win;\n")),Object(i.b)("img",{src:"https://github.com/nodegui/nodegui/releases/download/assets/mouseevent.gif",alt:"mouse event listener",style:{width:"100%",maxWidth:400}}),Object(i.b)("p",null,"Note here that every QEvent handler gives a reference to native QEvent in the handler callback.\nNot all native QEvent wrappers are implemented yet and we might need your help regarding those. Feel free to jump in and contribute to the nodegui core."))}d.isMDXComponent=!0}}]);