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
    capa: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY436_FMwebp_QL65_.jpg",
    estrelas: 5,
    resumo: "O livro que me ensinou que a inquietude do coração é o próprio caminho de volta para Deus.",
    minhaExperiencia: "\"Fizeste-nos para Ti, e o nosso coração está inquieto enquanto não repousa em Ti.\" Essa frase mudou para sempre como eu entendia a saudade espiritual. Não é fraqueza — é vocação.",
    cupom: "NADIA10",
    editora: "Editora Paulus",
    linkCompra: "https://www.amazon.com.br"
    // Troca pelo link real do livro na editora ou Amazon
  },

  {
    // ── LIVRO 2 ──────────────────────────────────────────────
    categoria: "espiritualidade",
    titulo: "A Prática da Presença de Deus",
    autor: "Irmão Lourenço",
    capa: "https://m.media-amazon.com/images/I/61RCCtnhSQL._AC_UY436_FMwebp_QL65_.jpg",
    estrelas: 5,
    resumo: "Pequeníssimo e profundíssimo. Aprendi que a oração não precisa de condições perfeitas.",
    minhaExperiencia: "Li num período em que sentia que não sabia mais orar. O Irmão Lourenço me devolveu a simplicidade — Deus na cozinha, no trabalho, no silêncio do dia a dia.",
    cupom: "NADIA10",
    editora: "Editora Paulus",
    linkCompra: "https://www.amazon.com.br"
  },

  {
    // ── LIVRO 3 ──────────────────────────────────────────────
    categoria: "literatura",
    titulo: "Notre-Dame de Paris",
    autor: "Victor Hugo",
    capa: "https://m.media-amazon.com/images/I/81Vf7SzFBzL._AC_UY436_FMwebp_QL65_.jpg",
    estrelas: 5,
    resumo: "Frollo me ensinou o que acontece quando o sagrado se torna prisão em vez de liberdade.",
    minhaExperiencia: "Não consigo ler Frollo sem pensar na diferença entre religiosidade e encontro. Ele sabia tudo de Deus — e não conhecia nada do amor. A literatura como espelho da alma.",
    cupom: "NADIA15",
    editora: "Editora Martin Claret",
    linkCompra: "https://www.amazon.com.br"
  },

  {
    // ── LIVRO 4 ──────────────────────────────────────────────
    categoria: "literatura",
    titulo: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
    capa: "https://m.media-amazon.com/images/I/81RHpq-KQTL._AC_UY436_FMwebp_QL65_.jpg",
    estrelas: 5,
    resumo: "Danglars e Fernand — dois homens destruídos não pelo inimigo, mas pela própria escolha.",
    minhaExperiencia: "A vingança como projeto de vida. Dumas mostra com maestria que quem carrega ódio não está verdadeiramente vivo. É um livro sobre liberdade interior, mais do que aventura.",
    cupom: "NADIA15",
    editora: "Editora Martin Claret",
    linkCompra: "https://www.amazon.com.br"
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
