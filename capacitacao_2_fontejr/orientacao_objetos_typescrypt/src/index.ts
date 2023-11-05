import { Usuario,Sistema,BancoDeDados} from './models/Bancaria'

const sistema = new Sistema();

const usuario1 = new Usuario('Pedro', '123456');
const usuario2 = new Usuario('João', 'password');

sistema.bancoDeDados.SalvarUsuario(usuario1);
sistema.bancoDeDados.SalvarUsuario(usuario2);

const nomeUsuario = 'Ana';
const senhaUsuarioCorreta = '123456';
const senhaUsuarioIncorreta = 'senhaIncorreta';

if (sistema.Login(nomeUsuario, senhaUsuarioCorreta)) {
  console.log(`Usuário ${nomeUsuario} autenticado com sucesso.`);
} else {
  console.log(`Falha na autenticação do usuário ${nomeUsuario}.`);
}


const nomeAntigo = 'Ana';
const novoNome = 'newAna';
const novaSenha = 'newPassword';
sistema.bancoDeDados.EditarUsuario(nomeAntigo, novoNome, novaSenha);

const usuarioParaDeletar = 'João';
sistema.bancoDeDados.DeletarUsuario(usuarioParaDeletar);

console.log('Lista de Usuários:');
console.log(sistema.bancoDeDados.ObterUsuarios());