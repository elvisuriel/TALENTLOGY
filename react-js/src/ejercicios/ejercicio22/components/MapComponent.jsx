import React, { useEffect, useRef, useState } from 'react';

const MapComponent = ({ places }) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBLNlyy77uLm0NOGeNwkJLSGnDwDin0YfQ`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [mapLoaded]);

  const initializeMap = () => {
    setMapLoaded(true);

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat:  7.8896464, lng: -72.4920072 },
      zoom: 15,
    });
   
    // Agregar marcadores de los lugares
    places.forEach((place) => {
      const marker = new window.google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map,
        title: place.name,
      });

      // Agregar información adicional al marcador, como un cuadro de información al hacer clic
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<h3>${place.name}</h3><p>${place.description}</p>`,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
