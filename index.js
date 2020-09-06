function getLocation(){ 
    const lat = pos.coords.latitude;   //緯度を取得して定数latに代入
    const lng = pos.coords.longitude;  //経度を取得して定数lngに代入

    $('#textLocation').text(`緯度：${lat} 経度：${lng}`);
}
