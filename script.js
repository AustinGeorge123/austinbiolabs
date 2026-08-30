const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.09 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const geneStories = [
  {
    id: 'ICAM1',
    group: 'Core-20 induced',
    role: 'Surface biomarker',
    summary: 'Core-20 residual-state marker with conserved induction in 4/4 models, strong RNA evidence, 3 ATAC-concordant lines, and surfaceome support.',
    evidence: [
      ['RNA trajectory', 'S1 rises and S2 remains high; partial persistence through washout/recovery.'],
      ['ATAC', 'Accessibility support in 3 lines, matching RNA induction.'],
      ['Targetability', 'Membrane/CD marker annotation; strongest ADC/CAR-T style example in the current map.'],
      ['Website use', 'Default example for a biomarker-to-target story.']
    ]
  },
  {
    id: 'ACKR3',
    group: 'Core-20 induced',
    role: 'Receptor target',
    summary: 'Core-20 induced marker with high DTP specificity, conserved RNA induction in 4/4 models, 3 ATAC-concordant lines, and membrane receptor support.',
    evidence: [
      ['RNA trajectory', 'Strong S2 induction beyond the acute response in several lines.'],
      ['ATAC', 'Gained accessibility supports the induced persister-state signal.'],
      ['Targetability', 'GPCR-style membrane biology; useful as a receptor target narrative.'],
      ['Caveat', 'Best framed as a candidate requiring experimental validation.']
    ]
  },
  {
    id: 'GUCY1A2',
    group: 'Core-20 induced',
    role: 'Classifier gene',
    summary: 'Core-20 induced marker with conserved induction in 4/4 lines and the highest DTP-specificity score among these examples.',
    evidence: [
      ['RNA', 'Mean log2FC 3.873 across models; high DTP-specificity score.'],
      ['Specificity', 'Separates established DTP biology from acute-only response.'],
      ['ATAC', 'Chromatin accessibility support in multiple models.'],
      ['Website use', 'Best example for the compact residual-state signature.']
    ]
  },
  {
    id: 'MRAS',
    group: 'Core-20 induced',
    role: 'Signaling marker',
    summary: 'Core-20 induced gene with conserved induction in 4/4 models and progressive DTP behavior.',
    evidence: [
      ['RNA', 'Mean log2FC 2.947 across models.'],
      ['Core score', 'Representative Core-20 gene with LOOCV robustness.'],
      ['ATAC', 'Accessibility support is present but less dominant than RNA.'],
      ['Website use', 'Shows signaling adaptation inside the residual state.']
    ]
  },
  {
    id: 'TUBA1A',
    group: 'Core-20 induced',
    role: 'Cytoskeletal state marker',
    summary: 'Core-20 induced gene with conserved induction in 4/4 models and 3 ATAC-concordant lines.',
    evidence: [
      ['RNA', 'Mean log2FC 2.670 across models.'],
      ['ATAC', '3 concordant lines support regulatory coupling.'],
      ['Core score', 'LOOCV-robust member of the compact signature.'],
      ['Website use', 'Connects residual state to structural/cytoskeletal remodeling.']
    ]
  },
  {
    id: 'CACNG4',
    group: 'Core-20 induced',
    role: 'Persistent marker',
    summary: 'Core-20 induced gene with conserved support and persistent reversibility behavior.',
    evidence: [
      ['RNA', 'Mean log2FC 1.415 with conserved support.'],
      ['Persistence', 'Consensus behavior is persistent rather than strongly reversible.'],
      ['ATAC', '2 concordant lines support accessibility change.'],
      ['Website use', 'Useful for showing residual-state memory.']
    ]
  },
  {
    id: 'HSPB8',
    group: 'Core-20 induced',
    role: 'Stress survival marker',
    summary: 'Core-20 induced stress-associated gene with conserved RNA induction and partial reversibility.',
    evidence: [
      ['RNA', 'Mean log2FC 1.820 across models.'],
      ['Biology', 'Fits stress-survival and proteostasis framing.'],
      ['Core score', 'LOOCV-robust Core-20 member.'],
      ['Website use', 'Adds stress-adaptation texture to the signature.']
    ]
  },
  {
    id: 'COL4A4',
    group: 'Core-20 induced',
    role: 'ECM marker',
    summary: 'Core-20 induced collagen gene with strong conserved induction and ECM remodeling relevance.',
    evidence: [
      ['RNA', 'Mean log2FC 4.378 across models.'],
      ['ECM', 'Collagen signal links DTP to matrix remodeling.'],
      ['ATAC', '2 concordant lines in integrated target evidence.'],
      ['Website use', 'Pairs naturally with CCN2/CTGF in the ECM story.']
    ]
  },
  {
    id: 'COL5A1',
    group: 'Core-20 induced',
    role: 'ECM marker',
    summary: 'Core-20 induced collagen gene with conserved induction and DTP-emergent behavior.',
    evidence: [
      ['RNA', 'Mean log2FC 3.063 across models.'],
      ['Specificity', 'Classified as DTP-emergent in the Core-20 table.'],
      ['ECM', 'Supports the collagen/remodeling pathway layer.'],
      ['Website use', 'Shows that ECM is part of the compact signature, not an add-on.']
    ]
  },
  {
    id: 'ACHE',
    group: 'Core-20 induced',
    role: 'Surface/target marker',
    summary: 'Core-20 induced gene with conserved support and surfaceome/targetability relevance.',
    evidence: [
      ['RNA', 'Mean log2FC 2.391 across supported models.'],
      ['Targetability', 'Highlighted among feasible surfaceome candidates.'],
      ['ATAC', '2 concordant lines in integrated evidence.'],
      ['Website use', 'Secondary surface-target example after ICAM1 and ACKR3.']
    ]
  },
  {
    id: 'HMGA1',
    group: 'Core-20 repressed',
    role: 'Repressed chromatin marker',
    summary: 'Core-20 repressed gene with conserved downregulation, DepMap essentiality, and strong signature value.',
    evidence: [
      ['RNA', 'Mean log2FC -2.386 across models.'],
      ['Dependency', 'DepMap essentiality means repression should not be mistaken for irrelevance.'],
      ['Core score', 'LOOCV-robust Core-20 member.'],
      ['Website use', 'Shows the signature includes both induced and repressed axes.']
    ]
  },
  {
    id: 'ADORA2B',
    group: 'Core-20 repressed',
    role: 'Repressed receptor marker',
    summary: 'Core-20 repressed gene with conserved downregulation and progressive DTP behavior.',
    evidence: [
      ['RNA', 'Mean log2FC -2.035 across models.'],
      ['Core score', 'LOOCV-robust member of the compact signature.'],
      ['ATAC', 'Concordant support is present but modest.'],
      ['Website use', 'Shows receptor biology can move down as the residual state forms.']
    ]
  },
  {
    id: 'IGFBP2',
    group: 'Core-20 repressed',
    role: 'Repressed secreted marker',
    summary: 'Core-20 repressed gene with partial/conserved support and meaningful DTP specificity.',
    evidence: [
      ['RNA', 'Mean log2FC -0.774 with 3 concordant models.'],
      ['Specificity', 'DTP-specificity score 1.447.'],
      ['ATAC', '2 concordant lines support the direction.'],
      ['Website use', 'Good example of a subtler but signature-informative gene.']
    ]
  },
  {
    id: 'ADAM19',
    group: 'Core-20 repressed',
    role: 'DTP-emergent remodeling marker',
    summary: 'Core-20 gene with mixed mean direction in unified evidence but DTP-emergent behavior in the compact signature table.',
    evidence: [
      ['Core table', 'Listed as repressed Core-20 with DTP-emergent class.'],
      ['RNA', 'Mean effect is near zero across all models, reflecting mixed line behavior.'],
      ['Interpretation', 'Use as a nuanced example, not a headline target.'],
      ['Website use', 'Demonstrates why line-level evidence matters.']
    ]
  },
  {
    id: 'DHCR24',
    group: 'Core-20 repressed',
    role: 'Metabolic marker',
    summary: 'Core-20 repressed metabolic gene with conserved downregulation and partial reversibility.',
    evidence: [
      ['RNA', 'Mean log2FC -1.125 across models.'],
      ['Biology', 'Fits metabolic rewiring of the residual state.'],
      ['Core score', 'LOOCV-robust Core-20 member.'],
      ['Website use', 'Connects DTP to sterol/metabolic program changes.']
    ]
  },
  {
    id: 'PLAU',
    group: 'Core-20 repressed',
    role: 'Protease marker',
    summary: 'Core-20 repressed gene with conserved downregulation and partial reversibility.',
    evidence: [
      ['RNA', 'Mean log2FC -1.052 across models.'],
      ['ATAC', 'Concordant support is present in one line.'],
      ['Core score', 'LOOCV-robust signature member.'],
      ['Website use', 'Complements the ECM/protease remodeling discussion.']
    ]
  },
  {
    id: 'HMGB3',
    group: 'Core-20 repressed',
    role: 'Chromatin/proliferation marker',
    summary: 'Core-20 repressed gene with conserved downregulation and partial reversibility.',
    evidence: [
      ['RNA', 'Mean log2FC -1.189 across models.'],
      ['Biology', 'Fits suppression of proliferation-associated nuclear programs.'],
      ['Core score', 'LOOCV-robust Core-20 member.'],
      ['Website use', 'Supports the “quiescence is active biology” section.']
    ]
  },
  {
    id: 'ACAT2',
    group: 'Core-20 repressed',
    role: 'Metabolic marker',
    summary: 'Core-20 repressed metabolic gene with conserved downregulation and DTP-emergent behavior.',
    evidence: [
      ['RNA', 'Mean log2FC -1.497 across models.'],
      ['Specificity', 'DTP-emergent class in the compact signature table.'],
      ['Biology', 'Supports metabolic rewiring in DTP.'],
      ['Website use', 'Useful in a metabolism-focused expanded view.']
    ]
  },
  {
    id: 'EPB41L4B',
    group: 'Core-20 repressed',
    role: 'Repressed structural marker',
    summary: 'Core-20 repressed gene with conserved downregulation, strong DTP specificity, and partial reversibility.',
    evidence: [
      ['RNA', 'Mean log2FC -1.557 across models.'],
      ['ATAC', 'Concordant support in one line.'],
      ['Core score', 'LOOCV-robust Core-20 member.'],
      ['Website use', 'Shows the repressed arm of the residual-state classifier.']
    ]
  },
  {
    id: 'RFFL',
    group: 'Core-20 repressed',
    role: 'Repressed signature marker',
    summary: 'Core-20 repressed gene with conserved downregulation and partial reversibility.',
    evidence: [
      ['RNA', 'Mean log2FC -1.044 across models.'],
      ['ATAC', 'No strong cross-line ATAC convergence in unified evidence.'],
      ['Core score', 'Still contributes to LOOCV-robust signature performance.'],
      ['Website use', 'Keep in full Core-20 mode rather than headline mode.']
    ]
  },
  {
    id: 'CCN2/CTGF',
    group: 'Additional node',
    role: 'ECM remodeling',
    summary: 'Conserved induced ECM/secreted factor with strong RNA and ATAC support, ECM-module membership, and candidate nomination support.',
    evidence: [
      ['RNA', 'Conserved S2 induction in 4/4 models.'],
      ['ECM module', 'Connects the DTP state to matrix remodeling and secreted biology.'],
      ['ATAC', 'Accessibility evidence supports transcriptional activation.'],
      ['Website use', 'Explains how residual cells reshape their environment.']
    ]
  },
  {
    id: 'RRM2',
    group: 'Additional node',
    role: 'Resensitization',
    summary: 'Conserved repressed and DepMap-essential cell-cycle/metabolic gene. It supports a resensitization story rather than direct DTP killing.',
    evidence: [
      ['RNA', 'Suppressed in S2 across all 4 models.'],
      ['ATAC', 'Concordant accessibility loss in 3 lines.'],
      ['Dependency', 'DepMap essentiality suggests vulnerability if cells re-enter cycle.'],
      ['Website use', 'Shows why repressed genes can still matter therapeutically.']
    ]
  },
  {
    id: 'ATF3',
    group: 'Additional node',
    role: 'Stress regulator',
    summary: 'Conserved induced stress-response TF with RNA support, regulon/chromatin context, and final candidate nomination support.',
    evidence: [
      ['RNA', 'S2 induction in all 4 models.'],
      ['Regulatory context', 'ATF3-linked regulon enrichment appears in ATAC-supported analyses.'],
      ['Interpretation', 'Useful bridge between marker genes and stress-response state logic.'],
      ['Caveat', 'Better presented as a state regulator than a surface target.']
    ]
  },
  {
    id: 'AHRR',
    group: 'Additional node',
    role: 'State readout',
    summary: 'Conserved induced gene with strong RNA support and moderate ATAC support; useful as a regulatory or stress-state readout.',
    evidence: [
      ['RNA', 'Induced in all 4 models.'],
      ['ATAC', 'Concordant support in 2 lines.'],
      ['Specificity', 'Part acute response, part progressive DTP program.'],
      ['Website use', 'Good secondary marker, not the lead target story.']
    ]
  },
  {
    id: 'TEAD/YAP',
    group: 'Additional node',
    role: 'Regulatory module',
    summary: 'A pathway node rather than a single-gene marker: TEAD/YAP positive-control recovery is strong, with TEAD1 regulon activation and mixed member-level RNA behavior.',
    evidence: [
      ['Positive control', '6/6 TEAD/YAP genes recovered; 4 conserved and 2 partial.'],
      ['TEAD1', 'Activated regulon signal with gained ATAC overlap.'],
      ['YAP1/WWTR1', 'RNA is weak or repressed, so avoid saying simple YAP expression is up.'],
      ['Website use', 'Shows why pathway activity can matter more than one gene direction.']
    ]
  }
];

const geneStageProfiles = {
  "ICAM1": [
    {
      "stage": "S0",
      "score": 11.32,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 12.41,
      "delta": 1.1,
      "status": "high"
    },
    {
      "stage": "S2",
      "score": 13.16,
      "delta": 1.84,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 13.05,
      "delta": 1.73,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 12.93,
      "delta": 1.61,
      "status": "high"
    }
  ],
  "ACKR3": [
    {
      "stage": "S0",
      "score": 6.99,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 8.0,
      "delta": 1.01,
      "status": "high"
    },
    {
      "stage": "S2",
      "score": 9.88,
      "delta": 2.9,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 9.8,
      "delta": 2.82,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 9.59,
      "delta": 2.6,
      "status": "high"
    }
  ],
  "GUCY1A2": [
    {
      "stage": "S0",
      "score": 6.18,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 6.36,
      "delta": 0.18,
      "status": "near baseline"
    },
    {
      "stage": "S2",
      "score": 7.49,
      "delta": 1.31,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 7.26,
      "delta": 1.08,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 7.35,
      "delta": 1.18,
      "status": "high"
    }
  ],
  "MRAS": [
    {
      "stage": "S0",
      "score": 7.92,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 8.73,
      "delta": 0.81,
      "status": "rising"
    },
    {
      "stage": "S2",
      "score": 9.96,
      "delta": 2.05,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 10.07,
      "delta": 2.15,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 9.85,
      "delta": 1.93,
      "status": "high"
    }
  ],
  "TUBA1A": [
    {
      "stage": "S0",
      "score": 9.93,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 11.49,
      "delta": 1.56,
      "status": "high"
    },
    {
      "stage": "S2",
      "score": 12.46,
      "delta": 2.53,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 12.59,
      "delta": 2.66,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 12.04,
      "delta": 2.11,
      "status": "high"
    }
  ],
  "CACNG4": [
    {
      "stage": "S0",
      "score": 9.16,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 10.08,
      "delta": 0.92,
      "status": "rising"
    },
    {
      "stage": "S2",
      "score": 10.23,
      "delta": 1.07,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 10.39,
      "delta": 1.23,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 10.16,
      "delta": 1.0,
      "status": "high"
    }
  ],
  "HSPB8": [
    {
      "stage": "S0",
      "score": 8.87,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 9.84,
      "delta": 0.97,
      "status": "rising"
    },
    {
      "stage": "S2",
      "score": 10.51,
      "delta": 1.64,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 10.46,
      "delta": 1.59,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 10.04,
      "delta": 1.17,
      "status": "high"
    }
  ],
  "COL4A4": [
    {
      "stage": "S0",
      "score": 7.34,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 8.35,
      "delta": 1.01,
      "status": "high"
    },
    {
      "stage": "S2",
      "score": 10.46,
      "delta": 3.12,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 10.24,
      "delta": 2.9,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 9.93,
      "delta": 2.59,
      "status": "high"
    }
  ],
  "COL5A1": [
    {
      "stage": "S0",
      "score": 11.17,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 11.91,
      "delta": 0.75,
      "status": "rising"
    },
    {
      "stage": "S2",
      "score": 14.13,
      "delta": 2.96,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 14.23,
      "delta": 3.06,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 13.96,
      "delta": 2.79,
      "status": "high"
    }
  ],
  "ACHE": [
    {
      "stage": "S0",
      "score": 7.06,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 7.58,
      "delta": 0.52,
      "status": "rising"
    },
    {
      "stage": "S2",
      "score": 8.57,
      "delta": 1.51,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 8.65,
      "delta": 1.59,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 8.23,
      "delta": 1.17,
      "status": "high"
    }
  ],
  "HMGA1": [
    {
      "stage": "S0",
      "score": 14.95,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 13.34,
      "delta": -1.62,
      "status": "low"
    },
    {
      "stage": "S2",
      "score": 12.53,
      "delta": -2.42,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 13.08,
      "delta": -1.88,
      "status": "low"
    },
    {
      "stage": "S4",
      "score": 13.31,
      "delta": -1.64,
      "status": "low"
    }
  ],
  "ADORA2B": [
    {
      "stage": "S0",
      "score": 10.25,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 8.76,
      "delta": -1.49,
      "status": "low"
    },
    {
      "stage": "S2",
      "score": 8.55,
      "delta": -1.7,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 8.7,
      "delta": -1.55,
      "status": "low"
    },
    {
      "stage": "S4",
      "score": 9.06,
      "delta": -1.19,
      "status": "low"
    }
  ],
  "IGFBP2": [
    {
      "stage": "S0",
      "score": 9.79,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 9.43,
      "delta": -0.36,
      "status": "repressed"
    },
    {
      "stage": "S2",
      "score": 9.01,
      "delta": -0.78,
      "status": "repressed"
    },
    {
      "stage": "S3",
      "score": 9.01,
      "delta": -0.78,
      "status": "repressed"
    },
    {
      "stage": "S4",
      "score": 9.23,
      "delta": -0.56,
      "status": "repressed"
    }
  ],
  "ADAM19": [
    {
      "stage": "S0",
      "score": 9.62,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 8.84,
      "delta": -0.77,
      "status": "repressed"
    },
    {
      "stage": "S2",
      "score": 9.57,
      "delta": -0.04,
      "status": "near baseline"
    },
    {
      "stage": "S3",
      "score": 9.96,
      "delta": 0.35,
      "status": "near baseline"
    },
    {
      "stage": "S4",
      "score": 9.78,
      "delta": 0.17,
      "status": "near baseline"
    }
  ],
  "DHCR24": [
    {
      "stage": "S0",
      "score": 14.11,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 13.62,
      "delta": -0.49,
      "status": "repressed"
    },
    {
      "stage": "S2",
      "score": 12.97,
      "delta": -1.14,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 13.35,
      "delta": -0.76,
      "status": "repressed"
    },
    {
      "stage": "S4",
      "score": 13.19,
      "delta": -0.92,
      "status": "repressed"
    }
  ],
  "PLAU": [
    {
      "stage": "S0",
      "score": 13.04,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 12.93,
      "delta": -0.11,
      "status": "near baseline"
    },
    {
      "stage": "S2",
      "score": 12.02,
      "delta": -1.02,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 11.97,
      "delta": -1.07,
      "status": "low"
    },
    {
      "stage": "S4",
      "score": 12.2,
      "delta": -0.84,
      "status": "repressed"
    }
  ],
  "HMGB3": [
    {
      "stage": "S0",
      "score": 12.11,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 11.27,
      "delta": -0.84,
      "status": "repressed"
    },
    {
      "stage": "S2",
      "score": 10.93,
      "delta": -1.18,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 11.06,
      "delta": -1.05,
      "status": "low"
    },
    {
      "stage": "S4",
      "score": 11.23,
      "delta": -0.88,
      "status": "repressed"
    }
  ],
  "ACAT2": [
    {
      "stage": "S0",
      "score": 10.67,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 9.89,
      "delta": -0.77,
      "status": "repressed"
    },
    {
      "stage": "S2",
      "score": 9.26,
      "delta": -1.41,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 9.72,
      "delta": -0.95,
      "status": "repressed"
    },
    {
      "stage": "S4",
      "score": 9.59,
      "delta": -1.08,
      "status": "low"
    }
  ],
  "EPB41L4B": [
    {
      "stage": "S0",
      "score": 10.35,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 9.59,
      "delta": -0.76,
      "status": "repressed"
    },
    {
      "stage": "S2",
      "score": 8.97,
      "delta": -1.38,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 9.03,
      "delta": -1.32,
      "status": "low"
    },
    {
      "stage": "S4",
      "score": 9.13,
      "delta": -1.22,
      "status": "low"
    }
  ],
  "RFFL": [
    {
      "stage": "S0",
      "score": 10.5,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 9.68,
      "delta": -0.82,
      "status": "repressed"
    },
    {
      "stage": "S2",
      "score": 9.5,
      "delta": -1.0,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 9.58,
      "delta": -0.91,
      "status": "repressed"
    },
    {
      "stage": "S4",
      "score": 9.68,
      "delta": -0.82,
      "status": "repressed"
    }
  ],
  "RRM2": [
    {
      "stage": "S0",
      "score": 13.3,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 10.27,
      "delta": -3.03,
      "status": "low"
    },
    {
      "stage": "S2",
      "score": 11.06,
      "delta": -2.24,
      "status": "low"
    },
    {
      "stage": "S3",
      "score": 11.83,
      "delta": -1.47,
      "status": "low"
    },
    {
      "stage": "S4",
      "score": 11.69,
      "delta": -1.61,
      "status": "low"
    }
  ],
  "ATF3": [
    {
      "stage": "S0",
      "score": 8.59,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 9.18,
      "delta": 0.6,
      "status": "rising"
    },
    {
      "stage": "S2",
      "score": 10.65,
      "delta": 2.06,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 10.42,
      "delta": 1.83,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 9.98,
      "delta": 1.39,
      "status": "high"
    }
  ],
  "AHRR": [
    {
      "stage": "S0",
      "score": 7.83,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 9.26,
      "delta": 1.43,
      "status": "high"
    },
    {
      "stage": "S2",
      "score": 9.52,
      "delta": 1.69,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 9.43,
      "delta": 1.6,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 9.05,
      "delta": 1.22,
      "status": "high"
    }
  ],
  "CCN2/CTGF": [
    {
      "stage": "S0",
      "score": 8.63,
      "delta": 0.0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": 8.82,
      "delta": 0.19,
      "status": "near baseline"
    },
    {
      "stage": "S2",
      "score": 11.76,
      "delta": 3.13,
      "status": "high"
    },
    {
      "stage": "S3",
      "score": 11.43,
      "delta": 2.8,
      "status": "high"
    },
    {
      "stage": "S4",
      "score": 11.07,
      "delta": 2.44,
      "status": "high"
    }
  ],
  "TEAD/YAP": [
    {
      "stage": "S0",
      "score": null,
      "delta": 0,
      "status": "baseline"
    },
    {
      "stage": "S1",
      "score": null,
      "delta": null,
      "status": "mixed"
    },
    {
      "stage": "S2",
      "score": null,
      "delta": null,
      "status": "regulon active"
    },
    {
      "stage": "S3",
      "score": null,
      "delta": null,
      "status": "context persists"
    },
    {
      "stage": "S4",
      "score": null,
      "delta": null,
      "status": "partial recovery"
    }
  ]
};

const pathwayStories = {
  S0: {
    title: 'S0 Parental',
    role: 'Baseline',
    activated: [
      ['Hallmark E2F Targets', 'baseline-high cell-cycle program'],
      ['Hallmark G2M Checkpoint', 'baseline-high proliferation'],
      ['Reactome DNA Replication', 'baseline-high replication'],
      ['Reactome Mitotic Spindle Checkpoint', 'baseline-high division']
    ],
    suppressed: []
  },
  S1: {
    title: 'S1 Acute',
    role: 'Drug stress',
    activated: [
      ['Hallmark Coagulation', '+0.072 vs S0'],
      ['Elastic Fiber Molecules', '+0.070 vs S0'],
      ['ECM Degradation', '+0.062 vs S0'],
      ['Hallmark Myogenesis', '+0.059 vs S0']
    ],
    suppressed: [
      ['E2F2', '-0.454 vs S0'],
      ['DNA Unwinding', '-0.399 vs S0'],
      ['Pre-Replicative Complex', '-0.356 vs S0'],
      ['DNA Strand Elongation', '-0.344 vs S0']
    ]
  },
  S2: {
    title: 'S2 Persister',
    role: 'Residual state',
    activated: [
      ['Collagen Biosynthesis', '+0.133 vs S0'],
      ['O-Glycosylation TSR Proteins', '+0.120 vs S0'],
      ['Elastic Fiber Molecules', '+0.117 vs S0'],
      ['Hallmark EMT', '+0.102 vs S0'],
      ['Hallmark Coagulation', '+0.095 vs S0']
    ],
    suppressed: [
      ['E2F2', '-0.307 vs S0'],
      ['DNA Unwinding', '-0.249 vs S0'],
      ['Pre-Replicative Complex', '-0.244 vs S0'],
      ['DNA Strand Elongation', '-0.234 vs S0'],
      ['Polymerase Switching', '-0.233 vs S0']
    ]
  },
  S3: {
    title: 'S3 Washout',
    role: 'Residual memory',
    activated: [
      ['Collagen Biosynthesis', '+0.142 vs S0'],
      ['O-Glycosylation TSR Proteins', '+0.129 vs S0'],
      ['Elastic Fiber Molecules', '+0.116 vs S0'],
      ['Hallmark EMT', '+0.109 vs S0']
    ],
    suppressed: [
      ['E2F2', '-0.175 vs S0'],
      ['Prometaphase Chromosomes', '-0.147 vs S0'],
      ['Pre-Replicative Complex', '-0.146 vs S0'],
      ['ATR Replication Stress', '-0.141 vs S0']
    ]
  },
  S4: {
    title: 'S4 Recovery',
    role: 'Partial recovery',
    activated: [
      ['Collagen Biosynthesis', '+0.127 vs S0'],
      ['O-Glycosylation TSR Proteins', '+0.112 vs S0'],
      ['Elastic Fiber Molecules', '+0.108 vs S0'],
      ['Hallmark EMT', '+0.096 vs S0']
    ],
    suppressed: [
      ['E2F2', '-0.200 vs S0'],
      ['Pre-Replicative Complex', '-0.176 vs S0'],
      ['DNA Unwinding', '-0.169 vs S0'],
      ['ATR Replication Stress', '-0.165 vs S0']
    ]
  }
};

const geneSelectors = document.querySelectorAll('.gene-selector');
const stageSelector = document.querySelector('.stage-selector');
const geneTitle = document.getElementById('gene-title');
const geneRole = document.getElementById('gene-role');
const geneSummary = document.getElementById('gene-summary');
const geneStageProfile = document.getElementById('gene-stage-profile');
const geneEvidenceGrid = document.getElementById('gene-evidence-grid');
const stageTitle = document.getElementById('stage-title');
const stageRole = document.getElementById('stage-role');
const pathwayActivated = document.getElementById('pathway-activated');
const pathwaySuppressed = document.getElementById('pathway-suppressed');

function setActiveButton(container, value) {
  container?.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('active', button.dataset.value === value);
  });
}

function renderGene(geneId) {
  const story = geneStories.find((gene) => gene.id === geneId) || geneStories[0];
  geneTitle.textContent = story.id;
  geneRole.textContent = story.role;
  geneSummary.textContent = story.summary;
  const profile = geneStageProfiles[story.id] || [];
  geneStageProfile.innerHTML = profile.map((stage, index) => {
    const delta = stage.delta === null || stage.delta === undefined ? 'module' : `${stage.delta > 0 ? '+' : ''}${stage.delta}`;
    const score = stage.score === null || stage.score === undefined ? stage.status : `score ${stage.score}`;
    return `
      <div class="stage-profile-item ${stage.status.replaceAll(' ', '-')}">
        <div class="stage-profile-top"><strong>${stage.stage}</strong>${renderWave(index + story.id.length, `${stage.stage} profile score`)}</div>
        <span>${stage.status}</span>
        <small>${score} · ${delta}</small>
      </div>
    `;
  }).join('');
  geneEvidenceGrid.innerHTML = story.evidence.map(([title, text], index) => `
    <div class="evidence-tile">
      <div class="evidence-tile-head">
        <strong>${title}</strong>
        ${renderWave(index + story.id.length, 'Evidence strength')}
      </div>
      <p>${text}</p>
      <span class="evidence-status">Supported</span>
    </div>
  `).join('');
  geneSelectors.forEach((selector) => setActiveButton(selector, story.id));
}

function renderWave(seed, label) {
  const levels = [2, 4, 6, 5, 7, 4, 6].map((level, index) => {
    const adjusted = Math.max(2, Math.min(8, level + ((seed + index) % 3) - 1));
    return `<i style="--h:${adjusted}" aria-hidden="true"></i>`;
  }).join('');
  return `<span class="wave-score" role="img" aria-label="${label}">${levels}</span>`;
}

function renderPathways(stageId) {
  const stage = pathwayStories[stageId] || pathwayStories.S2;
  stageTitle.textContent = stage.title;
  stageRole.textContent = stage.role;
  pathwayActivated.innerHTML = stage.activated.map(([title, text], index) => `
    <div class="pathway-item">
      <div class="pathway-item-head"><strong>${title}</strong>${renderWave(index + 5, 'Pathway activation score')}</div>
      <span>${text}</span>
    </div>
  `).join('');
  pathwaySuppressed.innerHTML = stage.suppressed.length
    ? stage.suppressed.map(([title, text], index) => `
      <div class="pathway-item">
        <div class="pathway-item-head"><strong>${title}</strong>${renderWave(index + 2, 'Pathway suppression score')}</div>
        <span>${text}</span>
      </div>
    `).join('')
    : `<div class="pathway-item">
        <div class="pathway-item-head"><strong>Reference state</strong>${renderWave(1, 'Baseline reference')}</div>
        <span>Used as the baseline for stage comparisons</span>
      </div>`;
  setActiveButton(stageSelector, stageId);
}

if (geneSelectors.length && stageSelector) {
  geneSelectors.forEach((selector) => {
    const group = selector.dataset.group;
    selector.innerHTML = geneStories
      .filter((gene) => gene.group === group)
      .map((gene) => `<button type="button" data-value="${gene.id}" data-role="${gene.role}">${gene.id}</button>`)
      .join('');
  });
  stageSelector.innerHTML = Object.keys(pathwayStories).map((stage) => `<button type="button" data-value="${stage}">${stage}</button>`).join('');
  geneSelectors.forEach((selector) => {
    selector.addEventListener('click', (event) => {
      if (event.target.matches('button')) renderGene(event.target.dataset.value);
    });
  });
  stageSelector.addEventListener('click', (event) => {
    if (event.target.matches('button')) renderPathways(event.target.dataset.value);
  });
  renderGene('ICAM1');
  renderPathways('S2');
}
