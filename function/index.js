const path = require('path');
const fn = require('./function');
const caminho = path.join(__dirname,'..','legendas', 'legend')

const Mesclarconteudo = conteudos=>conteudos.join('\n')
const separarPorLinhas = separarArquivos=>separarArquivos.split('\n')


fn.lerDiretorio(caminho).then(
arquivos=>fn.elementosTerminados(
arquivos,'.srt'))
.then(arquivosSrt=>fn.lerArquivos(arquivosSrt))
.then(Mesclarconteudo)
.then(separarPorLinhas)
.then(fn.removerVazio)
.then(fn.removerNumeros)
.then(fn.removerTodosSimbolos)
.then(console.log)