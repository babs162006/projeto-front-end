# Projeto Borboleta
Nome: Bárbara Diogo Passos e Janaína Diogo Passos
RA: 10737885 e 10737888

# Processo de Ideação
O WomanTech é um projeto de extensão da FCI, em parceria com o programa Meninas Digitais da Sociedade Brasileira de Computação. Seu objetivo é promover a participação feminina na tecnologia, incentivando meninas do ensino médio, mulheres em transição de carreira e estudantes a ingressarem na área, por meio de oficinas, palestras, criação de conteúdos e atividades práticas.

Para ampliar sua visibilidade e alcance, propomos a criação de um site oficial do WomanTech, reunindo informações sobre a ideação do projeto, colaboradores e palestrantes, além de disponibilizar gravações das palestras e um formulário para interessadas em participar ou apoiar a iniciativa. Esse espaço digital funcionaria como um canal de divulgação, engajamento e inclusão, fortalecendo ainda mais a presença feminina na tecnologia.

# Caráter Extensionista
A disciplina Web Mobile possui um caráter extensionista, o que implica que o trabalho que desenvolvermos precisará estar aberto à participação da comunidade, promovendo um diálogo e uma troca de saberes entre a universidade e o público externo. No nosso caso, o foco é ampliar o alcance do projeto Womantech, fazendo, assim, com que o projeto gere um impacto social positivo, ampliando oportunidades e visibilidade para mulheres na tecnologia, um campo historicamente marcado pela baixa representatividade feminina.

Ao atuar de forma extensionista, nosso projeto ajuda a construir pontes entre conhecimento técnico e necessidades sociais, fortalecendo a inclusão e a diversidade no setor tecnológico.

# Protótipo (Wireframe)
<img width="500" height="1600" alt="image" src="https://github.com/user-attachments/assets/db46cd39-e6de-42e8-ade6-782de62d8927" />

# Vantagem da migração para componentes ReactJS

A migração para componentes ReactJS traz diversas vantagens tanto no desenvolvimento quanto na manutenção de aplicações web. Com ReactJS, há maior modularidade do código, dado que cada parte da interface é dividida em componentes independentes e reutilizáveis, o que facilita a organização do projeto, reduz a duplicação de código e aumenta a produtividade. Outra vantagem significativa é a atualização eficiente da interface por meio do Virtual DOM, que torna as renderizações mais rápidas e melhora a experiência do usuário. Além disso, o ecossistema do React oferece uma ampla comunidade, bibliotecas complementares e integração facilitada com frameworks modernos, o que torna o desenvolvimento mais ágil e escalável.

# Trechos de código

# Arquivo: layout.js

<img width="793" height="464" alt="image" src="https://github.com/user-attachments/assets/ef89f4ac-04b5-4512-8b28-63543c6706a5" />

O arquivo layout.js define a estrutura principal da aplicação, ou seja, o que será exibido em todas as páginas, como o cabeçalho (Header), o rodapé (Footer) e o conteúdo central. Logo no início, a instrução "use client" indica que o componente será executado no lado do cliente, permitindo o uso de hooks do React. Em seguida, o código importa o arquivo de estilos globais (globals.css), os componentes Header e Footer, e o hook usePathname do Next.js, que serve para identificar o caminho atual da URL.

Dentro da função RootLayout, o usePathname() obtém o endereço da página que o usuário está acessando. Com base nisso, é criada uma condição chamada hideHeaderFooter, que verifica se o caminho é igual a /formulario. Se for, significa que o cabeçalho e o rodapé não devem aparecer nessa página, permitindo que o formulário ocupe toda a tela.

# Arquivo: page.js

<img width="798" height="370" alt="image" src="https://github.com/user-attachments/assets/13b34efe-037b-44e9-adf3-0d8c6dc19efc" />
<img width="790" height="209" alt="image" src="https://github.com/user-attachments/assets/7836ef24-0d22-488f-b69c-3c952dbd2528" />

Esse código define a página inicial do site em Next.js, estruturando o conteúdo com seções estilizadas pelo arquivo home.module.css. Ele utiliza o componente Image do Next.js para otimizar as imagens e inclui o componente Organizadoras ao final da página.

Explicando melhor, a função Home organiza a página em três partes principais:

- Banner principal: exibe a imagem “anuncio4.png”, servindo como destaque visual.
- Apresentação do projeto: mostra a logo, o título “Quem somos e o que fazemos?” e um texto explicando que o WomanTech é um projeto da FCI em parceria com o programa Meninas Digitais, voltado à inclusão feminina na tecnologia.
- Objetivo: destaca a missão de promover a participação feminina na área de TI, desde estudantes até profissionais em transição de carreira.
- Por fim, o componente <Organizadoras /> apresenta quem faz parte do projeto, completando a estrutura informativa e visual da página inicial.

# Arquivo: globals.css

Esse código define o estilo global do site, controlando a aparência geral de todos os elementos HTML. Ele garante uma identidade visual coesa e um layout limpo e harmonioso.


# Seletor universal, body e links

<img width="794" height="478" alt="image" src="https://github.com/user-attachments/assets/5b6c13d1-6154-4112-a088-061d61009ef7" />

Primeiro, o seletor universal (*) zera margens e espaçamentos padrão, define o uso de box-sizing: border-box (para facilitar o controle de tamanhos) e aplica uma fonte padrão simples e legível. O body recebe fundo rosa claro (#ffe8f0), texto na cor rosa mais escura (#cf8a8d) e espaçamento entre linhas confortável.

Os links (a) têm aparência limpa, com cor principal rosa e um efeito suave ao passar o mouse, mudando para branco.

# Imagens e butões

<img width="789" height="432" alt="image" src="https://github.com/user-attachments/assets/bfbdc4c1-3b48-4bf9-9b00-0b2b087a237d" />

As imagens são responsivas, sempre ajustando seu tamanho à largura disponível e os botões seguem o mesmo padrão de cores do site, com cantos arredondados, tipografia simples e um leve efeito de escurecimento ao passar o mouse, reforçando a interação visual. Os botões seguem o mesmo padrão de cores do site, com cantos arredondados, tipografia simples e um leve efeito de escurecimento ao passar o mouse, reforçando a interação visual.

# Header

<img width="788" height="464" alt="image" src="https://github.com/user-attachments/assets/012525b2-d527-48b2-ad35-e9496d87fc60" />
<img width="794" height="387" alt="image" src="https://github.com/user-attachments/assets/fed1202c-3b8e-4880-ad27-09a11ee4e660" />

O cabeçalho (header) é estruturado com um fundo rosa, alinhamento horizontal entre logo e navegação, e espaçamento equilibrado entre os itens. Os links do menu têm bordas arredondadas, transição de cor e destaque quando o usuário passa o mouse, criando uma navegação agradável.

# Footer

<img width="788" height="400" alt="image" src="https://github.com/user-attachments/assets/5c207251-c2f3-4df8-aaf3-91f253f08fee" />

O rodapé (footer) mantém a paleta de cores principal, centraliza o texto e adiciona uma linha sutil para separar o conteúdo

# Títulos e parágrafos

<img width="776" height="310" alt="image" src="https://github.com/user-attachments/assets/a616e656-5b8c-4894-b7c8-bd8dd6d9bbf8" />

 Os títulos e parágrafos têm cores e espaçamentos consistentes, reforçando a identidade visual e garantindo legibilidade em toda a interface.

# Arquivo: home.module.css

# Estrutura da seção de anúncio e organização geral do conteúdo

<img width="791" height="389" alt="image" src="https://github.com/user-attachments/assets/5389e799-50ed-4611-bd13-9611a1b1e818" />

Essa parte define o layout da seção inicial da página, onde fica a imagem de destaque. A classe .anuncio centraliza o conteúdo usando flexbox, enquanto o seletor .anuncio img garante que a imagem ocupe toda a largura da tela, mantendo altura fixa e sem margens, criando um banner limpo e proporcional. Aqui também é definido o contêiner principal que abriga o texto e o círculo. O uso de flexbox com espaçamento (gap) e flex-wrap permite que os elementos se ajustem automaticamente em diferentes tamanhos de tela. Isso cria um layout equilibrado e fluido, mantendo harmonia visual entre as seções.

# Estilo da seção de texto

<img width="794" height="318" alt="image" src="https://github.com/user-attachments/assets/2b6e5fd0-daab-4773-a5f5-fc1fc1317b36" />

A classe .texto organiza o conteúdo textual em colunas verticais, com espaçamento entre os elementos e tipografia legível. O tom rosado reforça a identidade visual do projeto.
A imagem dentro do texto é posicionada manualmente com deslocamento para a esquerda e para baixo, servindo como um detalhe decorativo.

# Estilo do círculo e seu conteúdo

<img width="791" height="469" alt="image" src="https://github.com/user-attachments/assets/1ebe940e-35af-4b8a-9322-2eab82f2ae1d" />
<img width="774" height="104" alt="image" src="https://github.com/user-attachments/assets/b06ec2f9-cd7a-4505-855f-2739d214892d" />

Essa parte cria um elemento circular decorativo, usado para destacar o objetivo do projeto. O border-radius: 50% forma o círculo, enquanto o flexbox centraliza o texto dentro dele. O efeito :hover amplia levemente o círculo, criando uma interação suave. As cores — fundo rosa e texto branco — dão contraste e harmonia ao visual.

# Responsividade

<img width="774" height="287" alt="image" src="https://github.com/user-attachments/assets/bf753ab5-bae8-486d-9f18-eef43dce45ec" />

Esse trecho garante que o layout se adapte a telas menores. O conteúdo passa de duas colunas para uma única coluna, centralizando tudo na vertical. O círculo se transforma em um bloco mais retangular, mantendo legibilidade e boa proporção em dispositivos móveis.

# Componentes

# Header.js

<img width="794" height="383" alt="image" src="https://github.com/user-attachments/assets/aa8c3106-2abb-40c8-ba42-f86419f8e22f" />

O componente Header.js define o cabeçalho principal do site e é responsável pela navegação entre as páginas. O código começa com a diretiva "use client", que indica que o componente é executado no lado do cliente — necessária porque ele utiliza recursos interativos do React, como o componente Link do Next.js. Em seguida, são importados Link e Image para criar links e inserir imagens otimizadas.

Dentro da função Header, o retorno JSX monta a estrutura do cabeçalho (header), que contém uma imagem e um menu de navegação. A imagem, inserida com o componente Image, exibe o logotipo do projeto WomanTech, com dimensões de 80x80 pixels e texto alternativo para acessibilidade. Logo ao lado, há o elemento nav com uma lista não ordenada (ul) que agrupa os itens de menu (li).

Cada item usa o componente Link para direcionar o usuário a diferentes páginas do site — “Home”, “Palestrantes”, “Encontros” e “Quer participar?”. O uso do Link permite navegação rápida entre as rotas sem recarregar a página, garantindo uma experiência fluida. No geral, o componente cria um cabeçalho funcional, simples e responsivo, servindo como elemento fixo de identidade visual e navegação em todo o site.

# Footer.js

<img width="782" height="186" alt="image" src="https://github.com/user-attachments/assets/a2fc1c10-5881-4548-b7d5-ac8e93c123e5" />

O componente Footer.js define o rodapé do site, exibindo informações finais e de autoria. Ele utiliza a tag footer para marcar semanticamente a seção inferior da página. Dentro dela, há uma linha horizontal (hr) que separa visualmente o conteúdo principal do rodapé, seguida de dois parágrafos: o primeiro mostra os direitos autorais e o ano, e o segundo apresenta os nomes das autoras do projeto. Simples e direto, o Footer dá um encerramento elegante e informativo à página, mantendo a consistência visual e estrutural do site.

# Organizadoras.js

<img width="798" height="391" alt="image" src="https://github.com/user-attachments/assets/48f34b75-e11d-42dc-94c7-88f42cde4ed9" />
<img width="769" height="266" alt="image" src="https://github.com/user-attachments/assets/31652781-e83d-4027-b2f9-3d38f67bebbd" />

O componente Organizadoras.js é responsável por exibir as organizadoras e colaboradoras do projeto WomanTech. Ele começa importando o módulo de estilos CSS e o componente Image do Next.js, garantindo otimização das imagens. Em seguida, é definido um array chamado pessoas, que contém objetos com os nomes e caminhos das fotos de cada organizadora.

A função principal retorna uma estrutura dividida em duas partes: a primeira é o cabeçalho da seção, com o logo do projeto e o título “Organizadoras e colaboradoras”; a segunda exibe, em formato de grade, cada pessoa do array. Para isso, o código utiliza o método .map(), que percorre a lista e cria um bloco visual (section) para cada organizadora, contendo sua foto e nome.

Visualmente, o componente organiza as imagens e textos de forma harmoniosa e padronizada, transmitindo profissionalismo e reconhecimento às participantes. Além disso, o uso de classes do CSS modular garante estilo independente e fácil manutenção do layout.

# Arquivo: Organizadoras.module.css

<img width="798" height="472" alt="image" src="https://github.com/user-attachments/assets/648c862d-4461-4696-8fc7-3d3c4e991e1f" />
<img width="792" height="492" alt="image" src="https://github.com/user-attachments/assets/c345184f-1d20-41ef-8bf0-869798b52072" />
<img width="767" height="212" alt="image" src="https://github.com/user-attachments/assets/5ec63433-d4e9-43ae-abde-0a08b3efa3ee" />

O arquivo Organizadoras.module.css define o estilo visual da seção de organizadoras do projeto WomanTech, garantindo um layout limpo, harmônico e responsivo.

A classe .organizadoras cria o contêiner principal da seção, com espaçamento interno amplo, borda superior e alinhamento centralizado, destacando a área no site. Em seguida, .titulo organiza o logo e o título lado a lado, centralizados e com espaçamento entre eles, transmitindo equilíbrio visual; seu texto recebe uma coloração suave em rosa #cf8a8d, que mantém a identidade visual do projeto.

A classe .pessoas estrutura as fotos e nomes das organizadoras em um grid responsivo, adaptando automaticamente o número de colunas de acordo com o tamanho da tela. Cada organizadora é estilizada pela classe .pessoa, que mantém o texto centralizado, e pela classe .foto, que define as imagens em formato circular, com bordas suaves e um efeito de zoom ao passar o mouse — adicionando dinamismo e elegância à página.

Por fim, o bloco @media screen and (max-width: 768px) garante a responsividade: o título passa a ser exibido em coluna e o tamanho da fonte é reduzido, assegurando boa leitura e organização também em dispositivos móveis.

# Formulário + API

# Arquivo: page.js 

# Parte incremental do API

<img width="782" height="394" alt="image" src="https://github.com/user-attachments/assets/d7e3dd7b-92d9-4861-b9e7-a0fd3d24c905" />

O código page.js do formulário cria a página principal de inscrição do WomanTech. Ele define um componente React com "use client" para permitir interação direta no navegador e importa o CSS do arquivo formswoman.module.css. O componente importa o hook useState do React para controlar o estado de uma variável chamada dogUrl, inicialmente nula.

Quando o formulário é enviado (função handleSubmit), o evento padrão do navegador é impedido com event.preventDefault(), e é gerado um número aleatório (randomId) para compor uma URL dinâmica do serviço place.dog, que retorna uma imagem aleatória de cachorro. Essa URL é salva em dogUrl com setDogUrl(url), e uma mensagem de confirmação (“Formulário enviado!”) é exibida com alert().

# Conteúdo do formulário

<img width="780" height="433" alt="image" src="https://github.com/user-attachments/assets/160f3839-df17-4bbd-984b-ace1597346b5" />
<img width="793" height="476" alt="image" src="https://github.com/user-attachments/assets/16d652ee-ef80-41a4-b331-ce144f7c941f" />
<img width="785" height="414" alt="image" src="https://github.com/user-attachments/assets/360aec68-a819-484d-8e56-f4997189f26e" />
<img width="788" height="450" alt="image" src="https://github.com/user-attachments/assets/23dbe66f-b125-4026-95b9-23d8996fdc53" />
<img width="791" height="438" alt="image" src="https://github.com/user-attachments/assets/9b7ffac5-402a-4c13-bbce-843ba15240f5" />
<img width="781" height="317" alt="image" src="https://github.com/user-attachments/assets/2b4a9ba7-eff9-40e0-b914-09ee51767a90" />

A página contém um formulário completo dentro de main e fieldset, reunindo campos de dados pessoais (nome, RA, e-mail), disponibilidade, curso, semestre, unidade, como conheceu o projeto, participação anterior e áreas de interesse no WomanTech. Também há um campo de texto livre para a candidata explicar suas motivações. No fim, formulário inclui um botão de envio e um link de retorno à homepage. 

# Parte funcional do API

<img width="761" height="329" alt="image" src="https://github.com/user-attachments/assets/8c43e103-296f-4f13-9b64-f29a1ecfd171" />

Após o envio, se dogUrl tiver valor (ou seja, se o formulário já foi enviado), o código exibe uma imagem aleatória de cachorro dentro de uma <section> com classe dogContainer, acompanhada da legenda “Obrigada por ter se inscrito!".

# Arquivo: formswoman.module.css

<img width="790" height="454" alt="image" src="https://github.com/user-attachments/assets/b422bffe-df44-4652-a7f4-2589026c37b7" />
<img width="788" height="419" alt="image" src="https://github.com/user-attachments/assets/c0ceff5a-3a41-4368-b596-75fd958587cc" />
<img width="795" height="427" alt="image" src="https://github.com/user-attachments/assets/fd65d112-694a-40e6-b527-0ab93a916094" />
<img width="792" height="494" alt="image" src="https://github.com/user-attachments/assets/996b5c35-f4bf-42ed-87f5-99f34e36e2e4" />
<img width="793" height="484" alt="image" src="https://github.com/user-attachments/assets/390fd8dc-82d3-44cb-b550-9580d48ee90c" />


O arquivo formswoman.module.css define todo o estilo visual da página de formulário do WomanTech, garantindo uma aparência organizada e coerente. O seletor .pagina centraliza o conteúdo na tela e aplica um fundo rosa escuro (#b36b6f). A classe .formulario define a estrutura principal do formulário, com largura máxima de 600px e texto branco.

Os elementos dentro do formulário, como fieldset, legend, label, input, select e textarea, recebem espaçamentos e bordas arredondadas para melhorar a legibilidade e a estética. Os campos de texto e seleção são amplos e confortáveis para digitar, enquanto os botões têm destaque em branco com texto rosa, mudando de cor ao passar o mouse.

O link de retorno à homepage é estilizado com .voltar e .link, mantendo o texto branco e um sublinhado para indicar interatividade. 

A classe .dogContainer centraliza o conteúdo e adiciona um espaçamento superior de 20px. A .dogImage define a imagem com tamanho fixo (300x200px), cantos arredondados (12px), corte proporcional com object-fit: cover e uma sombra suave para destaque. Por fim, a .dogText estiliza o texto abaixo da imagem, com margem superior, cor branca e fonte em negrito.

# Encontros

# Arquivo: page.js

<img width="796" height="500" alt="image" src="https://github.com/user-attachments/assets/efe69002-6581-42f4-bf24-ced87aef6323" />
<img width="766" height="289" alt="image" src="https://github.com/user-attachments/assets/8db53ff7-6eed-4486-b679-741d35a26be6" />

Esse código define o componente React ImagensPage, usado para exibir uma galeria de projetos do WomanTech. Ele importa o hook useRouter para permitir navegação dinâmica e o módulo de estilos encontros.module.css para a aparência visual.

Um array chamado imagens armazena os dados de quatro imagens — cada uma com id, caminho (src) e descrição (alt). O componente exibe um título e, em seguida, percorre o array com map(), gerando um card para cada imagem. Cada card mostra a imagem (usando o componente otimizado Image do Next.js) e uma legenda sobreposta. Ao clicar em uma imagem, o usuário é redirecionado para uma página dinâmica correspondente, por meio de router.push(/encontros/${img.id}).

Em resumo, o código cria uma galeria interativa e responsiva, onde cada imagem funciona como um link visual para uma página específica de detalhes sobre o projeto.

# Arquivo: encontros.module.css

<img width="793" height="528" alt="image" src="https://github.com/user-attachments/assets/5a5a7491-e991-4a59-93de-0a677ccd8f60" />
<img width="790" height="319" alt="image" src="https://github.com/user-attachments/assets/e099fee6-ba65-40c7-a20a-9e6c18d208b5" />
<img width="793" height="374" alt="image" src="https://github.com/user-attachments/assets/22c0d4d2-c481-4621-a31e-3249588f4bb3" />
<img width="793" height="385" alt="image" src="https://github.com/user-attachments/assets/69e66bed-d729-4266-a967-6dd0efe799f7" />

A classe .container define um layout em grade (grid) com duas colunas, espaçamento de 25px e fundo rosa claro (#ffe8f0), centralizando os itens e ocupando toda a altura da tela. A .card representa cada imagem: possui cantos arredondados, sombra suave, efeito de ampliação no hover (transform: scale(1.03)), e transições suaves que dão dinamismo à interação.

A .image ocupa todo o card, cortando proporcionalmente com object-fit: cover, e também aumenta levemente ao passar o mouse. A .overlay cria uma camada escura e semitransparente sobre a imagem, exibindo o título do projeto centralizado, que aparece gradualmente no hover (opacity: 1).

A .titulo estiliza o cabeçalho da página, centralizado, em tom rosado e com fonte grande e marcante. Por fim, a media query adapta o layout para telas menores, exibindo apenas uma coluna e ajustando o tamanho dos cards.

# [id]

# Arquivo: page.js

<img width="801" height="526" alt="image" src="https://github.com/user-attachments/assets/51abb253-f7c8-409f-9b70-14bbf23787aa" />
<img width="789" height="404" alt="image" src="https://github.com/user-attachments/assets/a466f275-7b5e-48e4-83ae-b72d55237d70" />

Esse código define o componente React ImagemDetalhe, responsável por exibir a página detalhada de cada projeto do WomanTech. Ele importa useParams e useRouter da biblioteca next/navigation para acessar o parâmetro da URL e permitir navegação entre páginas, além de usar o componente otimizado Image do Next.js e o arquivo de estilos encontrosDetalhe.module.css.

O componente obtém o id da imagem por meio de useParams() e usa esse valor para acessar um objeto imagens, que contém os dados (título, descrição e caminho da imagem) de cada projeto. Se o id não corresponder a nenhuma imagem, o usuário é redirecionado de volta à página principal de encontros (/encontros). Se o id for válido, a página exibe um botão de retorno, o título do projeto, a imagem em destaque e um texto descritivo sobre o evento ou atividade correspondente.

# Arquivo: encontrosDetalhe.module.css

<img width="794" height="527" alt="image" src="https://github.com/user-attachments/assets/761cd827-cb5c-424d-ad24-5a32123f2008" />
<img width="792" height="440" alt="image" src="https://github.com/user-attachments/assets/4516171c-9e45-41ee-ba3b-5abfd88ecb57" />
<img width="790" height="108" alt="image" src="https://github.com/user-attachments/assets/b9641af5-91e4-4b9a-9964-4e36226f919a" />

A classe .container define o layout principal com flexbox em coluna, centralizando o conteúdo, aplicando espaçamento interno e fundo rosa claro (#ffe8f0), além de alinhar o texto ao centro. O .voltarBtn estiliza o botão de retorno com cor rosa mais escura (#cf8a8d), texto branco e bordas arredondadas; ele muda de cor ao passar o mouse, criando um efeito de destaque suave. 

A .titulo define o título do projeto com fonte grande, negrito e cor rosada, reforçando o foco visual. A .imageWrapper limita o tamanho da imagem, aplica bordas arredondadas e margens para separação, enquanto .imagem garante que a imagem se ajuste proporcionalmente dentro do espaço disponível.

Por fim, a .descricao estiliza o texto descritivo, com tom cinza suave e largura limitada para boa legibilidade.

# Palestras

# Arquivo: page.js

<img width="785" height="543" alt="image" src="https://github.com/user-attachments/assets/78aaefd0-4c09-4dcb-b074-126efee9ed7d" />
<img width="785" height="452" alt="image" src="https://github.com/user-attachments/assets/0dc062db-84bf-46d5-8000-58a9ca7179ef" />
<img width="761" height="248" alt="image" src="https://github.com/user-attachments/assets/5f9d548b-023e-47e2-99b8-81043bddc7b1" />

Esse código define o componente React Palestras, responsável por exibir uma página sobre uma das palestras do projeto WomanTech. Ele utiliza estilos definidos no arquivo palestras.module.css para a formatação visual.

A estrutura do componente é organizada em seções:

- A primeira, banner, exibe o título “Mais em breve...”, funcionando como um cabeçalho introdutório.
- A segunda, conteudo, apresenta o título da palestra “Women in TECH: Desafios ou Oportunidades?” e um parágrafo descritivo explicando seu propósito — discutir a presença feminina na tecnologia, os desafios enfrentados e as oportunidades que surgem com a valorização da diversidade.
- A seção videoArea inclui um botão que leva o usuário ao vídeo no YouTube e exibe uma thumbnail (imagem de prévia) clicável da palestra.
- Por fim, a Section traz uma mensagem inspiradora, com texto e autoria destacados.

# Arquivo: palestras.module.css

<img width="791" height="506" alt="image" src="https://github.com/user-attachments/assets/b39c08ed-7e45-460e-b946-ec47c7e8eac3" />
<img width="790" height="422" alt="image" src="https://github.com/user-attachments/assets/0262a424-a33c-4e1b-8e1a-0806a6a9a1a5" />
<img width="789" height="331" alt="image" src="https://github.com/user-attachments/assets/33e8ea00-9534-4fda-b09f-bf5c30eb5159" />
<img width="786" height="404" alt="image" src="https://github.com/user-attachments/assets/c5ec95a5-0eef-454e-869e-3cc3de4b9a6f" />
<img width="795" height="413" alt="image" src="https://github.com/user-attachments/assets/509344ff-2e51-4c7c-a8ba-959067b6fed0" />
<img width="780" height="304" alt="image" src="https://github.com/user-attachments/assets/895235a1-6dd2-44cf-89ee-26ceb50ee82c" />

A classe .pagina define o fundo rosa claro (#ffe8f0), aplica espaçamento inferior e define uma fonte padrão legível. A .banner cria o cabeçalho da página com fundo rosa mais intenso, texto centralizado em branco e estilo em caixa alta, além de sombra suave que dá destaque visual. A .conteudo centraliza e organiza o texto principal, enquanto .titulo e .descricao formatam o nome e a explicação da palestra com tons rosados e espaçamento confortável para leitura.

A .videoArea posiciona verticalmente o botão e a miniatura do vídeo, com espaçamento entre eles. O .watchButton é estilizado com um degradê rosa, bordas arredondadas, sombra e leve animação ao passar o mouse. A .thumbnail (imagem do vídeo) tem cantos arredondados, sombra e redimensionamento proporcional. A .Section cria um bloco para a mensagem inspiradora, com fundo suave, bordas arredondadas e sombra leve, destacando o texto (.Texto) em itálico e o autor (.Autor) em cor mais intensa.

Por fim, a media query ajusta tamanhos e espaçamentos para telas menores, garantindo boa legibilidade em dispositivos móveis.

# Aprendizados

Trazer o site para o Next.js trouxe vários aprendizados sobre organização, desempenho e modernização. 

A estrutura de pastas e rotas dinâmicas tornou o desenvolvimento mais intuitivo, e o uso de componentes reutilizáveis deixou o código mais limpo e fácil de manter. Também foi possível entender melhor como a renderização no servidor e a geração estática melhoram o carregamento, tornando o site mais rápido e leve. Os CSS modules ajudaram a manter o estilo organizado e sem conflitos, e o uso do componente Image otimizou as imagens de forma automática.

No fim, migrar para o Next.js foi um passo para um site mais moderno, eficiente e agradável de navegar.
