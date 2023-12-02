    //referencias do DOM - HTML

    const inpCod = document.getElementById('inpCod');
    const inpNome = document.getElementById('inpNome');
    const inpEmail = document.getElementById('inpEmail');
    const inpUf = document.getElementById('inpUf');
    const inpSenha = document.getElementById('inpSenha');
    const inpLevel = 0;
    const inpData = document.getElementById('inpData');

    const btnCon = document.getElementById('btnCon');
    const btnCad = document.getElementById('btnCad');
    const btnAlt = document.getElementById('btnAlt');
    const btnExc = document.getElementById('btnExc');
    const btnLim = document.getElementById('btnLim');
    //Logica do programa

    const api =axios.create({
        baseURL : 'https://banco-prod.onrender.com'
    })

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
            
        }
console.log(data);
        const response = await api.post('/createclient',data);

        inpCod.value = "";
        inpNome.value = "";
        inpEmail.value = "";
        inpUf.value = "";
        inpSenha.value = "";
        inpData.value = "";
    }

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

    async function lim(){
        inpCod.value = "";
        inpNome.value = "";
        inpEmail.value = "";
        inpUf.value = "";
        inpSenha.value = "";
        inpData.value = "";
    }

    btnCon.onclick = ()=>{
        consulta()
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