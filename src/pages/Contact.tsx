import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !email || !mensagem) {
      toast.error('Preencha todos os campos');
      return;
    }

    toast.success('Mensagem enviada com sucesso!');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-12 h-12 text-secondary animate-glow" />
            </div>
            <h1 className="text-5xl font-bold neon-glow-purple">Contato</h1>
            <p className="text-xl text-muted-foreground">
              Entre em contato conosco. Estamos aqui para ajudar.
            </p>
          </div>

          <Card className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="glass-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Como podemos ajudar?"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="glass-card min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full gradient-primary">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <Card className="glass-card p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Outras formas de contato</h3>
            <p className="text-muted-foreground">
              Email: contato@tesseract.com.br
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
