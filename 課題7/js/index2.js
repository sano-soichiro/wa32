$('#List').append($('<option>').html('地域を選択してください。').val(''));

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET" , "primary_area.xml");
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    let elm = xmlhttp.responseXML.documentElement;
                    let node = elm.getElementsByTagName("city");
                    for(let i = 0; i < node.length; i++){
                        $("#List").append(`<option value="${node[i].getAttribute('id')}">${node[i].getAttribute("title")}</option>`);
                        console.log(node[i].getAttribute("title"));
                    }
                }
            }
        }

        var map;
        var info;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -33.867, lng: 151.195},
                zoom: 18
            });

            const request = {
                query: "Museum of Contemporary Art Australia",
                fields: ["name", "geometry"],
            };

            var service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, function(results, status ) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (let i = 0; i < results.length; i++) {
                            let place = results[i];
                            console.log(place);
                        }
                    
                        // map.setCenter(results[0].geometry.location);
                    }
                }
            );
        }
        function reco() {
            let search = $('#address').val();
            let address = $("#List option:selected").val();
            let param = {
            "query": address + search,
            "region": "jp",
            "language": "ja"
            }

            let url = "https://maps.googleapis.com/maps/api/place/textsearch/json";

            xmlhttp.open('GET', url);
            xmlhttp.onreadystatechange = function () {
                if (request.readyState != 4) {
                    // リクエスト中
                } else if (request.status != 200) {
                    // 失敗
                } else {
                    // 取得成功
                    // var result = request.responseText;
                }
            }

            map.panTo(new google.maps.LatLng(35.69157895551821, 139.69695974807647));
            var iwopts = {
                content: "a",
                position: map.getCenter()
            }
            var info = new google.maps.InfoWindow(iwopts);
            info.open(map);
        }

        xmlhttp.send();