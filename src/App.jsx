// src/App.jsx
import { useEffect, useState } from "react";
import Busca from "./components/Busca.jsx";
import ListaDeBlocos from "./components/ListaDeBlocos.jsx";
import blocos from "./data/blocos.json";

export default function App() {
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [blocosFiltrados, setBlocosFiltrados] = useState([]);

  useEffect(() => {
    const filtrados = blocos.filter((bloco) => {
      const nomeCorresponde = bloco.nome
        .toLowerCase()
        .includes(termoDeBusca.toLowerCase());

      const cidadeCorresponde = cidadeSelecionada
        ? bloco.cidade.toLowerCase().includes(cidadeSelecionada.toLowerCase())
        : true;

      return nomeCorresponde && cidadeCorresponde;
    });

    setBlocosFiltrados(filtrados);
  }, [termoDeBusca, cidadeSelecionada]);

  return (
    <main className="bg-[#F9F6FE] min-h-screen font-sans">
      <Busca
        termoDeBusca={termoDeBusca}
        aoMudarBusca={setTermoDeBusca}
        cidadeSelecionada={cidadeSelecionada}
        aoMudarCidade={setCidadeSelecionada}
      />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#121214] mb-6">
          Blocos recomendados
        </h2>
        <ListaDeBlocos blocos={blocosFiltrados} />
      </section>
    </main>
  );
}
