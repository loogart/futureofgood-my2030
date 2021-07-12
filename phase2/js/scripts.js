/* Data aos animation */
AOS.init();

$(document).ready(function () {
    /* hide dismissable banner */
    $('.close-this').click(function () {
        $('.hero-dismissable').hide();
    });

    $('.open-mobile-filters').click(function () {
        $('.filters').addClass('d-block');
    });

    $('.close-mobile-filters').click(function () {
        $('.filters').removeClass('d-block');
    });

    //toggle map view
    $(function () {
        $("#customSwitch1").change(function () {
            $("#resultsMap").toggleClass("d-block", this.checked);
            $("#resultsGrid").toggleClass("d-none", this.checked);
        }).change();
    });

    //rotate plus icons
    $('.filter-accordion').click(function () {
        $(this).children('.filter-plus').toggleClass('filter-plus-open');
    });


    // toggle vote button look
    $('.vote-now').click(function () {
        if ($(this).hasClass("btn-outline-danger")) {
            $('#popupUnvoted').modal('show');
            $(this).removeClass('btn-outline-danger').addClass('btn-primary').text("Vote");
        } else {
            $('#popupVoted').modal('show');
            $(this).removeClass('btn-primary').addClass('btn-outline-danger').text("Remove vote");
        }
    });

});

// Google Maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(55.1304, -96.3468),
        //map customization styles
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                  }
                ]
              },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                  }
                ]
              },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                  }
                ]
              },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                  }
                ]
              },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                  }
                ]
              },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                  }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                  }
                ]
              },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                  }
                ]
              },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                  }
                ]
              },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                      }
                    ]
                  },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                      }
                    ]
                  },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                      }
                    ]
                  },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                      }
                    ]
                  },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                      }
                    ]
                  },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                  }
                ]
              }
            ]
    });
    // custom Le Burger Week icon for Maps
    //    var image = './img/poutine-marker.svg';

    var image = {
        url: "./img/green-dot.svg", // url
        scaledSize: new google.maps.Size(20, 20), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // Example of my location
    var marker = new google.maps.Marker({
        position: {
            lat: 45.5035,
            lng: -73.5695
        },
        map: map,
        title: 'My location'
    });

    // First project
    var projectMarker1 = new google.maps.Marker({
        position: {
            lat: 45.5035,
            lng: -73.5685
        },
        map: map,
        icon: image,
        title: 'Project 1'
    });

    var contentString1 =
        '<div id="content" style="max-width:320px">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img src="./img/fallback-img.svg" class="card-img-top mb-3" alt="...">' +
        '<h5 class="card-title">Name of initiative</h5>' +
        '<p class="card-text">This project is awesome because it is an awesome project that is super uber cool.</p>' +
        '<div class="d-flex justify-content-between flex-wrap">' +
        '<a href="project.html" class="btn btn-sm btn-outline-primary mb-2">View details</a>' +
        '<a href="#!" class="btn btn-sm btn-primary mb-2 vote-now" data-toggle="modal" data-target="#popupVoted">Vote</a>' +
        '</div>' +
        '<div class="d-flex justify-content-start flex-wrap mt-3 border-top pt-3">' +
        '<ul class="list-inline mb-0">' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg5 pr-2">&nbsp;</span></li>' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg11 pr-2">&nbsp;</span></li> ' +
        '</ul>' +
        '</div>' +
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });
    projectMarker1.addListener('click', function () {
        infowindow1.open(map, projectMarker1);
        infowindow2.close(map, projectMarker2);
        infowindow3.close(map, projectMarker3);
        infowindow4.close(map, projectMarker4);
    });

    // Second project
    var projectMarker2 = new google.maps.Marker({
        position: {
            lat: 53.1355,
            lng: -57.6604
        },
        map: map,
        icon: image,
        title: 'Project 2'
    });
    var contentString2 =
        '<div id="content" style="max-width:320px">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img src="./img/fallback-img.svg" class="card-img-top mb-3" alt="...">' +
        '<h5 class="card-title">Name of initiative</h5>' +
        '<p class="card-text">This project is awesome because it is an awesome project that is super uber cool.</p>' +
        '<div class="d-flex justify-content-between flex-wrap">' +
        '<a href="project.html" class="btn btn-sm btn-outline-primary mb-2">View details</a>' +
        '<a href="#!" class="btn btn-sm btn-primary mb-2 vote-now" data-toggle="modal" data-target="#popupVoted">Vote</a>' +
        '</div>' +
        '<div class="d-flex justify-content-start flex-wrap mt-3 border-top pt-3">' +
        '<ul class="list-inline mb-0">' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg3 pr-2">&nbsp;</span></li>' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg10 pr-2">&nbsp;</span></li> ' +
        '</ul>' +
        '</div>' +
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
    projectMarker2.addListener('click', function () {
        infowindow2.open(map, projectMarker2);
        infowindow1.close(map, projectMarker1);
        infowindow3.close(map, projectMarker3);
        infowindow4.close(map, projectMarker4);
    });

    // Third project
    var projectMarker3 = new google.maps.Marker({
        position: {
            lat: 49.2827,
            lng: -123.1207
        },
        map: map,
        icon: image,
        title: 'Project 3'
    });
    var contentString3 =
        '<div id="content" style="max-width:320px">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img src="./img/fallback-img.svg" class="card-img-top mb-3" alt="...">' +
        '<h5 class="card-title">Name of initiative</h5>' +
        '<p class="card-text">This project is awesome because it is an awesome project that is super uber cool.</p>' +
        '<div class="d-flex justify-content-between flex-wrap">' +
        '<a href="project.html" class="btn btn-sm btn-outline-primary mb-2">View details</a>' +
        '<a href="#!" class="btn btn-sm btn-primary mb-2 vote-now" data-toggle="modal" data-target="#popupVoted">Vote</a>' +
        '</div>' +
        '<div class="d-flex justify-content-start flex-wrap mt-3 border-top pt-3">' +
        '<ul class="list-inline mb-0">' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg6 pr-2">&nbsp;</span></li>' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg7 pr-2">&nbsp;</span></li> ' +
        '</ul>' +
        '</div>' +
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    projectMarker3.addListener('click', function () {
        infowindow3.open(map, projectMarker3);
        infowindow2.close(map, projectMarker2);
        infowindow1.close(map, projectMarker1);
        infowindow4.close(map, projectMarker4);
    });

    // Fourth project
    var projectMarker4 = new google.maps.Marker({
        position: {
            lat: 53.5461,
            lng: -113.4938
        },
        map: map,
        icon: image,
        title: 'Project 4'
    });
    var contentString4 =
        '<div id="content" style="max-width:320px">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img src="./img/fallback-img.svg" class="card-img-top mb-3" alt="...">' +
        '<h5 class="card-title">Name of initiative</h5>' +
        '<p class="card-text">This project is awesome because it is an awesome project that is super uber cool.</p>' +
        '<div class="d-flex justify-content-between flex-wrap">' +
        '<a href="project.html" class="btn btn-sm btn-outline-primary mb-2">View details</a>' +
        '<a href="#!" class="btn btn-sm btn-primary mb-2 vote-now" data-toggle="modal" data-target="#popupVoted">Vote</a>' +
        '</div>' +
        '<div class="d-flex justify-content-start flex-wrap mt-3 border-top pt-3">' +
        '<ul class="list-inline mb-0">' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg1 pr-2">&nbsp;</span></li>' +
        '<li class="list-inline-item"><span class="badge bagde-pill badge-sdg15 pr-2">&nbsp;</span></li> ' +
        '</ul>' +
        '</div>' +
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });
    projectMarker4.addListener('click', function () {
        infowindow4.open(map, projectMarker4);
        infowindow2.close(map, projectMarker2);
        infowindow3.close(map, projectMarker3);
        infowindow1.close(map, projectMarker1);
    });

}
