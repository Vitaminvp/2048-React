(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(38)},28:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(10),c=t.n(o),i=(t(28),t(12)),l=t.n(i),u=t(18),s=t(9),f=t(4),p=t(5),d=t(7),m=t(6),b=t(8),h=t(1),v=t(2);function x(){var e=Object(h.a)(["\n  color: #776e65;\n  max-width: 450px;\n  > strong {\n    color: #8bc34a;\n"]);return x=function(){return e},e}function y(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return y=function(){return e},e}function O(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]);return O=function(){return e},e}function w(){var e=Object(h.a)(["\n  position: relative;\n  font-size: 80px;\n  line-height: 90px;\n  color: #776e65;\n  font-weight: bold;\n  margin: 0;\n  display: block;\n  float: left;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n  ::before {\n    content: '';\n    position: absolute;\n    font-size: 20px;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    color: #bbada0;\n    left: 50%;\n    white-space: nowrap;\n    transform: translateX(-50%);\n    opacity: 0.5;\n  }\n  :hover {\n    ::before {\n      content: 'Join the numbers and get to the 2048 tile!';\n    }\n  }\n"]);return w=function(){return e},e}var g=v.a.h1(w()),E=v.a.div(O()),j=v.a.div(y()),k=v.a.p(x()),N=function(){var e=U(S(),S(),Y),n=U(S(),S(),Y);return e.x===n.x&&e.y===n.y&&(e.x=0===e.x?1:e.x-1),[e,n]},S=function(){return Math.floor(Math.random()*J)},I=t(11),M=t(3),D=t.n(M),A={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT"},G=function(e,n){var t=Object(I.cloneDeep)(e),r=Array.from(new Array(J),function(){return Array.from(new Array(J),function(){return 0})});t.forEach(function(e){r[e.x][e.y]=e}),T(r,n);for(var a=0;a<J;a++)for(var o=0;o<J;o++)0!==r[o][a]&&C(r,o,a);L(r,n);for(var c=0;c<J;c++)for(var i=0;i<J;i++)0!==r[i][c]&&(r[i][c].x=i,r[i][c].y=c);return t},C=function(e,n,t){for(var r=t-1,a=t;r>=0;){if(0===e[n][r])e[n][r]=e[n][a],e[n][a].state=z.MOVING,e[n][a]=0,a=r;else{if(e[n][r].value!==e[n][a].value||e[n][r].state!==z.IDLE&&e[n][r].state!==z.MOVING)break;e[n][r].state=z.DYING,e[n][a].state=z.INCREASE,e[n][r]=e[n][a],e[n][a]=0,a=r}r-=1}},T=function(e,n){switch(n){case A.LEFT:D()(e),D()(e),D()(e);break;case A.DOWN:D()(e),D()(e);break;case A.RIGHT:D()(e)}},L=function(e,n){switch(n){case A.LEFT:D()(e);break;case A.DOWN:D()(e),D()(e);break;case A.RIGHT:D()(e),D()(e),D()(e)}},P=function(e){return e.filter(function(e){return e.state!==z.DYING}).map(function(e){return e.state===z.INCREASE&&(e.value*=2),e})},R=t(21),W=function(e,n){var t,r,a=new Set;if(e.forEach(function(e){a.add(e.x*J+e.y)}),a.size===Math.pow(J,2))return n(),[];var o=a.size;do{t=S(),r=S();var c=t*J+r;a.add(c)}while(o===a.size);return[].concat(Object(R.a)(e),[U(t,r,Y)])},z={IDLE:"IDLE",MOVING:"MOVING",DYING:"DYING",INCREASE:"INCREASE"},U=function(e,n,t,r){return{x:e,y:n,value:t,id:r||Object(I.uniqueId)(),state:z.IDLE}},F=function(e){return Math.floor(6.25*e)},H=function(e){return 100-Math.floor(3.125*e)},Y=2,J=4,K=100,V=2048,B=function(e){return e.reduce(function(e,n){return n.state===z.INCREASE&&(e+=n.value),n.state=z.IDLE,e},0)};function q(){var e=Object(h.a)(["\n  transform: translate(","px, ","px);\n  text-align: center;\n  line-height: 100px;\n  background-color: ",";\n  position: absolute;\n  transition-property: transform;\n  transition: 100ms ease-in-out;\n  color: #6a4e4e;\n  font-weight: 900;\n  font-size: ","px;\n"]);return q=function(){return e},e}function X(){var e=Object(h.a)(["\n  margin: 5px;\n  background-color: rgba(238, 228, 218, 0.35);\n  height: 100px;\n  width: 100px;\n  border-radius: 3px;\n"]);return X=function(){return e},e}function Q(){var e=Object(h.a)(["\n  background-color: transparent;\n"]);return Q=function(){return e},e}function Z(){var e=Object(h.a)(["\n  align-content: space-between;\n  background-color: #bbada0;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: 450px;\n  justify-content: space-between;\n  padding: 5px;\n  position: absolute;\n  width: 450px;\n"]);return Z=function(){return e},e}function $(){var e=Object(h.a)(["\n  height: 450px;\n  position: relative;\n  width: 450px;\n"]);return $=function(){return e},e}var _=v.a.div($()),ee=v.a.div(Z()),ne=Object(v.a)(ee)(Q()),te=v.a.div(X()),re=Object(v.a)(te)(q(),function(e){return 110*e.x},function(e){return 110*e.y},function(e){return function(e){if(0===e)return"transparent";var n=Math.min(16,Math.log2(e));return"hsl(0, ".concat(F(n),"%, ").concat(H(n),"%);")}(e.value)},function(e){var n=e.value;return n<100?66:n<1e3?47:n<1e4?40:30});function ae(){var e=Object(h.a)(["\n  min-height: 600px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ae=function(){return e},e}function oe(){var e=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n"]);return oe=function(){return e},e}var ce=v.a.main(oe()),ie=v.a.div(ae());function le(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  width: 100%;\n  max-width: 450px;\n  align-items: center;\n"]);return le=function(){return e},e}var ue=v.a.div(le()),se=function(e){function n(){return Object(f.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.children;return a.a.createElement(ce,null,a.a.createElement(ie,null,e))}}]),n}(r.PureComponent),fe=function(e){function n(){return Object(f.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.cells;return a.a.createElement(_,null,a.a.createElement(ee,null,Array.from(new Array(16),function(e,n){return n}).map(function(e){return a.a.createElement(te,{key:e})})),a.a.createElement(ne,null,e.map(function(e){var n=e.x,t=e.y,r=e.value,o=e.id;return a.a.createElement(re,{key:o,x:n,y:t,value:r},r)})))}}]),n}(r.PureComponent);fe.defaultProps={matrix:[[]]};var pe=fe,de=function(e){function n(){return Object(f.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.children;return a.a.createElement(ue,null,e)}}]),n}(r.PureComponent);function me(){var e=Object(h.a)(["\n  background-color: #8f7a66;\n  border-radius: 3px;\n  border: none;\n  text-decoration: none;\n  color: #f9f6f2;\n  cursor: pointer;\n  font-size: 16px;\n  height: 40px;\n  line-height: 32px;\n  font-weight: bold;\n  outline: none;\n  margin: 20px 0;\n  margin-left: auto;\n  padding: 5px 15px;\n  align-items: center;\n  width: 100%;\n"]);return me=function(){return e},e}var be=v.a.button(me());function he(){var e=Object(h.a)(["\n  position: relative;\n  display: inline-block;\n  background-color: #bbada0;\n  padding: 15px 25px;\n  font-size: 25px;\n  font-weight: bold;\n  border-radius: 3px;\n  color: white;\n  min-width: 100px;\n  margin-left: 20px;\n  text-align: center;\n  padding: 20px 25px 0;\n  line-height: 47px;\n  ::after {\n    content: '","';\n    position: absolute;\n    width: 100%;\n    top: 10px;\n    left: 0;\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 13px;\n    text-align: center;\n    color: #eee4da;\n  }\n"]);return he=function(){return e},e}var ve=v.a.div(he(),function(e){return e.title}),xe=(t(37),function(e){function n(e){var t;return Object(f.a)(this,n),(t=Object(d.a)(this,Object(m.a)(n).call(this,e))).modal=document.createElement("div"),t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){document.body.appendChild(this.modal)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.modal)}},{key:"render",value:function(){var e=this.props,n=e.closeModal,t=e.children;return o.createPortal(a.a.createElement("div",{id:"myModal",className:"modal"},a.a.createElement("div",{className:"modal-content"},a.a.createElement("div",{className:"modal-header"},a.a.createElement("span",{className:"close",onClick:n},"\xd7"),a.a.createElement("h3",null,"2048")),a.a.createElement("div",{className:"modal-body"},a.a.createElement("h2",null,t)),a.a.createElement("div",{className:"modal-footer"},a.a.createElement("h4",null,"The game will be restarted.")))),this.modal)}}]),n}(r.Component)),ye=function(e){function n(){var e,t;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={cells:N(),score:0,bestScore:0,isModalOpen:!1},t.mapKeyCodeToDirection={ArrowLeft:A.LEFT,ArrowDown:A.DOWN,ArrowRight:A.RIGHT,ArrowUp:A.UP},t.startNewGame=function(){t.setState(function(e){return Object(s.a)({},e,{cells:N(),score:0,isModalOpen:!1})})},t.restartGame=function(){t.setState(function(e){return Object(s.a)({},e,{isModalOpen:!0})})},t.handleKeyPress=function(){var e=Object(u.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!["ArrowLeft","ArrowDown","ArrowRight","ArrowUp"].includes(n.code)){e.next=5;break}return t.setState(function(e){return Object(s.a)({},e,{cells:G(e.cells,t.mapKeyCodeToDirection[n.code])})}),e.next=4,Oe(K);case 4:t.setState(function(e){return Object(s.a)({},e,{cells:P(e.cells)})},function(){t.setState(function(e){var n=W(e.cells,t.startNewGame),r=e.score+B(e.cells);return r===V?Object(s.a)({},e,{isModalOpen:!0}):n.length?Object(s.a)({},e,{cells:n,score:r}):void t.restartGame()},function(){t.setState(function(e){return Object(s.a)({},e,{bestScore:e.bestScore<e.score?e.score:e.bestScore})})})});case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"componentWillMount",value:function(){localStorage.getItem("bestScore")&&this.setState({bestScore:JSON.parse(localStorage.getItem("bestScore"))})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUpdate",value:function(e,n){localStorage.setItem("bestScore",JSON.stringify(n.bestScore))}},{key:"render",value:function(){var e=this.state,n=e.cells,t=e.score,r=e.bestScore,o=e.isModalOpen;return a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null,a.a.createElement(g,null,"2048"),a.a.createElement(de,null,a.a.createElement(E,null,a.a.createElement(be,{onClick:this.startNewGame},"New Game")),a.a.createElement(j,null,a.a.createElement(ve,{title:"Score"},t),a.a.createElement(ve,{title:"Best Score"},r))),a.a.createElement(pe,{cells:n}),a.a.createElement(k,null,a.a.createElement("strong",{style:{textTransform:"upperCase"}},"How to play:\xa0"),"Use your",a.a.createElement("strong",null," arrow keys \u2190 \u2191 \u2192 \u2193")," to move the tiles. When two tiles with the same number touch, they",a.a.createElement("strong",null," merge into one!"))),o&&a.a.createElement(xe,{closeModal:this.startNewGame},t===V?a.a.createElement("span",{style:{color:"green"}},"You won! Congratulations."):a.a.createElement("span",{style:{color:"red"}},"Sorry. You lost!")))}}]),n}(r.Component),Oe=function(e){return new Promise(function(n){return setTimeout(n,e)})},we=ye;c.a.render(a.a.createElement(we,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.532c06b5.chunk.js.map