function renderQuickFacts(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderBio(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderProjects(projects) {
  return projects
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-card-top">
          <span class="project-number">${project.number}</span>
          <span class="project-category">${project.category}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="project-tools"><span class="mono-label">STACK</span> ${project.tools}</p>
        <ul class="project-highlights">
          ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <a class="project-link" href="${project.repository}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.name} repository">View repository <span aria-hidden="true">↗</span></a>
      </article>`
    )
    .join("");
}

function renderExperience(items) {
  return items
    .map(
      (item) => `
      <article class="experience-item">
        <div class="experience-meta">
          <span class="experience-dates">${item.dates}</span>
        </div>
        <div class="experience-content">
          <h3>${item.role}</h3>
          <p class="experience-company">${item.company}</p>
          <ul class="experience-bullets">
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </div>
      </article>`
    )
    .join("");
}

function renderEducation(items) {
  return items
    .map(
      (item) => `
      <article class="education-item">
        <div>
          <h3>${item.school}</h3>
          <p>${item.degree}</p>
        </div>
        <span class="education-years">${item.years}</span>
      </article>`
    )
    .join("");
}

function renderSkillGroups(groups) {
  return groups
    .map(
      (group) => `
      <article class="skill-group">
        <h3>${group.group}</h3>
        <div class="chip-wrap">
          ${group.items.map((skill) => `<span class="chip">${skill}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");
}

function renderCertifications(certs) {
  return certs.map((cert) => `<li>${cert}</li>`).join("");
}

function renderAcademicPapers(papers) {
  if (!Array.isArray(papers) || papers.length === 0) {
    return `
      <article class="paper-card papers-placeholder">
        <h3>Section ready</h3>
        <p>Add paper titles, summaries, and links when ready.</p>
      </article>`;
  }

  const orderedPapers = [...papers].reverse();

  return orderedPapers
    .map(
      (paper, index) => `
      <article class="paper-card">
        <details class="paper-accordion" data-paper-index="${index}">
          <summary class="paper-summary">
            <p class="paper-category">${paper.category}</p>
            <h3>${paper.title}</h3>
            ${
              paper.hideMeta
                ? ""
                : `<p class="paper-meta">${[paper.date, paper.course].filter(Boolean).join(" | ")}</p>`
            }
            ${paper.description ? `<p>${paper.description}</p>` : ""}
          </summary>
          <div class="paper-content">
            ${paper.reflection ? `<p class="paper-field-title">Reflection</p><p>${paper.reflection}</p>` : ""}
            ${
              paper.pdfPath
                ? `
            <div class="paper-pdf-actions">
              <a class="project-link" href="${paper.pdfPath}" target="_blank" rel="noopener noreferrer">Open PDF <span aria-hidden="true">↗</span></a>
              <a class="project-link" href="${paper.pdfPath}" download>Download PDF</a>
            </div>
            ${
              paper.audioPath
                ? `
            <div class="paper-audio-wrap">
              <p class="paper-field-title">${paper.audioLabel || "Audio"}</p>
              <audio controls preload="none" src="${paper.audioPath}"></audio>
            </div>
            `
                : ""
            }
            <iframe class="paper-pdf-viewer" src="${paper.pdfPath}#zoom=100&view=FitH" title="${paper.title} PDF"></iframe>
            `
                : ""
            }
          </div>
        </details>
      </article>`
    )
    .join("");
}

function renderPortfolio(data) {
  document.getElementById("hero-kicker").textContent = data.hero.kicker;
  document.getElementById("hero-title").textContent = data.hero.title;
  document.getElementById("hero-focus").textContent = data.hero.focus;
  document.getElementById("hero-summary").textContent = data.hero.summary;

  document.getElementById("quick-facts-list").innerHTML = renderQuickFacts(data.quickFacts);
  document.getElementById("bio-content").innerHTML = renderBio(data.biography);
  document.getElementById("project-grid").innerHTML = renderProjects(data.projects);
  document.getElementById("experience-list").innerHTML = renderExperience(data.experience);
  document.getElementById("education-list").innerHTML = renderEducation(data.education);
  document.getElementById("skill-groups").innerHTML = renderSkillGroups(data.skills);
  document.getElementById("cert-list").innerHTML = renderCertifications(data.certifications);
  document.getElementById("papers-list").innerHTML = renderAcademicPapers(data.academicPapers);

  const contactNote = document.getElementById("contact-note");
  if (contactNote) {
    contactNote.textContent = data.contact.note || "";
  }

  ["github-link", "hero-github-link"].forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = data.contact.github;
    }
  });
  ["linkedin-link", "hero-linkedin-link"].forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = data.contact.linkedin;
    }
  });
}

window.renderPortfolio = renderPortfolio;
