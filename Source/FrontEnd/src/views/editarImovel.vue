<template>
    <BarraNav/>
    <div class="container mb-3" style="text-align: center;">
        <h1>EDITAR IMÓVEL</h1>
        <form action="">
            <div class="row row-cols-2 g-2" style="margin: 20px; border: 1px solid black;">
                <div class="col" style="border-right: 1px solid black; padding: 0px 20px; text-align: center;">
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="CEP"
                            v-model="imovel.cep"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="LOGRADOURO"
                            v-model="imovel.logradouro"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="NUMERO"
                            v-model="imovel.numero"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="COMPLEMENTO"
                            v-model="imovel.complemento"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="BAIRRO"
                            v-model="imovel.bairro"
                        />
                    </div>
                </div>
                <div class="col" style="border-right: 1px solid black; text-align: center;">
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="CIDADE"
                            v-model="imovel.cidade"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="ESTADO"
                            maxlength="2"
                            v-model="imovel.estado"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="PREÇO"
                            v-model="imovel.preco"
                        />
                    </div>
                    <div class="mb-3 formulario"> <!-- boolean -->
                        <select id="inputState" class="form-control" v-model="modeloNegocio">
                            <option>Aluguel</option>
                            <option>Venda</option>
                        </select>
                    </div>
                    <div class="mb-3 formulario"> <!-- boolean -->
                        <select id="inputState2" class="form-control" v-model="tipoImovel">
                            <option>Casa</option>
                            <option>Apartamento</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <button
                            class="btn btn-primary"
                            @click.prevent="submitForm()"
                        >
                            Editar Imóvel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import BarraNav from '../components/BarraNav.vue';
import UploadImage from "../components/UploadImage.vue";

const axios = require('axios').default;
import router from '@/routes';

export default {
    components: {
        BarraNav,
        UploadImage,
    },
    computed: {
        isFormInvalid(){
            return (!this.cep || !this.logradouro || !this.numero || !this.cidade || !this.estado || !this.preco || !this.modeloNegocio || !this.tipoImovel);
        }
    },
    created() {
        this.loadImovelData(this.$route.params.index);
    },
    data() {
        return {
            imovel: {
                cep: '',
                logradouro: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                preco: '',
                modelonegocio: '',
                tipodeimovel: '',
            },
            modeloNegocio: 'Aluguel',
            tipoImovel: 'Casa',
        }
    },
    methods: {
        async loadImovelData(index) {
            try{
                let response = await axios.get('http://localhost:3000/imovel/'+index);
                this.imovel = response.data;
                console.log(this.imovel);
                this.modeloNegocio = this.imovel.modelonegocio ? 'Aluguel' : 'Venda';
                this.tipoImovel = this.imovel.tipodeimovel ? 'Casa' : 'Apartamento';
            }
            catch(e){
                console.log(e);
            }
        },
        async submitForm() {
            if(!this.imovel.cep || !this.imovel.logradouro || !this.imovel.numero || !this.imovel.bairro || !this.imovel.cidade || !this.imovel.estado || !this.imovel.preco || !this.modeloNegocio || !this.tipoImovel) {
                alert('Please fill the form');
                return;
            }

            let imovel = {
                cep: this.imovel.cep,
                logradouro: this.imovel.logradouro,
                numero: this.imovel.numero,
                complemento: this.imovel.complemento,
                bairro: this.imovel.bairro,
                cidade: this.imovel.cidade,
                estado: this.imovel.estado.toUpperCase(),
                preco: this.imovel.preco,
                modelonegocio: this.modeloNegocio === 'Aluguel' ? true : false,
                tipodeimovel: this.tipoImovel === 'Casa' ? true : false,
            };

            console.log(imovel);

            await axios.put('http://localhost:3000/imovel/'+this.$route.params.index, imovel)
                .then(function (response) {
                    console.log(response);
                    router.push('/visualizarImoveis');
                })
                .catch(function (error) {
                    console.log(error);
                });

            this.cep = '';
            this.preco = '';
            this.modeloNegocio = '';
            this.photo = {};
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