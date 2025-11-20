import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Layers, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Layers,
      title: 'Multidimensional',
      description: 'Reconhecemos que o talento humano transcende categorias lineares e abrange múltiplas dimensões.',
    },
    {
      icon: Users,
      title: 'Rede Conectada',
      description: 'Conectamos profissionais emergentes com oportunidades que valorizam suas habilidades únicas.',
    },
    {
      icon: TrendingUp,
      title: 'Profissões do Futuro',
      description: 'Mapeamos trajetórias possíveis para 2030-2040 em áreas inovadoras e disruptivas.',
    },
    {
      icon: Sparkles,
      title: 'Inventário Prático',
      description: 'Destacamos competências práticas, certificações e projetos reais que fazem a diferença.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold neon-glow-purple">Sobre o TESSERACT</h1>
            <p className="text-xl text-muted-foreground">
              Uma nova dimensão para descobrir e conectar talentos
            </p>
          </div>

          <Card className="glass-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-secondary">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O TESSERACT é uma plataforma revolucionária que reconhece a natureza multidimensional do talento humano.
              Acreditamos que as pessoas não se encaixam em categorias simples - elas são complexas, versáteis e
              constantemente em evolução.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é criar uma rede onde profissionais de áreas emergentes possam ser descobertos, conectados
              e valorizados por suas habilidades únicas e multidisciplinares. Olhamos para o futuro, mapeando
              trajetórias possíveis em profissões que ainda estão sendo definidas.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card glass-card-hover p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-gradient-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-primary">O Conceito TESSERACT</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Um tesseract é um hipercubo de quatro dimensões - uma estrutura que transcende as três dimensões
              que percebemos normalmente. Da mesma forma, os talentos que conectamos transcendem as categorias
              tradicionais de carreira.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada profissional em nossa rede é avaliado não apenas por sua área principal, mas por todas as
              suas competências técnicas, soft skills, experiências, projetos, certificações e áreas de interesse.
              Isso cria um mapa multidimensional de talento que revela conexões e oportunidades invisíveis em
              sistemas tradicionais.
            </p>
          </Card>

          <Card className="glass-card gradient-card p-8 text-center space-y-4">
            <h2 className="text-3xl font-bold">Junte-se à Revolução</h2>
            <p className="text-lg text-muted-foreground">
              O futuro do trabalho é multidimensional. Seja parte dessa transformação.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
