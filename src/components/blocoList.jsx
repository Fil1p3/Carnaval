
import blocoCard from "./blocoCard";

export default function blocoList({ blocos }) {
  if (blocos.length === 0) {
    return (
      <p className="text-zinc-500 text-center">
        Nenhum bloco encontrado com os filtros selecionados.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blocos.map((bloco, index) => (
        <CartaoDeBloco key={index} {...bloco} />
      ))}
    </div>
  );
}
