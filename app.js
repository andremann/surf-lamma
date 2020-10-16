var app = new Vue({
    el: '#lamma-surf',
    data: {
        base: "http://www.lamma.rete.toscana.it/models/ww3",
        wave: "/last/swh.",
        wind: "/last/wind10.",
        current: 1,
        flag: true,
        model: 'lr',
        area: 'M'
    },
    methods: {
        prev: function () {
            this.current = this.current - 1;
        },
        next: function () {
            this.current = this.current + 1;
        },
        swap: function () {
            this.flag = !this.flag;
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
