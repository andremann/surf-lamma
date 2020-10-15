var app = new Vue({
    el: '#lamma-surf',
    data: {
      wave: "http://www.lamma.rete.toscana.it/models/ww3hr/last/swh.B.",
      wind: "http://www.lamma.rete.toscana.it/models/ww3hr/last/wind10.B.",
      current: 1,
      flag: true
    },
    methods: {
      prev: function() {
        this.current = this.current - 1;
  
      },
      next: function() {
        this.current = this.current + 1;
  
      },
      swap: function() {
        this.flag = !this.flag;
  
      },
    }
  })
  