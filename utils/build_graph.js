export default function (streets, street_connectors, wells, houses) {
  let graph_coords = [];

  for (let street in streets) graph_coords.push(streets[street]);
  for (let connector of street_connectors) graph_coords.push(connector);
  wells.forEach(well =>
    well.houses_connected.forEach(house_num => {
      houses.forEach(house => {
        if (well.street === house.street && house_num === house.number)
          graph_coords.push([house.coords, well.coords]);
      });
    })
  );

  return graph_coords;
}
