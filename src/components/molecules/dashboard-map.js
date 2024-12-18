import React, { Suspense, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { centroid } from 'turf/index';
import geojsonData from '../../assets/am.json';
import 'leaflet/dist/leaflet.css';

const ProvinceLabels = React.memo(({ data, marzData }) => {
  const map = useMap();
  const markers = React.useRef([]);

  useEffect(() => {
    data.features.forEach(feature => {
      const center = centroid(feature);
      const [lng, lat] = center.geometry.coordinates;

      const marker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'province-label',
          html: `<div style="font-size:12px; color:blue; white-space: nowrap;">${
            feature.properties.name
          }</div>
        ${
          marzData?.[feature.properties.name]
            ? `<div style="font-size:12px; color:red; white-space: nowrap;"> ${Math.round(
                marzData?.[feature.properties.name].dataWaterDischargeQuantity
              )} k m³/yr</div>
              <div style="font-size:12px; color:green; white-space: nowrap;"> ${Math.round(
                marzData?.[feature.properties.name].dataWaterIntakeQuantity
              )} k m³/yr</div>
               <div style="font-size:12px; color:black; white-space: nowrap;"> ${Math.round(
                 marzData?.[feature.properties.name].dataResourcesWaterSourcesLength
               )}</div>
              `
            : ''
        }`,
        }),
      }).addTo(map);

      markers.current.push(marker);
    });
    return () => {
      markers.current.forEach(marker => map.removeLayer(marker));
      markers.current = [];
    };
  }, [data, marzData, map]);

  return null;
});

const DashboardMap = ({ separatedDataPerMarz }) => {
  useEffect(() => {
    return () => {
      const m = L.DomUtil.get('map');
      if (m) {
        // eslint-disable-next-line no-underscore-dangle
        m._leaflet_id = null;
      }
    };
  }, []);
  return (
    <MapContainer
      center={[40.1792, 44.4991]}
      zoom={8}
      style={{ height: '600px', width: '100%' }}
      key='stable-map-key'
    >
      <Suspense>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={geojsonData}
          style={{
            color: '#3388ff',
            weight: 2,
            fillOpacity: 0.2,
          }}
        />
        <ProvinceLabels data={geojsonData} marzData={separatedDataPerMarz} />
      </Suspense>
    </MapContainer>
  );
};

export default DashboardMap;
