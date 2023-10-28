import Head from "next/head";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";

export default function Potato() {
  return (
    <div>
      <Seo title="about" />
      <h1 className="active">About</h1>
    </div>
  );
}
