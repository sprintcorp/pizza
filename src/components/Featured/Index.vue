<template>
    <div>
        <Carousel :perPage="1" :mouseDrag=true :paginationEnabled=false>
            <Slide v-for="(slide,index) in slides" :key="index">
            <div class="slider_bck" :style="{'background':`url(${slide.bck})`}">
                <div class="container slider-container">
                    <div class="text">
                        <div>{{slide.text}}</div>
                    </div>
                    <div class="image">
                        <img :src="slide.img"/>
                    </div>
                </div>

            </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import sliderOne from '../../assets/images/slide_bck.jpg';
    import sliderTwo from '../../assets/images/slide_bck2.jpg';

    import pizzaOne from '../../assets/images/pizza_one.png';
    import pizzaTwo from '../../assets/images/pizza_two.png';
    // import pizzaThree from '../../assets/images/pizza_three.png';
    export default {
        data(){
          return{
              slides:[
                  {
                      text:'20% OFF ON ALL PIZZA',
                      bck:sliderOne,
                      img:pizzaOne,
                  },
                  {
                      text:'BUY TWO GET ONE FREE',
                      bck:sliderTwo,
                      img:pizzaTwo,
                  }
              ]
          }
        },
        components: {
            Carousel,
            Slide
    }
    };
</script>