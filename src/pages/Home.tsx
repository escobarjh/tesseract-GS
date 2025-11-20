import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { ProfileCard } from '@/components/ProfileCard';
import { ProfileModal } from '@/components/ProfileModal';
import { Filters } from '@/components/Filters';
import profissionaisData from '@/data/profissionais.json';

interface Profissional {
  id: number;
  nome: string;
  foto: string;
  cargo: string;
  resumo: string;
  localizacao: string;
  area: string;
  habilidadesTecnicas: string[];
  softSkills: string[];
  experiencias: string[];
  formacao: string;
  projetos: Array<{ nome: string; link: string }>;
  certificacoes: string[];
  idiomas: string[];
  areaInteresses: string[];
}

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profissional | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  const profissionais = profissionaisData as Profissional[];

  const areas = useMemo(
    () => Array.from(new Set(profissionais.map((p) => p.area))).sort(),
    []
  );

  const cities = useMemo(
    () => Array.from(new Set(profissionais.map((p) => p.localizacao))).sort(),
    []
  );

  const technologies = useMemo(
    () => Array.from(new Set(profissionais.flatMap((p) => p.habilidadesTecnicas))).sort(),
    []
  );

  const filteredProfissionais = useMemo(() => {
    return profissionais.filter((profissional) => {
      const matchesSearch =
        searchTerm === '' ||
        profissional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profissional.cargo.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesArea = selectedArea === 'all' || profissional.area === selectedArea;

      const matchesCity = selectedCity === 'all' || profissional.localizacao === selectedCity;

      const matchesTech =
        selectedTech === 'all' ||
        profissional.habilidadesTecnicas.some((tech) => tech === selectedTech);

      return matchesSearch && matchesArea && matchesCity && matchesTech;
    });
  }, [profissionais, searchTerm, selectedArea, selectedCity, selectedTech]);

  const handleCardClick = (profissional: Profissional) => {
    setSelectedProfile(profissional);
    setModalOpen(true);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedArea('all');
    setSelectedCity('all');
    setSelectedTech('all');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-5xl font-bold neon-glow-purple">Rede de Talentos</h1>
          <p className="text-xl text-muted-foreground">
            O talento humano não é linear, é multidimensional
          </p>
        </div>

        <div className="mb-8">
          <Filters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedArea={selectedArea}
            onAreaChange={setSelectedArea}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            selectedTech={selectedTech}
            onTechChange={setSelectedTech}
            onClearFilters={handleClearFilters}
            areas={areas}
            cities={cities}
            technologies={technologies}
          />
        </div>

        <div className="mb-4 text-center text-muted-foreground">
          {filteredProfissionais.length} {filteredProfissionais.length === 1 ? 'profissional encontrado' : 'profissionais encontrados'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfissionais.map((profissional) => (
            <ProfileCard
              key={profissional.id}
              nome={profissional.nome}
              foto={profissional.foto}
              cargo={profissional.cargo}
              area={profissional.area}
              habilidadesTecnicas={profissional.habilidadesTecnicas}
              onClick={() => handleCardClick(profissional)}
            />
          ))}
        </div>

        {filteredProfissionais.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum profissional encontrado com esses filtros
            </p>
          </div>
        )}
      </main>

      <ProfileModal
        profissional={selectedProfile}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}