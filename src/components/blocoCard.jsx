
import { MapPin } from "lucide-react";

export default function BlocoCard({ nome, cidade, imagem, descricao }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={imagem} alt={nome} className="h-48 w-full object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-[#121214]">{nome}</h3>

        <div className="flex items-center gap-2 text-sm text-zinc-600">
          <MapPin size={16} className="text-[#6246EA]" />
          <span>{cidade}</span>
        </div>

        <p className="text-sm text-zinc-500">{descricao}</p>
      </div>
    </div>
  );
}
