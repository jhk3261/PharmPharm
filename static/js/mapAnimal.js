var markers = [];

// 지도 띄우기
var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5
    };

var map = new kakao.maps.Map(mapContainer, mapOption);


// 현재 위치 파악하기
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
            lon = position.coords.longitude;
        var locPosition = new kakao.maps.LatLng(lat, lon);
        displayMarker(locPosition);
    });
} else {
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    displayMarker(locPosition);
}

function displayMarker(locPosition) {
    map.setCenter(locPosition);
}


// 지도 스카이뷰
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 확대 축소 
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


// 장소 검색 객체 생성
var ps = new kakao.maps.services.Places();

// 이거 안된다.. 옵션이 안 먹어
function resultOption(locPosition) {
    var options = {
        location: locPosition,
        radius: 500,
    }
}

// 키워드로 장소를 검색합니다
ps.keywordSearch('진주시 가좌동 동물약국', placesSearchCB, resultOption);


// 키워드 검색 완료 시 호출되는 콜백함수
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        var bounds = new kakao.maps.LatLngBounds();
        for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
    }
}

// 키워드 검색 결과 마커 표시
function displayMarker(place) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
    });
}