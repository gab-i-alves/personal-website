---
title: Team Topologies - Organogramas moldam software
pubDate: '2026-02-07'
---

# Por que o organograma da sua empresa está desenhando a arquitetura do seu software (e ninguém percebeu)

Já vi dois padrões de operação em times de tecnologia. No primeiro, existe um organograma bonito, mas zero processo — tudo é urgente, prioridades mudam de uma hora pra outra, e o modo padrão de operação é apagar incêndio. No segundo, nem organograma há. A regra é resolver o problema falando com quem for necessário. As coisas andam, sim. Mas com o tempo fica evidente que a entrega depende inteiramente da *disposição individual* de cada pessoa em ir atrás, puxar conversa, cobrar resposta. Quem não faz isso, trava. Quem faz, se desgasta.

Parecem problemas diferentes. Um tem estrutura de fachada — o organograma existe, mas não orienta nada. O outro substitui estrutura por iniciativa individual — funciona enquanto as pessoas aguentarem o peso. Depois de ler o primeiro capítulo de Team Topologies, de Matthew Skelton e Manuel Pais,[^1] entendi que são o *mesmo* problema visto de ângulos opostos: nenhum dos dois ambientes tem *design* de comunicação — quem deveria interagir com quem, dentro de que escopo, e com que propósito.

## O mapa não é o território — e o organograma não é a organização

Skelton e Pais abrem o livro com uma ideia simples: o organograma existe para compliance, não para coordenar trabalho. Ele mostra quem reporta a quem, e serve pra auditor, pra RH, pra questão legal. Mas se você usa o organograma como modelo mental pra decidir quem faz o quê e como o software vai ser construído, vai tomar decisões desconectadas da realidade, já que a comunicação real das pessoas não respeita aquelas linhas hierárquicas. Todo mundo já viveu isso: você precisa de uma informação pra destravar uma tarefa e vai direto na pessoa que sabe, não no gerente dela.

Os autores trazem um framework de Niels Pflaeging que separou as coisas de forma que me ajudou a pensar: toda organização tem três estruturas simultâneas. A formal (o organograma), a informal (quem influencia quem) e a de criação de valor (como o trabalho realmente é feito). O sucesso em trabalho de conhecimento depende da interação entre as duas últimas. E o organograma? Ele no máximo facilita compliance.[^2]

Aquele segundo padrão, o de resolver falando com quem for necessário — agora eu vejo que ele, meio sem querer, opera pela estrutura de criação de valor. Funciona. Mas a instrução é genérica demais: diz *que* as pessoas devem se comunicar, sem definir *limites* — quem com quem, sobre o quê, em que termos. O custo fica invisível: pessoas sobrecarregadas por serem o nó de conexão de tudo, e outras que ficam de fora simplesmente porque não sabem que deviam participar da conversa.

## Quando você melhora seu pedaço e o todo não melhora

Tem um exemplo no texto que me grudou na cabeça. Imagine que sua equipe adota infrastructure-as-code e reduz o tempo de provisionamento de semanas para minutos. Parece uma vitória. Mas se toda mudança em produção precisa de aprovação de um board que se reúne uma vez por semana, sua velocidade de entrega continua sendo semanal. A melhoria local foi real, mas irrelevante para o fluxo.

Esse é o argumento que mais me marcou: decisões baseadas no organograma tendem a otimizar pedaços isolados da organização. Cada área melhora o que controla. Mas ninguém olha o fluxo inteiro, do pedido ao deploy. O gargalo muda de lugar e o lead time não muda.

Na prática, já vi isso acontecer com automação de testes. O time investiu semanas automatizando uma bateria de testes que rodava em 8 minutos. Ótimo. Mas o merge de PRs continuava levando dias porque dependia de review de uma pessoa sobrecarregada com responsabilidades demais. O teste rápido esperava na fila do review lento. Systems thinking — olhar para o todo antes de otimizar as partes — parece óbvio quando você lê, mas é difícil de praticar quando cada time só tem visibilidade do próprio pedaço do fluxo.

## A lei que ninguém revogou desde 1968

Mel Conway publicou em 1968 uma observação que virou lei: organizações que projetam sistemas são condicionadas a produzir designs que são cópias de suas estruturas de comunicação.[^3] Em outras palavras, a arquitetura do seu software vai espelhar como as equipes se comunicam — quer você planeje isso ou não. Allan Kelly chama essa tendência de "força homomórfica", uma pressão constante pra fazer a arquitetura e a estrutura de equipes terem a mesma forma.[^4]

A parte que me convenceu foi a consequência prática: se a arquitetura *vai* espelhar a comunicação, então projetar equipes *é* projetar arquitetura. Os autores citam a "manobra inversa de Conway", de James Lewis — em vez de desenhar a arquitetura ideal e esperar que equipes aleatórias a implementem, você organiza as equipes para refletir a arquitetura que quer. O sistema segue.[^5]

Eu ainda não sei se isso funciona tão limpo na prática. O texto cita pesquisas de Harvard que confirmam a correlação (arquitetura espelha comunicação),[^6] mas a direção reversa — "reorganizo equipes e a arquitetura muda previsivelmente" — está mais baseada em experiência de campo do que em evidência formal. É uma heurística convincente, não uma garantia. Dito isso, a versão anterior ("desenhamos a arquitetura no quadro branco e depois qualquer time implementa") claramente não funciona. Então a manobra inversa pelo menos aponta pra direção certa, mesmo que o caminho não seja tão direto.

## Carga cognitiva não é metáfora — é o gargalo que ninguém nomeia

Essa ideia me provocou mais que as outras, porque conecta diretamente com o que estou tentando fazer no trabalho agora: deixar processos internos claros pra que o time possa focar no que importa.

O argumento é direto: cada equipe tem uma capacidade cognitiva finita. Quando você ignora isso — empilhando responsabilidades, domínios e contextos sobre a mesma equipe — ela se espalha fina, perde a capacidade de desenvolver maestria em qualquer coisa, e vira gargalo. O caso que o livro traz é o da OutSystems: uma equipe de Engineering Productivity que foi crescendo de escopo por cinco anos até acumular CI, CD e automação de infraestrutura. O sprint planning virou um bingo de requests desconectados, context switching era constante, e a motivação caiu.[^8]

Os autores conectam isso com os três pilares de motivação intrínseca de Dan Pink.[^7] Autonomia desaparece quando você faz malabarismo com prioridades de cinco equipes diferentes. Maestria exige profundidade, e profundidade exige foco — que é exatamente o que uma equipe sobrecarregada não tem. E o propósito se perde quando a equipe atende tantos domínios que ninguém consegue articular pra que ela existe.

O que me pega é que *eu conheço esse padrão*. A equipe que faz tudo, que foi ficando boa, e por ser boa foi recebendo mais coisas, até chegar num ponto em que está tecnicamente responsável por um escopo que ninguém consegue manter na cabeça ao mesmo tempo. E aí a pergunta deixa de ser "como fazer a equipe ser mais produtiva?" e passa a ser "o que essa equipe deveria *parar* de fazer?"

Fico pensando em como inspirar maestria em um time quando o ambiente opera no modo de sobrevivência constante. Talvez o primeiro passo não seja motivacional — seja estrutural. Reduzir o escopo pra que maestria se torne possível.

## O que fica

Antes de ler esse capítulo, eu pensava em "problemas de comunicação" como algo que se resolve com mais comunicação — mais reuniões, mais "fale com quem precisar". Agora penso diferente. Comunicação excessiva e indiscriminada é tão problemática quanto comunicação insuficiente. O que falta é *design* de comunicação: escolhas deliberadas sobre quem interage com quem e em que termos.

O capítulo me deixou com uma pergunta prática que quero levar pro meu time: se eu listasse todas as responsabilidades da equipe e comparasse com a capacidade cognitiva real que temos, qual seria a proporção entre "domínios que dominamos de fato" e "domínios que cobrimos por obrigação"? E o que mudaria se a gente tivesse coragem de dizer "isso aqui não deveria ser nosso"?

Team Topologies promete um framework concreto pra responder essas perguntas nos capítulos seguintes. Eu ainda não sei se entrega. Mas o diagnóstico deste primeiro capítulo — de que estruturas estáticas e carga cognitiva ignorada são os bloqueios reais — me parece preciso o suficiente pra continuar lendo.

---

[^1]: **Skelton, Matthew & Pais, Manuel.** [*Team Topologies: Organizing Business and Technology Teams for Fast Flow.*](https://teamtopologies.com/book) IT Revolution Press, 2019. — Capítulo 1: "The Problem with Org Charts." Fonte principal de todo o post.

[^2]: **Pflaeging, Niels.** [*Organize for Complexity.*](https://betacodex.org/white-papers/paper/organize-for-complexity-part-i-ii-specialedition) BetaCodex Publishing, 2014. — Modelo das três estruturas organizacionais (formal, informal e de criação de valor). Citado por Skelton & Pais na seção *Beyond the Org Chart*.

[^3]: **Conway, Melvin E.** ["How Do Committees Invent?"](https://www.melconway.com/Home/Committees_Paper.html) *Datamation*, abril de 1968. — Artigo original que formula o que ficou conhecido como Lei de Conway.

[^4]: **Kelly, Allan.** [Cunhou o termo "força homomórfica"](https://thinkinglabs.io/notes/2021/05/13/continuous-delivery-and-conways-law-allan-kelly.html) para descrever a pressão que a Lei de Conway exerce sobre a arquitetura. Citado por Skelton & Pais na seção *The Revival of Conway's Law*.

[^5]: **Lewis, James.** Creditado pela formulação da ["manobra inversa de Conway"](https://www.thoughtworks.com/radar/techniques/inverse-conway-maneuver) (~2015, ThoughtWorks). Citado por Skelton & Pais na seção *The Revival of Conway's Law*.

[^6]: **MacCormack, Alan; Baldwin, Carliss Y.; Rusnak, John.** ["Exploring the Duality between Product and Organizational Architectures: A Test of the 'Mirroring' Hypothesis."](https://www.hbs.edu/faculty/Pages/item.aspx?num=43260) *Research Policy* 41, no. 8, outubro de 2012. — Pesquisas que confirmam empiricamente a correlação entre estrutura de comunicação e arquitetura de software, em projetos open-source e closed-source.

[^7]: **Pink, Daniel H.** [*Drive: The Surprising Truth About What Motivates Us.*](https://www.danpink.com/books/drive/) Riverhead Books, 2009. — Framework de motivação intrínseca (autonomia, maestria, propósito). Citado por Skelton & Pais na seção *Cognitive Load and Bottlenecks*.

[^8]: **Antunes, Miguel / OutSystems.** Caso real de uma equipe de Engineering Productivity que acumulou responsabilidades de CI, CD e automação de infraestrutura ao longo de cinco anos. Relato citado por Skelton & Pais na seção *Cognitive Load and Bottlenecks*. Resumo disponível em [IT Revolution — Team Cognitive Load](https://itrevolution.com/articles/cognitive-load/).