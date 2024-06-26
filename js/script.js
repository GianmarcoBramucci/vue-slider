import {slides} from "./data.js"; 

Vue.createApp({
    data(){
        return{
            slides,
            ativeIndex : 0,
            clock : ''
        }
    },
    methods: {
        ative: function(i){
            if(i === this.ativeIndex){
                return 'active thumb';
            }
            else{
                return 'thumb';
            }
        },
        slideForward: function(){
            if(this.ativeIndex<slides.length-1){
                this.ativeIndex++;
            }
            else{
                this.ativeIndex=0;
            }
        },
        slideBack: function(){
            if(this.ativeIndex>0){
                this.ativeIndex--;
            }
            else{
                this.ativeIndex=slides.length-1;
            }
        },
        autoPlay: function(){
            this.clock=setInterval(this.slideForward(),300);
        },
        clearautoPlay: function(){
            clearInterval(this.clock);
        }

    }
}).mount('#app')