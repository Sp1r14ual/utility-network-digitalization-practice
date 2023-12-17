export default function (wells, map) {
  var wells_markers = [];

  wells.forEach(well =>
    wells_markers.push(
      L.circle(well.coords, {
        color: 'black',
        fillColor: 'yellow',
        fillOpacity: 1,
        radius: 2,
      })
        .bindPopup(
          'Водопроводный колодец. Подключен к домам ' +
            (well.houses_connected.length === 0
              ? '???'
              : well.houses_connected.toString()) +
            ' на улице ' +
            well.street
        )
        .addTo(map)
    )
  );

  return wells_markers;
}
