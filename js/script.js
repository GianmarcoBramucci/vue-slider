import {slides} from "./data.js"; 

Vue.createApp({
    data(){
        return{
            slides,
            active: {
                flag: true
                
            }
            
        }
    },
    methods: {

    }
}).mount('#app')