<template>
    <div id="fundo"></div>
    <div id="cont">
        <div class="container mb-3 w-50 mx-auto">
            <img src="../assets/Logo.png" alt="teste">
            <h1 style="color: #878787; margin-bottom: 10px;">CADASTRO</h1>
            <form action="">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope-at"></i></span>
                    <input type="email" class="form-control" placeholder="Email" v-model="dadosCadastro.email">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
                    <input type="text" class="form-control" placeholder="Nome" v-model="dadosCadastro.nome">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"></i></span>
                    <input type="text" class="form-control" placeholder="cpf" v-model="dadosCadastro.cpf">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date"></i></span>
                    <input type="date" class="form-control" placeholder="Data de Nascimento" v-model="dadosCadastro.dataNasc">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-telephone"></i></span>
                    <input type="text" class="form-control" placeholder="Telefone" v-model="dadosCadastro.telefone">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                    <input type="password" class="form-control" placeholder="Senha" v-model="dadosCadastro.password" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                    <input type="password" class="form-control" placeholder="Confirmar Senha" v-model="dadosCadastro.confirmPassword" />
                </div>
                <div class="mb-3">
                    <button
                        class="btn btn-primary button-color"
                        style="background-color: #74972F; color: white; border: 0 solid white; "
                        @click="cadastrar()"
                    >
                        Cadastrar-se
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import router from '@/routes';

const axios = require('axios').default;

export default {
    data() {
        return {
            dadosCadastro: {
                email: '',
                nome: '',
                cpf: '',
                dataNasc: '',
                telefone: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        isFormInvalid(){
            return (
                !this.dadosCadastro.email ||
                !this.dadosCadastro.nome ||
                !this.dadosCadastro.cpf ||
                !this.dadosCadastro.dataNasc ||
                !this.dadosCadastro.telefone ||
                !this.dadosCadastro.password ||
                !this.dadosCadastro.confirmPassword ||
                !this.dadosCadastro.email.includes('@')
            );
        },
        async cadastrar(){
            console.log(this.dadosCadastro);
            if(this.isFormInvalid()){
                alert('Por favor preencha os campos corretamente');
                return;
            }

            // codigo para enviar email e senha para validacao
            try{
                let response = await axios.post('http://localhost:3000/comprador', this.dadosCadastro);
                console.log(response);
                router.push('/login');
            }
            catch(e){
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>
#fundo{
    position: absolute;
    height: 100%;
    width: 100%;
    background: url("../assets/imagem_fundo.jpg") no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    filter: blur(3px);
    -webkit-filter: blur(3px);
}
.container{
    filter: blur(0px);
    -webkit-filter: blur(0px);
    background-color: white;
    margin-top: 40px;
    text-align: center;
    border-radius: 20px;
    padding: 10px;
}
#cont{
    width: 100%;
    display: flex;
    justify-content: center;
    
}
button{
    width: 100%;
}
button, input, span{
    border-radius: 50px;
    margin-top: 10px;
}
.button-color:hover{
    color: #FFF;
    background-color: #5E7A26;
}
</style>