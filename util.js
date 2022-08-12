// hp: high procedure
let hcb = {
    iterSwap_hp: function (cur, next) {
        return function () {
            let z = cur;
            cur = next;
            next = z;
            return z;
        };
    },
    radian: function (angle) {
        return Math.PI / 180 * angle;
    },
    nextNumber_hp: function (a, b, step) {
        let cur = a;
        return function () {
            let next = cur + step;
            if ((a >= b && next < b) || (a <= b && next > b)) {
                cur = a;
                return cur;
            }
            cur = next;
            return cur;
        }
    },
    whileCount: function (count, fn) {
        while (count --) {
            fn();
        }
    }
}