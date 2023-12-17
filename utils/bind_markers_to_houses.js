export default function (houses, map) {
  var houses_markers = [];

  houses.forEach(house =>
    houses_markers.push(
      L.circle(house.coords, {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 1,
        radius: 2,
      })
        .bindPopup(house.street + ', ' + house.number.toString())
        .addTo(map)
    )
  );

  return houses_markers;
}
