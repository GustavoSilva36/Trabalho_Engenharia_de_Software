<template>
    <div class="center">
        <h1>IMÓVEIS</h1>
        <table>
            <tr>
                <th>CEP</th>
                <th>ENDEREÇO</th>
                <th>ESTADO</th>
                <th>PREÇO</th>
                <th>MODELO DE<br>NEGÓCIO</th>
                <th>TIPO DE<br>IMÓVEL</th>
                <th>EDITAR</th>
                <th>EXCLUIR</th>
            </tr>
            <tr v-for="(imovel, i) in imoveis">
                <td>{{imovel.cep}}</td>
                <td>{{imovel.logradouro + ', ' + imovel.numero + ', ' + imovel.bairro}}</td>
                <td>{{imovel.estado}}</td>
                <td>R$ {{Number(imovel.preco).toFixed(2)}}</td>
                <td>{{imovel.modelonegocio ? 'Aluguel' : 'Venda'}}</td>
                <td>{{imovel.tipodeimovel ? 'Casa' : 'Apartamento'}}</td>
                <td>
                    <a :href="'#/imoveis/editar/' + imovel.codimovel" style="color: black;">
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
        <button type="button" class="btn btn-success botao" style="border-radius: 50px;" @click.prevent="router.push('/imoveis/cadastrar')">
            <i class="bi bi-plus fa-lg"></i>
        </button>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <confirmarDelete
            :titulo="'Deletar Imóvel'"
            :conteudo="'Deseja realmente deletar o imóvel de cep ' + imoveis[index].cep + '?'"
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
        this.getImoveis();
    },
    data() {
        return {
            router: router,
            imoveis: [
                {
                    cep: '',
                    logradouro: '',
                    numero: '',
                    complemento: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    preco: '',
                    modeloNegocio: '',
                    tipoImovel: '',
                }
            ],
            index: '0',
        }
    },
    methods: {
        async getImoveis() {
            let token = localStorage.getItem('token');

            try{
                let response = await axios.get('http://localhost:3000/imovel');
                this.imoveis = response.data;
            }
            catch(e){
                console.log(e);
            }
        },

        async deletar(){
            let token = localStorage.getItem('token');
            
            try{
                await axios.delete(
                    'http://localhost:3000/imovel/' + this.imoveis[this.index].codimovel, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            token: token
                        }
                    }
                );
                this.getImoveis();
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