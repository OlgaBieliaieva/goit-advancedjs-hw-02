import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as d,i as l}from"./assets/vendor-651d7991.js";const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),t[0]<Date.now())return l.error({message:"Please choose a date in the future"});e.setDateBtn.removeAttribute("disabled")}};d("#datetime-picker",m);const e={dateInput:document.querySelector("input"),setDateBtn:document.querySelector("button"),timer:{days:document.querySelector(".value[data-days]"),hours:document.querySelector(".value[data-hours]"),minutes:document.querySelector(".value[data-minutes]"),seconds:document.querySelector(".value[data-seconds]")}};e.setDateBtn.setAttribute("disabled",!0);e.setDateBtn.addEventListener("click",f);let a=null;function f(){const t=new Date(`${e.dateInput.value}`);a=setInterval(()=>{const r=Date.now(),n=t-r;n<1e3&&h(a),v(n)},1e3)}function h(t){clearInterval(t)}function y(t,r,n,o){e.timer.days.textContent=t,e.timer.hours.textContent=r,e.timer.minutes.textContent=n,e.timer.seconds.textContent=o}function p({...t}){const n=Object.values(t).map(o=>String(o).length<2?String(o).padStart(2,"0"):String(o));y(...n)}function v(t){const s=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);p({days:s,hours:u,minutes:i,seconds:c})}
//# sourceMappingURL=commonHelpers2.js.map