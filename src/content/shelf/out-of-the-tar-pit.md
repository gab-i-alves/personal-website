---
title: "Out of the Tar Pit"
author: "Ben Moseley, Peter Marks"
category: science
medium: paper
tags: [complexity, frp, functional-programming, relational-model, software-design, state, architecture, brooks]
favorite: true
url: "https://curtclifton.net/papers/MoseleyMarks06a.pdf"
---

*Moseley & Marks, 2006 · 66 pages · WIP*

---

## O que é esse texto

O paper argumenta que a complexidade é a causa raiz da vasta maioria dos problemas no desenvolvimento e manutenção de software em larga escala. A maior parte dessa complexidade não é "essencial" (inerente ao problema real do usuário), mas sim "acidental" (introduzida por escolhas de arquitetura, ferramentas e linguagens).

Como solução, propõem a arquitetura de **Functional Relational Programming (FRP)**, que combina programação funcional (para lógica pura) com o modelo relacional de Codd (para estado essencial), fatiando o sistema em camadas isoladas.

---

## Três causadores da complexidade acidental

1. **Estado mutável (State):** torna sistemas extremamente difíceis de compreender e testar, pois o comportamento muda dependendo de condições internas variáveis e muitas vezes ocultas
2. **Controle (Control):** obriga o programador a definir ordem estrita de execução, misturando *o que* o sistema deve fazer com *como* isso deve acontecer
3. **Volume de código (Code Volume):** código que surge apenas para lidar com manipulação de estados e controles de fluxo

---

## A proposta FRP

A ideia fundamental é fatiar o sistema em camadas totalmente isoladas:

- **Estado Essencial** — os dados base do negócio, estruturados como relações matemáticas (modelo relacional de Codd)
- **Lógica Essencial** — regras e comportamento, processados como funções puras (transparência referencial, sem efeitos colaterais)
- **Estado e Controle Acidentais** — otimizações de infraestrutura e performance (caching, índices, pré-computação), confinados e invisíveis à lógica de negócio

---

## Padrões e ensinamentos

| # | Padrão | Descrição |
|---|--------|-----------|
| P1 | Eliminar estado | O dado carrega seu próprio status. Em vez de listas paralelas, cada item tem um campo que o classifica |
| P2 | Regras como dados | Cadeias de if/elif viram tabelas (tuplas, dicts, YAML) |
| P3 | Separar fetch/transformar/persistir | Uma função pura para cada |
| P4 | Config declarativa | XPaths em YAML, scraper genérico lê config |
| P5 | Estado acidental confinado | Buffers, caches, retries escondidos atrás da interface que a lógica de negócio chama sem saber que existem |
| P6 | Avoid antes de Separate | Tente eliminar complexidade antes de isolar — o paper é explícito |
| P7 | Dado derivado, não armazenado | Se pode computar a partir de algo mais primário, não guarde, derive ou materialize como cache explícito |
| P8 | Schema essencial primeiro | Desenhe o modelo de dados irredutível do domínio antes de qualquer lógica |
| P9 | Pipeline como composição | Um pipeline idealmente é f(g(h(x))), funções puras compostas |

---

## Heurísticas práticas (teste mental)

1. **Onde mora o estado?** No item, não em listas paralelas
2. **Isso é dado ou código?** Regras repetitivas são tabelas
3. **Quantas coisas essa função faz?** Fetch + transform + save = 3
4. **Quantas vezes essa decisão existe?** Uma decisão, um lugar
5. **Isso muda com o negócio ou com a técnica?** Separa config de lógica
6. **A lógica sabe da infraestrutura?** Se sabe, está acoplada
7. **Esse valor é armazenado ou derivado?** Se pode ser computado, precisa guardar?
8. **Rodar duas vezes dá o mesmo resultado?** Idempotência. Se não, existe estado oculto
9. **Consigo testar sem mock?** Se precisa mockar banco/rede/filesystem, a função está misturando essencial com acidental

---

## Limites do paper

- **Sistemas distribuídos:** paper de 2006, pré-explosão do distribuído. Estado essencial com consistência eventual é muito mais complicado do que reconhece. DDIA como complemento obrigatório
- **Latência/throughput crítico:** às vezes o "acidental" (índices, caches) é a feature do produto. A disciplina continua (separar claramente), mas não se pode evitar
- **UIs interativas e jogos:** estado essencial temporal (cursor, animação) que o modelo relacional acomoda mal. Arquiteturas reativas/signal-based são mais apropriadas
- **Código descartável:** complexidade acidental só é problema quando se mantém o código

> Heurística: quanto mais longeva e compartilhada a codebase, maior o valor de aplicar Tar Pit. Quanto mais efêmera e individual, menor.

---

## Resumo dos capítulos 1 e 2

### Cap 1 — Introdução
Contexto da "crise de software" (identificada em 1968, só agravou). Premissa central: o maior problema em software de larga escala é a complexidade, que torna grandes sistemas incrivelmente difíceis de compreender. Manuseio de estado como principal fator, seguido de volume de código e fluxo de controle. OOP acopla estado e comportamento; FP pura evita estados e efeitos colaterais. A combinação funcional + relacional é o caminho proposto.

### Cap 2 — Complexidade
Análise de "No Silver Bullet" (Brooks): quatro propriedades difíceis (Complexidade, Conformidade, Mutabilidade, Invisibilidade). Moseley & Marks: só Complexidade importa de verdade. Complexidade causa: falta de confiabilidade, atrasos, falhas de segurança, desempenho ruim. Citam Dijkstra, Corbató, Backus, Hoare: "a simplicidade é difícil." Esclarecimento: complexidade aqui = dificuldade humana de entender, não teoria da complexidade computacional (O(n), memória).

---

## Framework de diagnóstico (5 passes)

O valor real do paper não é a arquitetura FRP (nunca existiu em produção no formato descrito, Datomic chegou mais perto). É a **lente de diagnóstico**.

### Pass 1 — Problema essencial do usuário
Antes de olhar código: qual problema do mundo real esse artefato resolve? Sem mencionar ferramenta, linguagem ou estrutura técnica. Se não consegue escrever essa frase, o resto é especulação.

### Pass 2 — Estado essencial irredutível
Quais fatos do domínio precisariam existir se reescrevesse tudo do zero em qualquer linguagem? Resistir a incluir o que está no código atual — "isso é do domínio ou da implementação?"

### Pass 3 — Inventariar acidental (3 eixos)
Para cada componente, classificar:
- **Estado acidental:** variáveis mutáveis, caches, buffers, flags, contadores
- **Controle acidental:** nesting, ordem com dependências ocultas, orquestração manual
- **Volume acidental:** duplicação, código defensivo repetitivo, config-como-código

Quantificar: linhas, variáveis mutáveis por classe, profundidade de nesting. Ratio acidental:essencial.

### Pass 4 — Árvore de decisão (Avoid > Separate)
Para cada peça de complexidade acidental, em ordem:
1. Posso **eliminar**?
2. Se não, posso **derivar** em vez de armazenar?
3. Se não, posso **confinar** atrás de interface?
4. Se não, **aceito como dívida** consciente e documento

A maioria pula direto pro passo 3. O paper insiste em começar do 1.

### Pass 5 — Saída acionável
Documento curto: problema essencial (P1), schema essencial (P2), tabela de complexidade com ratio (P3), proposta de refatoração priorizada (P4). Sem isso o diagnóstico evapora em uma semana.

_WIP..._
