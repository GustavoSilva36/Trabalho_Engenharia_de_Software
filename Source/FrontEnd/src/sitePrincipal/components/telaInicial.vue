<template>
    <BarraNav/>
    
    <div class="container-fixed pt-4 background-image">

    </div>
    <div class="row row-cols-3 g-3" style="margin: 20px;">
        <div class="col" v-for="i in vet" style="padding: 30px; text-align: center;">
            <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
                    alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </p>
                    <button class="btn btn-primary">
                        detalhes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarraNav from './BarraNav.vue'

export default {
    components: {
        BarraNav
    },
    data() {
        return {
            vet: [1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<style scoped>
.background-image { 
    background: url("../../assets/casaFundoPrincipal.jpg") no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 600px;
}
</style>