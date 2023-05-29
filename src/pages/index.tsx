import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import Login from "./login";
import Header from "./header";
import Laylout from "./Laylout";
import React from "react";

export default function Home() {
  return <Laylout></Laylout>;
}
