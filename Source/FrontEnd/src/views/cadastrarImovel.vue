<template>
    <BarraNav/>
    <div class="container mb-3" style="text-align: center;">
        <h1>CADASTRAR IMÓVEL</h1>
        <form action="">
            <div class="row row-cols-2 g-2" style="margin: 20px; border: 1px solid black;">
                <div class="col" style="border-right: 1px solid black; padding: 0px 20px; text-align: center;">
                    <!-- <div class="mb-3 formulario">
                        <upload-image></upload-image>
                    </div> -->
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="CEP"
                            v-model="cep"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="LOGRADOURO"
                            v-model="logradouro"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="NUMERO"
                            v-model="numero"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="COMPLEMENTO"
                            v-model="complemento"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="BAIRRO"
                            v-model="bairro"
                        />
                    </div>
                </div>
                <div class="col" style="border-right: 1px solid black; text-align: center;">
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="CIDADE"
                            v-model="cidade"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="ESTADO"
                            maxlength="2"
                            v-model="estado"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="PREÇO"
                            v-model="preco"
                        />
                    </div>
                    <div class="mb-3 formulario"> <!-- boolean -->
                        <select id="inputState" class="form-control" v-model="modeloNegocio">
                            <option disabled value="">MODELO DE NEGÓCIO</option>
                            <option>Aluguel</option>
                            <option>Venda</option>
                        </select>
                    </div>
                    <div class="mb-3 formulario"> <!-- boolean -->
                        <select id="inputState2" class="form-control" v-model="tipoImovel">
                            <option disabled value="">TIPO DE IMÓVEL</option>
                            <option>Casa</option>
                            <option>Apartamento</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <button
                            class="btn btn-primary"
                            @click.prevent="submitForm()"
                        >
                            Cadastrar Imóvel
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
    data() {
        return {
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
    },
    methods: {
        async submitForm() {
            console.log(this.modeloNegocio === 'Aluguel' ? true : false)
            if(!this.cep || !this.logradouro || !this.numero || !this.bairro || !this.cidade || !this.estado || !this.preco || !this.modeloNegocio || !this.tipoImovel) {
                alert('Please fill the form');
                return;
            }

            let imovel = {
                cep: this.cep,
                logradouro: this.logradouro,
                numero: this.numero,
                complemento: this.complemento,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado.toUpperCase(),
                preco: this.preco,
                modelonegocio: this.modeloNegocio === 'Aluguel' ? true : false,
                tipodeimovel: this.tipoImovel === 'Casa' ? true : false,
            };

            console.log(imovel);
            let token = localStorage.getItem('token');
            console.log(token);
            await axios.post('http://localhost:3000/imovel', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    token: token
                },
                imovel: imovel,
                })
                .then(function (response) {
                    console.log(response);
                    router.push('/visualizarImoveis');
                })
                .catch(function (error) {
                    console.log(error);
                });
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