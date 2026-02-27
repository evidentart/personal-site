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
        <h3>${project.name}</h3>
        <p class="project-tools">Tools: ${project.tools}</p>
        <ul class="project-highlights">
          ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <a class="project-link" href="${project.repository}" target="_blank" rel="noreferrer">Repository</a>
      </article>`
    )
    .join("");
}

function renderEducation(items) {
  return items
    .map(
      (item) => `
      <article class="education-item">
        <h3>${item.school}</h3>
        <p>${item.degree} | ${item.years} | ${item.location}</p>
      </article>`
    )
    .join("");
}

function renderSkillChips(skills) {
  return skills.map((skill) => `<span class="chip">${skill}</span>`).join("");
}

function renderCertifications(certs) {
  return certs.map((cert) => `<li>${cert}</li>`).join("");
}

function renderAcademicPapers(papers) {
  if (!Array.isArray(papers) || papers.length === 0) {
    return `
      <article class="paper-card papers-placeholder">
        <h3>Section Ready</h3>
        <p>Add paper titles, summaries, and links when ready.</p>
      </article>`;
  }

  // Show newest-added paper cards first in the UI.
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
            ${paper.description ? `<p class="paper-field-title">Description</p><p>${paper.description}</p>` : ""}
          </summary>
          <div class="paper-content">
            ${paper.reflection ? `<p class="paper-field-title">Reflection</p><p>${paper.reflection}</p>` : ""}
            ${
              paper.pdfPath
                ? `
            <div class="paper-pdf-actions">
              <a class="project-link" href="${paper.pdfPath}" target="_blank" rel="noreferrer">Open PDF</a>
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
  // Bind data model sections to their dedicated DOM containers.
  document.getElementById("hero-kicker").textContent = data.hero.kicker;
  document.getElementById("hero-title").textContent = data.hero.title;
  document.getElementById("hero-summary").textContent = data.hero.summary;

  document.getElementById("quick-facts-list").innerHTML = renderQuickFacts(data.quickFacts);
  document.getElementById("bio-content").innerHTML = renderBio(data.biography);
  document.getElementById("project-grid").innerHTML = renderProjects(data.projects);
  document.getElementById("education-list").innerHTML = renderEducation(data.education);
  document.getElementById("skill-chips").innerHTML = renderSkillChips(data.skills);
  document.getElementById("cert-list").innerHTML = renderCertifications(data.certifications);
  document.getElementById("papers-list").innerHTML = renderAcademicPapers(data.academicPapers);

  const contactNote = document.getElementById("contact-note");
  if (contactNote) {
    contactNote.textContent = data.contact.note || "";
    contactNote.style.display = data.contact.note ? "block" : "none";
  }
  document.getElementById("github-link").href = data.contact.github;
  document.getElementById("linkedin-link").href = data.contact.linkedin;
}

window.renderPortfolio = renderPortfolio;

