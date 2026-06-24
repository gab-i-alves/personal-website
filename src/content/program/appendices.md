---
title: "Referências e apêndices"
description: "Bibliografia consolidada, cursos online de referência e apêndices do programa."
---

## 6. Bibliografia consolidada

### 6.1 Básica (obrigatória por trilha)
- **Sistemas de Dados:** Kleppmann, *Designing Data-Intensive Applications* (2ª ed.); Stopford, *Designing Event-Driven Systems*; Robinson, Webber & Eifrem, *Graph Databases* (2ª ed.).
- **Neurociência Computacional:** Dayan & Abbott, *Theoretical Neuroscience*; material aberto da Neuromatch Academy (CompNeuro).
- **Bioinformática:** Compeau & Pevzner, *Bioinformatics Algorithms: An Active Learning Approach*.
- **Liderança & Sociotécnica:** Skelton & Pais, *Team Topologies*; Stone, Patton & Heen, *Difficult Conversations*.
- **Sistemas, Cognição & Meta:** Meadows, *Thinking in Systems*; MacKay, *Information Theory, Inference, and Learning Algorithms*; Petzold, *The Annotated Turing*.

### 6.2 Complementar (opcional / avançada)
Cover & Thomas, *Elements of Information Theory*; Sterman, *Business Dynamics*; Izhikevich, *Dynamical Systems in Neuroscience*; Trappenberg, *Fundamentals of Computational Neuroscience*; Durbin et al., *Biological Sequence Analysis*; Hogan et al., *Knowledge Graphs* (survey); Boyd & Richerson, *Culture and the Evolutionary Process*; Blackmore, *The Meme Machine*; Forsgren, Humble & Kim, *Accelerate*; Larson, *An Elegant Puzzle*; Hofstadter, *Gödel, Escher, Bach*; Davis, *The Universal Computer*.

### 6.3 Fontes primárias selecionadas
Shannon (1948), *A Mathematical Theory of Communication*; Hodgkin & Huxley (1952); Turing (1936; 1950); Conway (1968), *How Do Committees Invent?*; Kreps, *The Log* (ensaio).

---

## 7. Cursos online de referência (estado atual verificado)

| Curso | Trilha | Acesso | Observação |
|---|---|---|---|
| MIT **6.5840** Distributed Systems (Spring 2026) | A | Aberto (aulas, *paper questions*, labs em Go) | Espinha prática de D2/D6 |
| **Neuromatch Academy — Computational Neuroscience** | B | Ebook aberto (CC-BY) + curso síncrono em julho/2026 | Candidaturas até março; projeto-âncora de D8 |
| HarvardX **MCB80x** Fundamentals of Neuroscience | B | Aberto | Base de D4 |
| **Bioinformatics Specialization** (UCSD, Coursera) + **Rosalind** | C | Coursera (auditável) + Rosalind gratuito | Desafios automatizados de D9 |
| MIT **18.06** Linear Algebra (Strang) | P | Aberto (OCW) | Base de P1 |
| **CCDAK** (Confluent Certified Developer for Apache Kafka) | A | Pago, opcional | Só após validar necessidade real de *broker* |

---

## Apêndice A — Mapa de pré-requisitos (resumo)

```
P1, P2  ──►  D1, D2, D4
D1      ──►  D8, D10
D2      ──►  D6, D7
D3      ──►  D4, D10, D11
D4      ──►  D8
D11     ──►  D12  (recomendado)
Fase II (≥2 replicações) ──►  Fase III (S1 ──► S2 ──► Capstone)
```

## Apêndice B — Métodos de avaliação (princípios)

1. **Projeto sobre prova.** Toda disciplina fecha em um artefato verificável (implementação, análise, ensaio, portfólio).
2. **Replicação como aprendizado.** Reproduzir um resultado publicado antes de tentar estendê-lo.
3. **Dados reais.** Sempre que possível, datasets públicos ou os sistemas que você opera.
4. **Reprodutibilidade.** Notebooks versionados, ambientes declarados, *seeds* fixadas.
5. **Comunicação.** Cada checkpoint inclui um relato escrito curto — o entendimento se prova explicando.

## Apêndice C — Ritmo semanal sustentável

- **Alvo:** 6–8 h/semana, distribuídas em blocos de foco (não acumular).
- **Loop de estudo:** explicar em voz alta → notar onde trava → conferir a fonte → reexplicar de memória. Evitar o anti-padrão de acumular gravações/notas não processadas que *parecem* produtivas.
- **Nota atômica.** Uma nota Zettelkasten por conceito não-trivial, com *links* cruzando trilhas.
- **Cadência de checkpoint.** Não avançar de disciplina sem o checkpoint aprovado; não avançar de fase sem o checkpoint de fase.
- **Armadilha conhecida.** Documentação e arquitetura abrangentes podem virar procrastinação produtiva. Regra: o entregável é a *decisão tomada / código enviado*, não o diagrama perfeito.
