let currentBranch = "CD";

function renderCourseItem(course) {
  return `<div class="course-item" data-type="${course.type}">
    <span class="course-type-chip chip-${course.type}">${course.type}</span>
    <div class="course-info">
      <div class="course-name">${course.name}</div>
      <div class="course-code">${course.code}</div>
    </div>
    <div class="course-credits">${course.credits}cr</div>
  </div>`;
}

function buildTimeline() {
  const data = CURRICULUM[currentBranch];
  const map = {
    "Semester 1":"sem1-body","Semester 2":"sem2-body",
    "Semester 3":"sem3-body","Semester 4":"sem4-body",
    "Semester 5":"sem5-body","Semester 6":"sem6-body",
    "Semester 7":"sem7-body","Semester 8":"sem8-body"
  };
  const creditMap = {
    "Semester 1":"sem1-credits","Semester 2":"sem2-credits",
    "Semester 3":"sem3-credits","Semester 4":"sem4-credits",
    "Semester 5":"sem5-credits","Semester 6":"sem6-credits",
    "Semester 7":"sem7-credits","Semester 8":"sem8-credits"
  };
  for (const [sem, semData] of Object.entries(data)) {
    const el = document.getElementById(map[sem]);
    const credEl = document.getElementById(creditMap[sem]);
    if (el) el.innerHTML = semData.courses.map(renderCourseItem).join('');
    if (credEl) credEl.textContent = semData.credits + " Credits";
  }
  const branch = BRANCHES[currentBranch];
  const yearLabels = branch.yearLabels;
  document.querySelectorAll('.year-label').forEach((el, i) => {
    if (yearLabels[i]) el.textContent = yearLabels[i];
  });
}

function buildFlow() {
  const grid = document.getElementById("flow-grid");
  const data = CURRICULUM[currentBranch];
  const SEMS = Object.entries(data);
  const periods = ["Jul-Dec","Jan-Jun","Jul-Dec","Jan-Jun","Jul-Dec","Jan-Jun","Jul-Dec","Jan-Jun"];
  grid.innerHTML = SEMS.map(([sem, semData], i) => {
    const num = i + 1;
    const yearLabel = num <= 2 ? "Year 1" : num <= 4 ? "Year 2" : num <= 6 ? "Year 3" : "Year 4";
    const courses = semData.courses.map(c => {
      const cls = TYPE_COLOR_MAP[c.type] || "pc";
      return `<div class="flow-course" style="background:var(--${cls}-bg);border:1px solid var(--${cls}-border);color:var(--${cls}-text);"
        onmouseenter="showTooltip(event,'${c.name.replace(/'/g,"\\'")}','${c.code} | ${c.type} | ${c.credits} Credits')"
        onmouseleave="hideTooltip()">
        <div class="flow-course-name">${c.name}</div>
        <div class="flow-course-credits">${c.type} | ${c.credits}cr</div>
      </div>`;
    }).join('');
    return `<div class="flow-col">
      <div class="flow-sem-head">Sem ${num}</div>
      <div class="flow-sem-period">${yearLabel} | ${periods[i]}</div>
      <div class="flow-courses">${courses}</div>
    </div>`;
  }).join('');
}

function buildCredits() {
  const grid = document.getElementById("credits-grid");
  const TOTAL = 170;
  grid.innerHTML = CREDIT_STRUCTURE.map(item => {
    const pct = Math.round((item.credits / TOTAL) * 100);
    return `<div class="credit-card reveal">
      <div class="credit-card-header">
        <div class="credit-card-title">${item.label}</div>
        <div class="credit-card-total">${item.credits}</div>
      </div>
      <div class="credit-bar-wrap">
        <div class="credit-bar" style="width:${pct}%;background:${item.color};" data-pct="${pct}"></div>
      </div>
      <div class="credit-desc">${item.desc} &nbsp;|&nbsp; <strong>${pct}%</strong> of total</div>
    </div>`;
  }).join('');
}

function buildElectives() {
  const grid = document.getElementById("electives-grid");
  const electives = ELECTIVES[currentBranch];
  grid.innerHTML = Object.entries(electives).map(([key, val]) => {
    const isPE = key.startsWith("PE");
    const borderColor = isPE ? "var(--pe-border)" : "var(--oe-border)";
    const titleColor = isPE ? "var(--pe-text)" : "var(--oe-text)";
    const items = val.courses.map(c => `<div class="elective-item">
      <span class="elective-code">${c.code}</span>
      <span class="elective-name">${c.name}</span>
    </div>`).join('');
    return `<div class="elective-card reveal" style="border-top:3px solid ${borderColor}">
      <div class="elective-header">
        <div class="elective-title" style="color:${titleColor}">${key.replace(/\(.*\)/,"").trim()} -- ${isPE ? "Programme" : "Open"} Elective</div>
        <div class="elective-sem">Slot ${key.match(/\((.+)\)/)?.[1] || ""}</div>
      </div>
      <div class="elective-body">${items}</div>
    </div>`;
  }).join('');
}

function switchBranch(branch) {
  currentBranch = branch;
  document.querySelectorAll('.branch-tab').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-branch="${branch}"]`).classList.add('active');
  const branchData = BRANCHES[branch];
  document.getElementById('hero-title').innerHTML = branchData.name.replace('(', '<br/>(');
  document.getElementById('hero-badge-text').textContent = `Branch Code: ${branch} | Group A`;
  document.getElementById('hero-desc').textContent = branchData.description;
  buildTimeline();
  buildCredits();
  buildElectives();
  const activeView = document.querySelector('.view-tab.active');
  if (activeView && activeView.dataset.view === 'flow') buildFlow();
  observeReveals();
}

// TOOLTIP
const tooltip = document.getElementById("tooltip");
const tooltipTitle = document.getElementById("tooltip-title");
const tooltipDetail = document.getElementById("tooltip-detail");
function showTooltip(e, title, detail) {
  tooltipTitle.textContent = title;
  tooltipDetail.textContent = detail;
  tooltip.classList.add("visible");
  moveTooltip(e);
}
function moveTooltip(e) {
  tooltip.style.left = (e.clientX + 12) + "px";
  tooltip.style.top = (e.clientY - 10) + "px";
}
function hideTooltip() { tooltip.classList.remove("visible"); }
document.addEventListener("mousemove", (e) => { if (tooltip.classList.contains("visible")) moveTooltip(e); });

// VIEW TABS
document.querySelectorAll(".view-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    document.querySelectorAll(".view-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll("[id^='view-']").forEach(el => el.classList.remove("active"));
    document.getElementById("view-" + view).classList.add("active");
    if (view === "credits") animateBars();
    if (view === "flow") buildFlow();
    observeReveals();
  });
});

// BRANCH TABS
document.querySelectorAll(".branch-tab").forEach(btn => {
  btn.addEventListener("click", () => switchBranch(btn.dataset.branch));
});

function animateBars() {
  document.querySelectorAll(".credit-bar").forEach(bar => {
    bar.style.width = "0";
    setTimeout(() => { bar.style.width = bar.dataset.pct + "%"; }, 100);
  });
}

// DARK MODE
(function(){
  const t = document.querySelector("[data-theme-toggle]");
  const r = document.documentElement;
  let d = matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
  r.setAttribute("data-theme", d);
  t && t.addEventListener("click", () => {
    d = d === "dark" ? "light" : "dark";
    r.setAttribute("data-theme", d);
    t.innerHTML = d === "dark"
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  });
})();

// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); } });
}, { threshold: 0.08 });
function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

// INIT
buildTimeline();
buildCredits();
buildElectives();
observeReveals();
setTimeout(observeReveals, 300);
