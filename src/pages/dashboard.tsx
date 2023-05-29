import React, { useEffect, useState } from "react";
import Laylout from "./Laylout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNThhZjBkMC1iZTdmLTQ0MDYtYmQwMi00OTYxNzNkZDM3NDIiLCJpZCI6MTQxOTY4LCJpYXQiOjE2ODUyMDg1NDR9.ZIPgYSxABC6BOVo095Np_vpmB2yGInjCb4O0BNSqR30";

const Dashboard = () => {
  const [viewer, setViewer] = useState<Cesium.Viewer | null>(null);
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const hiv = async () => {
      const response = await fetch("/api/coords");
      const data = await response.json();
      setLat(+data.budapest.lat);
      setLon(+data.budapest.lng);
    };
    hiv();
  }, []);

  useEffect(() => {
    if (lat) {
      const newViewer = new Cesium.Viewer("cesiumContainer", {
        terrainProvider: Cesium.createWorldTerrain(),
      });
      setViewer(newViewer);
    }
  }, [lat]);

  useEffect(() => {
    if (viewer) {
      var cityCoordinates = Cesium.Cartesian3.fromDegrees(lon, lat, 15000.0);
      viewer.scene.camera.setView({
        destination: cityCoordinates,
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-90),
          roll: Cesium.Math.toRadians(0),
        },
      });

      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(19.0551, 47.49865, 0),
        point: {
          pixelSize: 20,
          color: Cesium.Color.fromCssColorString("#2a6da3"),
          outlineColor: Cesium.Color.fromCssColorString("#a87136"),
          outlineWidth: 5,
        },
      });

      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNThhZjBkMC1iZTdmLTQ0MDYtYmQwMi00OTYxNzNkZDM3NDIiLCJpZCI6MTQxOTY4LCJpYXQiOjE2ODUyMDg1NDR9.ZIPgYSxABC6BOVo095Np_vpmB2yGInjCb4O0BNSqR30";
    }
  }, [viewer]);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const componentStyle = {
    height: "500px", // Példa: 200 pixeles magasság
    padding: "80px",
  };
  if (lat) {
    return (
      <Laylout>
        <div id="cesiumContainer" style={{ height: "100vh", width: "100vw" }} />
      </Laylout>
    );
  }
};

export default Dashboard;
