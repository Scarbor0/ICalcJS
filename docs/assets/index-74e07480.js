var d=Object.defineProperty;var g=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var l=(o,t,e)=>(g(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class f{constructor(t,e){l(this,"$btns");l(this,"limitNumbers");l(this,"$primaryScreen");l(this,"$operationsScreen");l(this,"varResult");l(this,"varOperationResult");l(this,"symbolsNumRegex");l(this,"symbolsMathRegex");l(this,"arrAllSymbols");l(this,"additionAndSubtractionOperators");l(this,"multiplicationAndDivisionOperators");l(this,"equalResult");l(this,"countHistoryResults");l(this,"mPlusMemory");l(this,"countAC");l(this,"lastResult");this.$btns=document.querySelector(t),this.limitNumbers=e.limitNumbers,this.$primaryScreen=document.querySelector("#primary-screen"),this.$operationsScreen=document.querySelector("#operations-screen"),this.varResult=[],this.varOperationResult=[],this.equalResult=null,this.countHistoryResults=0,this.symbolsNumRegex=/[0-9.,\-$]/,this.symbolsMathRegex=/^[÷×\–+]$/,this.additionAndSubtractionOperators=["+","–"],this.multiplicationAndDivisionOperators=["×","÷"],this.arrAllSymbols=["+","–","×","÷"],this.mPlusMemory=null,this.countAC=0,this.lastResult=""}fnLastHistoryScreen(){return document.querySelector("#operations-screen span:last-child")}cleraAllScrean(){this.fnLastHistoryScreen().innerHTML="<span></span>",this.$primaryScreen.innerText=""}clearAll(){this.varResult=[],this.varOperationResult=[],this.countHistoryResults=0,this.equalResult=null,!this.varResult[0]&&!this.varOperationResult[0]&&this.cleraAllScrean()}onlyOneDot(){this.varResult[0]&&(this.varResult[this.varResult.length-1]=this.varResult[this.varResult.length-1].replace(/[^.\d-]+/g,"").replace(/^([^\.]*\.)|\./g,"$1"))}clickBtns(){var t;return(t=this.$btns)==null||t.addEventListener("click",e=>{if(e.target){const r=e.target,s=r.dataset;if(r.closest(".button")){if(this.delLastNumber(s),console.log(this.varOperationResult),console.log(this.varOperationResult[this.varOperationResult.length-1]),console.log("this.varResult",this.varResult),console.error("this.equalResult",this.equalResult),console.error("TYPE this.equalResult",typeof this.equalResult),s.number){if(this.varResult[0]&&this.varResult[this.varResult.length-1].length>=this.limitNumbers&&s.number!=="-")return;//! LIMIT NUMBERS!!!!
//! Bnts Number
switch(!0){case this.symbolsNumRegex.test(this.varResult[this.varResult.length-1]):this.varResult[this.varResult.length-1]+=s.number,this.varOperationResult[this.varOperationResult.length-1]+=s.number;break;case(!this.varResult[0]||this.symbolsMathRegex.test(this.varResult[this.varResult.length-1])):this.varResult.push(s.number),this.varOperationResult.push(s.number);break}this.onlyOneDot(),console.warn("this.equalResult",this.equalResult)}if(s.math){//! Bnts Math Symbols
if(this.equalResult&&!this.varResult[0]){//! 999 999 + 999 999 = res + ...
this.varOperationResult.push(this.addSpacesToNumber(this.equalResult)),this.varResult.push(this.equalResult)}this.symbolsMathRegex.test(this.varResult[this.varResult.length-1])?(this.varResult[this.varResult.length-1]=s.math,this.varOperationResult[this.varOperationResult.length-1]=s.math):this.symbolsNumRegex.test(this.varResult[this.varResult.length-1])&&(this.varResult.push(s.math),this.varOperationResult.push(s.math))}s.equal==="="&&this.equalLastNum(),s.percent==="%"&&this.percentBtn(),this.allFormatNumberForDisplay(s),this.btnMplus(s),this.mClear(s),this.clearScreens(s),this.mScreenStyles(),this.renderScreen(s),this.mRecall(s),!this.varResult[0]&&this.equalResult&&(this.$primaryScreen.innerText=this.addSpacesToNumber(this.equalResult)),this.varResult[0]&&(this.equalResult=null),this.errDivisionDero(),this.scrollDown()}}}),this}percentBtn(){if(this.varResult[2]!==""){//! 10, +, 20, %,
if(this.additionAndSubtractionOperators.includes(this.varResult[this.varResult.length-2])){//! [+ -]
this.varResult[this.varResult.length-1]=+this.varResult[this.varResult.length-3]/100*+this.varResult[this.varResult.length-1]+""}else if(this.multiplicationAndDivisionOperators.includes(this.varResult[this.varResult.length-2])){//! [× ÷]
this.varResult[this.varResult.length-1]=+this.varResult[this.varResult.length-1]/100+""}}if(this.varResult[1]!==""){//! 10, +, %
if(this.additionAndSubtractionOperators.includes(this.varResult[this.varResult.length-1])){//! [+ -]
this.varResult.push(this.varResult[this.varResult.length-2]),this.varOperationResult.push(this.varResult[this.varResult.length-2]),this.varResult[this.varResult.length-1]=+this.varResult[this.varResult.length-3]/100*+this.varResult[this.varResult.length-1]+""}else if(this.multiplicationAndDivisionOperators.includes(this.varResult[this.varResult.length-1])){//! [× ÷]
this.varResult.push(this.varResult[this.varResult.length-2]),this.varOperationResult.push(this.varResult[this.varResult.length-2]),this.varResult[this.varResult.length-1]=+this.varResult[this.varResult.length-1]/100+""}}if(this.varResult.length===1){//! 10, +, %
if(!this.arrAllSymbols.includes(this.varResult[this.varResult.length-1])){//! not[+ - × ÷]
console.log("!this.arrAllSymbols.includes(this.varResult[this.varResult.length - 1])) {//! not[+ - × ÷]"),this.varResult[this.varResult.length-1]=+this.varResult[this.varResult.length-1]/100+""}}this.varResult[this.varResult.length-1]=this.fnToFixed(+this.varResult[this.varResult.length-1])+""}errDivisionDero(){const t="Error";this.equalResult==="Infinity"&&(this.equalResult=null,this.$primaryScreen.innerHTML=t)}updatePrimaryScreen(){this.varResult&&(this.$primaryScreen.innerText=this.varResult[this.varResult.length-1])}updateOperationsScreen(){this.varOperationResult[0]&&(this.$operationsScreen.innerText=this.varOperationResult[this.varOperationResult.length-1])}updateAllScreen(){this.updatePrimaryScreen(),this.updateOperationsScreen()}clearScreens(t){const e=document.querySelector('[data-clear="ac"]');t.clear==="ac"?(this.countAC+=1,this.countAC===1&&(console.warn("$bntAC",e.innerHTML),this.varResult.pop(),this.varOperationResult.pop(),this.equalResult=null,this.updatePrimaryScreen(),this.varOperationResult[0]||(this.fnLastHistoryScreen().innerText=""),!this.varOperationResult[0]&&!this.varResult[0]&&this.$operationsScreen.innerText!==""&&(this.countAC+=1)),this.countAC===2&&this.clearAll(),this.countAC>=3&&(this.$operationsScreen.innerHTML="<span></span>",this.clearAll())):this.countAC=0,this.varResult[0]||this.equalResult?e.innerHTML="C":!this.varOperationResult[0]&&!this.varResult[0]&&(e.innerHTML="AC"),console.error("this.countAC =",this.countAC)}equalLastNum(){this.varResult.length>=2&&this.symbolsMathRegex.test(this.varResult[this.varResult.length-1])&&(this.varResult.push(this.varResult[this.varResult.length-2]),this.varOperationResult.push(this.varResult[this.varResult.length-2]))}addingBrackets(){let t="",e,r=[!1,!1];this.varOperationResult.forEach((s,i)=>{this.varOperationResult[i]=s.replace(/\(+|\)+/,"");//! Del All Bracket ( )!
["×","÷"].includes(s)&&(r[0]=!0,console.log("statusAllOperators[0] = ",r[0])),["+","–"].includes(s)&&(r[1]=!0,console.log("statusAllOperators[1] = ",r[1])),r[0]===!0&&r[1]===!0&&(e=!0),console.log("status = ",e)}),e&&this.varOperationResult.forEach((s,i)=>{["×","÷"].includes(s)&&(!this.varOperationResult[i-2]||["+","–"].includes(this.varOperationResult[i-2]))&&(this.varOperationResult[i-1]=this.varOperationResult[i-1].replace(/^/,"("),t="(",console.error("item = ",s),console.log("status = ",e)),["+","–"].includes(s)&&t==="("&&(!this.varOperationResult[i-2]||["×","÷"].includes(this.varOperationResult[i-2]))&&(this.varOperationResult[i-1]=this.varOperationResult[i-1].replace(/$/,")").replace(/\)\)$/,")"),t=")",console.error("item = ",s),console.log("status = ",e))})}closeBracket(t){let e="";this.varOperationResult.forEach((r,s)=>{/\(/.test(r)?e="(":/\)/.test(r)&&(e=")"),e==="("&&t.equal==="="&&s===this.varOperationResult.length-1&&(this.varOperationResult[this.varOperationResult.length-1]=this.varOperationResult[this.varOperationResult.length-1].replace(/$/,")").replace(/\)\)$/,")"),console.log("this.varOperationResult",this.varOperationResult))})}delLastNumber(t){t.clearone==="c"&&this.varResult[0]&&(console.log("BTN C-One"),console.log("this.varOperationResult",this.varOperationResult),this.varResult[this.varResult.length-1]=this.varResult[this.varResult.length-1].slice(0,-1).replace(/-$/,""),this.varResult[this.varResult.length-1]===""&&(this.varResult.pop(),this.varOperationResult.pop(),this.varResult[0]||(this.varOperationResult=[],this.fnLastHistoryScreen().innerHTML="<span></span>")))}allFormatNumberForDisplay(t){this.numNegative(this.varResult),this.numNegative(this.varOperationResult),this.zeroDot(t,this.varResult),this.zeroDot(t,this.varOperationResult),this.addingBrackets(),this.zeroDotZeroFix()}zeroDotZeroFix(){this.varOperationResult[1]&&/[,\.]0+$/.test(this.varOperationResult[this.varOperationResult.length-2])&&(this.varOperationResult[this.varOperationResult.length-2]=this.varOperationResult[this.varOperationResult.length-2].replace(/[,\.]0+$/,""))}mathOperations(){function t(s){const i=[],a=[],v={"+":1,"–":1,"×":2,"÷":2};for(const h of s)if(!isNaN(Number(h)))a.push(Number(h));else if(["+","–","×","÷"].includes(h)){for(;i.length>0&&v[i[i.length-1]]>=v[h];){const c=i.pop(),R=a.pop(),m=a.pop();a.push(e(m,R,c))}i.push(h)}else return null;for(;i.length>0;){const h=i.pop(),c=a.pop(),R=a.pop();a.push(e(R,c,h))}return a.length!==1?null:a[0]}function e(s,i,a){switch(a){case"+":return s+i;case"–":return s-i;case"×":return s*i;case"÷":return s/i;default:return NaN}}const r=t(this.varResult);if(isNaN(r))console.error("Помилка обчислення");else{let s=this.fnToFixed(r)+"";return this.equalResult=s,console.warn("this.equalResult",this.equalResult),console.warn("typeof this.equalResult",typeof this.equalResult),s}}fnToFixed(t){if(typeof t=="number"){let e=+t.toFixed(this.limitNumbers);if(e=+e.toPrecision(this.limitNumbers+4),/[\.,]/.test(e+"")){let r=e+"".replace(/\.$/,"").replace(/0+$/,"");e=+r,r=e+"".replace(/0+$/,"").replace(/[\.,]$/,"").replace(/0+$/,""),e=+r}return e}}symbolsToDot(t){const r=t.toString().split(".");if(r.length===2){const i=r[0].length+1;if(i<this.limitNumbers)return this.limitNumbers-i}else return this.limitNumbers}renderScreen(t){if(this.varResult.length>=3&&this.symbolsNumRegex.test(this.varResult[this.varResult.length-1])&&(this.lastResult=this.mathOperations()),console.error("lastResultlastResult",this.lastResult),this.varOperationResult[0]&&(this.$primaryScreen.innerHTML=this.addSpacesToNumber(this.varResult[this.varResult.length-1]),this.varOperationResult.length>=3&&this.symbolsMathRegex.test(this.$primaryScreen.innerHTML)&&(this.$primaryScreen.innerHTML=this.addSpacesToNumber(this.lastResult))),this.symbolsNumRegex.test(this.varResult[this.varResult.length-1])){this.varOperationResult[this.varOperationResult.length-1]=this.addSpacesToNumber(this.varResult[this.varResult.length-1]);//!=====================================
this.closeBracket(t);//!=====================================
}else this.varResult[0]||(this.$primaryScreen.innerText="0");this.varOperationResult[0]&&(this.fnLastHistoryScreen().innerHTML=this.varOperationResult.join(" ").replace(/(\d)\s+(\d)/g,"$1&nbsp;$2"));//!======
t.equal==="="&&this.renderActionEqualBtn(),this.preLastHistoryLine()}renderActionEqualBtn(){this.varResult.length>=3&&this.symbolsNumRegex.test(this.varResult[this.varResult.length-1])&&this.varResult&&(this.countHistoryResults+=1,this.mathOperations(),this.equalResult==="Infinity"?this.$operationsScreen.insertAdjacentHTML("beforeend",`
        <span class="res-equal res-equal-line">Error</span>
        `):this.$operationsScreen.insertAdjacentHTML("beforeend",`
      <span class="res-equal res-equal-line">${this.addSpacesToNumber(this.equalResult)}</span>
      `),this.$operationsScreen.insertAdjacentHTML("beforeend",`
      <span class="history">
      </span>`),this.equalResult==="Infinity"?this.$primaryScreen.innerText=this.equalResult:this.$primaryScreen.innerText=this.addSpacesToNumber(this.equalResult),this.scrollDown(),this.varResult=[],this.varOperationResult=[])}scrollDown(){this.$operationsScreen.scrollTo(0,document.body.scrollHeight)}preLastHistoryLine(){const t=document.querySelectorAll("#operations-screen span");t.forEach((e,r)=>{e.classList.contains("res-equal")&&t[r-1].classList.add("equal-line")})}clickEqual(){const t=document.querySelector('[data-equal="="]');console.error("$equalBtn",t),t.click()}btnMplus(t){const e=document.querySelector(".calc__m-screen"),r=()=>{this.mPlusMemory&&(this.mPlusMemory=this.fnToFixed(this.mPlusMemory)),console.error("this.mPlusMemory",this.mPlusMemory),(this.mPlusMemory||this.mPlusMemory===0)&&(e.style.opacity="1",e.innerHTML=this.addSpacesToNumber(`<span>M =</span> &nbsp ${this.mPlusMemory}`),e.innerText!==""?e.style.opacity="1":e.style.opacity="0")};(()=>{t.m==="m+"&&(this.varResult.length>=2&&!this.equalResult?(this.clickEqual(),this.mPlusMemory=this.mPlusMemory+Number(this.equalResult)):this.varResult.length===1&&!this.equalResult?this.mPlusMemory=this.mPlusMemory+Number(this.varResult[this.varResult.length-1]):this.equalResult&&(this.mPlusMemory=this.mPlusMemory+Number(this.equalResult)),r()),t.m==="m-"&&(this.varResult.length>=2&&!this.equalResult?(this.clickEqual(),this.mPlusMemory=this.mPlusMemory-Number(this.equalResult)):this.varResult.length===1&&!this.equalResult?this.mPlusMemory=this.mPlusMemory-Number(this.varResult[this.varResult.length-1]):this.equalResult&&(this.mPlusMemory=this.mPlusMemory-Number(this.equalResult)),r())})()}mClear(t){const e=document.querySelector(".calc__m-screen");t.m==="mc"&&(this.mPlusMemory=null,e.innerText="",e.style.opacity="0")}mRecall(t){t.m==="mr"&&this.mPlusMemory&&(this.symbolsNumRegex.test(this.varResult[this.varResult.length-1])&&this.varResult[0]?(this.varResult.pop(),this.varOperationResult.pop(),this.varResult.push(this.mPlusMemory+""),this.varOperationResult.push(this.mPlusMemory+"")):this.symbolsMathRegex.test(this.varResult[this.varResult.length-1])&&this.varResult[0]?(this.varResult.push(this.mPlusMemory+""),this.varOperationResult.push(this.mPlusMemory+"")):this.varResult[0]||(this.varResult.push(this.mPlusMemory+""),this.varOperationResult.push(this.mPlusMemory+""))),this.renderScreen(t)}mScreenStyles(){const t="m-sceen-on",e=document.querySelector(".calc__m-screen");e.textContent!==""?e.classList.add(t):e.textContent===""&&e.classList.remove(t)}lastNumInResult(){let t="";return this.symbolsNumRegex.test(this.varResult[this.varResult.length-1])&&(t=this.varResult[this.varResult.length-1]),t}lastIndex(t){return t[t.length-1]}zeroDot(t,e){e[0]&&(e[e.length-1]==="."||e[e.length-1]===","?e[e.length-1]="0"+e[e.length-1]:e[e.length-1]==="00"&&(e[e.length-1]="0"),e[e.length-1]=e[e.length-1].replace(/^0([1-9])/,"$1").replace(/^-0([1-9])/,"-$1")),/[\.\,]$/.test(e[e.length-2])&&(e[e.length-2]=e[e.length-2].replace(/[\.\,]$/,""),this.$primaryScreen.innerHTML=this.addSpacesToNumber(this.varResult[this.varResult.length-2])),/[\.\,]$/.test(e[e.length-1])&&t.equal==="="&&(e[e.length-1]=e[e.length-1].replace(/[\.\,]$/,""))}numNegative(t){t[0]&&/-$/.test(t[t.length-1])&&(t[t.length-1]=t[t.length-1].replace(/-$/,""),t[t.length-1]="-"+t[t.length-1],t[t.length-1]==="-"&&(t[t.length-1]=t[t.length-1]+"0")),t[0]&&/^-\-+/.test(t[t.length-1])&&(t[t.length-1]=t[t.length-1].replace(/-+/,""))}addSpacesToNumber(t){let[e,r]=t.split(".");e=e.replace(/\B(?=(\d{3})+(?!\d))/g," ");//! ставить пробіли "1 234 000.5678"
e=e.replace(/^[.,]/,"0$&");let s=r?`${e},${r}`:e;return(this.lastIndex(t.toString())==="."||this.lastIndex(t.toString())===",")&&(s+=","),s}}class y{constructor(t){l(this,"$btn");l(this,"$btnsMath");l(this,"$btnsContainer");l(this,"$container");l(this,"$screenContainer");l(this,"$primaryScreen");l(this,"arrAllSymbols");this.$btn=document.querySelector(t.btn),this.$btnsMath=document.querySelector(t.btnsMath),this.$btnsContainer=document.querySelector(t.btnsContainer),this.$container=document.querySelector(t.container),this.$screenContainer=document.querySelector(t.screenContainer),this.$primaryScreen=document.querySelector(t.primaryScreen),this.arrAllSymbols=t.arrAllSymbols}autoBorderRadiusInCalc(){const t=window.getComputedStyle(this.$btnsContainer),e=this.$btn.clientHeight,r=parseFloat(t.getPropertyValue("padding"));return this.$container.style.borderRadius=e/2+r+"px",this}adaptiveFSScreen(){const t=parseFloat(getComputedStyle(this.$screenContainer).paddingLeft),e=parseFloat(getComputedStyle(this.$screenContainer).paddingRight),r=this.$screenContainer.offsetWidth-t-e-5;console.log("widthContainer",r);let s=parseInt(window.getComputedStyle(this.$primaryScreen).fontSize);for(;this.$primaryScreen.offsetWidth>r&&s>=20;)s-=1,this.$primaryScreen.style.fontSize=`${s}px`;for(;this.$primaryScreen.offsetWidth<r&&s<=87.5;)s+=1,this.$primaryScreen.style.fontSize=`${s}px`;return b(),this}btnsTouch(){function t(r){let s="",i=r.className;i.includes("button__m")&&(s="#737371"),i.includes("button__control")&&(s="#D9D9D9"),i.includes("button__number")&&(s="#737373"),i.includes("button__math")&&(s="#F3C895"),r.style.backgroundColor=s,r.style.transition="background-color 0s, opacity 0.5s, transform 0.2s"}function e(r){r.style.transition="background-color 0.5s, opacity 0.5s, transform 0.2s",setTimeout(function(){r.style.backgroundColor=""},20)}this.$btnsContainer.addEventListener("touchstart",r=>{const s=r.target;if(s.className.includes("button")){//! Android Vibration
s.closest(".button")&&navigator.vibrate&&navigator.vibrate(50)}t(s)},!1),this.$btnsContainer.addEventListener("mousedown",r=>{const s=r.target;t(s)}),this.$btnsContainer.addEventListener("mouseup",r=>{const s=r.target;e(s)}),this.$btnsContainer.addEventListener("touchend",function(r){const s=r.target;e(s)},!1)}activeMathBtns(){const t=document.querySelectorAll("[data-math]");console.log("mathBtnsmathBtns",getComputedStyle(t[0]).backgroundColor),this.$btnsContainer.addEventListener("click",e=>{if(e.target){let r=function(){t.forEach(a=>{a.classList.remove("button__math-active")})};const s=e.target,i=s.dataset;s.closest(".button")&&(i.math&&u().length>1&&this.arrAllSymbols.includes(u()[u().length-1])&&(r(),s.classList.add("button__math-active")),this.arrAllSymbols.includes(u()[u().length-1])||r())}})}}const b=()=>n.scrollDown(),u=()=>n.varResult,n=new f("#buttonsCalc",{limitNumbers:13});n.clickBtns();const p=new y({btn:"[data-equal]",btnsMath:"[data-math]",btnsContainer:"#buttonsCalc",container:".calc",screenContainer:".calc__screen",primaryScreen:"#primary-screen",arrAllSymbols:n.arrAllSymbols});p.autoBorderRadiusInCalc().adaptiveFSScreen().btnsTouch();p.activeMathBtns();const S=document.querySelector("#buttonsCalc");S.addEventListener("click",()=>{p.adaptiveFSScreen(),console.warn("calc.varResult",n.varResult),console.warn("calc.varOperationResult",n.varOperationResult),console.warn("calc.equalResult",n.equalResult),console.warn("calc.lastNumInResult()",n.lastNumInResult()),console.warn("calc.lastNumInResult()",n.countHistoryResults)});