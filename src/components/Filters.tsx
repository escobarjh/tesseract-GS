import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
interface FiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedArea: string;
  onAreaChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
  selectedTech: string;
  onTechChange: (value: string) => void;
  onClearFilters: () => void;
  areas: string[];
  cities: string[];
  technologies: string[];
}

export function Filters({
  searchTerm,
  onSearchChange,
  selectedArea,
  onAreaChange,
  selectedCity,
  onCityChange,
  selectedTech,
  onTechChange,
  onClearFilters,
  areas,
  cities,
  technologies,
}: FiltersProps) {
  const hasActiveFilters = searchTerm || selectedArea || selectedCity || selectedTech;

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-secondary" />
        <h2 className="text-lg font-semibold">Filtros de Busca</h2>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nome ou cargo..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Select value={selectedArea} onValueChange={onAreaChange}>
          <SelectTrigger>
            <SelectValue placeholder="Área" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as áreas</SelectItem>
            {areas.map((area) => (
              <SelectItem key={area} value={area}>
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCity} onValueChange={onCityChange}>
          <SelectTrigger>
            <SelectValue placeholder="Cidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as cidades</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedTech} onValueChange={onTechChange}>
          <SelectTrigger>
            <SelectValue placeholder="Tecnologia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as tecnologias</SelectItem>
            {technologies.slice(0, 50).map((tech) => (
              <SelectItem key={tech} value={tech}>
                {tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          onClick={onClearFilters}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Limpar Filtros
        </Button>
      )}
    </div>
  );
}
