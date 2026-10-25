(() => {
  "use strict";
  const items = Array.isArray(window.RUANGMEDIA_ITEMS) ? window.RUANGMEDIA_ITEMS : [];
  const getTPs = item => {
    if (Array.isArray(item.tp)) return item.tp; return item.tp ? [item.tp] : []; };
  const grid = document.getElementById("mediaGrid");
  const searchInput = document.getElementById("searchInput");
  const subjectFilter = document.getElementById("subjectFilter");
  const chapterFilter = document.getElementById("chapterFilter");
  const tpFilter = document.getElementById("tpFilter");
  const hierarchySummary = document.getElementById("hierarchySummary");
  const categoryRow = document.getElementById("categoryRow");
  const resultsText = document.getElementById("resultsText");
  const allCount = document.getElementById("allCount");
  const emptyState = document.getElementById("emptyState");
  const resetFilters = document.getElementById("resetFilters");
  const modal = document.getElementById("playerModal");
  const playerFrameWrap = document.getElementById("playerFrameWrap");
  const mediaFrame = document.getElementById("mediaFrame");
  const playerTitle = document.getElementById("playerTitle");
  const playerDescription = document.getElementById("playerDescription");
  const openNewTab = document.getElementById("openNewTab");
  const closePlayerButton = document.getElementById("closePlayer");
  const playerBack = document.getElementById("playerBack");
  const fullscreenButton = document.getElementById("fullscreenButton");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  let activeSubject = "all", activeChapter = "all", activeTP = "all", previousFocus = null;

  const iconMarkup = {
    triangle: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 38 24 9l16 29H8Z"/><path d="M24 9v29M24 29h16"/><path d="M19 38v-5h5"/></svg>',
    pie: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6v18h18A18 18 0 1 1 24 6Z"/><path d="M29 5a18 18 0 0 1 14 14H29V5Z"/></svg>',
    leaf: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M40 7C21 7 9 14 9 28a13 13 0 0 0 13 13C36 41 41 25 40 7Z"/><path d="M7 42c8-13 16-19 28-28"/></svg>',
    orbit: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="4"/><ellipse cx="24" cy="24" rx="19" ry="9" transform="rotate(-35 24 24)"/><ellipse cx="24" cy="24" rx="19" ry="9" transform="rotate(55 24 24)"/><circle cx="40" cy="14" r="2"/></svg>',
    map: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m5 11 12-5 14 5 12-5v31l-12 5-14-5-12 5V11Z"/><path d="M17 6v31M31 11v31"/><path d="m23 17 5 5-5 5-5-5 5-5Z"/></svg>',
    monitor: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="7" width="38" height="27" rx="3"/><path d="M17 41h14M24 34v7M12 14h11M12 20h18M12 26h8"/></svg>',
    sigma: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M34 9H14l12 14-12 16h20"/><path d="M14 9v30"/></svg>',
    pythagoras: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 39V9l30 30H8Z"/><path d="M8 33h6v6"/><text x="5" y="24" font-size="7" fill="currentColor" stroke="none">b</text><text x="22" y="45" font-size="7" fill="currentColor" stroke="none">a</text><text x="25" y="19" font-size="7" fill="currentColor" stroke="none">c</text></svg>',
    linear: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 13h32M8 24h32M8 35h32"/><path d="M12 9v8M36 9v8M12 20v8M36 20v8M12 31v8M36 31v8"/><text x="24" y="16" text-anchor="middle" font-size="8" fill="currentColor" stroke="none">x+2=5</text><text x="24" y="27" text-anchor="middle" font-size="8" fill="currentColor" stroke="none">x&lt;3</text></svg>',
    book: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 10a14 14 0 0 1 19 3v28a14 14 0 0 0-19-3V10Z"/><path d="M43 10a14 14 0 0 0-19 3v28a14 14 0 0 1 19-3V10Z"/></svg>'
  };
  const colorMap = {mint:"#e4f3ef", lavender:"#e9eafb", yellow:"#fbf0d7", blue:"#e5edf9", peach:"#f9e8df", redSoft: "#F8D7DA",
  greenSoft: "#D8EEDC",
  navy: "#1E2A5A"};
  const unique = values => [...new Set(values.filter(Boolean))].sort((a,b)=>a.localeCompare(b,"id"));
  function escapeHTML(value) { return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
  function fillSelect(select, firstLabel, values, selected="all") {
    select.innerHTML = "";
    const first = document.createElement("option"); first.value = "all"; first.textContent = firstLabel; select.appendChild(first);
    values.forEach(value => { const option=document.createElement("option"); option.value=value; option.textContent=value; select.appendChild(option); });
    select.value = values.includes(selected) ? selected : "all";
  }
  function getSubjectItems() { return items.filter(item => activeSubject === "all" || item.subject === activeSubject); }
  function updateChapterOptions() {
    const values = unique(getSubjectItems().map(item=>item.chapter));
    fillSelect(chapterFilter,"Semua BAB",values,activeChapter);
    activeChapter = chapterFilter.value;
    updateTPOptions();
  }
  
function updateTPOptions() {
  const values = unique(
    getSubjectItems()
      .filter(item => activeChapter === "all" || item.chapter === activeChapter)
      .flatMap(getTPs)
  );

  fillSelect(tpFilter, "Semua TP", values, activeTP);
  activeTP = tpFilter.value;
};
  function initializeFilters() {
    const subjects = unique(items.map(item=>item.subject));
    subjects.forEach(subject => {
      const option=document.createElement("option"); option.value=subject; option.textContent=subject; subjectFilter.appendChild(option);
      const button=document.createElement("button"); button.className="category-pill"; button.dataset.subject=subject; button.textContent=subject;
      const count=document.createElement("span"); count.textContent=String(items.filter(item=>item.subject===subject).length).padStart(2,"0"); button.appendChild(count); categoryRow.appendChild(button);
    });
    allCount.textContent=String(items.length).padStart(2,"0"); updateChapterOptions();
  }
  function filteredItems() {
    const query=searchInput.value.trim().toLocaleLowerCase("id");
    return items.filter(item => {
      const matchesSubject=activeSubject === "all" || item.subject===activeSubject;
      const matchesChapter=activeChapter === "all" || item.chapter===activeChapter;
      const matchesTP = activeTP === "all" || getTPs(item).includes(activeTP);
     const searchable = [
  item.title,
  item.subject,
  item.chapter,
  getTPs(item).join(" "),
  item.level,
  item.type,
  item.description
].join(" ").toLocaleLowerCase("id");
      return matchesSubject && matchesChapter && matchesTP && (!query || searchable.includes(query));
    });
  }
  function cardMarkup(item,index) {
    const icon=iconMarkup[item.icon]||iconMarkup.book;
    const thumb=item.thumbnail ? `<img src="${escapeHTML(item.thumbnail)}" alt="" loading="lazy" class="thumb-image">` : `<div class="thumb-art">${icon}</div>`;
    return `<article class="media-card"><div class="media-thumb" style="background:${colorMap[item.color]||colorMap.mint}"><span class="thumb-tag">${escapeHTML(item.subject||"MEDIA")}</span>${thumb}<span class="thumb-number">${String(index+1).padStart(2,"0")}</span></div>
      <div class="media-card-body"><div class="card-meta">${escapeHTML(item.level||"Umum")} <span class="meta-dot"></span> ${escapeHTML(item.subject||"Media")}</div>
      <h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description||"Media pembelajaran interaktif.")}</p>
      <div class="card-hierarchy"><span>${escapeHTML(item.chapter||"BAB belum diatur")}</span><span>${escapeHTML(getTPs(item).join(", ") || "TP belum diatur")}</span></div>
      <div class="card-bottom"><span class="media-type">${escapeHTML(item.type||"Media interaktif")}</span><button class="card-open" type="button" data-open-media="${escapeHTML(item.id)}">Buka media <span aria-hidden="true">→</span></button></div></div></article>`;
  }
  function render() {
    const list=filteredItems(); grid.innerHTML=list.map(cardMarkup).join(""); emptyState.hidden=list.length>0; grid.hidden=list.length===0;
    resultsText.innerHTML=`Menampilkan <strong>${list.length} media</strong>${searchInput.value.trim()?` untuk “${escapeHTML(searchInput.value.trim())}”`:""}`;
    categoryRow.querySelectorAll("[data-subject]").forEach(button=>{const selected=button.dataset.subject===activeSubject;button.classList.toggle("is-selected",selected);button.setAttribute("aria-pressed",String(selected));});
    subjectFilter.value=activeSubject;
    const parts=[]; if(activeSubject!=="all")parts.push(`<strong>${escapeHTML(activeSubject)}</strong>`); if(activeChapter!=="all")parts.push(`<strong>${escapeHTML(activeChapter)}</strong>`); if(activeTP!=="all")parts.push(`<strong>${escapeHTML(activeTP)}</strong>`);
    hierarchySummary.innerHTML=parts.length ? `Jalur dipilih: ${parts.join(' <span aria-hidden="true">→</span> ')} <button type="button" class="clear-hierarchy" id="clearHierarchy">Reset jalur</button>` : `Pilih mata pelajaran, BAB, atau TP untuk mempersempit pilihan media. <strong>${items.length} media contoh</strong> tersedia.`;
  }
  function openMedia(id) {
    const item=items.find(entry=>entry.id===id); if(!item)return;
    if(!item.path||item.path.startsWith("GANTI-")){window.alert("Lokasi file media ini belum diatur. Buka js/media.js, lalu sesuaikan properti path dengan file HTML Anda.");return;}
    previousFocus=document.activeElement; playerTitle.textContent=item.title;
   playerDescription.textContent = `${item.subject || "Media"} · ${item.chapter || "BAB"} · ${getTPs(item).join(", ") || "TP"} · ${item.type || "Media pembelajaran"}`;
    mediaFrame.src=item.path; openNewTab.href=item.path; modal.hidden=false; document.body.classList.add("modal-open"); closePlayerButton.focus();
  }
  function closePlayer() { modal.hidden=true;document.body.classList.remove("modal-open");mediaFrame.src="about:blank";if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});if(previousFocus&&typeof previousFocus.focus==="function")previousFocus.focus(); }
  function setSubject(subject) { activeSubject=subject;activeChapter="all";activeTP="all";updateChapterOptions();render(); }
  function resetHierarchy() { searchInput.value="";setSubject("all");chapterFilter.value="all";tpFilter.value="all";activeChapter="all";activeTP="all";render(); }
  initializeFilters(); render(); document.getElementById("year").textContent=new Date().getFullYear();
  searchInput.addEventListener("input",render);
  subjectFilter.addEventListener("change",()=>setSubject(subjectFilter.value));
  categoryRow.addEventListener("click",event=>{const button=event.target.closest("[data-subject]");if(button)setSubject(button.dataset.subject);});
  chapterFilter.addEventListener("change",()=>{activeChapter=chapterFilter.value;activeTP="all";updateTPOptions();render();});
  tpFilter.addEventListener("change",()=>{activeTP=tpFilter.value;render();});
  hierarchySummary.addEventListener("click",event=>{if(event.target.closest("#clearHierarchy"))resetHierarchy();});
  grid.addEventListener("click",event=>{const button=event.target.closest("[data-open-media]");if(button)openMedia(button.dataset.openMedia);});
  resetFilters.addEventListener("click",()=>{resetHierarchy();searchInput.focus();});
  closePlayerButton.addEventListener("click",closePlayer);playerBack.addEventListener("click",closePlayer);modal.querySelectorAll("[data-close-player]").forEach(el=>el.addEventListener("click",closePlayer));
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!modal.hidden)closePlayer();if(event.key==="/"&&modal.hidden&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)){event.preventDefault();searchInput.focus();}});
  fullscreenButton.addEventListener("click",async()=>{try{if(!document.fullscreenElement)await playerFrameWrap.requestFullscreen();else await document.exitFullscreen();}catch{window.alert("Layar penuh tidak didukung oleh browser ini. Coba gunakan tombol layar penuh di dalam media jika tersedia.");}});
  menuToggle.addEventListener("click",()=>{const isOpen=mainNav.classList.toggle("is-open");menuToggle.setAttribute("aria-expanded",String(isOpen));menuToggle.setAttribute("aria-label",isOpen?"Tutup navigasi":"Buka navigasi");});
  mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mainNav.classList.remove("is-open");menuToggle.setAttribute("aria-expanded","false");}));
})();
