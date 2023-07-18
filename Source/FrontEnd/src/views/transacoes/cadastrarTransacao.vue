<template>
    <div class="container mb-3" style="text-align: center;">
        <h1>CADASTRAR TRANSAÇÃO</h1>
        <TransacaoForm
            :transacao="transacao"
            :labelBotao="'Cadastrar Transação'"
            :submit-form="submitForm"
        />
    </div>
</template>

<script>
import TransacaoForm from '../../components/transacaoForm.vue';

const axios = require('axios').default;
import router from '@/routes';

export default {
    components: {
        TransacaoForm,
    },
    data() {
        return {
            transacao: {
                cpfComprador: '',
                codImovel: '',
            }
        }
    },
    methods: {
        isFormInvalid(){
            return (
                !this.transacao.cpfComprador || 
                !this.transacao.codImovel
            );
        },
        async submitForm() {
            console.log(this.transacao);
            if(this.isFormInvalid()) {
                alert('Please fill the form');
                return;
            }

            let token = localStorage.getItem('token');

            try{
                await axios.post(
                    'http://localhost:3000/transacao', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            token: token
                        },
                        transacao: this.transacao,
                    }
                );
                
                router.push('/transacoes');
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