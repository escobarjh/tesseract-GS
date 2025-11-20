import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp } from 'lucide-react';
import { toast } from 'sonner';

export default function Recommendations() {
  const [nomeProfissional, setNomeProfissional] = useState('');
  const [emailProfissional, setEmailProfissional] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [recomendacao, setRecomendacao] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nomeProfissional || !emailProfissional || !empresa || !cargo || !recomendacao) {
      toast.error('Preencha todos os campos');
      return;
    }

    toast.success('Recomendação enviada com sucesso!');
    setNomeProfissional('');
    setEmailProfissional('');
    setEmpresa('');
    setCargo('');
    setRecomendacao('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <ThumbsUp className="w-12 h-12 text-primary animate-glow" />
            </div>
            <h1 className="text-5xl font-bold neon-glow-purple">Recomendações</h1>
            <p className="text-xl text-muted-foreground">
              Recomende um profissional talentoso para a nossa rede
            </p>
          </div>

          <Card className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nomeProfissional">Nome do Profissional</Label>
                <Input
                  id="nomeProfissional"
                  type="text"
                  placeholder="Nome completo"
                  value={nomeProfissional}
                  onChange={(e) => setNomeProfissional(e.target.value)}
                  className="glass-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailProfissional">Email do Profissional</Label>
                <Input
                  id="emailProfissional"
                  type="email"
                  placeholder="email@profissional.com"
                  value={emailProfissional}
                  onChange={(e) => setEmailProfissional(e.target.value)}
                  className="glass-card"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa Atual</Label>
                  <Input
                    id="empresa"
                    type="text"
                    placeholder="Nome da empresa"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo</Label>
                  <Input
                    id="cargo"
                    type="text"
                    placeholder="Cargo atual"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    className="glass-card"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recomendacao">Por que você recomenda este profissional?</Label>
                <Textarea
                  id="recomendacao"
                  placeholder="Descreva as habilidades, conquistas e qualidades que tornam este profissional especial..."
                  value={recomendacao}
                  onChange={(e) => setRecomendacao(e.target.value)}
                  className="glass-card min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full gradient-primary">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Enviar Recomendação
              </Button>
            </form>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-3">Como funciona?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Nossa equipe irá avaliar a recomendação</li>
              <li>• Entraremos em contato com o profissional recomendado</li>
              <li>• Se aprovado, o perfil será adicionado à rede TESSERACT</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
