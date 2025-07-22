---
title: Planejando um TCC de Tecnologia na Área de Saúde
pubDate: '2025-07-22'
---

Este post detalha o processo de planeamento estratégico que a nossa equipe utilizou para definir a primeira grande entrega (`Release v0.5`) do ParkinsonCheck, o nosso projeto de TCC. 

---

## Checkpoint 1: O Plano de Execução da Primeira Release

O objetivo é documentar a nossa abordagem à divisão de trabalho, à estrutura das sprints e, mais importante, à gestão de riscos técnicos num projeto com componentes de IA e Visão Computacional.

## O Desafio e a Estratégia de Mitigação

O ParkinsonCheck é um sistema que integra um *frontend em Angular*, *um backend em FastAPI* e *modelos de Machine Learning*. Dada esta complexidade, a nossa primeira decisão foi adotar uma abordagem ágil para mitigar riscos e permitir a adaptação contínua.

Para isso, definimos um objetivo claro e mensurável para a nossa primeira release:

> **Objetivo do MVP 1: Construir e validar a funcionalidade central do sistema.** Ao final de cinco semanas, a plataforma deve permitir que utilizadores (pacientes e médicos) se cadastrem, realizem os testes de diagnóstico num "modo de prática" não persistente e estabeleçam um vínculo funcional entre eles.

Esta abordagem permite-nos validar as partes mais críticas e arriscadas do projeto primeiro, sem nos preocuparmos com funcionalidades secundárias.

## Estrutura da Equipe e Alocação de Responsabilidades

A equipe foi organizada para alinhar as responsabilidades primárias com as competências de cada membro:

1. _Eu (Gabi Alves)_: Como Líder de Projeto e de Frontend, sou responsável pela gestão do projeto, planeamento de sprints, arquitetura da aplicação Angular e pela implementação do componente de Visão Computacional.

2. _Giovanni_: Responsável pela camada de API (FastAPI), definindo os contratos de comunicação entre os serviços e também pela lógica de negócio no backend.

- _Luan_: Responsável pela lógica de negócio no backend, integração dos modelos de ML e gestão do banco de dados PostgreSQL.

- _Gabriela_: Responsável pela Garantia de Qualidade (QA) através de testes funcionais e pela manutenção da documentação técnica.

## O Caso da Sprint 3: Gestão de Risco na Prática

O nosso plano de 5 sprints foi desenhado para construir a aplicação de forma incremental. Durante a análise de esforço, identificámos a Sprint 3 como o nosso maior ponto de risco.

A sprint continha a tarefa de implementar a funcionalidade de "desenhar digitalmente" via webcam com OpenCV.js, uma tarefa de alta incerteza técnica. A nossa análise mostrou que a carga de trabalho estimada para esta e outras tarefas excedia a capacidade da sprint, ameaçando o cronograma.

Aqui, o planeamento tornou-se uma ferramenta de decisão. A nossa estratégia de mitigação foi a seguinte:

> Ação Corretiva: Adiar a funcionalidade secundária de "Enviar Foto do Papel" da Sprint 3 para a Sprint 4.

Esta decisão de rebalancear o escopo permitiu-nos alocar a capacidade de desenvolvimento necessária para focar exclusivamente na tarefa mais crítica e inovadora do projeto, transformando um risco elevado num plano de execução viável.

## Próximos Passos

Este plano serve como a nossa base de execução para as próximas cinco semanas. O progresso será monitorizado através do nosso board no Trello e das nossas reuniões diárias. Nos próximos checkpoints, partilharei os resultados técnicos, os desafios encontrados e as lições aprendidas durante a implementação deste plano.

