<template>
    <div class="container mb-3" style="text-align: center;">
        <h1>CADASTRAR IMÓVEL</h1>
        <ImovelForm
            :imovel="imovel"
            :labelBotao="'Cadastrar Imóvel'"
            :submit-form="submitForm"
        />
    </div>
</template>

<script>
import UploadImage from "../../components/UploadImage.vue";
import ImovelForm from '../../components/imovelForm.vue';

const axios = require('axios').default;
import router from '@/routes';

export default {
    components: {
        UploadImage,
        ImovelForm,
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
        }
    },
    methods: {
        isFormInvalid(){
            return (
                !this.imovel.cep || 
                !this.imovel.logradouro || 
                !this.imovel.numero || 
                !this.imovel.cidade || 
                !this.imovel.estado || 
                !this.imovel.preco || 
                this.imovel.modelonegocio === "" || 
                this.imovel.tipodeimovel === ""
            );
        },
        async submitForm() {
            if(this.isFormInvalid()) {
                alert('Please fill the form');
                return;
            }

            this.imovel.estado.toUpperCase();

            let token = localStorage.getItem('token');

            try{
                await axios.post(
                    'http://localhost:3000/imovel', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            token: token
                        },
                        imovel: this.imovel,
                    }
                );
                
                router.push('/imoveis');
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