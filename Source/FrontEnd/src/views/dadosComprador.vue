<template>
    <BarraNav/>

    <div id="cont" style="text-align: center;">
        <div class="container mb-3 w-50 mx-auto">
            <h1 style="color: #878787; margin-bottom: 10px;">EDITAR DADOS</h1>
            <form action="">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
                    <input type="text" class="form-control" placeholder="Nome" v-model="dados.nome">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date"></i></span>
                    <input type="date" class="form-control" placeholder="Data de Nascimento" v-model="dados.dataNasc">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-telephone"></i></span>
                    <input type="text" class="form-control" placeholder="Telefone" v-model="dados.telefone">
                </div>
                <div class="mb-3">
                    <button
                        class="btn btn-primary button-color"
                        style="background-color: #74972F; color: white; border: 0 solid white; "
                        @click="submitForm()"
                    >
                        Editar Dados
                    </button>
                    <button
                        class="btn btn-danger"
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        @click=""
                    >
                        Deletar Conta
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <confirmarDelete
            :titulo="'Deletar Conta'"
            :conteudo="'Deseja realmente deletar sua conta?'"
            :deletar="deletar"
        />
    </div>

</template>

<script>
import BarraNav from '../components/BarraNav.vue';
import confirmarDelete from '../components/confirmDeleteModal.vue';

const axios = require('axios').default;
import router from '@/routes';

export default {
    components: {
        BarraNav,
        confirmarDelete
    },
    created() {
        this.loadData();
    },
    data() {
        return {
            dados: {
                nome: '',
                dataNasc: '',
                telefone: ''
            }
        }
    },
    methods: {
        isFormInvalid(){
            return (
                !this.dados.nome || 
                !this.dados.dataNasc ||
                !this.dados.telefone
            );
        },
        async loadData() {
            let login = JSON.parse(localStorage.getItem('login'));
            try{
                let response = await axios.get('http://localhost:3000/comprador/'+login.email);
                this.dados = response.data;
                this.dados.dataNasc = this.dados.dataNasc.substring(0, this.dados.dataNasc.indexOf('T'));
            }
            catch(e){
                console.log(e);
            }
        },
        async submitForm() {
            console.log(this.transacao);
            if(this.isFormInvalid()) {
                alert('Please fill the form');
                return;
            }

            let token = localStorage.getItem('token');

            try{
                await axios.put(
                    'http://localhost:3000/comprador/' + this.dados.cpf, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            token: token
                        },
                        comprador: this.dados,
                    }
                );
                alert('Dados atualizados!');
                
            }
            catch(e){
                console.log(e);
            }
        },
        async deletar(){
            try{
                await axios.delete('http://localhost:3000/comprador/' + this.dados.email);
                localStorage.removeItem('token');
                router.push('/')
            }
            catch(e){
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>
input, select{
    border-radius: 50px;
}
.formulario{
    margin-top: 45px;
}
.button-color{
    background-color: #74972F;
    color: white;
    border-color: #74972F;
}
.button-color:hover, button:focus, button:active{
    background-color: #5E7A26;
    color: white;
    border-color: #5E7A26;
}
</style>