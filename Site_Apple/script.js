const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

 const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
     nome: 'Azul-Inverno',
     pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const RosaClaro = {
      nome: 'Rosa-Claro',
      pasta: 'imagens-rosa-claro'
};


const OpcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, RosaClaro]
const OpcoesTamanho = ['41 mm', '45 mm'];

let ImagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const IdOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    ImagemSelecionada = IdOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + OpcoesCores[corSelecionada].pasta + '/imagem-' + ImagemSelecionada + '.jpeg';

}

function trocarTamanho() {
    const IdOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = IdOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + OpcoesCores[corSelecionada].nome + " para caixa de " + OpcoesTamanho[tamanhoSelecionado];
    if (OpcoesTamanho[tamanhoSelecionado] === '41 mm') {
    imagemVisualizacao.classList.add('caixa-pequena');
 } else {
    imagemVisualizacao.classList.remove('caixa-pequena');
 }
}

function trocarCor() {
     const IdOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
     corSelecionada = IdOpcaoSelecionada.charAt(0)
     tituloProduto.innerText = "Pulseira loop esportiva " + OpcoesCores[corSelecionada].nome + " para caixa de " + OpcoesTamanho[tamanhoSelecionado];
     nomeCor.innerText = 'Cor - ' + OpcoesCores[corSelecionada].nome;
     miniaturaImagem0.src = './imagens/opcoes-cores/' + OpcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
     miniaturaImagem1.src = './imagens/opcoes-cores/' + OpcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
     miniaturaImagem2.src = './imagens/opcoes-cores/' + OpcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
     imagemVisualizacao.src = './imagens/opcoes-cores/' + OpcoesCores[corSelecionada].pasta + '/imagem-' + ImagemSelecionada + '.jpeg';
}
