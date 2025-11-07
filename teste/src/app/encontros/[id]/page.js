export default function ImagemDetalhe({ params }) {
  const { id } = params;

  const imagens = {
    img1: { titulo: "WomanTech no WIT 2025", descricao: "Descrição da primeira imagem." },
    img2: { titulo: "Imagem 2", descricao: "Descrição da segunda imagem." },
    img3: { titulo: "Imagem 3", descricao: "Descrição da terceira imagem." },
    img4: { titulo: "Imagem 4", descricao: "Descrição da quarta imagem." },
  };

  const imagem = imagens[id];

  if (!imagem) {
    return <h1 className="imagem-erro">Imagem não encontrada 😢</h1>;
  }

  return (
    <main className="imagem-detalhe-container">
      <h1 className="imagem-detalhe-titulo">{imagem.titulo}</h1>
      <p className="imagem-detalhe-descricao">{imagem.descricao}</p>
      <img
        src={`/images/${id}.jpg`}
        alt={imagem.titulo}
        className="imagem-detalhe-img"
      />
    </main>
  );
}

