import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Messages() {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!destinatario || !assunto || !mensagem) {
    toast.error("Preencha todos os campos");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/messages/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destinatario, assunto, mensagem })
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Erro ao enviar mensagem");
      return;
    }

    toast.success("Mensagem enviada!");
    setDestinatario("");
    setAssunto("");
    setMensagem("");

  } catch (err) {
    toast.error("Erro ao conectar com o servidor");
  }
};


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <MessageSquare className="w-12 h-12 text-secondary animate-glow" />
            </div>
            <h1 className="text-5xl font-bold neon-glow-purple">Mensagens</h1>
            <p className="text-xl text-muted-foreground">
              Conecte-se com profissionais da rede
            </p>
          </div>

          <Card className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="destinatario">Destinatário</Label>
                <Input
                  id="destinatario"
                  type="text"
                  placeholder="Nome do profissional"
                  value={destinatario}
                  onChange={(e) => setDestinatario(e.target.value)}
                  className="glass-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="assunto">Assunto</Label>
                <Input
                  id="assunto"
                  type="text"
                  placeholder="Sobre o que você quer conversar?"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="glass-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Escreva sua mensagem..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="glass-card min-h-[200px]"
                />
              </div>

              <Button type="submit" className="w-full gradient-primary">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-3">Dicas para mensagens efetivas:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Seja claro e objetivo sobre seus interesses</li>
              <li>• Mencione projetos ou habilidades específicas que chamaram sua atenção</li>
              <li>• Explique como você pode agregar valor à conexão</li>
              <li>• Seja profissional e respeitoso</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
