import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
interface ProfileCardProps {
  nome: string;
  foto: string;
  cargo: string;
  area: string;
  habilidadesTecnicas: string[];
  onClick: () => void;
}

export function ProfileCard({ nome, foto, cargo, area, habilidadesTecnicas, onClick }: ProfileCardProps) {
  const areasPrincipais = habilidadesTecnicas.slice(0, 3);
  const multidisciplinaridade = Math.min(habilidadesTecnicas.length * 10, 100);

  return (
    <Card 
      className="glass-card glass-card-hover cursor-pointer p-6 animate-float group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <img
            src={foto}
            alt={nome}
            className="w-24 h-24 rounded-full border-2 border-primary/50 group-hover:border-secondary transition-colors"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold">
            {multidisciplinaridade}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg">{nome}</h3>
          <Badge variant="secondary" className="animate-glow">
            {area}
          </Badge>
          <p className="text-sm text-muted-foreground">{cargo}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {areasPrincipais.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="w-full mt-2">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Multidisciplinaridade</span>
            <span>{multidisciplinaridade}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full gradient-primary transition-all duration-500"
              style={{ width: `${multidisciplinaridade}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
