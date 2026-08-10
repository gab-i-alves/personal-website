---
title: "Apache Spark e Spark SQL"
heading: "Disciplina 3 — Processamento de Big Data com Apache Spark e Spark SQL"
code: "03"
order: 3
status: "active"
period: "jul–ago 2026"
repo: "03-spark"
stack: ["Apache Spark", "Spark SQL", "Structured Streaming", "Databricks", "Unity Catalog"]
lessons:
  - n: 1
    title: "Introdução ao Apache Spark"
    date: 2026-07-29
    pre: true
    deep: true
    live: true
    artifact: false
  - n: 2
    title: "Transformação e persistência SQL"
    date: 2026-08-03
    pre: true
    deep: true
    live: true
    artifact: false
  - n: 3
    title: "Transformação e análise avançada"
    date: 2026-08-05
    pre: true
    deep: true
    live: true
    artifact: false
  - n: 4
    title: "Otimização de desempenho no Spark"
    date: 2026-08-10
    pre: true
    deep: true
    live: true
    artifact: false
  - n: 5
    title: "Processamento em tempo real"
  - n: 6
    title: "Gerenciamento de fluxos resilientes"
  - n: 7
    title: "Integração e governança de dados"
  - n: 8
    title: "Gestão de dados e transparência"
---

## O que a disciplina cobre

Processamento distribuído de ponta a ponta: da arquitetura do Spark e do modelo de execução até streaming estruturado e governança com Unity Catalog. É a primeira das três disciplinas que batem diretamente com o que eu faço no trabalho.

**Competências declaradas:**

1. Processamento inicial de dados, da criação de tabelas ao salvamento de resultados, com Spark SQL.
2. Soluções analíticas escaláveis com performance no ecossistema Spark SQL.
3. Processamento de fluxos em tempo real com Spark Streaming.
4. Fluxos distribuídos com governança usando Spark e Databricks.

## Projeto da disciplina

Pipeline distribuído que integra ingestão em lote e em tempo real, com performance via Spark SQL e governança centralizada no Unity Catalog. Corpus mínimo de 1 milhão de registros, múltiplos formatos (JSON, CSV, Parquet) e atributos temporais que permitam janelas e watermarking.

Entrega em **24 de agosto de 2026**.

> Esta disciplina é sinalizada pela instituição como **uso de IA proibido**. Todo o projeto é de autoria própria. O que está publicado aqui é o registro do meu estudo, não o trabalho avaliado.

## Por que ela importa fora da sala

Em pipeline de coleta, o gargalo raramente é CPU: é o formato do que sai dela, tipicamente muitos arquivos pequenos num bucket. Esse é exatamente o problema que decide o número de partições numa leitura Spark. É o tipo de conceito que só assenta de verdade quando encontra um bucket que já existe.
