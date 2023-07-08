import {createRouter, createWebHashHistory} from 'vue-router';

import telaInicial from './sitePrincipal/components/telaInicial.vue';
import telaLogin from './sitePrincipal/telaLogin.vue';
import cadastrarImovel from './sitePrincipal/components/cadastrarImovel.vue';
import visualizarImoveis from './sitePrincipal/components/visualizarImoveis.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: telaInicial},
        {path: '/login', component: telaLogin},
        {path: '/cadastrarImovel', component: cadastrarImovel},
        {path: '/visualizarImoveis', component: visualizarImoveis}
    ]
});

export default router;