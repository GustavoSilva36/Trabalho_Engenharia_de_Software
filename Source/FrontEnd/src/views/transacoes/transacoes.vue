<template>
    <BarraNav/>

    <router-view/>
</template>

<script>
import BarraNav from '../../components/BarraNav.vue';

export default {
    components: {
        BarraNav,
    },
}
</script>