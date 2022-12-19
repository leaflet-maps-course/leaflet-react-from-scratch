import React, { useEffect, useRef, useState } from "react";
import { Map, marker, tileLayer } from "leaflet";
import "./App.css";

function App() {
  const [map, setMap] = useState<Map>();
  const mapInit = useRef<boolean>(false);

  const initMap = () => {
    map &&
      tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  };

  const addMarker = () => {
    map && marker([-33.8678, 151.21]).addTo(map).bindPopup(
      `<b>¡SOY EL CENTRO!</b><br>Location: LAT: -33.8678, LNG: , 151.21`
    );
  };

  const addMoreMarkers = () => {
    const locations = [
      { lat: -33.871446199651864, lng: 151.2796011776344 },
      { lat: -33.86707839916889, lng: 151.20598384020437 },
      { lat: -33.8718740067897, lng: 151.1622043711146 },
      { lat: -33.86860232389459, lng: 151.20697427328983 },
      { lat: -33.8696423342923, lng: 151.22079781278367 },
      { lat: -33.87074247031388, lng: 151.2680654288372 },
      { lat: -33.8707673689846, lng: 151.2164944733152 },
      { lat: -33.87175595728874, lng: 151.16072729976966 },
      { lat: -33.8694574597372, lng: 151.26316978204383 },
      { lat: -33.86864346463416, lng: 151.15761247395582 },
      { lat: -33.87050440870454, lng: 151.15331630478653 },
      { lat: -33.870239749535145, lng: 151.27423992901254 },
      { lat: -33.86771077444859, lng: 151.19860991216603 },
      { lat: -33.86776966618012, lng: 151.23655299104166 },
      { lat: -33.8688436277732, lng: 151.16247709745312 },
      { lat: -33.871717580332586, lng: 151.28187304844428 },
      { lat: -33.86995017093247, lng: 151.16196156591735 },
      { lat: -33.870200746143105, lng: 151.26347536572936 },
      { lat: -33.870957113238354, lng: 151.12205993614793 },
      { lat: -33.8719680148294, lng: 151.22286832832862 },
      { lat: -33.86717792141751, lng: 151.2809183020857 },
      { lat: -33.87055113980752, lng: 151.13083819790143 },
      { lat: -33.87139235487407, lng: 151.26383319798956 },
      { lat: -33.868075194414004, lng: 151.21905248834415 },
      { lat: -33.86801211098951, lng: 151.19432427275405 },
      { lat: -33.869718746770786, lng: 151.14052846911002 },
      { lat: -33.86785930362811, lng: 151.19566676072947 },
      { lat: -33.869771897433466, lng: 151.25442082848195 },
      { lat: -33.87100913000221, lng: 151.29038768170255 },
      { lat: -33.87024142539198, lng: 151.18740419078185 },
    ];
    map &&
      locations.map((location) =>
        marker([location.lat, location.lng])
          .addTo(map)
          .bindPopup(
            `<b>Hello world!</b><br>Location: LAT: ${location.lat}, LNG: ${location.lng}`
          )
      );
  };
  useEffect(() => {
    if (!mapInit.current) {
      mapInit.current = true;
      setMap(
        new Map("map", {
          center: [-33.8678, 151.21],
          zoom: 15,
        }).setView([-33.8678, 151.21])
      );
    }
    if (map) {
      initMap();
      addMarker();
      addMoreMarkers();
    }
  }, [mapInit, map]);
  return <div id="map"></div>;
}

export default App;
