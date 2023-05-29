import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { Box } from "@mui/material";

const Viewer = () => {
  const [viewer, setViewer] = useState<Cesium.Viewer | null>(null);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const getCoordinates = async () => {
      const response = await fetch("/api/coords");
      const data = await response.json();
      setLat(+data.budapest.lat);
      setLng(+data.budapest.lng);
    };
    getCoordinates();
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
      let cityCoordinates = Cesium.Cartesian3.fromDegrees(lng, lat, 15000.0);
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
    // eslint-disable-next-line
  }, [viewer]);
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  if (lat) {
    return (
      <Layout>
        <Box
          id="cesiumContainer"
          sx={{
            height: { md: "80%", xs: "88%" },
            width: "100%",
            position: "absolute",
            marginTop: { md: "60px", xs: "-20px" },
          }}
        />
      </Layout>
    );
  }
};

export default Viewer;
