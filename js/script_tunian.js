let newYearTimer=null;var newYear=()=>{if(clearTimeout(newYearTimer),!document.querySelector("#newYear"))return;let e=new Date("2023-01-22 00:00:00").getTime()/1e3,n={0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"};function a(e){return e>9?e:"0"+e}!function r(){let t=new Date;document.querySelector("#newYear .today").innerHTML=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+n[t.getDay()];let u=e-Math.round(t.getTime()/1e3);if(u<0)document.querySelector("#newYear .title").innerHTML="Happy New Year!",document.querySelector("#newYear .newYear-time").innerHTML='<span class="happyNewYear">新年快乐</p>';else if(document.querySelector("#newYear .title").innerHTML="距离2023年春节：",u>86400)document.querySelector("#newYear .newYear-time").innerHTML=`<span class="day">${Math.ceil(u/86400)}<span class="unit">天</span></span>`;else{let e=a(parseInt(u/3600));u%=3600;let n=a(parseInt(u/60));u%=60;let t=a(u);document.querySelector("#newYear .newYear-time").innerHTML=`<span class="time">${e}:${n}:${t}</span></span>`,newYearTimer=setTimeout(r,1e3)}}(),jQuery(document).ready((function(e){e("#newYear").wpSuperSnow({flakes:["/img/yb1.webp","/img/yb2.webp","/img/yb3.webp"],totalFlakes:"100",zIndex:"999999",maxSize:"30",maxDuration:"20",useFlakeTrans:!1})}))};let newYearBgNum=1,newYearBgTimer=null;var newYearBg=()=>{clearInterval(newYearBgTimer);let e=document.querySelector("#newYear-main");e&&(e.style.backgroundImage=`url(https://recclay.oss-cn-chengdu.aliyuncs.com/img_for_typora/tunian${newYearBgNum}.webp)`,newYearBgTimer=setInterval((()=>{e.style.backgroundImage=`url(https://recclay.oss-cn-chengdu.aliyuncs.com/img_for_typora/tunian${3==newYearBgNum?newYearBgNum=1:newYearBgNum+=1}.webp)`}),1e4))};function whenDOMReady(){newYear(),newYearBg()}whenDOMReady(),document.addEventListener("pjax:complete",whenDOMReady);