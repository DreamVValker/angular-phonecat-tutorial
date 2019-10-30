angular.
module('core').
filter('checkmark', function () {
    return function (input) {
        return input ? '\u2718' : '\u2718';
    }
})