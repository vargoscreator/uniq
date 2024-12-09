var map;

window.addEventListener("DOMContentLoaded", function (event) {
  var map = (window.map = new maplibregl.Map({
    container: "map",
    zoom: 2,
    center: [-0.1262362, 51.5001524],
    style: {
      version: 8,
      sources: {
        osm: {
          type: "raster",
          tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: "&copy; OpenStreetMap Contributors",
          maxzoom: 19,
        },
      },
      layers: [
        {
          id: "osm",
          type: "raster",
          source: "osm",
        },
      ],
    },
    maxZoom: 18,
  }));
  map.addControl(
    new maplibregl.NavigationControl({
      visualizePitch: true,
      showZoom: true,
      showCompass: false,
    }),
  );
  $.get("/api/v1/locations/", function (data) {
    Hotels = $.parseJSON(data);
    for (var i = 0; i < Hotels.length; i++) {
      var hotel = Hotels[i];
      let HotelId = hotel["id"];
      var contentString =
        '<h3 style="display:inline; vertical-align: top; margin: 20px;">' +
        hotel["title"] +
        "</h3>";
      var popup = new maplibregl.Popup({
        offset: 25,
        maxWidth: "none",
      }).setHTML(contentString);
      var marker = new maplibregl.Marker()
        .setLngLat([hotel["location"][0], hotel["location"][1]])
        .setPopup(popup)
        .addTo(map);
      popup.on("open", function (e) {
        $.ajax({
          url: "/api/v1/location/" + HotelId + "/",
          success: function (data) {
            e.target.setHTML(data);
          },
        });
      });
    }
  });
});
