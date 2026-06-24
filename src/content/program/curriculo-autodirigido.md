---
title: Programa de Formação Autodirigida em Sistemas, Computação e Cognição
description: Currículo de longa duração em formato acadêmico progressivo (bacharelado → mestrado → doutorado autodirigidos)
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

### Disciplina P1 — Fundamentos Matemáticos para Modelagem
- **Carga horária:** 90 h
- **Pré-requisitos:** `[ext]` matemática de ensino médio sólida
- **Ementa:** Álgebra linear aplicada, cálculo diferencial e integral em uma e várias variáveis, equações diferenciais ordinárias e fundamentos de probabilidade, com ênfase em interpretação geométrica e uso instrumental nas demais disciplinas.
- **Conteúdos programáticos:**
  1. Vetores, espaços vetoriais, bases, posto, independência linear
  2. Matrizes como transformações; multiplicação, inversa, determinante
  3. Autovalores, autovetores e decomposição espectral; SVD (introdução)
  4. Derivadas, regra da cadeia, gradiente; otimização sem restrição
  5. Integrais, teorema fundamental; integração numérica
  6. EDOs de 1ª e 2ª ordem; solução analítica e numérica (Euler, Runge-Kutta)
  7. Espaços de probabilidade, variáveis aleatórias, esperança, variância
  8. Distribuições normal, binomial, Poisson, exponencial
- **Materiais principais:** Strang, *Introduction to Linear Algebra* + curso MIT 18.06; série *Essence of Linear Algebra* e *Essence of Calculus* (3Blue1Brown); refreshers W0D3–W0D5 da Neuromatch Academy (abertos, CC-BY).
- **Ferramentas:** Python, NumPy, SciPy, Matplotlib, Jupyter.
- **Avaliação (checkpoint P1):** caderno de implementações resolvendo, do zero em NumPy, (a) decomposição espectral de uma matriz e interpretação dos autovetores; (b) integrador de uma EDO simples comparado com solução analítica; (c) amostragem e ajuste de uma distribuição a dados sintéticos.

### Disciplina P2 — Computação Científica em Python
- **Carga horária:** 60 h
- **Pré-requisitos:** `[ext]` programação intermediária; cursar em paralelo a P1
- **Ementa:** Ecossistema científico em Python para simulação, análise de dados e comunicação de resultados reproduzíveis.
- **Conteúdos programáticos:**
  1. NumPy: vetorização, *broadcasting*, álgebra linear numérica
  2. Pandas: manipulação e limpeza de dados tabulares
  3. Matplotlib/Seaborn: gramática de visualização científica
  4. SciPy: otimização, integração, estatística
  5. Reprodutibilidade: ambientes virtuais, notebooks versionados, *seeds*
  6. Boas práticas: testes, *profiling* básico, organização de projeto
- **Materiais principais:** *Scientific Python Lectures* (lectures.scientific-python.org); *Python Data Science Handbook* (VanderPlas, aberto).
- **Ferramentas:** Python, Jupyter, Git, `venv`/`uv`, pytest.
- **Avaliação (checkpoint P2):** notebook reproduzível que carrega um dataset real, limpa, analisa e comunica três achados com visualizações adequadas.

---

## 3. Fase I — Fundamentos

**Objetivo educacional da fase.** Instalar as **lentes transversais** (informação, sistemas) e o primeiro contato formal com cada trilha. Ao fim da fase, espera-se vocabulário comum entre domínios e capacidade de ler textos técnicos introdutórios em qualquer das cinco trilhas. Competências: (cognitivas) abstrair invariantes entre domínios; (técnicas) implementar modelos fundamentais; (científicas) formular perguntas modeláveis.

**Cronograma sugerido da fase (≈ 12 meses, part-time).** D1 e D3 em paralelo nos meses 1–3 (lentes transversais primeiro); D2 nos meses 3–6; D4 nos meses 5–8; D5 como leitura de fundo contínua, fechada nos meses 9–12.

**Metodologia da fase.** Ciclo *explicar → notar a falha → conferir a fonte → reexplicar de memória*. Cada disciplina mantém um conjunto de notas atômicas (estilo Zettelkasten) cruzando conceitos entre trilhas. Replicação de pelo menos um resultado clássico por disciplina.

---

### Disciplina D1 — Teoria da Informação
- **Carga horária:** 60 h
- **Pré-requisitos:** P1, P2
- **Ementa:** A formulação de Shannon da informação como redução de incerteza. Entropia, informação mútua, capacidade de canal e compressão, com aplicações que reaparecem em sistemas de dados, neurônios e comunicação.
- **Conteúdos programáticos:**
  1. Incerteza e entropia de Shannon; unidades (bits, nats)
  2. Entropia conjunta, condicional; informação mútua
  3. Divergência de Kullback–Leibler; entropia relativa
  4. Codificação de fonte; teorema da codificação sem ruído; Huffman, aritmética
  5. Canais ruidosos; capacidade; teorema da codificação de canal
  6. Codificação com correção de erro (introdução)
  7. Conexões: máxima entropia, inferência, codificação neural eficiente
- **Materiais principais:** MacKay, *Information Theory, Inference, and Learning Algorithms* (PDF aberto + videoaulas do autor); Cover & Thomas, *Elements of Information Theory* (referência); artigo fundador de Shannon (1948).
- **Ferramentas:** Python; bibliotecas de cálculo de entropia/IM.
- **Avaliação (checkpoint D1):** implementar um compressor (Huffman ou aritmético), medir a taxa atingida contra a entropia empírica de um corpus, e escrever relatório curto relacionando o resultado ao limite de Shannon. Extensão opcional: estimar informação mútua entre estímulo e resposta em um dataset neural aberto.

### Disciplina D2 — Fundamentos de Sistemas de Dados Intensivos
- **Carga horária:** 75 h
- **Pré-requisitos:** P2; `[ext]` bancos de dados e redes em nível básico
- **Ementa:** A "espinha DDIA". Princípios de confiabilidade, escalabilidade e manutenibilidade; modelos de dados, motores de armazenamento, replicação, particionamento, transações e consistência distribuída — cada capítulo ancorado em um sistema realmente operado.
- **Conteúdos programáticos:**
  1. Confiabilidade, escalabilidade, manutenibilidade como variáveis de projeto
  2. Modelos de dados: relacional, documento, grafo (ponte para D7)
  3. Motores de armazenamento: B-trees vs. LSM-trees; índices
  4. Codificação e evolução de esquema; formatos (Avro, Protobuf)
  5. Replicação: líder único, multilíder, sem líder; *quorum*
  6. Particionamento e *rebalancing*
  7. Transações; níveis de isolamento; anomalias
  8. Problemas de sistemas distribuídos: relógios, ordenação, consenso (ponte para D6)
- **Materiais principais:** Kleppmann, *Designing Data-Intensive Applications*, 2ª ed. (texto-base); MIT **6.5840 — Distributed Systems** (Spring 2026): aulas, *paper questions* e labs em Go, todos abertos.
- **Ferramentas:** Go; um KV-store; PostgreSQL; ferramentas de *tracing*.
- **Avaliação (checkpoint D2):** implementar o **Lab 1 (MapReduce)** e o **Lab 2 (KV server)** do 6.5840; produzir uma análise técnica mapeando dois capítulos do DDIA aos sistemas que você opera em produção (ex.: a operação de scraping), identificando onde os *trade-offs* descritos se manifestam de fato.

### Disciplina D3 — Pensamento Sistêmico e Loops de Retroalimentação
- **Carga horária:** 45 h
- **Pré-requisitos:** nenhum (recomendado cursar cedo)
- **Ementa:** Estoques, fluxos, retroalimentação, atrasos e pontos de alavancagem. Estrutura sistêmica como causa de comportamento; arquétipos; modelagem qualitativa e dinâmica de sistemas.
- **Conteúdos programáticos:**
  1. Estoques e fluxos; diagramas; convenções
  2. Loops de reforço e de balanceamento; atrasos
  3. Arquétipos sistêmicos (tragédia dos comuns, escalada, limites ao crescimento)
  4. Pontos de alavancagem (hierarquia de Meadows)
  5. Resiliência, auto-organização, hierarquia
  6. Introdução à dinâmica de sistemas (modelos contínuos)
  7. Armadilhas: limites do modelo, fronteiras mal traçadas
- **Materiais principais:** Meadows, *Thinking in Systems*; ensaio *Leverage Points: Places to Intervene in a System* (Meadows); Sterman, *Business Dynamics* (capítulos selecionados, avançado).
- **Ferramentas:** Vensim PLE ou InsightMaker (modelagem de dinâmica de sistemas).
- **Avaliação (checkpoint D3):** modelar um sistema real conhecido (ex.: fila de revisão de código do seu time, ou dinâmica de débito técnico) como diagrama de estoques e fluxos, simular dois cenários e propor uma intervenção justificada por ponto de alavancagem.

### Disciplina D4 — Biofísica de Neurônios
- **Carga horária:** 60 h
- **Pré-requisitos:** P1 (EDOs), D3 (sistemas dinâmicos)
- **Ementa:** Como um único neurônio computa. Potencial de membrana, equações de Nernst e GHK, seletividade de canais iônicos, bomba Na⁺/K⁺ e o modelo de Hodgkin–Huxley do potencial de ação. Retoma e formaliza o conteúdo do MCB80x.
- **Conteúdos programáticos:**
  1. Membrana, gradientes iônicos, potencial de repouso
  2. Equação de Nernst; equação de Goldman–Hodgkin–Katz
  3. Canais iônicos: seletividade, *gating*, cinética
  4. Modelo RC da membrana; constante de tempo; cabo passivo
  5. Modelo de Hodgkin–Huxley; correntes de Na⁺ e K⁺
  6. Modelos reduzidos: integra-e-dispara (LIF), FitzHugh–Nagumo, Izhikevich
  7. Bifurcações e excitabilidade (ponte com D3)
- **Materiais principais:** Dayan & Abbott, *Theoretical Neuroscience* (cap. 1–6); HarvardX **MCB80x**; tutoriais de modelos de neurônio da Neuromatch Academy (abertos); Izhikevich, *Dynamical Systems in Neuroscience* (avançado); artigo de Hodgkin & Huxley (1952).
- **Ferramentas:** Python; Brian2 ou NEURON para simulação.
- **Avaliação (checkpoint D4):** implementar o modelo de Hodgkin–Huxley em Python, reproduzir um potencial de ação, caracterizar o limiar e a curva f–I; relatório comparando HH com um modelo LIF em fidelidade vs. custo computacional.

### Disciplina D5 — História e Filosofia da Computação
- **Carga horária:** 45 h
- **Pré-requisitos:** nenhum (leitura de fundo ao longo da Fase I)
- **Ementa:** De Turing à computação como conceito. Máquinas de Turing, computabilidade e seus limites, a tese de Church–Turing, o debate mente-máquina e suas implicações para neurociência e IA. A "sobremesa intelectual" que dá contexto às demais trilhas.
- **Conteúdos programáticos:**
  1. Crise dos fundamentos; Hilbert; o *Entscheidungsproblem*
  2. Máquina de Turing; computabilidade; o problema da parada
  3. Tese de Church–Turing; equivalência de modelos
  4. Gödel e os limites da formalização
  5. O teste de Turing; debate mente-máquina; "Quarto Chinês"
  6. Autômatos celulares; emergência; Conway e o *Game of Life*
  7. Computação como metáfora do cérebro: alcances e limites (ponte com B)
- **Materiais principais:** Petzold, *The Annotated Turing*; Turing (1936; 1950); Hofstadter, *Gödel, Escher, Bach* (seletivo); Davis, *The Universal Computer*; verbetes da *Stanford Encyclopedia of Philosophy*.
- **Ferramentas:** simulador de máquina de Turing; implementação do *Game of Life*.
- **Avaliação (checkpoint D5):** ensaio crítico (8–12 págs.) argumentando uma posição no debate mente-máquina, fundamentado nas fontes primárias; acompanhado de uma implementação mínima (máquina de Turing universal *ou* autômato celular) que ilustre um ponto do ensaio.

> **Checkpoint de fase I.** Produzir uma nota de síntese cruzando as cinco disciplinas: por exemplo, como entropia (D1), retroalimentação (D3) e excitabilidade neural (D4) descrevem o mesmo tipo de sistema com vocabulários distintos.

---

## 4. Fase II — Aprofundamento

**Objetivo educacional da fase.** Passar de fundamentos a **modelos formais e prática de nível profissional/especialização**. Cada trilha ganha profundidade suficiente para sustentar pesquisa na Fase III. Competências: (cognitivas) comparar abordagens concorrentes e justificar escolhas de projeto; (técnicas) construir sistemas e modelos não-triviais; (científicas) ler e replicar artigos de pesquisa.

**Cronograma sugerido da fase (≈ 18 meses).** Trilha A aprofundada primeiro por proximidade ao trabalho (D6, D7 nos meses 1–7); B em seguida (D8, meses 6–11); C (D9, meses 9–14); D e E intercaladas (D10, D11, D12 nos meses 12–18, mais leves e aplicáveis ao cotidiano de gestão).

**Metodologia da fase.** Replicação de artigos como espinha dorsal; análise de datasets reais; produção de notebooks e relatórios técnicos publicáveis (alinhados ao *learning-in-public*).

---

### Disciplina D6 — Arquitetura de Streaming e Event-Driven
- **Carga horária:** 60 h
- **Pré-requisitos:** D2
- **Ementa:** O log como fonte da verdade. Imutabilidade, *event sourcing*, *brokers*, processamento de fluxo e a ideia de "desmontar o banco de dados" — a teoria por trás de uma arquitetura *log-of-facts*.
- **Conteúdos programáticos:**
  1. Log como abstração fundamental; *append-only*; *offset*
  2. *Message brokers* vs. logs particionados (Kafka)
  3. *Event sourcing* e CQRS; fato vs. estado derivado
  4. *Stream processing*: janelas, *joins*, estado, *exactly-once*
  5. *Change Data Capture*; *materialized views* como consumidores do log
  6. "Turning the database inside-out": *unbundling* de bancos
  7. Ordenação, tempo de evento vs. de processamento, *watermarks*
- **Materiais principais:** Kleppmann, *DDIA* cap. 11 (e o ensaio *The Log*, de Jay Kreps); Stopford, *Designing Event-Driven Systems* (O'Reilly/Confluent, aberto); palestra *Turning the Database Inside-Out*; documentação do Apache Kafka.
- **Ferramentas:** Apache Kafka (ou Redpanda); Kafka Streams/Flink; Docker.
- **Avaliação (checkpoint D6):** projetar e implementar um protótipo *log-of-facts*: ingerir eventos imutáveis em um log particionado e derivar pelo menos duas *views* materializadas por consumidores independentes; relatório de projeto discutindo *trade-offs* de ordenação e reprocessamento. (Credencial opcional, só depois de validada a necessidade real de um broker: **CCDAK** — Confluent Certified Developer for Apache Kafka.)

### Disciplina D7 — Modelagem de Dados em Grafos
- **Carga horária:** 45 h
- **Pré-requisitos:** D2
- **Ementa:** Relacionamentos como cidadãos de primeira classe. Grafos de propriedades, travessia, linguagens de consulta e modelagem de domínio — aplicada a um grafo de normas jurídicas (relações *altera/revoga/cita/regula*).
- **Conteúdos programáticos:**
  1. Modelo de grafo de propriedades vs. RDF/triplas
  2. Linguagens de consulta: Cypher/openCypher; SPARQL (introdução)
  3. Padrões de travessia; caminhos; algoritmos de grafo (centralidade, comunidades)
  4. Modelagem de domínio em grafo; *anti-patterns*
  5. Grafos de conhecimento; ontologias; inferência básica
  6. Modelagem jurídica: representação de normas e suas relações; versionamento temporal de vigência
  7. Padrões de domínio legal: Akoma Ntoso e LegalRuleML (panorama)
- **Materiais principais:** Robinson, Webber & Eifrem, *Graph Databases*, 2ª ed. (O'Reilly, aberto); Hogan et al., *Knowledge Graphs* (survey aberto); documentação Neo4j/Cypher.
- **Ferramentas:** Neo4j (ou Memgraph); Cypher; Python (driver de grafo).
- **Avaliação (checkpoint D7):** modelar um subconjunto real de normas jurídicas como grafo de propriedades, implementar consultas que respondam perguntas não-triviais (ex.: "quais normas vigentes são afetadas transitivamente pela revogação X?") e documentar as decisões de modelagem, incluindo o tratamento de vigência temporal.

### Disciplina D8 — Modelos de Computação no Cérebro
- **Carga horária:** 75 h
- **Pré-requisitos:** D4, D1, P1 (álgebra linear, probabilidade)
- **Ementa:** Da célula às redes. Codificação neural, dinâmica de populações, modelos de redes recorrentes e o significado de "computação" em um substrato biológico.
- **Conteúdos programáticos:**
  1. Codificação neural; curvas de sintonia; código de taxa vs. temporal
  2. Decodificação; estimação de máxima verossimilhança; informação de Fisher (ponte com D1)
  3. Modelos de redes: *feedforward*, recorrentes, atratores
  4. Plasticidade sináptica; aprendizado hebbiano; STDP
  5. Redução de dimensionalidade em dados neurais (PCA, fatores)
  6. Modelos dinâmicos de decisão; integração de evidência
  7. Aprendizado por reforço e o cérebro (introdução)
- **Materiais principais:** Dayan & Abbott, *Theoretical Neuroscience* (completo); **Neuromatch Academy — Computational Neuroscience** (ebook aberto compneuro.neuromatch.io; curso síncrono em julho, candidaturas até março); Trappenberg, *Fundamentals of Computational Neuroscience*.
- **Ferramentas:** Python; NumPy/SciPy; bibliotecas de análise de dados neurais.
- **Avaliação (checkpoint D8):** replicar um resultado de um tutorial avançado da Neuromatch (ex.: ajuste de GLM a dados neurais, ou decodificação de estímulo) e estendê-lo com uma análise própria; submeter notebook + relatório curto no formato de *abstract* de pesquisa. **Marco recomendado:** participar da edição síncrona da Neuromatch como projeto-âncora desta disciplina.

### Disciplina D9 — Sequências, Genomas e Algoritmos
- **Carga horária:** 90 h
- **Pré-requisitos:** P2; algoritmos e estruturas de dados `[ext]`
- **Ementa:** Bioinformática introdutória por uma abordagem de aprendizagem ativa orientada a problemas. Alinhamento de sequências, montagem de genomas e os algoritmos centrais — também como preparação para o mestrado de 2027.
- **Conteúdos programáticos:**
  1. Encontrando motivos; padrões em DNA; abordagens gananciosas e randomizadas
  2. Montagem de genomas; grafos de De Bruijn
  3. Comparação de sequências; alinhamento global/local; programação dinâmica
  4. Alinhamento de leituras; estruturas de índice (BWT, FM-index)
  5. Evolução; árvores filogenéticas; *clustering*
  6. Análise de expressão; modelos ocultos de Markov (HMM) em biologia
  7. Conexões algorítmicas com teoria da informação (D1) e grafos (D7)
- **Materiais principais:** Compeau & Pevzner, *Bioinformatics Algorithms: An Active Learning Approach* + **Rosalind** (Bioinformatics Textbook Track, desafios automatizados) + **Bioinformatics Specialization** (UCSD, Coursera); Durbin et al., *Biological Sequence Analysis* (avançado, para HMMs).
- **Ferramentas:** Python; Biopython; Rosalind.
- **Avaliação (checkpoint D9):** resolver um conjunto progressivo de problemas do Rosalind cobrindo alinhamento e montagem; implementar do zero um alinhador por programação dinâmica e um HMM simples; mini-projeto aplicando o pipeline a um dataset genômico público.

### Disciplina D10 — Memética e Evolução Cultural
- **Carga horária:** 45 h
- **Pré-requisitos:** D3 (sistemas); D1 (transmissão/fidelidade) recomendável
- **Ementa:** Ideias como replicadores. Transmissão, fidelidade, seleção e por que alguns conceitos se difundem e outros desaparecem — da metáfora de Dawkins aos modelos quantitativos de evolução cultural.
- **Conteúdos programáticos:**
  1. Replicadores, veículos, fenótipo estendido (Dawkins)
  2. O meme como unidade de transmissão cultural; críticas ao conceito
  3. Fidelidade, fecundidade, longevidade; analogia com seleção natural
  4. Modelos quantitativos de transmissão cultural (Boyd & Richerson; Cavalli-Sforza & Feldman)
  5. Vieses de transmissão: conformista, prestígio, conteúdo
  6. Dinâmica de difusão; redes; limiares (ponte com D3)
  7. Evolução cultural dual; coevolução gene-cultura
- **Materiais principais:** Dawkins, *The Selfish Gene* (cap. 11); Blackmore, *The Meme Machine*; Dennett (ensaios sobre memes); Boyd & Richerson, *Culture and the Evolutionary Process* (avançado); Mesoudi, *Cultural Evolution*.
- **Ferramentas:** Python; modelos baseados em agentes (Mesa) ou simulação simples de difusão.
- **Avaliação (checkpoint D10):** implementar um modelo computacional de transmissão cultural (baseado em agentes ou compartimental) testando o efeito de um viés de transmissão sobre a difusão; relatório crítico discutindo o que o modelo captura e o que a crítica anti-memética apontaria como limitação.

### Disciplina D11 — Design Sociotécnico de Organizações
- **Carga horária:** 45 h
- **Pré-requisitos:** D3 (sistemas)
- **Ementa:** Como a estrutura dos times molda o software que produzem. *Team Topologies*, Lei de Conway e carga cognitiva como variável de projeto; medição de desempenho de engenharia.
- **Conteúdos programáticos:**
  1. Lei de Conway e a "manobra inversa de Conway"
  2. Os quatro tipos de time e os três modos de interação (Team Topologies)
  3. Carga cognitiva como restrição de projeto organizacional
  4. Fluxo, *handoffs*, fronteiras de equipe e de domínio
  5. Métricas de engenharia (DORA / *Accelerate*); o que medir e o que evitar
  6. Acoplamento sociotécnico; *platform teams*; *enabling teams*
  7. Aplicação ao desenho de funções (ex.: separação de Code Review e Data Quality)
- **Materiais principais:** Skelton & Pais, *Team Topologies*; Conway (1968); Forsgren, Humble & Kim, *Accelerate*; Meadows (ponte com D3).
- **Ferramentas:** ferramentas de fluxo (Jira/GitHub) como objeto de análise; diagramas de topologia de times.
- **Avaliação (checkpoint D11):** diagnóstico sociotécnico de uma organização real (a sua serve): mapear topologia atual de times e modos de interação, identificar pontos de atrito à luz de Conway e carga cognitiva, e propor um redesenho com justificativa. Entregável no formato de relatório executivo.

### Disciplina D12 — Delegação e Conversas Difíceis
- **Carga horária:** 45 h
- **Pré-requisitos:** nenhum (recomendável após D11)
- **Ementa:** Liderança como disciplina aprendível, não como vibe. Projetar-se para fora do caminho crítico, escopar trabalho para outros e conduzir conversas de responsabilização — com leituras reais e prática deliberada.
- **Conteúdos programáticos:**
  1. Delegação como design de sistema; níveis de delegação; escopo verificável
  2. O líder como gargalo; projetar-se para fora do caminho crítico
  3. Anatomia da conversa difícil; as três conversas (fatos, emoções, identidade)
  4. Criar segurança e diálogo em alto risco (*Crucial Conversations*)
  5. Feedback e responsabilização sem destruir relação
  6. Comunicação não-violenta como ferramenta de precisão
  7. Ritmo de gestão: 1:1s, escrita, decisões assíncronas
- **Materiais principais:** Stone, Patton & Heen, *Difficult Conversations*; Patterson et al., *Crucial Conversations*; Fournier, *The Manager's Path*; Larson, *An Elegant Puzzle*; Rosenberg, *Nonviolent Communication*.
- **Ferramentas:** caderno físico de gestão (registro estruturado); roteiros e *scripts* de conversa.
- **Avaliação (checkpoint D12):** *portfólio de prática deliberada*: registrar (anonimizado) três conversas difíceis reais conduzidas no período — preparação por escrito antes, transcrição/resumo depois, e auto-análise à luz do arcabouço. Acompanhado de um plano explícito de "design para fora do caminho crítico" com pelo menos dois movimentos de delegação e seus resultados.

> **Checkpoint de fase II.** Replicar e estender, de forma documentada, **dois** artigos de pesquisa de trilhas distintas (ex.: um de neurociência computacional e um de sistemas/grafos), produzindo notebooks reproduzíveis. Este é o portão de entrada para a Fase III.

---

## 5. Fase III — Pesquisa (Mestrado / Doutorado autodirigidos)

**Objetivo educacional da fase.** Transição de consumidor para **produtor de conhecimento**. Competências: (cognitivas) formular uma pergunta de pesquisa tratável e defensável; (técnicas) construir o artefato/experimento que a responde; (científicas) comunicar resultados em formato publicável e situá-los na literatura.

**Metodologia da fase.** Seminário de pesquisa contínuo (leitura crítica de literatura + apresentação) somado a um projeto integrador (*capstone*) que atravessa pelo menos duas trilhas. Orientação substituída por: rubrica de competência, pares (comunidades como Neuromatch), e ciclos de revisão pública (*learning-in-public*).

### Seminário de Pesquisa I — Leitura Crítica e Replicação
- **Carga horária:** 60 h
- **Pré-requisitos:** checkpoint de Fase II
- **Ementa:** Como ler, criticar e replicar literatura de pesquisa; estrutura de um artigo; avaliação de validade; escrita científica.
- **Conteúdos programáticos:** anatomia de um *paper*; leitura em três passagens; identificação de hipóteses e ameaças à validade; replicação como método de aprendizado; gestão de referências; escrita de *abstracts* e *related work*.
- **Avaliação:** *journal club* pessoal documentado (≥ 12 artigos resenhados) + uma replicação completa de um artigo escolhido, com relatório de "o que reproduziu, o que não, e por quê".

### Seminário de Pesquisa II — Métodos e Comunicação
- **Carga horária:** 60 h
- **Pré-requisitos:** Seminário I
- **Ementa:** Desenho experimental, análise de dados reais, reprodutibilidade e comunicação científica (texto, figura, apresentação).
- **Conteúdos programáticos:** formulação de pergunta e hipótese; desenho de experimento/estudo; estatística para inferência honesta; figuras que argumentam; pré-registro e reprodutibilidade; *preprint* e *peer review*.
- **Avaliação:** proposta de pesquisa do *capstone* (no formato de *research proposal*), defendida por escrito e em apresentação.

### Projeto Integrador (Capstone)
- **Carga horária:** 180 h
- **Pré-requisitos:** Seminários I e II
- **Ementa:** Contribuição original que integra ao menos duas trilhas, materializada em artefato + relato escrito em nível de *short paper*.
- **Trilhas de capstone sugeridas (escolher uma):**
  - **A×E — *Log-of-facts* + grafo de normas jurídicas:** arquitetura *event-sourced* (D6) cujo estado derivado é um grafo temporal de normas (D7), avaliada quanto a reprocessamento e consultas de impacto transitivo. (Atenção ao padrão documentado de "arquitetura abrangente como procrastinação produtiva" — o entregável é a *decisão enviada*, não o diagrama perfeito.)
  - **B×E — Codificação neural sob a lente da informação:** medir, em dataset neural aberto, eficiência de codificação (D8) com ferramentas de teoria da informação (D1), replicando e estendendo um resultado publicado.
  - **C×A — Pipeline de sequências como sistema de dados:** tratar um *workflow* genômico (D9) como dataflow baseado em log (D6), discutindo reprodutibilidade e proveniência.
- **Avaliação (checkpoint terminal):** artefato funcional + *short paper* (8–12 págs.) com método, resultados e limitações + apresentação pública. Rubrica: originalidade da pergunta, validade do método, reprodutibilidade, clareza da comunicação.

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
