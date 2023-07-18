<template>
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
                    <select id="inputState" class="form-control" v-model="imovel.modelonegocio">
                            <option disabled value="">MODELO DE NEGÓCIO</option>
                            <option :value="true">Aluguel</option>
                            <option :value="false">Venda</option>
                        </select>
                </div>
                <div class="mb-3 formulario"> <!-- boolean -->
                    <select id="inputState2" class="form-control" v-model="imovel.tipodeimovel">
                        <option disabled value="">TIPO DE IMÓVEL</option>
                        <option :value="true">Casa</option>
                        <option :value="false">Apartamento</option>
                    </select>
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
        </div>
    </form>
</template>

<script>
export default {
    props: {
        imovel: {
            type: Object,
            default() {
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