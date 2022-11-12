"use strict"

const {createApp} = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue',
            image: 'https://www.placecage.com/345/345'
        }
    }
}).mount('#app')