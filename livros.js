// ═══════════════════════════════════════════════════════════════
//  MINHA ESTANTE — arquivo de livros
//  Irmã Nádia
// ═══════════════════════════════════════════════════════════════
//
//  Como adicionar um novo livro:
//  1. Copia um bloco existente (de { até },)
//  2. Cola antes do ]; no final
//  3. Preenche os campos
//  4. Salva e faz upload no GitHub
//
//  Como encontrar o link da capa:
//  - Vai na Amazon ou na página da editora
//  - Clica com o botão direito na imagem da capa
//  - Escolhe "Copiar endereço da imagem"
//  - Cola no campo "capa" abaixo
//
//  Categorias disponíveis: "espiritualidade" ou "literatura"
//  (para adicionar uma nova categoria, me chama!)
//
// ═══════════════════════════════════════════════════════════════

const LIVROS = [

  {
    categoria: "espiritualidade",
    titulo: "Confissões",
    autor: "Santo Agostinho",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/35316-525x791.jpg?v=1755521131",
    estrelas: 5,
    resumo: "O livro que me fez ser apaixonada por Santo Agostinho.",
    minhaExperiencia: "Eu sou suspeita de falar de Santo Agostinho, sempre que leio Confissões fico mais encantada por tudo o que Deus pode fazer em uma alma. Agostinho é um homem encantador com um coração apaixonante.",
    cupom: "NADIA5",
    editora: "Editora Ecclesiae",
    linkCompra: "https://ecclesiae.com.br/confissoes-ecclesiae?search=confiss%C3%B5es"
  },

  {
    categoria: "espiritualidade",
    titulo: "Da paz interior ou O caminho do paraíso",
    autor: "Lourenço Scupoli",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/4636-525x791.jpg?v=1750275491",
    estrelas: 5,
    resumo: "Pequeno, profundo e necessário.",
    minhaExperiencia: "Esse livro pra mim foi ao mesmo tempo um consolo e uma exortação. O caminho para encontrar a paz é um abandono profundo à vontade de Deus.",
    cupom: "NADIA5",
    editora: "Edições Livres",
    linkCompra: "https://ecclesiae.com.br/da-paz-interior"
  },

  {
    categoria: "literatura",
    titulo: "O corcunda de Notre Dame",
    autor: "Victor Hugo",
    capa: "https://m.media-amazon.com/images/I/813NxxXN8XS._SY466_.jpg",
    estrelas: 5,
    resumo: "Frollo me ensinou o que acontece quando o sagrado se torna prisão em vez de liberdade.",
    minhaExperiencia: "Eu vivi uma crise profunda lendo esse livro, porque ele me fez pensar muito sobre o que nós somos capazes de fazer quando estamos sem Deus, quando estamos desordenados interiormente. Foi lendo esse livro que surgiu no meu coração o desejo de unir a literatura com a vida espiritual para estudar um pouco sobre as virtudes, os mandamentos, as nossas fraquezas...",
    cupom: "",
    editora: "Penguin",
    linkCompra: "https://link.amazon/B09HSZShP"
  },

  {
    categoria: "literatura",
    titulo: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
    capa: "https://m.media-amazon.com/images/I/71lrH3ZLcaL._SY425_.jpg",
    estrelas: 5,
    resumo: "Favorito da vida.",
    minhaExperiencia: "Como eu amei esse livro. Abracei a vida de Dantès! Um livro que fala sobre recomeço, vingança, consciência, porque afinal de contas, somos muito capazes de enterrar nossos erros e enganar a nós mesmos. Mas a Deus que tudo vê não o enganamos jamais.",
    cupom: "",
    editora: "Editora Martin Claret",
    linkCompra: "https://link.amazon/B060fESQF"
  },

  {
    categoria: "literatura",
    titulo: "A morte de Ivan Ilitch",
    autor: "Liev Tolstói",
    capa: "https://m.media-amazon.com/images/I/61zgVBVoqqL._SY466_.jpg",
    estrelas: 5,
    resumo: "Mexe muito com a gente.",
    minhaExperiencia: "Eu fiz a loucura de ler esse livro dia primeiro de janeiro e começar o ano completamente mexida com ele. O livro conta a história de Ivan e sua vida tão medíocre! Ivan se contentou com as coisas rasas apenas por medo de enfrentar os desafios e o desconforto de mudar e ser melhor.",
    cupom: "",
    editora: "Editora 34",
    linkCompra: "https://link.amazon/B047ywiJC"
  },

  {
    categoria: "literatura",
    titulo: "Metamorfose",
    autor: "Franz Kafka",
    capa: "https://m.media-amazon.com/images/I/71QLwli7GUL._SY466_.jpg",
    estrelas: 4,
    resumo: "Um grande clássico da literatura.",
    minhaExperiencia: "Eu vivi um mix de sentimentos enquanto lia esse livro. Já tinha ouvido falar muito dele, então cheguei com muitas expectativas. O livro nos leva a um grande questionamento sobre ser amado versus ser útil. A frieza dos familiares de Gregor foi um dos pontos que mais me marcou.",
    cupom: "",
    editora: "Companhia das Letras",
    linkCompra: "https://link.amazon/B00comv29"
  },

  {
    categoria: "espiritualidade",
    titulo: "Todos os caminhos levam a Roma",
    autor: "Kimberly Hahn, Scott Hahn",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/22530-525x791.jpg?v=1750275998",
    estrelas: 5,
    resumo: "Um testemunho incrível.",
    minhaExperiencia: "Acho que todo mundo já ouviu falar desse livro um dia, né? Eu imaginava algo totalmente diferente do que ele é — imaginava algo que tratasse sobre conceitos, dogmas etc. e fui completamente surpreendida pelo testemunho lindo desse casal em sua conversão ao catolicismo. Eu que sou católica de berço, fiquei apaixonada e um pouco pensativa sobre como eu me acostumei com tantas belezas na nossa Igreja.",
    cupom: "NADIA5",
    editora: "Ecclesiae",
    linkCompra: "https://ecclesiae.com.br/todos-os-caminhos-levam-a-roma-ecclesiae"
  },

  {
    categoria: "espiritualidade",
    titulo: "Filoteia",
    autor: "São Francisco de Sales",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/13799-525x791.jpg?v=1750275747",
    estrelas: 5,
    resumo: "Praticamente um compêndio sobre oração e a vida devota.",
    minhaExperiencia: "Eu sou suspeita de falar de São Francisco de Sales, os livros dele ao meu ver são incríveis demais. Indicaria esse livro para quem quer aprender mais sobre a vida interior, seja sobre oração, meditação, devoção... Super necessário.",
    cupom: "NADIA5",
    editora: "Ecclesiae",
    linkCompra: "https://ecclesiae.com.br/filoteia?search=filoteia"
  },

  {
    categoria: "espiritualidade",
    titulo: "Glórias de Maria",
    autor: "Santo Afonso Maria de Ligório",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/23629-525x791.jpg?v=1750276044",
    estrelas: 5,
    resumo: "Um dos livros mais lindos sobre Nossa Senhora.",
    minhaExperiencia: "Eu também sou suspeita de falar de Santo Afonso, qualquer livro dele é maravilhoso! Esse em particular tem meu coração. Diria que é impossível lê-lo sem crescer em amor pela nossa Mãe Maria Santíssima.",
    cupom: "NADIA5",
    editora: "Ecclesiae",
    linkCompra: "https://ecclesiae.com.br/glorias-de-maria-ecc?search=santo%20afonso%20maria%20de%20lig%C3%B3rio"
  },

  {
    categoria: "espiritualidade",
    titulo: "O nome de Deus é misericórdia",
    autor: "Papa Francisco",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/4372-525x791.jpg?v=1750275488",
    estrelas: 5,
    resumo: "Um grande aconchego na alma.",
    minhaExperiencia: "O tanto que eu amei esse livro não está escrito no papel. É um grande lembrete sobre a misericórdia de Deus e seu amor incondicional. Se você está vivendo um momento em que se esqueceu do quanto é amado, te recomendo fortemente esse livro.",
    cupom: "NADIA5",
    editora: "Planeta",
    linkCompra: "https://ecclesiae.com.br/o-nome-de-deus-e-misericordia?search=o%20nome%20de%20Deus"
  },

  {
    categoria: "espiritualidade",
    titulo: "Coleção Anna Catarina Emmerick",
    autor: "Anna Catarina Emmerick",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/37630-525x791.jpg?v=1779794674",
    estrelas: 5,
    resumo: "Relatos de visões sobre a vida de Jesus e de Nossa Senhora.",
    minhaExperiencia: "Anna Catarina Emmerick é uma beata que tinha visões sobre a vida de Jesus. O seu livro sobre a Paixão serviu de base para o filme da Paixão de Cristo. O livro ajuda muito a alimentar a imaginação, compreender algumas coisas do tempo de Jesus e nos ajuda a crescer em amor.",
    cupom: "NADIA5",
    editora: "Ecclesiae",
    linkCompra: "https://ecclesiae.com.br/colecao-anna-catarina-emmerich"
  },

  {
    categoria: "espiritualidade",
    titulo: "In sinu Jesu - Quando o coração fala ao coração",
    autor: "Anônimo",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/8943-525x791.jpg?v=1752678606",
    estrelas: 5,
    resumo: "Um livro que pode ser um auxílio para rezar.",
    minhaExperiencia: "O livro traz colóquios de Jesus com um sacerdote. Na minha opinião, ele pode ajudar muito a rezar, e é uma ótima sugestão para dar de presente para sacerdotes.",
    cupom: "NADIA5",
    editora: "Ecclesiae",
    linkCompra: "https://ecclesiae.com.br/in-sinu-jesu"
  },

  {
    categoria: "literatura",
    titulo: "Os miseráveis",
    autor: "Victor Hugo",
    capa: "https://m.media-amazon.com/images/I/71L28YvPobL._SY425_.jpg",
    estrelas: 5,
    resumo: "Outro favorito da vida.",
    minhaExperiencia: "O livro conta a história de Jean Valjean, um homem que foi condenado e preso por roubar um pão. A vida dele muda completamente com a presença do bispo Muriel, que a meu ver é um dos personagens mais incríveis do livro, embora apareça tão pouco. O livro é lindo, vale muito a pena a leitura.",
    cupom: "",
    editora: "Martin Claret",
    linkCompra: "https://link.amazon/B08yhjqMf"
  },

  {
    categoria: "literatura",
    titulo: "Jane Eyre",
    autor: "Charlotte Brontë",
    capa: "https://m.media-amazon.com/images/I/613Wah-Tp2S._SY466_.jpg",
    estrelas: 5,
    resumo: "Conta a história de Jane, uma garota órfã.",
    minhaExperiencia: "O que me conquistou nesse livro foi a retidão da consciência de Jane Eyre. Ela sabia o que era correto, justo e moral e escolheu ser assim a todo custo.",
    cupom: "",
    editora: "Principis",
    linkCompra: "https://link.amazon/B0frEKiaQ"
  },

    {
    categoria: "espiritualidade",
    titulo: "Breviário da Confiança",
    autor: "Ascânio Brandão",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/35743-525x791.jpg?v=1756746370",
    estrelas: 5,
    resumo: "Meditações diárias para rezar",
    minhaExperiencia: "Eu ganhei esse livro de presente de uma amiga e não demorou muito pra ele se tornar um dos meus livros preferidos. as meditações diárias escritas por Ascânio Brandão, são um grande suporte pra oração.",
    cupom: "NADIA5",
    editora: "Ecclasiae",
    linkCompra: "https://ecclesiae.com.br/breviario-da-confianca?search=santa%20teresinha"
  },

   {
    categoria: "espiritualidade",
    titulo: "Obras Completas de Santa Teresinha do Menino Jesus",
    autor: "Teresa de Lisieux",
    capa: "https://m.media-amazon.com/images/I/81LiTY08OPL._SY466_.jpg",
    estrelas: 5,
    resumo: "Necessário",
    minhaExperiencia: "Indico logo de cara as obras completas de Teresinha porque tenho um apreço enorme pelas cartas dela. Por meio delas conhecemos uma Teresinha tão próxima, tão humana, brincalhona, gentil e santa. Além das cartas, nas obras completas temos: História de uma alma, poesias, recreações, orações e últimos colóquios.",
    cupom: "",
    editora: "Paulus",
    linkCompra: "https://link.amazon/B091EQLZ7"
  },

    {
    categoria: "espiritualidade",
    titulo: "Uma noviça de Santa Teresinha",
    autor: "Irmã Maria da Trindade",
    capa: "https://m.media-amazon.com/images/I/61xcm32-YUL._SY466_.jpg",
    estrelas: 5,
    resumo: "Escrito por uma irmã que foi formanda de Teresinha",
    minhaExperiencia: "Lembro até hoje de quando estava lendo esse livro e li o relato dessa querida irmã que foi uma noviça de Teresinha. Ela contando a sua experiência diante da morte de nossa santinha despedaçou meu coração, chorei como uma criança. Eu amei esse livro porque é a visão de uma outra pessoa diante da vida de Teresinha, ela conta os conselhos que recebeu, as exortações, os mimos porque Teresinha era muito querida e caridosa.",
    cupom: "",
    editora: "Cultor de Livros",
    linkCompra: "https://link.amazon/B0gkyVEcc"
  },
  // ── PARA ADICIONAR UM NOVO LIVRO, COLA AQUI ──
  // Exemplo:
  //
  // ,{
  //   categoria: "espiritualidade",
  //   titulo: "Nome do Livro",
  //   autor: "Nome do Autor",
  //   capa: "https://link-da-imagem-da-capa.jpg",
  //   estrelas: 5,
  //   resumo: "Uma frase curta que aparece no card.",
  //   minhaExperiencia: "Seu texto pessoal aqui.",
  //   cupom: "NADIAXXX",
  //   editora: "Nome da Editora",
  //   linkCompra: "https://link-para-comprar.com.br"
  // }

];
