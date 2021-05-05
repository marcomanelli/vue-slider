const app = new Vue({

  el: '#app',
  data:{
    counter: 0,
    photos:[
      'img/img1.jpg',
      'img/img2.jpg',
      'img/img3.jpg',
      'img/img4.jpg',
    ]
  },
  methods:{

    toNext(){
      this.counter++
      if(this.counter == this.photos.length){
        this.counter = 0
      }
    },

    toPrev(){
      this.counter--
      if(this.counter < 0){
        this.counter = this.photos.length -1
      }
    }
  }


});