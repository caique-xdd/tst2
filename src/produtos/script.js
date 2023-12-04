//refencias do DOM - HTML

const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpDescri = document.getElementById('inpDescri');
const inpFabricante = document.getElementById('inpFabricante');
const inpQtda = document.getElementById('inpQtda');
const inpPreco = document.getElementById('inpPreco');
const inpCusto = document.getElementById('inpCusto');
const inpData = document.getElementById('inpData');

const api = axios.create({
    baseURL : 'https://crud-tst.onrender.com'
});

//- Lógica do programa -


//Create
const btnCad = document.getElementById('btnCad');

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

btnCad.onclick = ()=>{
    inclusao()
}

//Research
const btnCon = document.getElementById('btnCon');

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

btnCon.onclick = ()=>{
    consultaNome()
}

//Update
const btnAlt = document.getElementById('btnAlt');

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

btnAlt.onclick = ()=>{
    alteracao()
}

//Delete
const btnExc = document.getElementById('btnExc');

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

btnExc.onclick = ()=>{
    exclusao()
}

//*Perfumaria

//Limpar campos
const btnLim = document.getElementById('btnLim');

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

btnLim.onclick = ()=>{
    lim()
}

//Instruções

const btnIns = document.getElementById('btnIn');

function ins(){
    alert(`
        Para cadastro, não é necessario colocar código e data. Nosso sistema preenchera corretamente.
        -
        Para consulta, digite o nome do produto e execute a função(aperte o botão de respectiva ordem).
        -
        Para alteração, digite o código do produto e execute a função.
        - 
        Para exclusão, digite o código do produto e execute a função.
        
        O botão "Limpar" torna vazios os campos preenchidos.
        -
        Para retornar a tela inicial, clique em "Voltar"
    `);
}

btnIns.onclick = ()=>{
    ins();
}

