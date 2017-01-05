function foo(){
    var bar;
    quux = 'test 2';

    function zip() {
        var quux = 'test';
        bar = true;
    }

    return zip;
}
