function getTempCallbakk (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallbakk('Philadelphia', function(err, temp) {
    if(err) {
        console.log('error', err);
    } else {
        console.log('sucess', temp);
    }
});

function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Philadelphia').then(function (temp) {
    console.log('promise sucess', temp);
}, function (err) {
    console.log('promise error', err);
});