import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { UserPlus } from 'lucide-react';
import { toast } from 'sonner';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmaSenha) {
      toast.error('Preencha todos os campos');
      return;
    }

    if (senha !== confirmaSenha) {
      toast.error('As senhas não coincidem');
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Erro ao registrar");
        return;
      }

      toast.success("Conta criada com sucesso!");
      navigate("/");

    } catch (error) {
      toast.error("Erro ao conectar ao servidor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-tesseract-gray" />

      <Card className="glass-card w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold neon-glow-purple mb-2">TESSERACT</div>
          <h1 className="text-2xl font-semibold">Junte-se a nós</h1>
          <p className="text-muted-foreground">Crie sua conta na rede multidimensional</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="glass-card" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="glass-card" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="glass-card" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmaSenha">Confirmar Senha</Label>
            <Input id="confirmaSenha" type="password" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} className="glass-card" />
          </div>

          <Button type="submit" className="w-full gradient-primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Criar Conta
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Já tem uma conta? </span>
          <Link to="/" className="text-secondary hover:text-primary transition-colors font-medium">
            Fazer login
          </Link>
        </div>
      </Card>
    </div>
  );
}