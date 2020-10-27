var app = new Vue({
    el: '#lamma-surf',
    data: {
        base: "http://www.lamma.rete.toscana.it/models/ww3",
        wave: "/last/swh.",
        wind: "/last/wind10.",
        current: 1,
        model: 'lr',
        area: 'M'
    },
    methods: {
        step: function (n) {
            this.current = this.current + n;
        },
        swap_model: function () {
            if (this.model == 'lr') {
                this.model = 'hr';
                this.area = 'B';
            } else if (this.model == 'hr') {
                this.model = 'lr';
                this.area = 'M';
            }
        }
    },
    mounted() {
        
    }
})
