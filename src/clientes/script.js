//referencias do DOM - HTML

const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpEmail = document.getElementById('inpEmail');
const inpUf = document.getElementById('inpUf');
const inpSenha = document.getElementById('inpSenha');
const inpLevel = 0;
const inpData = document.getElementById('inpData');


const api = axios.create({
    baseURL : 'https://crud-tst.onrender.com'
})

//- Logica do programa -

//Create
const btnCad = document.getElementById('btnCad');

async function inclusao(){
    const nome = inpNome.value;
    const email = inpEmail.value;
    const uf = inpUf.value;
    const password = inpSenha.value;
    const level = 0;

    data ={
        "nome" : nome,
        "email" : email,
        "uf" : uf,
        "password" : password,
        "level" : level
        
    };
    const response = await api.post('/createclient',data);

    inpCod.value = "";
    inpNome.value = "";
    inpEmail.value = "";
    inpUf.value = "";
    inpSenha.value = "";
    inpData.value = "";
}

btnCad.onclick = ()=>{
    inclusao()
}
//Research
const btnCon = document.getElementById('btnCon');

async function consulta(){
    const nome = inpNome.value;
    const response  = await api('/listclient/' + nome)
    inpCod.value = response.data.result[0].codcli;
    inpNome.value  = response.data.result[0].nome;
    inpEmail.value = response.data.result[0].email;
    inpUf.value = response.data.result[0].uf;
    inpSenha.value = response.data.result[0].password;
    inpData.value  =  response.data.result[0].createdat;
}

btnCon.onclick = ()=>{
    consulta()
}
//Update
const btnAlt = document.getElementById('btnAlt');

async function alteracao(){
    const codcli = inpCod.value;

    const nome = inpNome.value;
    const email = inpEmail.value;
    const uf = inpUf.value;
    const password = inpSenha.value;
    const level = inpLevel.value;

    data ={
        "nome" : nome,
        "email" : email,
        "uf" : uf,
        "password" : password,
        "level" : level
        
    }

    const response = await api.put('/client/' + codcli,data);
}

btnAlt.onclick = ()=>{
    alteracao()
}

//Delete
const btnExc = document.getElementById('btnExc');

async function exclusao(){
    const codcli = inpCod.value;

    const response = await api.delete('/client/' + codcli);
    alert('Registro excluido!')

    inpCod.value = "";
    inpNome.value = "";
    inpEmail.value = "";
    inpUf.value = "";
    inpSenha.value = "";
    inpData.value = "";
}

btnExc.onclick = ()=>{
    exclusao()
}

//*Perfumaria

//Limpar áreas
const btnLim = document.getElementById('btnLim');
    
async function lim(){
    inpCod.value = "";
    inpNome.value = "";
    inpEmail.value = "";
    inpUf.value = "";
    inpSenha.value = "";
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