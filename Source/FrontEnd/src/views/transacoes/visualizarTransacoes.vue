<template>
    <div class="center">
        <h1>TRANSAÇÕES</h1>
        <table>
            <tr>
                <th>CÓDIGO</th>
                <th>CPF DO<br>COMPRADOR</th>
                <th>CÓDIGO DO<br>IMÓVEL</th>
                <th>DATA/HORA</th>
                <th>EDITAR</th>
                <th>EXCLUIR</th>
            </tr>
            <tr v-for="(transacao, i) in transacoes">
                <td>{{transacao.codTransacao}}</td>
                <td>{{transacao.cpfComprador}}</td>
                <td>{{transacao.codImovel}}</td>
                <td>{{transacao.dataHora}}</td>
                <td>
                    <a :href="'#/transacoes/editar/' + transacao.codTransacao" style="color: black;">
                        <i class="bi bi-pencil"></i>
                    </a>
                </td>
                <td>
                    <a 
                        href="#myModal" 
                        class="trigger-btn" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        style="color: black;"
                        @click="index = i"
                    >
                        <i class="bi bi-trash"></i>
                    </a>
                </td>
            </tr>
        </table>
    </div>
    
    <div class="dropup position-absolute bottom-0 end-0 rounded-circle m-5">
        <button type="button" class="btn btn-success botao" style="border-radius: 50px;" @click.prevent="router.push('/transacoes/cadastrar')">
            <i class="bi bi-plus fa-lg"></i>
        </button>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <confirmarDelete
            :titulo="'Deletar Transação'"
            :conteudo="'Deseja realmente deletar a transação ' + (transacoes[index] == null ? '0' : transacoes[index].codTransacao) + '?'"
            :deletar="deletar"
        />
    </div>

</template>

<script>
import router from '@/routes';
import confirmarDelete from '../../components/confirmDeleteModal.vue';

const axios = require('axios').default;

export default {
    components: {
        confirmarDelete,
    },
    created() {
        this.getTransacoes();
    },
    data() {
        return {
            router: router,
            transacoes: [
                {
                    codTransacao: '',
                    cpfComprador: '',
                    codImovel: '',
                    dataHora: '',
                }
            ],
            index: '0',
        }
    },
    methods: {
        async getTransacoes() {
            try{
                let response = await axios.get('http://localhost:3000/transacao');
                this.transacoes = response.data;
            }
            catch(e){
                console.log(e);
            }
        },

        async deletar(){
            let token = localStorage.getItem('token');
            
            try{
                await axios.delete(
                    'http://localhost:3000/transacao/' + this.transacoes[this.index].codTransacao);
                this.index = 0;
                this.getTransacoes();
            }
            catch(e){
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>
.center {
  margin: auto;
  text-align: center;
}
table{
    border: 1px solid #74972F;
    text-align: center;
    margin: auto;
}
td, tr, th{
    border: 1px solid #74972F;
    padding: 10px 15px;
}
th{
    background-color: #5E7A26;
    color: white;
}
.botao{
    position: absolute;
    bottom: auto;

}
</style>