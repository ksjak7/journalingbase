import { ReactElement, Suspense } from "react";
import "../App.css";
import Card from "./Card";
import Loading from "../pages/Loading";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
function SuspendedElement(
  {
    element
  }:
  {
    element: ReactElement
  }
) {
  return (
    <Suspense fallback={<Loading/>}>
      {element}
    </Suspense>
  );
}

export default SuspendedElement;