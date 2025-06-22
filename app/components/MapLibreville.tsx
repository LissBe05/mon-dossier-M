'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix icône par défaut uniquement si la propriété existe
const iconPrototype = L.Icon.Default.prototype as { _getIconUrl?: () => string };
if (iconPrototype._getIconUrl) {
  delete iconPrototype._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapLibreville() {
  return (
    <MapContainer
      center={[0.435812, 9.449701]} // Latitude / Longitude de Libreville
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%', borderRadius: '12px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0.435812, 9.449701]}>
        <Popup>Ministère de la Santé - Libreville</Popup>
      </Marker>
    </MapContainer>
  );
}
