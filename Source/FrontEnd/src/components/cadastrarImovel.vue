<template>
    <div class="container mb-3">
        <form action="">
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
        </form>
    </div>
</template>

<script>
export default {
    emits:{
        imovelCadastrado(pageObj){
            return false;
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