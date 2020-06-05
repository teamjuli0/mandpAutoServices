import L from 'leaflet'
import { MapMarker } from './'

let MapMarkerIcon = L.icon({
  iconUrl: MapMarker,

  iconSize: [35, 45], // size of the icon
  iconAnchor: [20, 44], // point of the icon which will correspond to marker's location
  popupAnchor: [-5, -50], // point from which the popup should open relative to the iconAnchor
})

export default MapMarkerIcon
