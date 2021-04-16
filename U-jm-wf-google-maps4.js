const apiKey = document.querySelector("[udesly-google-map-api]").getAttribute("udesly-google-map-api"),
    script = document.createElement("script");
(script.type = "text/javascript"), (script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=udeslyInitMap`), document.querySelector("body").append(script);
const style = document.createElement("style");
(style.innerHTML = `.gm-style-iw{max-width:400px!important;background:none!important;padding:0!important;margin:0!important;box-shadow:none!important;border-radius:0!important}.gm-style-iw-d{overflow:hidden!important}.gm-style-iw-c{background:none!important}.gm-style-iw-t{background:none!important}.gm-style-iw-a{background:none!important}.gm-style-iw::after{content:none!important}.gm-style-iw-d::after{content:none!important}.gm-style-iw-c::after{content:none!important}.gm-style-iw-t::after{content:none!important}.gm-style-iw-a::after{content:none!important}`),
    document.querySelector("head").append(style);
const nightTheme = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
        { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
        { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
        { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
        { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] },
    ],
    silverTheme = [
        { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
        { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
        { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
    ],
    darkTheme = [
        { elementType: "geometry", stylers: [{ color: "#212121" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
        { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
        { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "poi.park", elementType: "labels.text.stroke", stylers: [{ color: "#1b1b1b" }] },
        { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
        { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#4e4e4e" }] },
        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] },
    ],
    retroTheme = [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c9b2a6" }] },
        { featureType: "administrative.land_parcel", elementType: "geometry.stroke", stylers: [{ color: "#dcd2be" }] },
        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#ae9e90" }] },
        { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#93817c" }] },
        { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#a5b076" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#447530" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#f5f1e6" }] },
        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#fdfcf8" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#f8c967" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#e9bc62" }] },
        { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#e98d58" }] },
        { featureType: "road.highway.controlled_access", elementType: "geometry.stroke", stylers: [{ color: "#db8555" }] },
        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#806b63" }] },
        { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "transit.line", elementType: "labels.text.fill", stylers: [{ color: "#8f7d77" }] },
        { featureType: "transit.line", elementType: "labels.text.stroke", stylers: [{ color: "#ebe3cd" }] },
        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#b9d3c2" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#92998d" }] },
    ],
    aubergineTheme = [
        { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
        { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#64779e" }] },
        { featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
        { featureType: "landscape.man_made", elementType: "geometry.stroke", stylers: [{ color: "#334e87" }] },
        { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#023e58" }] },
        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#283d6a" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6f9ba5" }] },
        { featureType: "poi", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
        { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#023e58" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#3C7680" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#304a7d" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
        { featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2c6675" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#255763" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#b0d5ce" }] },
        { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ color: "#023e58" }] },
        { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
        { featureType: "transit", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
        { featureType: "transit.line", elementType: "geometry.fill", stylers: [{ color: "#283d6a" }] },
        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#3a4762" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4e6d70" }] },
    ];
function positionOptions(a) {
    return "top-center" === a
        ? google.maps.ControlPosition.TOP_CENTER
        : "top-left" === a
        ? google.maps.ControlPosition.TOP_LEFT
        : "top-right" === a
        ? google.maps.ControlPosition.TOP_RIGHT
        : "left-top" === a
        ? google.maps.ControlPosition.LEFT_TOP
        : "right-top" === a
        ? google.maps.ControlPosition.RIGHT_TOP
        : "left-center" === a
        ? google.maps.ControlPosition.LEFT_CENTER
        : "right-center" === a
        ? google.maps.ControlPosition.RIGHT_CENTER
        : "left-bottom" === a
        ? google.maps.ControlPosition.LEFT_BOTTOM
        : "right-bottom" === a
        ? google.maps.ControlPosition.RIGHT_BOTTOM
        : "bottom-center" === a
        ? google.maps.ControlPosition.BOTTOM_CENTER
        : "bottom-left" === a
        ? google.maps.ControlPosition.BOTTOM_LEFT
        : "bottom-right" === a
        ? google.maps.ControlPosition.BOTTOM_RIGHT
        : void 0;
}
function getStyleMaps(a) {
    let b = [];
    switch (a.getAttribute("map-theme")) {
        case "dark":
            b = darkTheme;
            break;
        case "silver":
            b = silverTheme;
            break;
        case "night":
            b = nightTheme;
            break;
        case "retro":
            b = retroTheme;
            break;
        case "aubergine":
            b = aubergineTheme;
    }
    return (
        "off" === a.getAttribute("map-labels") && b.push({ elementType: "labels", stylers: [{ visibility: "off" }] }),
        "off" === a.getAttribute("map-administrative") && b.push({ featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] }),
        "off" === a.getAttribute("map-land-parcel") && b.push({ featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] }),
        "off" === a.getAttribute("map-administrative-neighborhood") && b.push({ featureType: "administrative.neighborhood", stylers: [{ visibility: "off" }] }),
        "off" === a.getAttribute("map-poi") && b.push({ featureType: "poi", stylers: [{ visibility: "off" }] }),
        "off" === a.getAttribute("map-road") && b.push({ featureType: "road", stylers: [{ visibility: "off" }] }),
        "off" === a.getAttribute("map-road-labels-icon") && b.push({ featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] }),
        "off" === a.getAttribute("map-transit") && b.push({ featureType: "transit", stylers: [{ visibility: "off" }] }),
        b
    );
}
function mouseMarkerIteraction(a) {
    return "double-click" === a ? "dblclick" : "mouse-up" === a ? "mouseup" : "mouse-down" === a ? "mousedown" : "over" === a ? "mouseover" : "mouse-out" === a ? "mouseout" : "none" === a ? "none" : "click";
}
function udeslyInitMap() {
    document.querySelectorAll("[udesly-google-map]").forEach((a) => {
        const b = a.getAttribute("position").split(","),
            c = +a.getAttribute("zoom"),
            d = "false" !== a.getAttribute("zoom-control"),
            e = a.getAttribute("zoom-control-options"),
            f = "false" !== a.getAttribute("map-type-control"),
            g = a.getAttribute("map-type-control-options"),
            h = "false" !== a.getAttribute("scale-control"),
            i = a.getAttribute("scale-control-options"),
            j = "false" !== a.getAttribute("street-view-control"),
            k = a.getAttribute("street-view-control-options"),
            l = "false" !== a.getAttribute("rotate-control"),
            m = a.getAttribute("rotate-control-options"),
            n = "false" !== a.getAttribute("fullscreen-control"),
            o = a.getAttribute("fullscreen-control-options"),
            p = getStyleMaps(a),
            q = mouseMarkerIteraction(a.getAttribute("marker-iteraction")),
            r = [];
        a.querySelectorAll("[marker-position]").forEach((a) => {
            const b = a
                    .getAttribute("marker-position")
                    .split(",")
                    .map((a) => +a.trim()),
                c = a.querySelector('[marker="icon"]').outerHTML,
                d = a.querySelector('[marker="content"]').outerHTML;
            r.push({ icon: c, content: d, position: { lat: b[0], lng: b[1] } });
        });
        const s = new google.maps.Map(a, {
            zoom: c,
            center: { lat: +b[0], lng: +b[1] },
            zoomControl: d,
            zoomControlOptions: { position: positionOptions(e) },
            mapTypeControl: f,
            mapTypeControlOptions: { position: positionOptions(g) },
            scaleControl: h,
            scaleControlOptions: { position: positionOptions(i) },
            streetViewControl: j,
            streetViewControlOptiopns: { position: positionOptions(k) },
            rotateControl: l,
            rotateControlOptions: { position: positionOptions(m) },
            fullscreenControl: n,
            fullscreenControlOptions: { position: positionOptions(o) },
            styles: p,
        });
        r.forEach((a) => {
            const b = new google.maps.InfoWindow({ content: a.content }),
                c = new google.maps.Marker({ position: a.position, map: s, icon: a.icon });
            "none" != q &&
                c.addListener(q, () => {
                    b.open(s, c);
                });
        });
    });
}
