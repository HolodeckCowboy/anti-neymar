<template>
    <title>
        ANTI NEYMAR
    </title>
    <main>
        <div class="container bg-white align-content-center">
            <h3 class="align-center">
                CANSADO DE RECEBER REPLIES DO NEYMAR DIZENDO PRA VOCÊ OLHA O FIXADO DELE?
                CLIQUE NO BOTÃO ABAIXO E RESOLVA SEUS PROBLEMAS!
            </h3>
            <button class="btn btn-xl btn-danger" @click="blockAccount">BLOQUEAR</button>
        </div>

        <div class="d-block text-center border-black" v-if="visible">
            <h3>CONTA BLOQUEADA</h3>
            <h5>SEM MAIS INCOMODAÇÃO NESSA PORRA</h5>
            <button class="mt-2" @click="visible = false">Beleza!</button>
        </div>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            accountName: '',
            visible: false
        };
    },
    methods: {

        blockAccount() {
            this.visible = true
            // try {
            //     const response = await axios.post('/block-account', { accountName: this.accountName });
            //     console.log(`Successfully blocked account with name "${this.accountName}"`);
            // } catch (error) {
            //     console.error('An error occurred while blocking the account:', error);
            // }
        }
    }
};
</script>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>