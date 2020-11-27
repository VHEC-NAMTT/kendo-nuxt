<template>
    <div>
        <b-modal id="modal-scoped" size="lg" hide-header hide-footer no-close-on-backdrop>
            <template #default>                
                <iframe ref="framePopup" src="/master?lo=pop" frameborder="0" class="w-100" style="height: 800px"></iframe>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    mounted(){
        let me = this;
        this.$bvModal.show("modal-scoped");
    }
}
</script>

<style>

</style>