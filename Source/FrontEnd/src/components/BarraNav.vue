<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-primary-color sticky-top" id="navbar" style="height: 5em;">
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

            <a class="btn button-color" href="#/login" role="button" v-if="!logado">Entrar</a>

            <div class="dropdown" v-if="logado">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {{email}}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#/imoveis">Imóveis</a></li>
                    <li><a class="dropdown-item" href="#/">Transações</a></li>
                    <li><a class="dropdown-item" href="#/">Perfil</a></li>
                    <li><a class="dropdown-item" @click.prevent="sair()">Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default{
    created() {
        this.verificarLogin();
    },
    data() {
        return {
            activePage: 0,
            pages: [
                {
                    link: {text: 'Home', url: 'index.html'},
                    pageTitle: 'Home Page',
                    content: 'This is the Home content',
                },
                {
                    link: {text: 'Ajuda', url: 'ajuda.html'},
                    pageTitle: 'Help Page',
                    content: 'This is the Help content',
                },
                {
                    link: {text: 'Sobre', url: 'sobre.html'},
                    pageTitle: 'About Page',
                    content: 'This is the About content',
                },
            ],
            logado: false,
            email: 123, // username ?
        }
    },
    methods: {
        async verificarLogin() {
            let logado = await localStorage.getItem('token') != undefined;
            this.logado = logado;
            let credentials = logado ? JSON.parse(localStorage.getItem('login')) : {};
            this.email = credentials.email;
        },
        async sair() {
            // chamar método de deslogar
            localStorage.removeItem('token');
            this.logado = false;
        }
    }
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