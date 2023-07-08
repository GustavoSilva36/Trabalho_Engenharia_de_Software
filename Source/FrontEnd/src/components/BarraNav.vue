<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-primary-color sticky-top" id="navbar">
        <div class="container py-3">
            <a href="#" class="navbar-brand">
                <img src="../assets/Logo.png" alt="teste">
            </a>
            <button 
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-items"
                aria-controls="navbar-items"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <i class="bi bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar-items">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="(page, index) in pages" class="nav-item" :key="index">
                        <a
                            :href="page.link.url"
                            class="nav-link"
                            @click.prevent="activePage = index"
                        >{{ page.link.text }}</a>
                    </li>
                </ul>
            </div>
            <a class="btn button-color" href="#" role="button">Entrar</a>
        </div>
    </nav>
</template>

<script>
export default{
    props: ['pages', 'activePage']
}
</script>

<style scoped>
#navbar {
    /* background-color: #FFF; */
    border-bottom: 1px solid #7a7a7a;
}

#navbar-items .navbar-nav{
    display: flex;
    justify-content: right;
    width: 98%;
}

#navbar-items .navbar-item{
    margin: 0 1em;
}

#button-principal{
    background-color: #74972F;
}

.bg-primary-color{
    background-color: #FFF;
}
.button-color{
    color: #FFF;
    background-color: #74972F;
    border-radius: 0px;
    padding: 8px 30px;
}

.button-color:hover{
    color: #FFF;
    background-color: #5E7A26;
}
</style>