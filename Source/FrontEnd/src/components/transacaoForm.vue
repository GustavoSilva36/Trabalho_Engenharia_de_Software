<template>
    <form action="">
        <div class="row" style="margin: 20px; border: 1px solid black;">
            <div class="mb-3 formulario">
                <input
                    type="text"
                    class="form-control"
                    placeholder="CPF DO COMPRADOR"
                    v-model="transacao.cpfComprador"
                />
            </div>
            <div class="mb-3 formulario">
                <input
                    type="text"
                    class="form-control"
                    placeholder="CÓDIGO DO IMÓVEL"
                    v-model="transacao.codImovel"
                />
            </div>
            <div class="mb-3">
                <button
                    class="btn btn-primary"
                    @click="submitForm"
                >
                    {{labelBotao}}
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        transacao: {
            type: Object,
            default() {
                return {
                    transacao: {
                        cpfComprador: '',
                        codImovel: '',
                    }
                }
            },
        },
        labelBotao: {
            type: String,
            default() {
                return '';
            }
        },
        submitForm: {
            type: Function,
            default() {
                return {}
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