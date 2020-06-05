import React from 'react'
import L from 'leaflet'
import { MapMarkerIcon } from '../images/logos-and-icons'

class Map extends React.Component {
  componentDidMount() {
    var popup = L.popup().setContent('Come Visit Us Today!')

    var mymap = L.map('mapid').setView([34.07165, -118.05428], 15)
    mymap.scrollWheelZoom.disable()

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
        maxZoom: 16,
      }
    ).addTo(mymap)

    L.marker([34.07165, -118.05428], { icon: MapMarkerIcon })
      .addTo(mymap)
      .bindPopup(popup)
      .openPopup()
      .on('click', () => {
        window.open(
          'https://www.google.com/maps/place/M%26P+AUTO+SERVICE/@34.0714705,-118.0556085,18z/data=!3m1!4b1!4m5!3m4!1s0x80c2d1bd74c220fd:0x2db195450267c222!8m2!3d34.0714705!4d-118.0545142'
        )
      })
    // .bindPopup(popup)
  }

  render() {
    return (
      <>
        <div
          id='mapid'
          style={{
            height: '500px',
            borderTop: '2px solid #858a94',
          }}
        ></div>
      </>
    )
  }
}

export default Map

// import React from 'react'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
// import { MapMarkerIcon } from '../images/logos-and-icons'

// class SimpleExample extends React.Component {
//   state = {
//     lat: 34.07165,
//     lng: -118.05428,
//     zoom: 15,
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Map
//         center={position}
//         zoom={this.state.zoom}
//         style={{
//           height: '500px',
//         }}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position} icon={MapMarkerIcon}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }

// export default SimpleExample
