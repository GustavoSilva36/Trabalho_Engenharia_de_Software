import {createRouter, createWebHashHistory} from 'vue-router';

import telaInicial from './views/telaInicial.vue';
import telaLogin from './views/telaLogin.vue';
import telaCadastro from './views/telaCadastrar.vue';

import imoveis from './views/imoveis/imoveis.vue';
import cadastrarImovel from './views/imoveis/cadastrarImovel.vue';
import visualizarImoveis from './views/imoveis/visualizarImoveis.vue';
import editarImovel from './views/imoveis/editarImovel.vue';

// import cadastrarTransacao from './views/cadastrarTransacao.vue';
// import visualizarTransaecos from './views/visualizarTransacoes.vue';
// import editarTransacao from './views/editarTransacao.vue';

// const routerAntigo = createRouter({
//     history: createWebHashHistory(),
//     routes: [
//         {path: '/', component: telaInicial},
//         {path: '/login', component: telaLogin},
//         {path: '/cadastrar', component: telaCadastro},
//         {path: '/cadastrarImovel', component: cadastrarImovel},
//         {path: '/visualizarImoveis', component: visualizarImoveis},
//         {path: '/editarImovel/:index', component: editarImovel},
//         {path: '/cadastrarTransacao', component: cadastrarTransacao},
//         {path: '/visualizarTransacoes', component: visualizarTransaecos},
//         {path: '/editarTransacao/:index', component: editarTransacao},
//     ]
// });

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: telaInicial},
        {path: '/login', component: telaLogin},
        {path: '/cadastrar', component: telaCadastro},
        {
            path: '/imoveis',
            component: imoveis,
            children: [
                {path: '', component: visualizarImoveis},
                {path: 'cadastrar', component: cadastrarImovel},
                {path: 'editar/:index', component: editarImovel},
            ]
        },
        // {path: '/cadastrarTransacao', component: cadastrarTransacao},
        // {path: '/visualizarTransacoes', component: visualizarTransaecos},
        // {path: '/editarTransacao/:index', component: editarTransacao},
    ]
});

export default router;