---
title: "Programa de Formação Autodirigida em Sistemas, Computação e Cognição"
description: "Currículo de longa duração em formato acadêmico progressivo (bacharelado → mestrado → doutorado autodirigidos)"
---

# Programa de Formação Autodirigida em Sistemas, Computação e Cognição

### Currículo de longa duração em formato acadêmico progressivo (bacharelado → mestrado → doutorado autodirigidos)

> **Natureza do documento.** Plano pessoal de formação e, simultaneamente, base para um currículo de curso livre avançado / programa educacional *open-source*. O rigor de referência é o de programas como MIT (6.5840, 6.034), UCL Gatsby, Princeton PNI e EPFL. O público é o autodidata com formação prévia em computação e maturidade matemática moderada.
>
> **Princípio pedagógico central.** A progressão obedece à sequência **fundamentos matemáticos → modelos formais → pesquisa original**. Avaliação é majoritariamente por projeto (implementação, análise de dados reais, replicação e extensão de artigos), não por prova. Cada disciplina termina em um *checkpoint de competência* verificável.

---

## 1. Filosofia e arquitetura do programa

O programa não é uma coleção de cursos paralelos: é um grafo de pré-requisitos com cinco trilhas temáticas que convergem, na Fase III, em projetos de pesquisa integradores. A tese implícita do desenho é que **sistemas de dados, sistemas neurais, sistemas organizacionais e sistemas culturais compartilham uma mesma gramática** — estado, fluxo, retroalimentação, codificação, evolução — e que dominar essa gramática em um domínio acelera o aprendizado nos demais. Por isso Teoria da Informação e Pensamento Sistêmico aparecem cedo: são as lentes transversais.

### 1.1 Trilhas temáticas

| Trilha | Disciplinas | Fio condutor |
|---|---|---|
| **A. Sistemas de Dados & Engenharia** | Fundamentos de Sistemas de Dados Intensivos; Arquitetura de Streaming e Event-Driven; Modelagem de Dados em Grafos | Estado, log, imutabilidade, dataflow |
| **B. Neurociência Computacional** | Biofísica de Neurônios; Modelos de Computação no Cérebro | Do canal iônico à computação populacional |
| **C. Bioinformática** | Sequências, Genomas e Algoritmos | Algoritmos sobre sequências biológicas |
| **D. Liderança & Sociotécnica** | Design Sociotécnico de Organizações; Delegação e Conversas Difíceis | Estrutura de times molda o software |
| **E. Sistemas, Cognição & Meta** | Pensamento Sistêmico; Memética e Evolução Cultural; Teoria da Informação; História e Filosofia da Computação | Lentes transversais e fundamentos conceituais |

### 1.2 Estrutura em fases

| Fase | Equivalência | Foco | Disciplinas | Carga estimada |
|---|---|---|---|---|
| **Propedêutica (P)** | Nivelamento | Base matemática e computacional | P1, P2 | 150 h |
| **Fase I — Fundamentos** | Ciclo básico (graduação) | Lentes transversais + intro de cada trilha | D1–D5 | 285 h |
| **Fase II — Aprofundamento** | Ciclo profissional / especialização | Modelos formais e prática avançada | D6–D12 | 405 h |
| **Fase III — Pesquisa** | Mestrado / doutorado autodirigidos | Replicação, extensão, contribuição original | S1, S2, Capstone | 300 h |
| | | | **Total** | **≈ 1.140 h** |

> A carga é dimensionada para regime *part-time* sustentável (≈ 6–8 h/semana), perfazendo um arco realista de **4 a 5 anos** sem competir com obrigações profissionais e acadêmicas concorrentes. Ver ritmo semanal no Apêndice C.

### 1.3 Notação de pré-requisitos

`P1` … `S2` referenciam disciplinas deste documento. `[ext]` indica pré-requisito externo presumido (ex.: programação em Python/Go em nível intermediário).

---

## 2. Módulo Propedêutico — Fundamentos Matemáticos e Computacionais

**Objetivo educacional.** Estabelecer o piso quantitativo de que todas as trilhas dependem. Competências-alvo: (cognitivas) raciocinar com vetores, matrizes, derivadas, integrais e distribuições; (técnicas) implementar e visualizar modelos numéricos em Python; (científicas) traduzir um fenômeno em um modelo matemático mínimo e criticar suas hipóteses.

**Metodologia.** Aprendizagem ativa por resolução de problemas e *coding-first*: cada conceito matemático é imediatamente reimplementado em código. Sem checkpoint computacional aprovado, não se avança.

## 3. Fase I — Fundamentos

**Objetivo educacional da fase.** Instalar as **lentes transversais** (informação, sistemas) e o primeiro contato formal com cada trilha. Ao fim da fase, espera-se vocabulário comum entre domínios e capacidade de ler textos técnicos introdutórios em qualquer das cinco trilhas. Competências: (cognitivas) abstrair invariantes entre domínios; (técnicas) implementar modelos fundamentais; (científicas) formular perguntas modeláveis.

**Cronograma sugerido da fase (≈ 12 meses, part-time).** D1 e D3 em paralelo nos meses 1–3 (lentes transversais primeiro); D2 nos meses 3–6; D4 nos meses 5–8; D5 como leitura de fundo contínua, fechada nos meses 9–12.

**Metodologia da fase.** Ciclo *explicar → notar a falha → conferir a fonte → reexplicar de memória*. Cada disciplina mantém um conjunto de notas atômicas (estilo Zettelkasten) cruzando conceitos entre trilhas. Replicação de pelo menos um resultado clássico por disciplina.

> **Checkpoint de fase I.** Produzir uma nota de síntese cruzando as cinco disciplinas: por exemplo, como entropia (D1), retroalimentação (D3) e excitabilidade neural (D4) descrevem o mesmo tipo de sistema com vocabulários distintos.

## 4. Fase II — Aprofundamento

**Objetivo educacional da fase.** Passar de fundamentos a **modelos formais e prática de nível profissional/especialização**. Cada trilha ganha profundidade suficiente para sustentar pesquisa na Fase III. Competências: (cognitivas) comparar abordagens concorrentes e justificar escolhas de projeto; (técnicas) construir sistemas e modelos não-triviais; (científicas) ler e replicar artigos de pesquisa.

**Cronograma sugerido da fase (≈ 18 meses).** Trilha A aprofundada primeiro por proximidade ao trabalho (D6, D7 nos meses 1–7); B em seguida (D8, meses 6–11); C (D9, meses 9–14); D e E intercaladas (D10, D11, D12 nos meses 12–18, mais leves e aplicáveis ao cotidiano de gestão).

**Metodologia da fase.** Replicação de artigos como espinha dorsal; análise de datasets reais; produção de notebooks e relatórios técnicos publicáveis (alinhados ao *learning-in-public*).

> **Checkpoint de fase II.** Replicar e estender, de forma documentada, **dois** artigos de pesquisa de trilhas distintas (ex.: um de neurociência computacional e um de sistemas/grafos), produzindo notebooks reproduzíveis. Este é o portão de entrada para a Fase III.

## 5. Fase III — Pesquisa (Mestrado / Doutorado autodirigidos)

**Objetivo educacional da fase.** Transição de consumidor para **produtor de conhecimento**. Competências: (cognitivas) formular uma pergunta de pesquisa tratável e defensável; (técnicas) construir o artefato/experimento que a responde; (científicas) comunicar resultados em formato publicável e situá-los na literatura.

**Metodologia da fase.** Seminário de pesquisa contínuo (leitura crítica de literatura + apresentação) somado a um projeto integrador (*capstone*) que atravessa pelo menos duas trilhas. Orientação substituída por: rubrica de competência, pares (comunidades como Neuromatch), e ciclos de revisão pública (*learning-in-public*).
