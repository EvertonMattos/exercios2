const path = require("path");
const fs = require("fs");
 
function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho).map(arquivo => {
        return path.join(caminho, arquivo);
      });
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}
 
function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}
 
function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}
 
function elementosTerminados(array, padrao) {
  return array.filter(el => el.endsWith(padrao));
}

function removerVazio (array){
  return array.filter(el=>  el.trim())

}

function removerNumeros (array){
  return array.filter( element=> isNaN(parseInt(element)) )
}
function removerTodosSimbolos(lista) {
  const symbolsRegex = new RegExp(/[^a-zA-Z \']/,'g') 
  // removendo simbolos execeto o '
  const htmlRegex = new RegExp(/<[^>]*>?/, 'g')
  // removendo as tags
  return lista.map(linha => linha.replace(htmlRegex, '').replace(symbolsRegex, '').trim())
}
module.exports = {
  lerDiretorio,
  lerArquivos,
  elementosTerminados,
  removerVazio,
  removerNumeros,
  removerTodosSimbolos

};