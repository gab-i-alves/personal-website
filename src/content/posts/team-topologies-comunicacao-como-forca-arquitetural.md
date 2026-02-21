---
title: Team Topologies - Comunicação como força arquitetural
pubDate: '2026-02-21'
---

# Menos conversa, melhor software? O que a Lei de Conway diz sobre comunicação entre times

Quando alguém me diz que a solução para problemas de coordenação em times de tecnologia é "melhorar a comunicação", minha reação imediata é concordar. Parece óbvio. Mais comunicação, mais alinhamento, menos ruído. Só que eu já passei por equipes em que os processos foram sendo melhorados: novas ferramentas, novos rituais, novas automações, mas a forma como as pessoas se comunicavam continuava a mesma. O resultado era trocar um problema por outro. Informação dispersa, uma pessoa passando contexto desatualizado para outra, pequenos equívocos que se acumulavam e geravam retrabalho. E mesmo depois de tanto esforço, ficava o sentimento de que as coisas não saíam do lugar.

O capítulo 2 de Team Topologies me ofereceu uma explicação para esse padrão, e a explicação é incômoda. O argumento central é que comunicação entre equipes *molda* a arquitetura do software, quer a gente planeje isso ou não. E a consequência mais contraintuitiva: em muitos casos, *reduzir* a comunicação entre equipes produz sistemas melhores do que aumentá-la. Minha primeira reação foi de resistência. Manter as coisas em segredo é bom? Quanto menos alguém souber, melhor? Mas o capítulo não diz isso. O que ele diz é mais sutil e mais útil.

## Uma lei de 1968 que ninguém conseguiu revogar

Mel Conway publicou em 1968 uma observação sobre organizações que projetam sistemas: a arquitetura do produto tende a espelhar a estrutura de comunicação de quem o constrói.[^1] Quatro equipes com front-end e back-end separados, todas dependendo de um DBA compartilhado, vão produzir, quase inevitavelmente, quatro aplicações com UI e backend separados, e um banco de dados monolítico compartilhado. A estrutura de comunicação imprime sua forma no software como um carimbo.

Pesquisadores de Harvard testaram essa hipótese décadas depois, comparando a arquitetura de produtos open-source e closed-source com a estrutura das organizações que os desenvolveram. O resultado: "strong evidence to support the hypothesis that a product's architecture tends to mirror the structure of the organization in which it is developed."[^2] Estudos em manufatura de veículos e motores de avião encontraram padrões semelhantes.[^3]

O que me convenceu não foi a correlação em si, isso é quase senso comum para quem já trabalhou em empresa grande. Foi a implicação que Skelton e Pais extraem dela: se a comunicação *vai* moldar a arquitetura de qualquer jeito, então a pergunta certa não é "qual a melhor arquitetura?", mas "qual estrutura de comunicação entre equipes produziria a arquitetura que queremos?" A ordem de operação se inverte. Você não desenha a arquitetura e depois distribui o trabalho entre times. Você organiza os times para que a arquitetura desejada *emerja* dos caminhos de comunicação que existem entre eles. Skelton e Pais chamam isso de Reverse Conway Maneuver, uma ideia que ganhou tração a partir de 2015, creditada a James Lewis da ThoughtWorks.[^4]

## O caso da Adidas e o que ele prova (e o que não prova)

O capítulo traz o caso da Adidas como exemplo. A empresa saiu de um modelo em que um único fornecedor entregava a maior parte do software, com handoffs constantes e pouca engenharia interna, para um modelo orientado a produto. Investiram 80% dos recursos de engenharia em capacidade interna, com times cross-funcionais alinhados ao negócio, e 20% num time de plataforma centralizado. O resultado: a frequência de releases dos produtos digitais aumentou sessenta vezes.[^5]

É um número que impressiona, mas eu fico com um pé atrás. O aumento de 60x coincidiu com várias mudanças simultâneas: a transição de vendor externo para engenharia in-house, a criação do time de plataforma, a adoção de times cross-funcionais. Isolar a contribuição específica da reorganização baseada em Conway é impossível com a informação que o capítulo oferece. Os autores apresentam o caso como se a aplicação consciente da Lei de Conway fosse o motor do resultado, mas a reorganização pode ter sido condição necessária sem ser suficiente. Talvez o investimento bruto em engenharia interna explique mais do que a topologia de times em si.

Essa distinção importa. Se alguém lê o caso Adidas e conclui "basta reorganizar times que a frequência de deploy multiplica", vai se frustrar. A Reverse Conway Maneuver parece ser mais uma *condição habilitadora* que torna certos resultados possíveis  do que uma causa direta.

## "Restrinja comunicação desnecessária"

Aqui está a parte que me fez parar de ler e pensar. Skelton e Pais argumentam que nem toda comunicação entre equipes é benéfica, e que a Lei de Conway implica que comunicação many-to-many, onde todo mundo precisa falar com todo mundo, tende a produzir sistemas monolíticos, acoplados e difíceis de mudar. A prescrição é direta: restrinja comunicação entre equipes que, pela arquitetura planejada, não deveriam precisar se coordenar.

Minha reação inicial foi de desconforto. Já trabalhei em contextos onde informação ficava presa com quem não deveria, onde faltava transparência, onde a comunicação insuficiente gerava os tais equívocos que mencionei antes. Dizer "comuniquem-se menos" parece um convite ao desastre. Mas o capítulo faz uma distinção que demorei algumas páginas para absorver: existe uma diferença entre *sigilo* e *interface definida*.

Quando duas equipes se comunicam o tempo todo sobre decisões que, em tese, cada uma deveria tomar sozinha, o problema pode não ser falta de autonomia, pode ser que a fronteira entre os dois sistemas não está clara. Uma API mal definida, um banco compartilhado sem ownership claro, um componente que deveria existir mas ninguém criou. A comunicação excessiva é o *sintoma*, e o capítulo propõe que se trate a causa: definir interfaces entre equipes tão deliberadamente quanto se define interfaces entre sistemas. Mike Cohn, citado no texto, propõe dois testes: a estrutura minimiza o número de caminhos de comunicação entre times? E ela estimula comunicação entre times que de outra forma não se falariam?[^6]

Essa reformulação me ajudou. O objetivo não é esconder informação. É fazer com que equipes não *precisem* de informação umas das outras para tomar decisões dentro do seu escopo. Se precisam, algo na arquitetura ou na divisão de responsabilidades está errado. A comunicação desnecessária é um code smell organizacional, ela sinaliza acoplamento, não colaboração.

## Ferramentas escolhem por você

Uma seção do capítulo que quase passei batido, mas que conecta diretamente com o meu dia a dia, é sobre como as ferramentas de trabalho criam caminhos de comunicação implícitos. Se dois times usam a mesma instância de uma ferramenta de ticketing ou monitoramento, existe um canal de comunicação entre eles, mesmo que ninguém tenha decidido que deveria existir. Informações vazam entre os contextos, prioridades se misturam, e a Lei de Conway transforma essa comunicação acidental em acoplamento arquitetural.

O inverso também vale. Times que deveriam colaborar, mas usam ferramentas separadas, têm um atrito artificial de comunicação. O capítulo dá o exemplo de um time de desenvolvimento e um time de operações com ferramentas de incidentes separadas: a falta de visibilidade compartilhada prejudica a coordenação que a arquitetura exige.

A regra que emerge disso é simples de enunciar, difícil de aplicar: ferramentas compartilhadas para equipes que devem colaborar, ferramentas separadas (ou instâncias separadas) para equipes que devem ser independentes. Penso imediatamente em como organizamos boards de Jira, se a organização dos boards reflete a autonomia que queremos que os times tenham, ou se reflete a conveniência de quem configurou o projeto três anos atrás. Conway diria que o software vai espelhar a estrutura do Jira eventualmente.

## O perigo da aplicação ingênua

O capítulo fecha com três alertas sobre usos ingênuos da Lei de Conway, e o terceiro me acertou em cheio. Skelton e Pais argumentam que reorganizações motivadas por conveniência gerencial, cortar headcount, criar feudos de poder, reagrupar por capricho, "actively destroy the ability of organizations to build and operate software systems effectively." Quando o texto diz que essas reorgs são como "open heart surgery performed by a child: highly destructive", a comparação é forte, mas o ponto é preciso: se a Lei de Conway é real, então cada reorganização é uma decisão de arquitetura, e decisões de arquitetura tomadas sem input técnico produzem resultados técnicos ruins.

A implicação que o capítulo deixa implícita, mas que me parece inevitável: se design de equipes é design de arquitetura, então quem decide a composição de times precisa de competência técnica. E o contrário também: quem toma decisões de arquitetura precisa entender as restrições organizacionais. Allan Kelly, citado no texto, defende que o papel de arquiteto de software deveria incluir influência sobre estruturas organizacionais e questões de pessoal.[^7] A ideia me atrai e me preocupa ao mesmo tempo: atrai porque conecta duas coisas que claramente se influenciam; preocupa porque nem todo bom arquiteto tem habilidade para lidar com dinâmica de grupo, e dar a essa pessoa poder sobre estrutura de times pode criar problemas novos.

Há também a questão da resistência a mudança, algo que conheço de perto. Em times onde o modo de operação é "funcionou até agora, pra que mudar?", propor uma reestruturação baseada em Conway pode parecer abstrato e ameaçador. A Lei de Conway como conceito é fácil de explicar. Convencer nove pessoas de que a forma como elas se comunicam precisa mudar *para que o software mude* é outra história.

## O que fica

No capítulo anterior, minha conclusão foi que o problema central era a ausência de *design* de comunicação, quem deveria interagir com quem, dentro de que escopo, e com que propósito. Esse segundo capítulo adicionou uma consequência que eu não tinha enxergado: a comunicação entre equipes não apenas coordena o trabalho, ela *determina a forma do produto*. Essa ideia muda o peso que eu dou para decisões aparentemente administrativas, como quem senta com quem, qual time usa qual ferramenta, e quem reporta para quem.

O que eu quero testar: pegar um dos nossos sistemas que mais gera atrito entre equipes e mapear se os pontos de acoplamento no código correspondem aos pontos de comunicação entre pessoas. Se a correspondência for forte, a Lei de Conway está operando, e melhorar o código sem mudar a comunicação entre times vai ser enxugar gelo. Se não corresponder, ou minha interpretação da lei está errada, ou temos uma exceção útil de investigar.

Uma coisa ficou em aberto: o capítulo é claro sobre *quando* a comunicação entre times deve ser reduzida (quando a arquitetura não exige coordenação), mas não oferece um framework para distinguir isso de situações onde a comunicação é necessária mas desconfortável, quando equipes *precisam* colaborar mas preferem não fazê-lo. Essa distinção parece crítica, e espero que os capítulos sobre modos de interação entre times (capítulo 7) enderecem isso. Se não endereçarem, será a maior lacuna do livro.

---

[^1]: **Conway, Melvin E.** ["How Do Committees Invent?"](https://www.melconway.com/Home/Committees_Paper.html) *Datamation*, abril de 1968. — Artigo original que formula o que ficou conhecido como Lei de Conway: "organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations." Citado por Skelton & Pais na seção *Understanding and Using Conway's Law*.

[^2]: **MacCormack, Alan; Baldwin, Carliss Y.; Rusnak, John.** ["Exploring the Duality between Product and Organizational Architectures."](https://www.hbs.edu/faculty/Pages/item.aspx?num=43260) *Research Policy* 41, no. 8, outubro de 2012. — Estudo de Harvard comparando arquitetura de software e estrutura organizacional em produtos open-source e closed-source. Citado por Skelton & Pais na seção *Understanding and Using Conway's Law*.

[^3]: Skelton & Pais mencionam "studies in other industries, such as vehicle manufacturing and aircraft engine design" sem citar os trabalhos individuais. A referência é genérica no texto do capítulo 2.

[^4]: **Lewis, James.** Creditado pela formulação da ["Reverse Conway Maneuver"](https://www.thoughtworks.com/radar/techniques/inverse-conway-maneuver) (~2015, ThoughtWorks). Citado por Skelton & Pais na seção *The Reverse Conway Maneuver*. A pesquisa do Accelerate (Forsgren, Humble, Kim — 2018) também é citada como suporte empírico para a estratégia.

[^5]: **Cornago, Fernando & Rautert, Markus.** Caso Adidas, relatado por Senior Director e VP de Platform Engineering. Comunicação pessoal com os autores, março de 2019. Citado por Skelton & Pais na seção *Understanding and Using Conway's Law*.

[^6]: **Cohn, Mike.** Perguntas sobre saúde de comunicação inter-equipes, citadas por Skelton & Pais na seção *Restrict Unnecessary Communication*. Cohn é um dos criadores da abordagem Scrum.

[^7]: **Kelly, Allan.** Defende que o papel de arquiteto de software deveria incluir influência sobre estruturas organizacionais e pessoal. Citado por Skelton & Pais na seção *Organization Design Requires Technical Expertise*.

[^8]: **Malan, Ruth.** Formulação moderna da Lei de Conway: "If the architecture of the system and the architecture of the organization are at odds, the architecture of the organization wins." Citada por Skelton & Pais na seção *Understanding and Using Conway's Law*.

[^9]: **Kniberg, Henrik.** ["Real Life Agile Scaling."](https://blog.crisp.se/2015/10/07/henrikkniberg/real-life-agile-scaling) Modelo visual de bandwidth de comunicação entre equipes (alta dentro do time, média entre times pareados, baixa entre os demais). Citado por Skelton & Pais na seção *Restrict Unnecessary Communication*, adaptado na Figura 2.5.

[^10]: **Sosa, Manuel et al.** Pesquisa de 2004 sobre manufatura de aeronaves, identificando a importância de investigar interações imprevistas entre equipes. Citado por Skelton & Pais na seção *Restrict Unnecessary Communication*.
