function curriedAdd(total = 0) {
    if(!total) return 0;

    function add(num){
        if(!num) return total;
        total += num;
        return add;
    }
    return add;
}

module.exports = { curriedAdd };
