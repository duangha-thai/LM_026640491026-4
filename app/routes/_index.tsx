import type { MetaFunction } from "@remix-run/node";
import AppMenu from "./template/head&menu";
import Foolter from "./template/footer";
import MyHomePage from "./MyHomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Duanghathai Yarangpai" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <AppMenu /> 
    <MyHomePage />
    <Foolter />
    </>
  );
}