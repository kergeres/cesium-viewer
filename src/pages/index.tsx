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

export default function Home() {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain(),
    });
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNThhZjBkMC1iZTdmLTQ0MDYtYmQwMi00OTYxNzNkZDM3NDIiLCJpZCI6MTQxOTY4LCJpYXQiOjE2ODUyMDg1NDR9.ZIPgYSxABC6BOVo095Np_vpmB2yGInjCb4O0BNSqR30";
  }, []);
  return <div id="cesiumContainer" style={{ height: "50vh", width: "50vw" }} />;
}
