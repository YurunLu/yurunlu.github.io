(() => {
  'use strict';
  const profile = window.ACADEMIC_PROFILE;
  const chinese = document.documentElement.lang === 'zh-Hans';
  const labels = chinese ? {
    readPaper: '阅读论文 ↗',
    code: '代码 ↗',
    preprint: '预印本',
    empty: '没有找到符合条件的论文。',
    thesis: '学位论文：',
    scholar: '的 Google Scholar 主页'
  } : {
    readPaper: 'Read paper ↗',
    code: 'Code ↗',
    preprint: 'Preprint',
    empty: 'No publications match your search.',
    thesis: 'Thesis: ',
    scholar: ' on Google Scholar'
  };
  const node = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  const externalLink = (text, url, className) => {
    const link = node('a', text, className);
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') throw new Error('External links must use HTTPS.');
    link.href = parsed.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  };
  const append = (id, child) => document.getElementById(id).append(child);
  for (const paragraph of profile.biography) append('biography', node('p', paragraph));
  for (const interest of profile.interests) append('interests', node('span', interest));
  for (const collaborator of profile.collaborators) {
    const link = externalLink(`${collaborator.name} ↗`, collaborator.scholar);
    link.setAttribute('aria-label', `${collaborator.name}${labels.scholar}`);
    append('collaborator-links', link);
  }
  profile.selectedWork.forEach((work, index) => {
    const article = node('article', undefined, 'work');
    article.append(node('span', String(index + 1).padStart(2, '0'), 'work-number'));
    const content = node('div');
    const kicker = node('div', undefined, 'work-kicker');
    kicker.append(node('span', work.label), node('span', work.venue), node('span', work.role));
    const title = node('h4');
    title.append(externalLink(work.title, work.paper));
    const links = node('div', undefined, 'work-links');
    links.append(externalLink(labels.readPaper, work.paper), externalLink('GitHub ↗', work.github));
    content.append(kicker, title, node('p', work.summary));
    if (work.details) content.append(node('p', work.details));
    content.append(links);
    article.append(content);
    append('selected-work', article);
  });
  const emphasizeName = (authors) => {
    const paragraph = node('p', undefined, 'pub-authors');
    const parts = authors.split('Yurun Lu');
    parts.forEach((part, i) => {
      if (i) paragraph.append(node('strong', 'Yurun Lu'));
      paragraph.append(document.createTextNode(part));
    });
    return paragraph;
  };
  const renderPublications = () => {
    const query = document.getElementById('publication-search').value.trim().toLowerCase();
    const type = document.getElementById('publication-filter').value;
    const results = profile.publications.filter(pub =>
      (type === 'all' || pub.type === type) &&
      [pub.title, pub.authors, pub.venue, pub.year, pub.code || ''].join(' ').toLowerCase().includes(query)
    ).sort((a, b) => b.year - a.year);
    const container = document.getElementById('publication-list');
    container.replaceChildren();
    const journals = results.filter(pub => pub.type === 'journal').length;
    const preprints = results.length - journals;
    document.getElementById('publication-count').textContent = chinese
      ? `${journals} 篇期刊论文 · ${preprints} 篇预印本`
      : `${journals} journal article${journals === 1 ? '' : 's'} · ${preprints} preprint${preprints === 1 ? '' : 's'}`;
    if (!results.length) container.append(node('p', labels.empty, 'empty-note'));
    let previousYear;
    for (const pub of results) {
      if (pub.year !== previousYear) {
        container.append(node('h4', String(pub.year), 'pub-year'));
        previousYear = pub.year;
      }
      const article = node('article', undefined, 'publication');
      const heading = node('h4');
      heading.append(externalLink(pub.title, `https://doi.org/${pub.doi}`));
      if (pub.type === 'preprint') heading.append(node('span', labels.preprint, 'badge'));
      const meta = node('p', undefined, 'pub-meta');
      meta.append(node('em', pub.venue), document.createTextNode(` · ${pub.details} (${pub.year})`));
      article.append(heading, emphasizeName(pub.authors), meta);
      if (pub.code) article.append(externalLink(labels.code, pub.code, 'pub-link'));
      container.append(article);
    }
  };
  document.getElementById('publication-search').addEventListener('input', renderPublications);
  document.getElementById('publication-filter').addEventListener('change', renderPublications);
  renderPublications();
  if (profile.patentSummary) append('patent-list', node('p', profile.patentSummary, 'patent-summary'));
  for (const patent of profile.patents) {
    const article = node('article', undefined, 'patent');
    const title = node('h3');
    title.append(patent.url ? externalLink(patent.title, patent.url) : document.createTextNode(patent.title));
    article.append(title, node('p', [patent.number, patent.status, patent.year].filter(Boolean).join(' · ')));
    if (patent.inventors) article.append(node('p', patent.inventors));
    if (patent.note) article.append(node('p', patent.note));
    append('patent-list', article);
  }
  profile.projects.forEach((project, index) => {
    const article = node('article', undefined, 'project');
    article.append(node('span', String(index + 1).padStart(2, '0'), 'project-index'));
    const content = node('div');
    const heading = node('h3');
    heading.append(project.url ? externalLink(project.title, project.url) : document.createTextNode(project.title));
    content.append(heading);
    if (project.code) content.append(node('p', project.code, 'project-code'));
    if (project.source) content.append(node('p', project.source, 'project-source'));
    if (project.role) content.append(node('p', project.role));
    article.append(content);
    append('project-list', article);
  });
  const timeline = (id, items) => {
    for (const item of items) {
      const article = node('article', undefined, 'timeline-item');
      article.append(node('p', item.date, 'timeline-date'));
      const content = node('div', undefined, 'timeline-content');
      content.append(node('h3', item.title), node('p', item.institution));
      if (item.detail) content.append(node('p', item.detail, 'detail'));
      if (item.thesis) {
        const thesis = node('p', undefined, 'thesis');
        thesis.append(node('strong', labels.thesis), document.createTextNode(item.thesis));
        content.append(thesis);
      }
      article.append(content);
      append(id, article);
    }
  };
  timeline('education-list', profile.education);
  timeline('experience-list', profile.experience);
  document.getElementById('year').textContent = String(new Date().getFullYear());
  if ('IntersectionObserver' in window) {
    const navLinks = Array.from(document.querySelectorAll('.topbar nav a'));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        for (const link of navLinks) {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }, { rootMargin: '-12% 0px -67% 0px', threshold: 0 });
    for (const link of navLinks) observer.observe(document.querySelector(link.getAttribute('href')));
  }
})();
