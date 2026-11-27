/* Chinese descriptions share publication metadata and links with the English profile. */
(() => {
  'use strict';
  const profile = window.ACADEMIC_PROFILE;
  const collaboratorNames = {
    "Yong Wang": "王勇",
    "Luonan Chen": "陈洛南",
    "Kazuyuki Aihara": "合原一幸"
  };
  const selectedWork = [
    {
      role: "共同第一作者",
      summary: "我们开发了 CGMformer 预训练 Transformer 模型，从连续葡萄糖监测数据中学习个体血糖动态的表征。",
      details: "我们结合自监督预训练与面向具体任务的微调，支持糖尿病及其并发症筛查、非糖尿病人群分型，以及个体餐后血糖反应预测。"
    },
    {
      label: "HNetDig · 胰腺癌多组学", role: "共同第一作者",
      summary: "我们开发了异质网络嵌入方法 HNetDig，用于在全基因组范围内识别编码与非编码癌症驱动因素。通过整合全基因组测序数据与生物网络，我们对突变、调控元件、基因和通路进行联合表征，筛选胰腺癌中的候选驱动基因与调控元件。",
      details: "在这项胰腺癌类器官合作研究中，我们将 HNetDig 应用于胰腺癌基因组数据，为治疗反应与耐药机制的多组学分析提供补充。"
    },
    {
      role: "第一作者",
      summary: "我们开发了 RE-GOA，通过异质网络嵌入整合基因调控网络、蛋白质相互作用与基因本体，为调控元件进行功能注释。",
      details: "我们构建了人和小鼠的注释资源，并开发了非编码基因组区域的功能富集分析工具，支持 ChIP-seq、ATAC-seq 和 GWAS 数据分析。"
    }
  ];
  const patents = [
    {
      title: "构建糖代谢相关疾病预测模型、非糖尿病分型模型及预测餐后血糖的方法",
      status: "已公开的国际专利申请",
      note: "要求以下三项中国申请的优先权，优先权申请日为 2024 年 6 月 21 日。"
    },
    { title: "构建糖代谢相关疾病预测模型、预测糖代谢相关疾病的方法和装置", status: "已公开的专利申请" },
    { title: "构建非糖尿病分型模型及预测非糖尿病分型的方法和装置", status: "已公开的专利申请" },
    { title: "构建餐后血糖预测模型、预测餐后血糖的方法和装置", status: "已公开的专利申请" }
  ];
  const projects = [
    { title: "精准医疗中的多尺度因果理论与应用", source: "国家重点研发计划" },
    { title: "器官间复杂控制系统的全面数学理解与超早期精准医疗探索", source: "日本科学技术振兴机构（JST）Moonshot 研发计划" },
    { title: "人工智能赋能的复杂疾病系统解析及干预策略研究", source: "深圳医学研究基金" },
    { title: "基于心力衰竭动态网络生物标志物（HF-DNB）的心力衰竭超早期检测与干预", source: "JST Moonshot 研发项目追加经费（JPMJMS2021）", role: "项目参与者" }
  ];
  const education = [
    { date: "2022.09 – 2025.06", title: "博士 · 计算机软件与理论", institution: "中国科学院数学与系统科学研究院", detail: "导师：张松懋研究员、王勇研究员。", thesis: "生物多尺度调控系统的表示学习研究" },
    { date: "2019.09 – 2022.06", title: "硕士 · 计算机软件与理论", institution: "中国科学院数学与系统科学研究院", detail: "导师：张松懋研究员。", thesis: "基于异构网络表示学习的生物知识图谱构建" },
    { date: "2015.09 – 2019.06", title: "学士 · 数学与应用数学", institution: "山东大学", detail: "泰山学堂" }
  ];
  Object.assign(profile, {
    biography: [
      "我现任东京大学国际神经智能研究中心（IRCN）特任研究员（Project Researcher），与合原一幸教授和陈洛南教授合作开展研究。我在中国科学院数学与系统科学研究院获得计算机软件与理论专业博士学位。",
      "我的研究聚焦于面向生物医学数据建模与精准健康的人工智能方法。我开发生理时间序列和生物网络的表示学习方法，并应用于血糖动态、疾病早期预警与多组学分析。我尤其关注动力系统理论与可解释机器学习的结合，以理解健康与疾病中的个体差异。"
    ],
    interests: ["生物医学人工智能", "生理时间序列", "动力系统", "多组学整合", "可解释机器学习"],
    collaborators: profile.collaborators.map(collaborator => ({
      ...collaborator,
      name: collaboratorNames[collaborator.name] || collaborator.name
    })),
    selectedWork: profile.selectedWork.map((work, index) => ({ ...work, ...selectedWork[index] })),
    publications: profile.publications.map(publication => publication.type === 'preprint'
      ? { ...publication, details: "上列 Cell Stem Cell 论文的早期预印本" }
      : publication),
    patents: profile.patents.map((patent, index) => ({ ...patent, ...patents[index] })),
    patentSummary: "CGMformer 相关专利申请。",
    projects: profile.projects.map((project, index) => ({ ...project, ...projects[index] })),
    education: profile.education.map((item, index) => ({ ...item, ...education[index] })),
    experience: profile.experience.map(item => ({
      ...item,
      date: "2025.09 – 至今",
      title: "特任研究员（Project Researcher）",
      institution: "东京大学国际神经智能研究中心（IRCN）",
      detail: "与合原一幸教授和陈洛南教授合作，开发用于研究复杂生物系统和支持疾病早期检测的计算方法。"
    }))
  });
})();
