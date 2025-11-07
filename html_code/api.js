$(function(){
    vehicle();
    city();
    // let arr = document.querySelector("#hidden").textContent;
    // console.log("리스트"+arr);
    // arr += arr.split(",");

    let arr = [11,12, 21, 22, 23, 24, 25, 26, 31, 32,33, 34, 35, 36,37, 38];
    
    for(let i in arr){  // 16개
        station(arr[i]);
        console.log(i);
    }

});
function vehicle(){
    $.ajax({
        url : "http://apis.data.go.kr/1613000/TrainInfoService/getVhcleKndList?serviceKey=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458",
        type : "GET",
        dataType : "json",
        success : function(error, response, body){
            
            // console.log(body.responseJSON.response.body.items.item);

            let arr = body.responseJSON.response.body.items.item

            let div = document.getElementById("target1");
            let table = document.createElement("table");

            for (let i in arr){
                let row = document.createElement("tr");
                let id = document.createElement("td");
                let name = document.createElement("td");

                id.innerHTML = arr[i].vehiclekndid;
                name.innerHTML = arr[i].vehiclekndnm;

                row.appendChild(id);
                row.appendChild(name);

                table.appendChild(row);
            }
            div.appendChild(table);
            
        },
        complete : function(){
            console.log("target1 complete");
        },
        error : function(){
            alert("실패");
            console.log(error);
        }
    });
}
function city(){
    $.ajax({
        url : "http://apis.data.go.kr/1613000/TrainInfoService/getCtyCodeList?serviceKey=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458",
        type : "GET",
        dataType : "json",
        async : false,
        success : function(body){
            
            // console.log(body.response.body.items.item);

            let arr = body.response.body.items.item

            let div = document.getElementById("target2");
            let table = document.createElement("table");

            let list = document.getElementById("hidden");
            // list.innerHTML = "{";
            
            for (let i in arr){


                list.innerHTML += arr[i].citycode+",";

                let row = document.createElement("tr");
                let citycode = document.createElement("td");
                let cityname = document.createElement("td");

                citycode.innerHTML = arr[i].citycode;
                cityname.innerHTML = arr[i].cityname;

                row.appendChild(citycode);
                row.appendChild(cityname);

                table.appendChild(row);
            }
            div.appendChild(table);
            // list.innerHTML += "}";

        },
        complete : function(){
            console.log("target2 complete");
        },
        error : function(){
            alert("실패");
            console.log(error);
        }
    });
}
function station(citycode){
        $.ajax({
        url : "http://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList?serviceKey=1ee5a397f643a9cbf17ab6866fbcaf54c34064a99da29a8425e30e3d2333f458&cityCode=" + encodeURIComponent(citycode),
        type : "GET",
        dataType : "json",
        success : function(body){
            
            // console.log(body.response.body.items.item);

            let arr = body.response.body.items.item

            let div = document.getElementById("target3");
            let table = document.createElement("table");
            
            for (let i in arr){
                let row = document.createElement("tr");
                let nodeid = document.createElement("td");
                let nodename = document.createElement("td");

                nodeid.innerHTML = arr[i].nodeid;
                nodename.innerHTML = arr[i].nodename;

                row.appendChild(nodeid);
                row.appendChild(nodename);

                table.appendChild(row);
            }
            div.appendChild(table);
            
        },
        complete : function(){
            console.log("target3 complete");
        },
        error : function(){
            alert("실패");
            console.log(error);
        }
    });
}
