
import imagemHero from "/assets/hero.png";

export default function Busca({
  termoDeBusca,
  aoMudarBusca,
  cidadeSelecionada,
  aoMudarCidade,
}) {
  return (
    <section className="w-full bg-[#F9F6FE] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#121214] mb-4">
            Encontre os melhores <span className="text-[#6246EA]">blocos</span>{" "}
            de carnaval de 2025
          </h1>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <input
              type="text"
              placeholder="Buscar por nome"
              value={termoDeBusca}
              onChange={(e) => aoMudarBusca(e.target.value)}
              className="w-full md:w-64 px-4 py-3 rounded-lg border border-zinc-300 bg-white shadow-sm"
            />

            <select
              value={cidadeSelecionada}
              onChange={(e) => aoMudarCidade(e.target.value)}
              className="w-full md:w-64 px-4 py-3 rounded-lg border border-zinc-300 bg-white shadow-sm"
            >
              <option value="">Todas as cidades</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="Salvador">Salvador</option>
            </select>

            <button className="bg-[#6246EA] text-white px-6 py-3 rounded-lg shadow hover:bg-[#523ccc] transition">
              Buscar agora
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={imagemHero}
            alt="Imagem de carnaval"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
