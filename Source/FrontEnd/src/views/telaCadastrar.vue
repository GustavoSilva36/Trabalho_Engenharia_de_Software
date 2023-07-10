<template>
    <div id="fundo"></div>
    <div id="cont">
        <div class="container mb-3 w-50 mx-auto">
            <img src="../assets/Logo.png" alt="teste">
            <h1 style="color: #878787; margin-bottom: 30px;">CADASTRO</h1>
            <form action="">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope-at"></i></span>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="email">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                    <input type="password" class="form-control" placeholder="Senha" v-model="senha" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                    <input type="password" class="form-control" placeholder="Confirmar Senha" v-model="confirmSenha" />
                </div>
                <div class="mb-3">
                    <button
                        class="btn btn-primary button-color"
                        style="background-color: #74972F; color: white; border: 0 solid white; "
                        @click.prevent="cadastrar()"
                        :disabled="isCadastrarInvalid"
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
    computed: {
        isCadastrarInvalid(){
            return (!this.email || !this.senha || !this.confirmSenha)
        }
    },
    data() {
        return {
            email: '',
            senha: '',
            confirmSenha: ''
        }
    },
    methods: {
        async cadastrar(){
            if(!this.email || !this.senha){
                alert('Por favor preencha os campos');
                return;
            }
            if(!this.email.includes('@')){
                alert('Digite um email válido');
                return;
            }

            // codigo para enviar email e senha para validacao
            let cadastrar = {email: this.email, password: this.senha, confirmPassword: this.confirmSenha};
            console.log(cadastrar);
            let data = await axios.post('http://localhost:3000/auth/register', cadastrar)
                .then(function (response) {
                    console.log(response);
                    router.push('/login');
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(data);
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
    margin-top: 130px;
    text-align: center;
    border-radius: 20px;
    padding: 20px;
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
    margin-top: 20px;
}
.button-color:hover{
    color: #FFF;
    background-color: #5E7A26;
}
</style>