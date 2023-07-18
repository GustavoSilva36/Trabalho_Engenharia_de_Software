<template>
    <div class="modal-dialog modal-confirm">
            <div class="modal-content">
                <div class="modal-header flex-column">
                    <h4 class="modal-title w-100">{{titulo}}</h4>
                </div>
                <div class="modal-body">
                    <p>{{conteudo}}</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deletar">Delete</button>
                </div>
            </div>
        </div>
</template>

<script>
export default{
    name: 'confirmarDelete',
    props: {
        titulo: {
            type: String,
            default() {
                return '';
            }
        },
        conteudo: {
            type: String,
            default() {
                return '';
            }
        },
        deletar: {
            type: Function,
            default() {
                return {};
            }
        }
    }
}
</script>