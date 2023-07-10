<template>
    <BarraNav/>
    
    <div class="container-fixed pt-4 background-image">

    </div>
    <div class="row row-cols-3 g-3" style="margin: 20px;">
        <div class="col" v-for="imovel in imoveis" style="padding: 30px; text-align: center;">
            <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
                    alt="Hollywood Sign on The Hill" style="padding: 20px;"/>
                <div class="card-body" style="padding: 20px;">
                    <div style="text-align: left;">
                        <p class="card-text">
                            Endereço:<br>
                            {{imovel.logradouro}}, {{imovel.numero}}, {{imovel.bairro}}<br>
                        </p>
                        <p class="card-text">
                            Preço:<br>
                            R${{Number(imovel.preco).toFixed(2)}}<br>
                        </p>
                    </div>
                    <button class="btn btn-primary">
                        detalhes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarraNav from '../components/BarraNav.vue'

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
            imoveis: []
        }
    },
    methods: {
        async getImoveis() {

            try{
                let response = await axios.get('http://localhost:3000/imovel');
                this.imoveis = response.data;
            }
            catch(e){
                console.log(e);
            }
        },
    }
}
</script>

<style scoped>
.background-image { 
    background: url("../assets/casaFundoPrincipal.jpg") no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 600px;
}
button{
    background-color: #74972F;
    color: white;
    border-color: #74972F;
}
button:hover, button:focus, button:active{
    background-color: #5E7A26;
    color: white;
    border-color: #5E7A26;
}
</style>