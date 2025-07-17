<template>
    <q-form @submit.prevent="submitForm">
        <q-input 
        v-if="tab === 'register'"
        class="q-mb-md"
        outlined 
        v-model="formData.name" 
        label="Name" />
        <q-input 
        class="q-mb-md"   
        outlined 
        v-model="formData.email" 
        label="Email"
        type="email" />
        <q-input 
        class="q-mb-md"
        outlined 
        v-model="formData.password" 
        label="Password" 
        type="password"/>
        <div class="row">
            <q-space />
            <q-btn 
            color="primary" 
            :label="tab" 
            type="submit"/>
        </div>
    </q-form>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        props: ['tab'],
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    password: ''
                },
            }
        },
        methods: {
            ...mapActions('store', ['registerUser']),
            submitForm() {
                if (this.tab === 'register') {
                    this.registerUser(this.formData)
                    // Handle registration logic
                } else {
                    console.log('Login')
                }
            }
        }
    }
</script>