//refencias do DOM - HTML

const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpDescri = document.getElementById('inpDescri');
const inpFabricante = document.getElementById('inpFabricante');
const inpQtda = document.getElementById('inpQtda');
const inpPreco = document.getElementById('inpPreco');
const inpCusto = document.getElementById('inpCusto');
const inpData = document.getElementById('inpData');

const btnCon = document.getElementById('btnCon');
const btnCad = document.getElementById('btnCad');
const btnAlt = document.getElementById('btnAlt');
const btnExc = document.getElementById('btnExc');
const btnLim = document.getElementById('btnLim');
//Lógica do programa

const api = axios.create({
    baseURL : 'https://banco-prod.onrender.com'
});

async function consultaNome(){
    const nome = inpNome.value;
    const response = await api('/produtos/' + nome)
    inpCod.value = response.data[0].cod;
    inpNome.value = response.data[0].nome;
    inpDescri.value = response.data[0].descri;
    inpFabricante.value = response.data[0].fabricante;
    inpQtda.value = response.data[0].qtda;
    inpPreco.value = response.data[0].preco;
    inpCusto.value = response.data[0].custo;
    inpData.value = response.data[0].data;
}

async function inclusao(){
    const nome = inpNome.value;
    const descri = inpDescri.value;
    const fabricante = inpFabricante.value;
    const qtda = inpQtda.value;
    const preco = inpPreco.value;
    const custo = inpCusto.value;

    data ={
        "nome" : nome,
        "descri" : descri,
        "fabricante" : fabricante,
        "qtda" : qtda,
        "preco" : preco,
        "custo" : custo
    }

    const response = await api.post('/produtos/',data);

    inpCod.value = "";
    inpNome.value = "";
    inpDescri.value = "";
    inpFabricante.value = "";
    inpQtda.value = "";
    inpPreco.value = "";
    inpCusto.value = "";
    inpData.value = "";
}

async function alteracao(){
    const cod = inpCod.value;

    const nome = inpNome.value;
    const descri = inpDescri.value;
    const fabricante = inpFabricante.value;
    const qtda = inpQtda.value;
    const preco = inpPreco.value;
    const custo = inpCusto.value;

    data ={
        "nome" : nome,
        "descri" : descri,
        "fabricante" : fabricante,
        "qtda" : qtda,
        "preco" : preco,
        "custo" : custo
    }

    const response = await api.put('/produtos/' + cod,data);
}

async function exclusao(){
    const cod = inpCod.value;

    const response = await api.delete('/produtos/' + cod);
    alert('Registro excluido!')

    inpCod.value = "";
    inpNome.value = "";
    inpDescri.value = "";
    inpFabricante.value = "";
    inpQtda.value = "";
    inpPreco.value = "";
    inpCusto.value = "";
    inpData.value = "";
}

async function lim(){
    inpCod.value = "";
    inpNome.value = "";
    inpDescri.value = "";
    inpFabricante.value = "";
    inpQtda.value = "";
    inpPreco.value = "";
    inpCusto.value = "";
    inpData.value = "";
}


btnCon.onclick = ()=>{
    consultaNome()
}

btnCad.onclick = ()=>{
    inclusao()
}

btnAlt.onclick = ()=>{
    alteracao()
}

btnExc.onclick = ()=>{
    exclusao()
}

btnLim.onclick = ()=>{
    lim()
}