import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Home() {
  const [PlanetInfo, setPlanetInfo] = useState({});
  const [AllPlanets, setAllPlanets] = useState([]);
  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api/planets", {
      method: "GET",
    });
    const data = await res.json();
    setAllPlanets(data.data);
  }, []);

  async function addNewPlanet() {
    const res = await fetch("http://localhost:3000/api/planets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(PlanetInfo),
    });
    const data = await res.json();
    AllPlanets.push(data.data);
    setAllPlanets([...AllPlanets]);
  }

  async function deletePlanet(id) {
    const res = await fetch("http://localhost:3000/api/planets", {
      method: "Delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ _id: id }),
    });
    AllPlanets = AllPlanets.filter((el) => {
      return el._id != id;
    });
    setAllPlanets([...AllPlanets]);
    return;
  }
  return (
    <div className="container">
      <Head>
        <title>Planets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        style={{
          textAlign: "center",
          backgroundColor: "lightgray",
          padding: "5px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          addNewPlanet();
        }}
      >
        <b>FORM TO ADD NEW PLANET</b>
        <br />
        <label>Planet Name:</label>
        <input
          type="text"
          onChange={(e) => {
            PlanetInfo.PlanetName = e.target.value;
            setPlanetInfo({ ...PlanetInfo });
          }}
          required
        />
        <br />
        <label>Number Of Moon:</label>
        <input
          type="text"
          onChange={(e) => {
            PlanetInfo.NumberOfMoon = parseInt(e.target.value);
            setPlanetInfo({ ...PlanetInfo });
          }}
          required
        />
        <br />
        <label>Length Of Day:</label>
        <input
          type="text"
          onChange={(e) => {
            PlanetInfo.LengthOfDay = parseInt(e.target.value);
            setPlanetInfo({ ...PlanetInfo });
          }}
          required
        />
        <br />
        <button type="submit"> ADD </button>
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "10px",
          padding: "5px",
        }}
      >
        {AllPlanets.map((e) => {
          return (
            <div
              style={{
                textAlign: "center",
                border: "1px solid grey",
                backgroundImage: "linear-gradient(lightcyan,lightblue)",
                padding: "5px",
              }}
            >
              <p>
                <b>Planet Name:</b>
                {e.PlanetName}
              </p>
              <p>
                <b>Number Of Moon:</b>
                {e.NumberOfMoon}
              </p>
              <p>
                <b>Length Of Day:</b>
                {e.LengthOfDay}
              </p>
              <Link href={"/" + e._id}>
                <button>Go to Details</button>
              </Link>

              <button
                onClick={() => {
                  deletePlanet(e._id);
                }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
