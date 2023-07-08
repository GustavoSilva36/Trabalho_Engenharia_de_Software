<template>
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
</template>

<script>
export default {
    props: {
        imoveis: {
            type: Object,
            default() {
                return [
                    {
                        cep: '',
                        rua: '',
                        preco: '',
                        modeloNegocio: ''
                    }
                ]
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
</style>