import {createRouter, createWebHashHistory} from 'vue-router';

import telaInicial from './views/telaInicial.vue';
import telaLogin from './views/telaLogin.vue';
import telaCadastro from './views/telaCadastrar.vue';
import dadosComprador from './views/dadosComprador.vue';

import imoveis from './views/imoveis/imoveis.vue';
import cadastrarImovel from './views/imoveis/cadastrarImovel.vue';
import visualizarImoveis from './views/imoveis/visualizarImoveis.vue';
import editarImovel from './views/imoveis/editarImovel.vue';

import transacoes from './views/transacoes/transacoes.vue';
import cadastrarTransacao from './views/transacoes/cadastrarTransacao.vue';
import visualizarTransacoes from './views/transacoes/visualizarTransacoes.vue';
import editarTransacao from './views/transacoes/editarTransacao.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: telaInicial},
        {path: '/login', component: telaLogin},
        {path: '/cadastrar', component: telaCadastro},
        {path: '/perfil', component: dadosComprador},
        {
            path: '/imoveis',
            component: imoveis,
            children: [
                {path: '', component: visualizarImoveis},
                {path: 'cadastrar', component: cadastrarImovel},
                {path: 'editar/:index', component: editarImovel},
            ]
        },
        {
            path: '/transacoes',
            component: transacoes,
            children: [
                {path: '', component: visualizarTransacoes},
                {path: 'cadastrar', component: cadastrarTransacao},
                {path: 'editar/:index', component: editarTransacao},
            ]
        },
    ]
});

export default router;