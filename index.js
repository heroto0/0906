

setInterval('getLocation()',1000);

function getLocation() {
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        function(position) {
            //alert("緯度:"+position.coords.latitude+",経度"+position.coords.longitude);
  
  
            document.getElementById('textLocation').innerHTML = position.coords.latitude +  " "  + position.coords.longitude;
  
        },
        // 取得失敗した場合
        function(error) {
          switch(error.code) {
            case 1: //PERMISSION_DENIED
              alert("位置情報の利用が許可されていません");
              break;
            case 2: //POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした");
              break;
            case 3: //TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:"+error.code+")");
              break;
          }
        }
      );
}
