function not(_function) {
    return function wrapped() {
        let result = function_call(_function, arguments);
        assert(boolean_is)(result);
        return !result;
    }
}