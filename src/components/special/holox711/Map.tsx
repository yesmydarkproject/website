import L, { Icon, Map as MapClass } from "leaflet";
import { useCallback, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-easybutton";

interface ShopEntry {
  name: string;
  prefecture: string;
  prefNum: 1;
  gum: boolean;
  stands: boolean;
  file: boolean;
  addressFormattedByGoogle: string;
  latitude: number;
  longitude: number;
  locationType: string;
  placeId: string;
  globalPlusCode: string;
}

const customMarker = new Icon({
  shadowUrl: undefined,
  iconUrl: "/marker-red.png",
  iconSize: [25, 42],
  iconAnchor: [12.5, 42],
});

type Enabled = {
  gum: boolean | null;
  stands: boolean | null;
  file: boolean | null;
};

const Markers = () => {
  const map = useMap();
  const [allShopEntries, setAllShopEntries] = useState<ShopEntry[]>([]);
  const [currentVisibleShops, setCurrentVisibleShops] = useState<ShopEntry[]>(
    []
  );
  const [enabled, setEnabled] = useState<Enabled>({
    gum: null,
    stands: null,
    file: null,
  });
  const [forceAllShow, setForceAllShow] = useState(false);

  const fetchAllShopEntries = useCallback(async () => {
    const entries = (await (
      await fetch("/google_geocoded_all_round2_fixed.json")
    ).json()) as ShopEntry[];
    setAllShopEntries(entries);
  }, []);

  const updateMarkers = useCallback(
    (shopEntries: ShopEntry[], _map: MapClass) => {
      const zoomLevel = map.getZoom();
      if (!forceAllShow && zoomLevel < 10) {
        setCurrentVisibleShops([]);
        return;
      }
      const currentBounds = _map.getBounds();
      const newMarkers = shopEntries.filter(
        (e) =>
          currentBounds.contains([e.latitude, e.longitude]) &&
          (enabled.gum !== null ? e.gum === enabled.gum : true) &&
          (enabled.stands !== null ? e.stands === enabled.stands : true) &&
          (enabled.file !== null ? e.file === enabled.file : true)
      );
      setCurrentVisibleShops(newMarkers);
    },
    [map, enabled, forceAllShow]
  );

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 });
    const divStyle =
      'style="color: black; background-color: white; min-width: 30px; height: 30px; line-height: 30px; padding: 0 4px;"';
    const buttons = [
      L.easyButton({
        states: [
          {
            stateName: "gum-null",
            icon: `<div ${divStyle}>ガム ➖</div>`,
            title: "ガム販売: 指定なし",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, gum: true }));
              btn.state("gum-on");
            },
          },
          {
            stateName: "gum-on",
            icon: `<div ${divStyle}>ガム ⭕</div>`,
            title: "ガム販売: ありのみ",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, gum: false }));
              btn.state("gum-off");
            },
          },
          {
            stateName: "gum-off",
            icon: `<div ${divStyle}>ガム ❌</div>`,
            title: "ガム販売: なしのみ",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, gum: null }));
              btn.state("gum-null");
            },
          },
        ],
      }).addTo(map),
      L.easyButton({
        states: [
          {
            stateName: "stands-null",
            icon: `<div ${divStyle}>アクスタ ➖</div>`,
            title: "アクスタ販売: 指定なし",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, stands: true }));
              btn.state("stands-on");
            },
          },
          {
            stateName: "stands-on",
            icon: `<div ${divStyle}>アクスタ ⭕</div>`,
            title: "アクスタ販売: ありのみ",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, stands: false }));
              btn.state("stands-off");
            },
          },
          {
            stateName: "stands-off",
            icon: `<div ${divStyle}>アクスタ ❌</div>`,
            title: "アクスタ販売: なしのみ",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, stands: null }));
              btn.state("stands-null");
            },
          },
        ],
      }).addTo(map),
      L.easyButton({
        states: [
          {
            stateName: "file-null",
            icon: `<div ${divStyle}>ファイル ➖</div>`,
            title: "クリアファイル販売: 指定なし",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, file: true }));
              btn.state("file-on");
            },
          },
          {
            stateName: "file-on",
            icon: `<div ${divStyle}>ファイル ⭕</div>`,
            title: "クリアファイル販売: ありのみ",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, file: false }));
              btn.state("file-off");
            },
          },
          {
            stateName: "file-off",
            icon: `<div ${divStyle}>ファイル ❌</div>`,
            title: "クリアファイル販売: なしのみ",
            onClick: (btn) => {
              setEnabled((prev) => ({ ...prev, file: null }));
              btn.state("file-null");
            },
          },
        ],
      }).addTo(map),
      L.easyButton({
        states: [
          {
            stateName: "force-off",
            icon: `<div ${divStyle}>広範囲でも読込 OFF</div>`,
            title: "",
            onClick: (btn) => {
              setForceAllShow(true);
              btn.state("force-on");
            },
          },
          {
            stateName: "force-on",
            icon: `<div ${divStyle}>広範囲でも読込 ON</div>`,
            title: "",
            onClick: (btn) => {
              setForceAllShow(false);
              btn.state("force-off");
            },
          },
        ],
        position: "topright",
      }).addTo(map),
    ];

    return () => {
      buttons.forEach((b) => b.remove());
    };
  }, [map]);
  useEffect(() => {
    fetchAllShopEntries();
  }, [map, fetchAllShopEntries]);
  useEffect(() => {
    updateMarkers(allShopEntries, map);
  }, [updateMarkers, allShopEntries, map]);

  useMapEvent("moveend", () => {
    updateMarkers(allShopEntries, map);
  });

  return (
    <>
      {currentVisibleShops.map((m) => {
        const gum = `ガム: ${m.gum ? "⭕" : "❌"}`;
        const stands = `アクスタ: ${m.stands ? "⭕" : "❌"}`;
        const file = `クリアファイル: ${m.file ? "⭕" : "❌"}`;
        return (
          <Marker
            position={[m.latitude, m.longitude]}
            key={m.name}
            icon={customMarker}
          >
            <Popup offset={[0, -25]}>
              <p style={{ fontWeight: "bold" }}>{m.name}</p>
              <a
                href={`https://maps.google.com/maps?q=${m.latitude},${m.longitude}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {m.addressFormattedByGoogle}
              </a>
              <div>
                <style jsx>{`
                  p {
                    margin: 0.4em 0;
                  }
                `}</style>
                <p>{gum}</p>
                <p>{stands}</p>
                <p>{file}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

const Map = () => {
  return (
    <MapContainer
      center={[35.700082063207546, 139.76782919168667]}
      zoom={14}
      minZoom={5}
      scrollWheelZoom
      preferCanvas
      style={{ height: "90vh", width: "100%" }}
      maxBounds={[
        [49.93118527927561, 155.30715668978215],
        [24.897775790538365, 124.91502428866937],
      ]}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Google Map" checked>
          <TileLayer
            attribution='<a href="https://developers.google.com/maps/documentation" target="_blank">Google Map</a>'
            url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}&hl=ja"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <Markers />
    </MapContainer>
  );
};

export default Map;
