// ═══════════════════════════════════════════════════════════════
//  MINHA ESTANTE — arquivo de livros
//  Irmã Nádia
// ═══════════════════════════════════════════════════════════════
//
//  Como adicionar um novo livro:
//  1. Copia o bloco abaixo (de { até o },)
//  2. Cola antes do último ] 
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
    // ── LIVRO 1 ──────────────────────────────────────────────
    categoria: "espiritualidade",
    titulo: "Confissões",
    autor: "Santo Agostinho",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/35316-525x791.jpg?v=1755521131",
    estrelas: 5,
    resumo: "O livro que me fez ser apaixonada por Santo Agostinho.",
    minhaExperiencia: "\"Eu sou suspeita de falar de Santo Agostinho, sempre que leio confissões fico mais encantada por tudo o que Deus pode fazer em uma alma. Agostinho é um homem encantador com um coração apaixonante",
    cupom: "NADIA5",
    editora: "Editora Ecclasiae",
    linkCompra: "https://ecclesiae.com.br/confissoes-ecclesiae?search=confiss%C3%B5es"
    // Troca pelo link real do livro na editora ou Amazon
  },

  {
    // ── LIVRO 2 ──────────────────────────────────────────────
    categoria: "espiritualidade",
    titulo: "Da paz interior ou O caminho do paraíso",
    autor: "Lourenço Scupoli",
    capa: "https://static.cedet.com.br/produtos_imagem_principal_large/4636-525x791.jpg?v=1750275491",
    estrelas: 5,
    resumo: "Pequeno, profundo e necessário.",
    minhaExperiencia: "Esse livro pra mim foi ao mesmo tempo que um consolo, foi uma exortação. O caminho para encontrar a paz é um abandono profundo à vontade de Deus.",
    cupom: "NADIA5",
    editora: "Edições Livres",
    linkCompra: "https://ecclesiae.com.br/da-paz-interior"
  },

  {
    // ── LIVRO 3 ──────────────────────────────────────────────
    categoria: "literatura",
    titulo: "O corcunda de Notre Dame",
    autor: "Victor Hugo",
    capa: "https://m.media-amazon.com/images/I/813NxxXN8XS._SY466_.jpg",
    estrelas: 5,
    resumo: "Frollo me ensinou o que acontece quando o sagrado se torna prisão em vez de liberdade.",
    minhaExperiencia: "Eu vivi uma crise profunda lendo esse livro, porque ele me fez pensar muito sobre o que nós somos capazes de fazer quando estamos sem Deus, quando estamos desordenados interiormente. Foi lendo esse livro que surgiu no meu coração o desejo de unir a literatura com a vida espiritual pra estudar um pouco sobre as virtudes, os mandamentos, as nossas fraquezas etc....",
    cupom: "",
    editora: "Penguin",
    linkCompra: "https://link.amazon/B09HSZShP"
  },

  {
    // ── LIVRO 4 ──────────────────────────────────────────────
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
  }

  // ── PARA ADICIONAR UM NOVO LIVRO, COLA AQUI ANTES DESTE COMENTÁRIO ──
  // Exemplo:
  //
  // ,{
  //   categoria: "espiritualidade",
  //   titulo: "Nome do Livro",
  //   autor: "Nome do Autor",
  //   capa: "https://link-da-imagem-da-capa.jpg",
  //   estrelas: 5,
  //   resumo: "Uma frase curta que aparece no card.",
  //   minhaExperiencia: "Seu texto pessoal aqui, pode ser longo.",
  //   cupom: "NADIAXXX",
  //   editora: "Nome da Editora",
  //   linkCompra: "https://link-para-comprar.com.br"
  // }

];
