import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'
import '../node_modules/leaflet/dist/leaflet.css'

function App() {
  console.log(process.env.REACT_APP_MAPBOX_API_KEY)
  return (
    <MapContainer center={[-37.62998749601141, 176.17162023111158]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
