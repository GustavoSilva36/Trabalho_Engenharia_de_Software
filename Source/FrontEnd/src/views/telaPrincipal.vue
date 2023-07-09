<!-- <template>
    <barra-nav></barra-nav>
    <tela-inicial></tela-inicial>
    <visualizar-imoveis
        :imoveis="imoveis"
    ></visualizar-imoveis>
    <cadastrar-imoveis
        :imovel-cadastrado="imovelCadastrado"
    ></cadastrar-imoveis>
</template>

<script>
import BarraNav from './components/BarraNav.vue';
import TelaInicial from './components/telaInicial.vue';
import VisualizarImoveis from './components/visualizarImoveis.vue';
import CadastrarImoveis from './components/cadastrarImovel.vue'

export default{
    components: {
        BarraNav,
        TelaInicial,
        VisualizarImoveis,
        CadastrarImoveis
    },
    data() {
        return {
            imoveis: [],
            botaoEntrar: {text: 'Entrar', url: 'telaVisualizarImoveis.html'}
        }
    },
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
</script> -->