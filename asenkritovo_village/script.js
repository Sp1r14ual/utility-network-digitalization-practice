import build_graph from '../utils/build_graph.js';
import streets from './streets.js';
import houses from './houses.js';
import wells from './wells.js';
import street_connectors from './street_connectors.js';
import bind_markers_to_houses from '../utils/bind_markers_to_houses.js';
import bind_markers_to_wells from '../utils/bind_markers_to_wells.js';

var map = L.map('map').setView([55.24001, 79.580035], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var town = L.marker([55.24001, 79.580035]).addTo(map);

var main_well_1 = L.circle([55.23781, 79.57735], {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 0.5,
  radius: 10,
}).addTo(map);

var main_well_2 = L.circle([55.24011, 79.57825], {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 0.5,
  radius: 10,
}).addTo(map);

town.bindPopup('д. Асенкритово').openPopup();
main_well_1.bindPopup('Скважина');
main_well_2.bindPopup('Скважина');

var graph_coords = build_graph(streets, street_connectors, wells, houses);

var polyline = L.polyline(graph_coords, { color: '#5d9cf7' }).addTo(map);

var houses_markers = bind_markers_to_houses(houses, map);

var wells_markers = bind_markers_to_wells(wells, map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());
