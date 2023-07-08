<template>
    <router-view></router-view>
</template>

<script>

export default {
    created() {
        this.getImoveis();
    },
    methods: {
        async getImoveis() {
            let res = await fetch('imoveis.json');
            let data = await res.json();
            this.imoveis = data;
        },
        imovelCadastrado(imovelObj) {
            console.log(imovelObj);
            this.imoveis.push(imovelObj)
        }
    }
}
</script>