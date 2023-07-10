<template>
    <BarraNav/>

    <center>
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
            <tr v-for="imovel in imoveis">
                <td>{{imovel.cep}}</td>
                <td>{{imovel.logradouro + ', ' + imovel.numero + ', ' + imovel.bairro}}</td>
                <td>{{imovel.estado}}</td>
                <td>R$ {{Number(imovel.preco).toFixed(2)}}</td>
                <td>{{imovel.modelonegocio ? 'Aluguel' : 'Venda'}}</td>
                <td>{{imovel.tipodeimovel ? 'Casa' : 'Apartamento'}}</td>
                <td>
                    <a :href="'#/editarImovel/' + imovel.codimovel" style="color: black;">
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
                        @click="index = imovel.codimovel"
                    >
                        <i class="bi bi-trash"></i>
                    </a>
                </td>
            </tr>
        </table>
    </center>
    
    <div class="dropup position-absolute bottom-0 end-0 rounded-circle m-5">
        <button type="button" class="btn btn-success botao" style="border-radius: 50px;" @click.prevent="router.push('/cadastrarImovel')">
            <i class="bi bi-plus fa-lg"></i>
        </button>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-confirm">
            <div class="modal-content">
                <div class="modal-header flex-column">
                    <h4 class="modal-title w-100">Are you sure?</h4>
                </div>
                <div class="modal-body">
                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deletar()">Delete</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import router from '@/routes';

import BarraNav from '../components/BarraNav.vue';

const axios = require('axios').default;


export default {
    components: {
        BarraNav
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
            index: 0,
        }
    },
    methods: {
        async getImoveis() {
            let token = localStorage.getItem('token');
            let teste = [];

            await axios.get('http://localhost:3000/imovel')
                .then(function (response) {
                    let imoveis = response.data;
                    for(let imovel in imoveis){
                        teste.push(imoveis[imovel]);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

            if(teste.length)
                this.imoveis = teste;
        },

        async deletar(){
            try{
                await axios.delete('http://localhost:3000/imovel/'+this.index);
                this.getImoveis();
                // console.log(this.index);
            }
            catch(e){

            }
        }
    }
}
</script>

<style scoped>
table{
    border: 1px solid #74972F;
    margin-top: 100px;
    text-align: center;
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