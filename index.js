/* NodeJs 12 샘플 코드  // 차량종류 목록 조회   */


//var request = require('request');

//var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getVhcleKndList';
//var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
//queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */

//  ?serviceKey=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458&_type=json

//request({
//    url: url + queryParams,
//    method: 'GET'
//}, function (error, response, body) {
//    //console.log('Status', response.statusCode);
//    //console.log('Headers', JSON.stringify(response.headers));
//    console.log('Reponse received', body);
//});



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




// 오라클 DB 설정 파일

module.exports = {
		user			:process.env.NODE_ORACLEDB_USER || "junseo",
		password		:process.env.NODE_ORACLEDB_PASSWORD || "junseo1015",
		connectString	:process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1521/XE",
		externalAuth	:process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};


//Oracle 사용하기
//npm install oracledb --save

var oracledb = require("oracledb");
var dbConfig = require("./api.js");

oracledb.autoCommit = true; //자동 커밋

oracledb.getConnection({
	user:dbConfig.user,
	password:dbConfig.password,
	connectString:dbConfig.connectString
	},
	function(err,conn) {
		
		if(err) {throw err;}
		
		console.log("Oracle DB 연결 성공!!");
		
		var sql;
		
		//create
		/*sql = "create table cuser (id varchar2(10), password varchar2(10),";
		sql+= "name varchar2(10), age number)";
		
		conn.execute(sql);
		
		console.log("테이블 생성 완료!!");*/
		
		//insert
		sql = "insert into cuser values (:id,:pw,:name,:age)";
		
		//데이터 한개 넣을 때
		//binds = [["b123","123","suzi",27]];
		
		//여러개 넣을 때는
		/*binds = [
		         ["c123","123","suzi",27],
		         ["d123","123","suzi",27],
		         ["e123","123","suzi",27]
		         
		         ];
		
		
		var result = conn.executeMany(sql,binds,{}); // {} 함수
		
		console.log("입력 완료!!");*/
		
		//update
		/*sql = "update cuser set password=:pw,name=:name,age=:age where id=:id";
		
		conn.executeMany(sql,[["777","inna",30,"a123"]]);
		
		console.log("수정 완료");*/
		
		
		//delete
		/*sql = "delete cuser where id=:id";
		conn.execute(sql,["a123"]);
		
		console.log("삭제 완료!!");*/
		
		
		//select
		sql = "select * from employee";
		
		conn.execute(sql,[],function(err,result) {
			
			if(err) {throw err;}
			
			console.log(result.rows);
			
			doRelease(conn);
			
		});
		
	});

//DB 종료
function doRelease(conn) {
	
	conn.release(function(err) {
		
		if(err) {throw err;}
		
	});
	
}
