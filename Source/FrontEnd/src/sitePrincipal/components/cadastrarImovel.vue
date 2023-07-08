<template>
    <BarraNav/>

    <div class="container mb-3">
        <form action="">
            <div class="row row-cols-2 g-2" style="margin: 20px; border: 1px solid black;">
                <div class="col" style="border-right: 1px solid black; padding: 0px 20px;">
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
                            placeholder="ENDEREÇO"
                            v-model="rua"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="PREÇO"
                            v-model="preco"
                        />
                    </div>
                    <div class="mb-3 formulario">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="MODELO DE NEGÓCIO"
                            v-model="modeloNegocio"
                        />
                    </div>
                </div>
                <div class="col" style="border-right: 1px solid black;">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            CEP
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="cep"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Rua
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="rua"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Preço
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="preco"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Modelo de Negócio
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="modeloNegocio"
                        />
                    </div>
                    <div class="mb-3">
                        <button
                            class="btn btn-primary"
                            @click.prevent="submitForm()"
                            :disabled="isFormInvalid"
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
import BarraNav from './BarraNav.vue'

export default {
    components: {
        BarraNav
    },
    emits:{
        imovelCadastrado(pageObj){
            
        }
    },
    computed: {
        isFormInvalid(){
            return (!this.cep || !this.rua || !this.preco || !this.modeloNegocio)
        }
    },
    data() {
        return {
            cep: '',
            rua: '',
            preco: '',
            modeloNegocio: ''
        }
    },
    methods: {
        submitForm() {
            if(!this.cep || !this.rua || !this.preco || !this.modeloNegocio){
                alert('Please fill the form');
                return;
            }
            this.$emit('imovelCadastrado', {
                cep: this.cep,
                rua: this.rua,
                preco: this.preco,
                modeloNegocio: this.modeloNegocio,
            });

            this.cep = '';
            this.rua = '';
            this.preco = '';
            this.modeloNegocio = '';
        }
    }
}
</script>

<style scoped>
input{
    border-radius: 50px;
}
.formulario{
    margin-top: 45px;
}
</style>