import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import './App.css'
import '../node_modules/leaflet/dist/leaflet.css'

function App() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    })
  })
  return (
    <MapContainer center={[-37.62998749601141, 176.17162023111158]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
      />
      <Marker position={[-37.62961546215643, 176.1717440597863]}>
        <Popup>
          Set on a peninsula, Mount Maunganui is a laid-back suburb known for the extinct Mount Maunganui volcano, a
          sacred Maori site with ocean-view hiking trails. Long, sandy Main Beach is popular for its surf breaks, while
          Pilot Bay Beach has calm waters for paddle boarding. The Mount Hot Pools complex offers saltwater bathing and
          spa treatments, while brunch spots, global restaurants, and boutiques fill the town centre
        </Popup>
      </Marker>

      <Marker position={[-37.62062374364471, 176.42249007091203]}>
        <Popup>
          A relatively flat island covering some 10 km2 (3.9 sq mi), Motiti Island is composed mainly of Miocene
          volcanic rocks, overlaid with more recent sediments in the south.[2] The principal activity on the island is
          agriculture, with a developing avocado plantation.[3] Most residents and visitors travel to the island by air.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
