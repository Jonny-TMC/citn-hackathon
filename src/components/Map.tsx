import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// You'll need to replace this with your Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface MapProps {
  data?: any[];
  onZipCodeSelect?: (zipCode: string) => void;
}

export default function Map({ data, onZipCodeSelect }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-84.5120, 39.1031], // Cincinnati coordinates
      zoom: 10
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current || !data) return;

    // Add data layer logic here when we have the ZIP code boundaries GeoJSON
  }, [data]);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
  );
}