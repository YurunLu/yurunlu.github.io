/* Edit this file to update the homepage. No build step is required. */
window.ACADEMIC_PROFILE = {
  biography: [
    "I am a Project Researcher at the International Research Center for Neurointelligence (IRCN), The University of Tokyo, working with Prof. Kazuyuki Aihara and Prof. Luonan Chen. I received my Ph.D. from the University of Chinese Academy of Sciences, where I conducted research at the Academy of Mathematics and Systems Science, Chinese Academy of Sciences, advised by Prof. Yong Wang.",
    "My research focuses on artificial intelligence for biomedical data modeling and precision health. I develop representation learning methods for physiological time series and biological networks, with applications in glucose dynamics, disease early warning and multi-omics analysis. I am particularly interested in combining dynamical systems theory with interpretable machine learning to understand individual differences in health and disease."
  ],
  interests: ["Biomedical AI", "Physiological time series", "Dynamical systems", "Multi-omics integration", "Explainable machine learning"],
  collaborators: [
    { name: "Yong Wang", scholar: "https://scholar.google.com/citations?user=M0fnh30AAAAJ&hl=en" },
    { name: "Luonan Chen", scholar: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=en" },
    { name: "Kazuyuki Aihara", scholar: "https://scholar.google.com/citations?user=30X8WK4AAAAJ&hl=en" }
  ],
  selectedWork: [
    {
      label: "CGMformer", venue: "National Science Review · 2025", role: "Co-first author",
      title: "A pretrained transformer model for decoding individual glucose dynamics from continuous glucose monitoring data",
      summary: "We developed CGMformer, a pretrained transformer that learns representations of individual glucose dynamics from continuous glucose monitoring data.",
      details: "We combined self-supervised pretraining with task-specific fine-tuning to support screening for diabetes and its complications, subtyping of non-diabetic individuals, and prediction of individual postprandial glucose responses.",
      paper: "https://doi.org/10.1093/nsr/nwaf039", github: "https://github.com/YurunLu/CGMformer"
    },
    {
      label: "HNetDig · Pancreatic cancer multi-omics", venue: "Cell Stem Cell · 2025", role: "Co-first author",
      title: "A pancreatic cancer organoid biobank links multi-omics signatures to therapeutic response and clinical evaluation of statin combination therapy",
      summary: "We developed HNetDig, a heterogeneous network embedding method for genome-wide identification of coding and noncoding cancer drivers. We integrated whole-genome sequencing data with biological networks to jointly represent mutations, regulatory elements, genes and pathways, and prioritize driver genes and regulatory elements in pancreatic cancer.",
      details: "We applied HNetDig to pancreatic cancer genomic data within this collaborative organoid study, complementing multi-omics analyses of therapeutic response and resistance.",
      paper: "https://doi.org/10.1016/j.stem.2025.07.008", github: "https://github.com/YurunLu/HNetDig"
    },
    {
      label: "RE-GOA", venue: "Bioinformatics · 2022", role: "First author",
      title: "Annotating regulatory elements by heterogeneous network embedding",
      summary: "We developed RE-GOA to annotate regulatory elements by integrating gene regulatory networks, protein interactions and Gene Ontology through heterogeneous network embedding.",
      details: "We generated annotation resources for human and mouse and developed a tool for functional enrichment analysis of noncoding genomic regions, supporting analyses of ChIP-seq, ATAC-seq and GWAS data.",
      paper: "https://doi.org/10.1093/bioinformatics/btac185", github: "https://github.com/YurunLu/RE-GOA"
    }
  ],
  publications: [
    { year: 2026, type: "journal", title: "Influence of fibroblast growth factor 21 on delayed glycemic improvement following acute exercise in type 2 diabetes mellitus", authors: "Ying Zhang†, Dan Liu†, Yurun Lu†, Piao Kang†, Xinyu Liu, Qinyi Wang, Anran Chen, et al.", venue: "Diabetes & Metabolism Journal", details: "50(4), 770–784", doi: "10.4093/dmj.2024.0814", cofirst: true },
    { year: 2025, type: "journal", title: "A pretrained transformer model for decoding individual glucose dynamics from continuous glucose monitoring data", authors: "Yurun Lu†, Dan Liu†, Zhongming Liang†, Rui Liu, Pei Chen, Yitong Liu, Jiachen Li, et al.", venue: "National Science Review", details: "12(5), nwaf039", doi: "10.1093/nsr/nwaf039", code: "https://github.com/YurunLu/CGMformer", cofirst: true },
    { year: 2025, type: "journal", title: "A pancreatic cancer organoid biobank links multi-omics signatures to therapeutic response and clinical evaluation of statin combination therapy", authors: "Yunguang Li, Shijie Tang, Huan Wang, Hongwen Zhu, Yurun Lu†, Yehan Zhang, Shiwei Guo, et al.", venue: "Cell Stem Cell", details: "32(9), 1369–1389.e14", doi: "10.1016/j.stem.2025.07.008", code: "https://github.com/YurunLu/HNetDig", cofirst: true },
    { year: 2025, type: "journal", title: "Identifying Rarely Mutated Cancer Genes by Heterogeneous Network Embedding", authors: "Yurun Lu, Songmao Zhang and Yong Wang", venue: "CSIAM Transactions on Life Sciences", details: "1(1), 22–44", doi: "10.4208/csiam-ls.SO-2024-0002", code: "https://github.com/YurunLu/MutNet" },
    { year: 2025, type: "journal", title: "Genome diversity and signatures of natural selection in mainland Southeast Asia", authors: "Yaoxi He, Xiaoming Zhang, Min-Sheng Peng, Yu-Chun Li, et al. (including Yurun Lu)", venue: "Nature", details: "643, 417–426", doi: "10.1038/s41586-025-08998-w" },
    { year: 2025, type: "journal", title: "Decoding the gut–brain axis: toward AI-driven integration of neuroimaging and gut microbiota in human health", authors: "Dezhi Wu, Hui Wang, Yueqiong Ni, Yurun Lu, Yong Wang, Huating Li and Luonan Chen", venue: "The Visual Computer", details: "41, 9793–9804", doi: "10.1007/s00371-025-04000-w" },
    { year: 2025, type: "preprint", title: "Targeting protein glycosylation and cholesterol metabolism in chemoresistant pancreatic cancer", authors: "Yunguang Li, Shijie Tang, Huan Wang, Hongwen Zhu, Shiwei Guo, Yehan Zhang, Yurun Lu†, et al.", venue: "bioRxiv", details: "Earlier preprint of the Cell Stem Cell article listed above", doi: "10.1101/2025.04.13.648567", cofirst: true },
    { year: 2022, type: "journal", title: "Annotating regulatory elements by heterogeneous network embedding", authors: "Yurun Lu, Zhanying Feng, Songmao Zhang and Yong Wang", venue: "Bioinformatics", details: "38(10), 2899–2911", doi: "10.1093/bioinformatics/btac185", code: "https://github.com/YurunLu/RE-GOA" }
  ],
  patents: [
    { title: "Methods for constructing glucose-metabolism-related disease prediction and non-diabetic subtyping models, and for predicting postprandial blood glucose", number: "PCT/CN2024/113123 · WO2025260489A1", status: "Published international application", year: 2025, inventors: "Yurun Lu, Yong Wang, Huating Li, Dan Liu, Zhongming Liang, Luonan Chen and Weiping Jia", url: "https://patents.google.com/patent/WO2025260489A1/zh", note: "Claims priority to the three Chinese applications listed below, filed on 21 June 2024." },
    { title: "Methods and apparatus for constructing a glucose-metabolism-related disease prediction model and predicting glucose-metabolism-related diseases", number: "CN202410811383.4 · CN118866380A", status: "Published application", year: 2024, inventors: "Yurun Lu, Yong Wang, Huating Li, Dan Liu, Zhongming Liang, Luonan Chen and Weiping Jia", url: "https://patents.google.com/patent/CN118866380A/zh" },
    { title: "Methods and apparatus for constructing a non-diabetic subtyping model and predicting non-diabetic subtypes", number: "CN202410811369.4 · CN118800468A", status: "Published application", year: 2024, inventors: "Yurun Lu, Yong Wang, Huating Li, Dan Liu, Zhongming Liang, Luonan Chen and Weiping Jia", url: "https://patents.google.com/patent/CN118800468A/zh" },
    { title: "Methods and apparatus for constructing a postprandial blood glucose prediction model and predicting postprandial blood glucose", number: "CN202410811375.X · CN118782259A", status: "Published application", year: 2024, inventors: "Yurun Lu, Yong Wang, Huating Li, Dan Liu, Zhongming Liang, Luonan Chen and Weiping Jia", url: "https://patents.google.com/patent/CN118782259A/zh" }
  ],
  patentSummary: "CGMformer-related patent applications. English titles are translations of the published Chinese titles.",
  projects: [
    { title: "Multi-Scale Causal Theory and Applications in Precision Medicine", code: "2022YFA1004800", source: "National Key Research and Development Program of China" },
    { title: "Comprehensive Mathematical Understanding of the Complex Control System between Organs and Challenge for Ultra-Early Precision Medicine", code: "JPMJMS2021", source: "JST Moonshot R&D Program", url: "https://www.jst.go.jp/moonshot/en/program/goal2/21_aihara.html" },
    { title: "AI-Enabled Systems Analysis of Complex Diseases and Research on Intervention Strategies", code: "E250200612", source: "Shenzhen Medical Research Fund" },
    { title: "Ultra-Early Detection and Intervention of Heart Failure via Heart-Failure DNB (HF-DNB)", source: "Supplementary funding under the JST Moonshot R&D project (JPMJMS2021)", role: "Project participant" }
  ],
  education: [
    { date: "Sep 2022 – Jun 2025", title: "Ph.D. in Computer Software and Theory", institution: "University of Chinese Academy of Sciences", detail: "Advisors: Profs. Songmao Zhang and Yong Wang.", thesis: "Research on Representation Learning for Biological Multiscale Regulatory Systems" },
    { date: "Sep 2019 – Jun 2022", title: "M.S. in Computer Software and Theory", institution: "University of Chinese Academy of Sciences", detail: "Advisor: Prof. Songmao Zhang.", thesis: "Constructing Biological Knowledge Graphs Based on Representation Learning of Heterogeneous Networks" },
    { date: "Sep 2015 – Jun 2019", title: "B.S. in Mathematics and Applied Mathematics", institution: "Shandong University", detail: "Taishan College" }
  ],
  experience: [
    { date: "Sep 2025 – Present", title: "Project Researcher", institution: "International Research Center for Neurointelligence (IRCN), The University of Tokyo", detail: "Working with Prof. Kazuyuki Aihara and Prof. Luonan Chen. Research on glucose regulatory dynamics and disease early warning using dynamical systems theory and representation learning." }
  ]
};
