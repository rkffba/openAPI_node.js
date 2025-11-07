/* NodeJs 12 샘플 코드  // 차량종류 목록 조회   */


var request = require('request');

var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getVhcleKndList';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */

//  ?serviceKey=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458&_type=json

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});



/* NodeJs 12 샘플 코드  // 도시코드 목록조회    */


// var request = require('request');

// var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getCtyCodeList';
// var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */

// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, body) {
//     // console.log('Status', response.statusCode);
//     // console.log('Headers', JSON.stringify(response.headers));
//     console.log('Reponse received', body);
// });




/* NodeJs 12 샘플 코드  // 출/도착지기반열차정보 조회  */


// var request = require('request');

// var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo';
// var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
// queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */
// queryParams += '&' + encodeURIComponent('depPlaceId') + '=' + encodeURIComponent('NAT010000'); /* */
// queryParams += '&' + encodeURIComponent('arrPlaceId') + '=' + encodeURIComponent('NAT011668'); /* */
// queryParams += '&' + encodeURIComponent('depPlandTime') + '=' + encodeURIComponent('20251101'); /* */
// // queryParams += '&' + encodeURIComponent('trainGradeCode') + '=' + encodeURIComponent('00'); /* */

// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, body) {
//     //console.log('Status', response.statusCode);
//     //console.log('Headers', JSON.stringify(response.headers));
//     console.log('Reponse received', body);
//     console.log(encodeURIComponent('serviceKey')+ 1);
// });




/* NodeJs 12 샘플 코드  // 시/도별 기차역 목록조회*/


//var request = require('request');

//var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList';
//var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
//queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
//queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
//queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */
//queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('11'); /* */

//request({
//    url: url + queryParams,
//    method: 'GET'
//}, function (error, response, body) {
//    //console.log('Status', response.statusCode);
//    //console.log('Headers', JSON.stringify(response.headers));
//    console.log('Reponse received', body);
//});

