import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const inter = Inter({ subsets: ["latin"] });
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNThhZjBkMC1iZTdmLTQ0MDYtYmQwMi00OTYxNzNkZDM3NDIiLCJpZCI6MTQxOTY4LCJpYXQiOjE2ODUyMDg1NDR9.ZIPgYSxABC6BOVo095Np_vpmB2yGInjCb4O0BNSqR30";
const hiv = async () => {
  const response = await fetch("/api/coords");
  const data = await response.json();
  console.log(data);
};
export default function Home() {
  useEffect(() => {
    hiv();
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain(),
    });
    var cityCoordinates = Cesium.Cartesian3.fromDegrees(
      19.040235,
      47.497912,
      15000.0
    );
    viewer.scene.camera.setView({
      destination: cityCoordinates,
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: Cesium.Math.toRadians(0),
      },
    });

    viewer.entities.add({
      // long, lat, height
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
  }, []);
  return (
    <div id="cesiumContainer" style={{ height: "100vh", width: "100vw" }} />
  );
}
