export class Usuario {
  constructor(public Nome: string, public Senha: string) {}

  EditarUsuario(novoNome: string, novaSenha: string) {
    this.Nome = novoNome;
    this.Senha = novaSenha;
  }
}

export class BancoDeDados {
  private usuarios: Usuario[] = [];

  ObterUsuarios(): Usuario[] {
    return this.usuarios;
  }

  SalvarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  EditarUsuario(nomeAntigo: string, novoNome: string, novaSenha: string) {
    const usuario = this.usuarios.find((u) => u.Nome === nomeAntigo);
    if (usuario) {
      usuario.EditarUsuario(novoNome, novaSenha);
    }
  }

  DeletarUsuario(nome: string) {
    const index = this.usuarios.findIndex((u) => u.Nome === nome);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }
}

export class Sistema {
  public bancoDeDados: BancoDeDados;

  constructor() {
    this.bancoDeDados = new BancoDeDados();
  }

  Login(nome: string, senha: string): boolean {
    const usuario = this.bancoDeDados.ObterUsuarios().find(
      (u) => u.Nome === nome && u.Senha === senha
    );
    return !!usuario;
  }
}