<template>
    <div id="fundo"></div>
    <div id="cont">
        <div class="container mb-3 w-50 mx-auto">
            <img src="../assets/Logo.png" alt="teste">
            <h1 style="color: #878787; margin-bottom: 30px;">LOGIN</h1>
            <form action="">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope-at"></i></span>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="email">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                    <input type="password" class="form-control" placeholder="Senha" v-model="senha" />
                </div>
                <div class="mb-3">
                    <button
                        class="btn btn-primary button-color"
                        style="background-color: #74972F; color: white; border: 0 solid white; "
                        @click.prevent="submitLogin()"
                        :disabled="isLoginInvalid"
                    >
                        Entrar
                    </button>
                    <a
                        class="btn btn-primary button-color"
                        href="#/cadastrar"
                        style="background-color: white; color: #74972F; border: 1 solid #74972F; border-color: #74972F;"
                        role="button"
                    >Cadastrar-se</a>
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
        isLoginInvalid(){
            return (!this.email || !this.senha)
        }
    },
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        async submitLogin(){
            if(!this.email || !this.senha){
                alert('Por favor preencha os campos');
                return;
            }
            if(!this.email.includes('@')){
                alert('Digite um email válido');
                return;
            }

            // codigo para enviar email e senha para validacao
            let login = {email: this.email, password: this.senha};
            console.log(login);
            try{
                let response = await axios.post('http://localhost:3000/auth/user', login);
                console.log(response);
                localStorage.setItem('login', JSON.stringify(login));
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('tipoUsuario', response.data.tipoUsuario);
                router.push('/');
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
button, a{
    width: 100%;
}
button, input, span, a{
    border-radius: 50px;
    margin-top: 20px;
}
.button-color:hover{
    color: #FFF;
    background-color: #5E7A26;
}
</style>