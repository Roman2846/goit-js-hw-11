import{a as f,S as d,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="56021293-60892665a75ee5bfc51222dea",y="https://pixabay.com/api/";async function g(o){return(await f.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){return o.map(({webformatURL:i,largeImageURL:r,tags:n,likes:e,views:t,comments:s,downloads:p})=>`
        <li class="gallery-item">
          <a href="${r}">
            <img
              src="${i}"
              alt="${n}"
              loading="lazy"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${e}</p>
            <p><b>Views</b> ${t}</p>
            <p><b>Comments</b> ${s}</p>
            <p><b>Downloads</b> ${p}</p>
          </div>
        </li>
      `).join("")}function L(o){c.insertAdjacentHTML("beforeend",b(o)),h.refresh()}function v(){c.innerHTML=""}function S(){l.classList.add("is-visible")}function w(){l.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",$);async function $(o){o.preventDefault();const i=o.target.elements["search-text"].value.trim();if(!i){a.warning({title:"Увага",message:"Введіть пошуковий запит",position:"topRight"});return}v(),S();try{const r=await g(i);if(!r.hits||r.hits.length===0){a.error({title:"Нічого не знайдено",message:"Спробуйте інший запит",position:"topRight"});return}L(r.hits),a.success({title:"Готово",message:`Знайдено ${r.hits.length} зображень`,position:"topRight"})}catch(r){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.error(r)}finally{w()}u.reset()}
//# sourceMappingURL=index.js.map
