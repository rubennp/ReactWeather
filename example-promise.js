// function getTempCallBack (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack ('Barcelona', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Barcelona').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge Area
var a = 6, b = 10, c = 'rubèn';

function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') resolve(a+b);
    else reject('a & b need to be numbers');
  });
}

addPromise(a, b).then(function (sum) {
  console.log('promise success: ', sum);
}, function (err) {
  console.log('promise error: ', err);
});

addPromise(a, c).then(function (sum) {
  console.log('promise success: ', sum);
}, function (err) {
  console.log('promise error: ', err);
});
