<template>
    <BarraNav/>

    <center>
        <table>
            <tr>
                <th>CEP</th>
                <th>ENDEREÇO</th>
                <th>PREÇO</th>
                <th>MODELO DE<br>NEGÓCIO</th>
                <th>EDITAR</th>
                <th>EXCLUIR</th>
            </tr>
            <tr v-for="imovel in imoveis">
                <td>{{imovel.cep}}</td>
                <td>{{imovel.rua}}</td>
                <td>{{imovel.preco}}</td>
                <td>{{imovel.modeloNegocio}}</td>
                <td><i class="bi bi-pencil"></i></td>
                <td><i class="bi bi-trash"></i></td>
            </tr>
        </table>
    </center>
    <div class="dropup position-absolute bottom-0 end-0 rounded-circle m-5">
    <button type="button" class="btn btn-success" style="border-radius: 50px;">
        <i class="bi bi-plus fa-lg"></i>
    </button>
</div>
</template>

<script>
import BarraNav from './BarraNav.vue'

export default {
    components: {
        BarraNav
    },
    created() {
        this.getImoveis();
    },
    data() {
        return {
            imoveis: [
                {
                    cep: '',
                    rua: '',
                    preco: '',
                    modeloNegocio: ''
                }
            ]
        }
    },
    methods: {
        async getImoveis() {
            let res = await fetch('imoveis.json');
            let data = await res.json();
            this.imoveis = data;
        },
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
button{
    position: absolute;
    bottom: auto;

}
</style>