<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal="{delay:250,scale:2}">
               <h1>Hungry?</h1>
            </div>
            <div
                    class="second"
                    v-scroll-reveal.reset="{delay:300,afterReveal:()=>{
                    secondAnim = true
                }}"
            >
                <div v-if="secondAnim">
                    <Animation></Animation>
                </div>

            </div>
            <div class="third" v-scroll-reveal="{delay:600,scale:2}">
                <span>Give us a call </span> <span>9999-0000</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Animation from './Anim.vue';

    export default {
        data(){
          return{
              secondAnim:false
          }
        },
        components:{
            Animation
        }
    }
</script>