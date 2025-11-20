import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, MapPin, Award, Briefcase, GraduationCap, Languages, Target, TrendingUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
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

interface ProfileModalProps {
  profissional: Profissional | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfileModal({ profissional, open, onOpenChange }: ProfileModalProps) {
  if (!profissional) return null;

  const trajetoriasPossiveis = [
    `Chief ${profissional.area} Officer`,
    `Fundador de Startup ${profissional.area}`,
    `Consultor Global em ${profissional.area}`,
    `Pesquisador Sênior ${profissional.area}`,
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] glass-card">
        <DialogHeader>
          <div className="flex items-start gap-6">
            <img
              src={profissional.foto}
              alt={profissional.nome}
              className="w-32 h-32 rounded-full border-4 border-primary/50"
            />
            <div className="flex-1">
              <DialogTitle className="text-3xl mb-2">{profissional.nome}</DialogTitle>
              <p className="text-xl text-primary mb-2">{profissional.cargo}</p>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin className="w-4 h-4" />
                <span>{profissional.localizacao}</span>
              </div>
              <Badge className="animate-glow">{profissional.area}</Badge>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground">{profissional.resumo}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary" />
                Habilidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {profissional.habilidadesTecnicas.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profissional.softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-secondary" />
                Experiências
              </h3>
              <ul className="space-y-2">
                {profissional.experiencias.map((exp, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {exp}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Formação
              </h3>
              <p className="text-sm text-muted-foreground">{profissional.formacao}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-secondary" />
                Projetos
              </h3>
              <div className="space-y-2">
                {profissional.projetos.map((projeto, index) => (
                  <a
                    key={index}
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {projeto.nome}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certificações
              </h3>
              <div className="flex flex-wrap gap-2">
                {profissional.certificacoes.map((cert, index) => (
                  <Badge key={index} variant="outline">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Languages className="w-5 h-5 text-secondary" />
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-2">
                {profissional.idiomas.map((idioma, index) => (
                  <Badge key={index} variant="secondary">
                    {idioma}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Áreas de Interesse
              </h3>
              <div className="flex flex-wrap gap-2">
                {profissional.areaInteresses.map((interesse, index) => (
                  <Badge key={index} className="gradient-primary">
                    {interesse}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                Trajetórias Possíveis 2030-2040
              </h3>
              <ul className="space-y-2">
                {trajetoriasPossiveis.map((trajetoria, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                    {trajetoria}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="flex gap-3">
              <Button className="flex-1 gradient-primary">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
              <Button variant="outline" className="flex-1">
                Recomendar Profissional
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
