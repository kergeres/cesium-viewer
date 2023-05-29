import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import Login from "./login";
import Header from "./header";
import Layout from "./layout";
import React from "react";

export default function Home() {
  return <Layout></Layout>;
}
