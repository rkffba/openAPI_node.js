module.exports = {
    user			:process.env.NODE_ORACLEDB_USER || "junseo",
    password		:process.env.NODE_ORACLEDB_PASSWORD || "junseo1015",
    connectString	:process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1521/XE",
    externalAuth	:process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};


var request = require('request');

// var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getCtyCodeList';
// var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */

// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, body) {
//     let data = (JSON.parse(body)).response.body.items.item
//     console.log(data);


//     var oracledb = require("oracledb");
//     var dbConfig = require("./index.js");

//     oracledb.autoCommit = true; //자동 커밋
//     oracledb.getConnection({
//         user:dbConfig.user,
//         password:dbConfig.password,
//         connectString:dbConfig.connectString
//         },
//         function(err,conn) {
//             if(err) {throw err;}
            
//             console.log("Oracle DB 연결 성공!!");
            
//             var sql;
            
//             sql = "insert into 지역 (citycode,cityname) values (:citycode,:cityname)";
            
//             var result = conn.executeMany(sql,data,{}); // {} 함수
//             console.log("입력 완료!!");
            
//             sql = "select * from 지역";
            
//             conn.execute(sql,[],function(err,result) {
//                 if(err) {throw err;}
//                 console.log(result.rows);
//                 doRelease(conn);
//             });
//         }
//     );
//     function doRelease(conn) {
//         conn.release(function(err) {
//             if(err) {throw err;}
//         });
//     }
// });


// let arr = [11,12, 21, 22, 23, 24, 25, 26, 31, 32,33, 34, 35, 36,37, 38];

// for (let i in arr){
//     stations(arr[i]);
// }

// function stations(num){
//     var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList';
//     var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
//     queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
//     queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('200'); /* */
//     queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */
//     queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent(num); /* */

//     request({
//         url: url + queryParams,
//         method: 'GET'
//     }, function (error, response, body) {
//         let data = (JSON.parse(body)).response.body.items.item;

//         for (let i in data){
//             data[i].citycode = num;
//         }

//         console.log(data);

//             var oracledb = require("oracledb");
//             var dbConfig = require("./index.js");

//             oracledb.autoCommit = true; //자동 커밋
//             oracledb.getConnection({
//                 user:dbConfig.user,
//                 password:dbConfig.password,
//                 connectString:dbConfig.connectString
//                 },
//                 function(err,conn) {
//                     if(err) {throw err;}
                    
//                     console.log("Oracle DB 연결 성공!!");
                    
//                     var sql;
                    
//                     sql = "insert into 역 (nodeid,nodename,citycode) values (:nodeid,:nodename,:citycode)";
                    
//                     var result = conn.executeMany(sql,data,{}); // {} 함수
//                     console.log("입력 완료!!");
                    
//                     sql = "select * from 역";
                    
//                     conn.execute(sql,[],function(err,result) {
//                         if(err) {throw err;}
//                         console.log(result.rows);
//                         doRelease(conn);
//                     });
//                 }
//             );
//             function doRelease(conn) {
//                 conn.release(function(err) {
//                     if(err) {throw err;}
//                 });
//             }
//     });
// }


// var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getVhcleKndList';
// var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */

// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, body) {
//     let data = (JSON.parse(body)).response.body.items.item
//     console.log(data);

//     const fil = data.map(item => ({
//         vehiclekndid: Number(item.vehiclekndid),
//         vehiclekndnm: item.vehiclekndnm
//     }));


//     var oracledb = require("oracledb");
//     var dbConfig = require("./index.js");

//     oracledb.autoCommit = true; //자동 커밋
//     oracledb.getConnection({
//         user:dbConfig.user,
//         password:dbConfig.password,
//         connectString:dbConfig.connectString
//         },
//         function(err,conn) {
//             if(err) {throw err;}
            
//             console.log("Oracle DB 연결 성공!!");
            
//             var sql;
            
//             sql = "insert into 열차 (vehiclekndid,vehiclekndnm) values (:vehiclekndid,:vehiclekndnm)";
            
//             var result = conn.executeMany(sql,fil,{}); // {} 함수
//             console.log("입력 완료!!");
            
//             sql = "select * from 열차";
            
//             conn.execute(sql,[],function(err,result) {
//                 if(err) {throw err;}
//                 console.log(result.rows);
//                 doRelease(conn);
//             });
//         }
//     );
//     function doRelease(conn) {
//         conn.release(function(err) {
//             if(err) {throw err;}
//         });
//     }
// });




// var oracledb = require("oracledb");
// var dbConfig = require("./index.js");

// oracledb.autoCommit = true; //자동 커밋

// oracledb.getConnection({
//     user:dbConfig.user,
//     password:dbConfig.password,
//     connectString:dbConfig.connectString
//     },
//     function(err,conn) {

//         if(err) {throw err;}
        
//         console.log("Oracle DB 연결 성공!!");
        
//         var sql;
        
//         //select
//         sql = "select nodeid from 기차역";
        
//         conn.execute(sql,[],function(err,result) {
//             if(err) {throw err;}
//             // console.log(result.rows);


//             let st = result.rows;
//             let ar = result.rows;

//             // console.log( encodeURIComponent(st[0]) );

//             // for(let i in st){
//             //     for(let j in ar){
//             //         // add(st[i][0], ar[j][0]);
//             //         console.log(st[i][0], ar[j][0]);
//             //     }
//             // }
            
//             // for(let i in st){
//             //     if (st[i][0] == "NAT010000") console.log(i) // 298
//             // }


//             for(let i in st){

//                 add(st[298][0], ar[i][0]);
//                 // console.log(st[298][0], ar[i][0]);
                
                
//                 sleep(200);
//                 function sleep(ms) {
//                     const wakeUpTime = Date.now() + ms;
//                     while (Date.now() < wakeUpTime) {}
//                 }
//             }



//             function add(a, b){
                
//                 var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo';
//                 var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458'; /* Service Key*/
//                 queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
//                 queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
//                 queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */
//                 queryParams += '&' + encodeURIComponent('depPlaceId') + '=' + encodeURIComponent(a); /* */
//                 queryParams += '&' + encodeURIComponent('arrPlaceId') + '=' + encodeURIComponent(b); /* */
//                 queryParams += '&' + encodeURIComponent('depPlandTime') + '=' + encodeURIComponent('20251110'); /* */
//                 // queryParams += '&' + encodeURIComponent('trainGradeCode') + '=' + encodeURIComponent('00'); /* */
        
//                 request({
//                     url: url + queryParams,
//                     method: 'GET'
//                 }, function (error, response, body) {
//                     // console.log(body);
//                     console.table(JSON.parse(body).response.body.items.item);
//                 });
//             }

//             doRelease(conn);
//         });
//     }
// );

// //DB 종료
// function doRelease(conn) {
//     conn.release(function(err) {
//         if(err) {throw err;}
//     });
// }




// const request = require("request");
const oracledb = require("oracledb");
const dbConfig = require("./index.js");

oracledb.autoCommit = true;

async function main() {
    try {
        const conn = await oracledb.getConnection({
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString,
        });
        console.log("Oracle DB 연결 성공!!");

        const sql = "select nodeid from 기차역";
        const result = await conn.execute(sql, []);
        let st = result.rows;

        // add를 비동기로 순차 실행
        for (let i = 0; i < st.length; i++) {
            await add(st[298][0], st[i][0]);
            // await sleep(200); // 200ms 대기
        }

        await doRelease(conn);
    } catch (err) {
        console.error(err);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// API 요청을 Promise로 래핑
function add(a, b) {
    return new Promise((resolve, reject) => {
        var url = 'http://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo';
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458';
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100');
        queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json');
        queryParams += '&' + encodeURIComponent('depPlaceId') + '=' + encodeURIComponent(a);
        queryParams += '&' + encodeURIComponent('arrPlaceId') + '=' + encodeURIComponent(b);
        queryParams += '&' + encodeURIComponent('depPlandTime') + '=' + encodeURIComponent('20251110');

        request({
            url: url + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                try {
                    console.table(JSON.parse(body).response.body.items.item);

                    // let fil = JSON.parse(body).response.body.items.item

                    
                    // sql = "insert into 노선 (depplacename, depplandtime, arrplacename, arrplandtime, trainno, traingradename, adultcharge) values (:depplacename,:depplandtime,:arrplacename,:arrplandtime,:trainno,:traingradename,:adultcharge)";
                    
                    // var result = conn.executeMany(sql,fil,{}); // {} 함수
                    // console.log("입력 완료!!");
                    
                    // sql = "select * from 노선";
                    
                    // conn.execute(sql,[],function(err,result) {
                    //     if(err) {throw err;}
                    //     console.log(result.rows);
                    //     doRelease(conn);
                    // });


                } catch (e) {
                    // 혹시 JSON 파싱 실패 시 무시
                }
                resolve();
            }
        });
    });
}

async function doRelease(conn) {
    try {
        await conn.release();
    } catch (err) {
        console.error(err);
    }
}

main();
