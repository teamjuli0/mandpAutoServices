import React from 'react'
import L from 'leaflet'
import { MapMarkerIcon } from '../images/logos-and-icons'

class Map extends React.Component {
  componentDidMount() {
    var popup = L.popup({
      closeOnClick: false,
      autoClose: false,
    }).setContent(
      '<p id="popupContent">Click The Red Marker For Directions!</p><p id="popupAddress">9824 Flair Dr. El Monte CA</p><div id="popupImg">(626)522-0251</div>'
    )

    var mymap = L.map('mapid').setView([34.07165, -118.05428], 13)
    mymap.scrollWheelZoom.disable()

    L.tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 18,
        ext: 'png',
      }
    ).addTo(mymap)

    L.marker([34.07165, -118.05428], { icon: MapMarkerIcon })
      .addTo(mymap)
      .bindPopup(popup)
      .openPopup()
      .on('click', () => {
        window.open(
          'https://www.google.com/maps/place/M%26P+AUTO+SERVICE/@34.0714705,-118.0556085,18z/data=!3m1!4b1!4m5!3m4!1s0x80c2d1bd74c220fd:0x2db195450267c222!8m2!3d34.0714705!4d-118.0545142',
          '_self'
        )
      })
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
