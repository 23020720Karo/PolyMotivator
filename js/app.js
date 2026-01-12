// Basic in-memory course data (expand later)
const courses = [
  {
    id: "rp-it",
    name: "Diploma in Information Technology (R47)",
    poly: "rp",
    polyName: "Republic Polytechnic",
    cluster: "tech-innovator",
    skills: ["Programming", "Web Development", "Problem-Solving"],
    style: ["Project-based", "Hands-on labs"],
    careers: ["Full-Stack Developer", "Web Developer", "Digital Designer"],
    learningStyle: ["Hands-on projects", "Team-based problem solving"]
  },
  {
    id: "sp-dmmt",
    name: "Diploma in Media, Arts & Design (S29)",
    poly: "sp",
    polyName: "Singapore Polytechnic",
    cluster: "design-creator",
    skills: ["Storytelling", "Design Thinking", "Digital Media"],
    style: ["Studio work", "Team projects"],
    careers: ["Content Creator", "Social Media Executive", "Marketing Coordinator"],
    learningStyle: ["Creative studio sessions", "Collaborative campaigns"]
  },
  {
  id: "tp-af",
  name: "Diploma in Accountancy & Finance (T02)",
  poly: "tp",
  polyName: "Temasek Polytechnic",
  cluster: "people-helper",
  skills: ["Financial Accounting","Management Accounting","Business Finance"],
  style: ["Case-based learning","Industry projects"],
  careers: ["Financial Accountant","Management Accountant","Auditor"],
  learningStyle: ["Numbers-focused business scenarios","Tutorials and projects"]
},
    {
    id: "sp-aaa",
    name: "Diploma in Applied AI & Analytics (S30)",
    poly: "sp",
    polyName: "Singapore Polytechnic",
    cluster: "tech-innovator",
    skills: ["Machine Learning", "Data Analytics", "Python Programming"],
    style: ["Lab-based practice", "Data projects"],
    careers: ["Data Analyst", "AI Engineer", "Data Scientist"],
    learningStyle: ["Hands-on coding", "Project-based analytics work"]
  },
  {
    id: "sp-ae",
    name: "Diploma in Aeronautical Engineering (S88)",
    poly: "sp",
    polyName: "Singapore Polytechnic",
    cluster: "tech-innovator",
    skills: ["Aircraft Systems", "Engineering Design", "Problem-Solving"],
    style: ["Lab sessions", "Industry-based projects"],
    careers: ["Aircraft Maintenance Technician", "Aeronautical Engineer", "Project Manager"],
    learningStyle: ["Applied engineering labs", "Team design projects"]
  },
  {
    id: "np-biz",
    name: "Diploma in Business Studies (N45)",
    poly: "np",
    polyName: "Ngee Ann Polytechnic",
    cluster: "people-helper",
    skills: ["Marketing", "Entrepreneurship", "Human Capital Management"],
    style: ["Case studies", "Group projects"],
    careers: ["Marketing Executive", "HR Executive", "Business Development Executive"],
    learningStyle: ["Discussion-based tutorials", "Real-world business projects"]
  },
  {
    id: "np-ae",
    name: "Diploma in Aerospace Engineering (N65)",
    poly: "np",
    polyName: "Ngee Ann Polytechnic",
    cluster: "tech-innovator",
    skills: ["Aerospace Systems", "CAD Modelling", "Engineering Math"],
    style: ["Workshops", "Lab experiments"],
    careers: ["Aerospace Engineer", "Technical Specialist", "Engineering Associate"],
    learningStyle: ["Hands-on lab work", "Design and prototyping"]
  },
  {
    id: "np-de",
    name: "Diploma in Media Post-Production (N13)",
    poly: "np",
    polyName: "Ngee Ann Polytechnic",
    cluster: "design-creator",
    skills: ["Projection Mapping", "Motion & Computer Graphics", "Storytelling"],
    style: ["Studio practice", "Portfolio projects"],
    careers: ["Lighting Technician", "Production Manager", "Motion Graphic Artist"],
    learningStyle: ["Studio-based learning", "Project and portfolio focus"]
  },
  {
    id: "nyp-it",
    name: "Diploma in Information Technology (C85)",
    poly: "nyp",
    polyName: "Nanyang Polytechnic",
    cluster: "tech-innovator",
    skills: ["Software Development", "UI Development", "Database Design"],
    style: ["Project-based modules", "Industry-linked assignments"],
    careers: ["Software Developer", "Application Support Analyst", "Full-Stack Developer"],
    learningStyle: ["Coding labs", "Agile-style team projects"]
  },
  {
    id: "nyp-bm",
    name: "Diploma in Business Management (C94)",
    poly: "nyp",
    polyName: "Nanyang Polytechnic",
    cluster: "people-helper",
    skills: ["Business Strategy", "Digital Marketing", "People Management"],
    style: ["Case discussions", "Industry projects"],
    careers: ["Business Executive", "Marketing Coordinator", "HR Coordinator"],
    learningStyle: ["Presentation-heavy", "Team-based consulting projects"]
  },
{
  id: "nyp-nursing",
  name: "Diploma in Nursing (C97)",
  poly: "nyp",
  polyName: "Nanyang Polytechnic",
  cluster: "people-helper",
  skills: ["Patient Care","Health Assessment","Clinical Skills"],
  style: ["Clinical attachments","Simulation labs","Team-based care"],
  careers: ["Registered Nurse","Community Nurse","Enrolled Nurse (entry role)"],
  learningStyle: ["Hands-on practice","Lectures, labs and clinical postings"]
},

  {
    id: "tp-it",
    name: "Diploma in Information Technology (T30)",
    poly: "tp",
    polyName: "Temasek Polytechnic",
    cluster: "tech-innovator",
    skills: ["Full-Stack Development", "Cloud Services", "Cybersecurity Basics"],
    style: ["Practical labs", "Real-client projects"],
    careers: ["Web Developer", "Cloud Support Associate", "Application Analyst"],
    learningStyle: ["Scenario-based labs", "Team software projects"]
  },
  {
    id: "tp-hm",
    name: "Diploma in Hospitality & Tourism Management (T08)",
    poly: "tp",
    polyName: "Temasek Polytechnic",
    cluster: "people-helper",
    skills: ["Service Excellence", "Event Planning", "Tourism Operations"],
    style: ["Role-play", "Industry attachments"],
    careers: ["Hotel Management Trainee", "Events Coordinator", "Guest Relations Officer"],
    learningStyle: ["Interactive role-plays", "On-site learning in hospitality venues"]
  },
{
  id: "rp-depm",
  name: "Diploma in Events & Project Management (R28)",
  poly: "rp",
  polyName: "Republic Polytechnic",
  cluster: "people-helper",
  skills: ["Event Planning","Project Management","Stakeholder Management"],
  style: ["Live event projects","Industry immersion","Team-based assignments"],
  careers: ["Event Coordinator / Executive","Event Marketing Executive","Project Executive (Events)"],
  learningStyle: ["Hands-on planning of events","Problem-based learning"]
},
{
  id: "rp-sonic",
  name: "Diploma in Sonic Arts (R24)",
  poly: "rp",
  polyName: "Republic Polytechnic",
  cluster: "design-creator",
  skills: ["Sound Design","Recording & Mixing","Audio Post-Production"],
  style: ["Studio-based practice","Industry projects","Live sound labs"],
  careers: ["Sound Designer","Live Sound Engineer","Game Audio Designer"],
  learningStyle: ["Project-based collaboration","Creative experimentation with sound"]
},


];

const STATE_KEYS = {
  SAVED: "polyMotivator.savedCourses"
};

const compareSet = new Set();

document.addEventListener("DOMContentLoaded", () => {
  renderCourses(courses);
  restoreSavedCourses();
  wireFilters();
  wireCompare();
  const helpBtn = document.getElementById("startHelpBtn");
  const panel = document.getElementById("startHelpPanel");
  const closeBtn = document.getElementById("startHelpClose");

  if (helpBtn && panel && closeBtn) {
    const openPanel = () => {
      panel.style.display = "flex";
      panel.setAttribute("aria-hidden", "false");
    };

    const closePanel = () => {
      panel.style.display = "none";
      panel.setAttribute("aria-hidden", "true");

      // If you ever switch to a <video> tag instead of iframe, pause it here
      const video = panel.querySelector("video");
      if (video && !video.paused) video.pause();
    };

    helpBtn.addEventListener("click", openPanel);
    closeBtn.addEventListener("click", closePanel);

    // Close when clicking the dark overlay outside the inner panel
    panel.addEventListener("click", (e) => {
      if (e.target === panel) closePanel();
    });
  }
});

function wireFilters() {
  const searchInput = document.getElementById("courseSearch");
  const polySelect = document.getElementById("polyFilter");
  const clusterSelect = document.getElementById("clusterFilter");

  const applyFilters = () => {
    const term = searchInput.value.toLowerCase();
    const poly = polySelect.value;
    const cluster = clusterSelect.value;

    const filtered = courses.filter(c => {
      const matchesTerm =
        !term ||
        c.name.toLowerCase().includes(term) ||
        c.skills.some(s => s.toLowerCase().includes(term));
      const matchesPoly = !poly || c.poly === poly;
      const matchesCluster = !cluster || c.cluster === cluster;
      return matchesTerm && matchesPoly && matchesCluster;
    });

    renderCourses(filtered);
  };

  [searchInput, polySelect, clusterSelect].forEach(el => {
    if (!el) return;
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });
}

function renderCourses(list) {
  const container = document.getElementById("courseList");
  if (!container) return;
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = "<p>No courses match your filters yet. Try adjusting your search or cluster.</p>";
    return;
  }

  const savedIds = new Set(getSavedCourseIds());

  list.forEach(course => {
    const isSaved = savedIds.has(course.id);
    const isCompared = compareSet.has(course.id);

    const card = document.createElement("article");
card.className = "course-card";
card.innerHTML = `
  <div class="course-body">
    <h3>${course.name}</h3>
    <p>${course.polyName}</p>

    <div class="course-tags">
      ${course.skills.map(s => `<span class="tag-pill">${s}</span>`).join("")}
    </div>

    <div class="course-middle">
      <p class="course-meta"><strong>Future careers:</strong> ${course.careers.join(", ")}</p>
      <p class="course-meta"><strong>Learning style:</strong> ${course.learningStyle.join(", ")}</p>
    </div>
  </div>

  <div class="course-actions">
    <button
      class="secondary-btn save-btn"
      data-id="${course.id}"
      aria-pressed="${isSaved}"
    >
      ${isSaved ? "Unsave Course" : "Save Course"}
    </button>

    <button
      class="secondary-btn compare-btn"
      data-id="${course.id}"
      aria-pressed="${isCompared}"
    >
      ${isCompared ? "Remove from Compare" : "Add to Compare"}
    </button>
  </div>
`;
    container.appendChild(card);
  });

  container.querySelectorAll(".save-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleSaveCourse(btn.dataset.id, btn));
  });

  container.querySelectorAll(".compare-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleCompareCourse(btn.dataset.id, btn));
  });
}


// ----- Saved choices -----

function getSavedCourseIds() {
  try {
    const raw = localStorage.getItem(STATE_KEYS.SAVED);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setSavedCourseIds(ids) {
  localStorage.setItem(STATE_KEYS.SAVED, JSON.stringify(ids));
}

function toggleSaveCourse(id, buttonEl) {
  const ids = new Set(getSavedCourseIds());

  let isSaved;
  if (ids.has(id)) {
    ids.delete(id);
    isSaved = false;
  } else {
    ids.add(id);
    isSaved = true;
  }

  setSavedCourseIds([...ids]);
  renderSavedCourses();

  if (buttonEl) {
    buttonEl.textContent = isSaved ? "Unsave Course" : "Save Course";
    buttonEl.setAttribute("aria-pressed", String(isSaved));
  }
}

function renderSavedCourses() {
  const container = document.getElementById("savedCourses");
  if (!container) return;
  const ids = getSavedCourseIds();
  container.innerHTML = "";

  if (!ids.length) {
    container.textContent = "You have not saved any courses yet.";
    return;
  }

  ids.forEach(id => {
    const course = courses.find(c => c.id === id);
    if (!course) return;
    const item = document.createElement("div");
    item.className = "course-card";
    item.innerHTML = `
      <h3>${course.name}</h3>
      <p>${course.polyName}</p>
      <div class="course-tags">
        ${course.style.map(s => `<span class="tag-pill">${s}</span>`).join("")}
      </div>
    `;
    container.appendChild(item);
  });
}

function restoreSavedCourses() {
  renderSavedCourses();
}

// ----- Compare functionality -----

function wireCompare() {
  const compareBtn = document.getElementById("compareBtn");
  if (!compareBtn) return;
  compareBtn.addEventListener("click", showCompareDialog);
  updateCompareUI();
}

function toggleCompareCourse(id, buttonEl) {
  let isCompared;
  if (compareSet.has(id)) {
    compareSet.delete(id);
    isCompared = false;
  } else if (compareSet.size < 3) {
    compareSet.add(id);
    isCompared = true;
  } else {
    isCompared = false;
  }

  if (buttonEl) {
    buttonEl.textContent = isCompared ? "Remove from Compare" : "Add to Compare";
    buttonEl.setAttribute("aria-pressed", String(isCompared));
  }

  updateCompareUI();
}

function updateCompareUI() {
  const listContainer = document.getElementById("compareList");
  const compareBtn = document.getElementById("compareBtn");
  const resetBtn = document.getElementById("resetCompareBtn");
  if (!listContainer || !compareBtn || !resetBtn) return;

  listContainer.innerHTML = "";

  compareSet.forEach(id => {
    const course = courses.find(c => c.id === id);
    if (!course) return;
    const pill = document.createElement("span");
    pill.className = "compare-pill";
    pill.textContent = course.name;
    listContainer.appendChild(pill);
  });

  const hasEnough = compareSet.size >= 2;
  compareBtn.disabled = !hasEnough;
  resetBtn.disabled = compareSet.size === 0;
}

function showCompareDialog() {
  const selected = [...compareSet]
    .map(id => courses.find(c => c.id === id))
    .filter(Boolean);

  if (!selected.length) return;

  const summary = selected
    .map(c => `• ${c.name} (${c.polyName}) — skills: ${c.skills.join(", ")}`)
    .join("\n\n");

  alert("Quick comparison:\n\n" + summary);
}

function wireCompare() {
  const compareBtn = document.getElementById("compareBtn");
  const resetBtn = document.getElementById("resetCompareBtn");
  if (!compareBtn || !resetBtn) return;

  compareBtn.addEventListener("click", showCompareDialog);
  resetBtn.addEventListener("click", resetCompareSelection);

  updateCompareUI();
}

function resetCompareSelection() {
  compareSet.clear();

  // Also reset button labels on visible cards
  document.querySelectorAll(".compare-btn").forEach(btn => {
    btn.textContent = "Add to Compare";
    btn.setAttribute("aria-pressed", "false");
  });

  updateCompareUI();
}


