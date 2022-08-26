import Flickity from "flickity";
import '/node_modules/flickity/dist/flickity.min.css'
import { refsForCarousel } from './refs'

new Flickity(refsForCarousel.carousel, {

  prevNextButtons: false,
  autoPlay: 5000,

})




