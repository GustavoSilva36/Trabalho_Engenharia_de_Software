import {createRouter, createWebHashHistory} from 'vue-router';

import telaInicial from './views/telaInicial.vue';
import telaLogin from './views/telaLogin.vue';
import telaCadastro from './views/telaCadastrar.vue'
import cadastrarImovel from './views/cadastrarImovel.vue';
import visualizarImoveis from './views/visualizarImoveis.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: telaInicial},
        {path: '/login', component: telaLogin},
        {path: '/cadastrar', component: telaCadastro},
        {path: '/cadastrarImovel', component: cadastrarImovel},
        {path: '/visualizarImoveis', component: visualizarImoveis}
    ]
});

export default router;