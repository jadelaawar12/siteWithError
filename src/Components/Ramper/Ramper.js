import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

function Ramper() {
  const [ramper, setRamper] = useState();
  const { Moralis } = useMoralis();
  useEffect(() => {
    if (!Moralis?.["Plugins"]?.["fiat"]) return null;
    async function initPlugin() {
      Moralis.Plugins.fiat
        .buy({}, { disableTriggers: true })
        .then((data) => setRamper(data.data));
    }
    initPlugin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Moralis.Plugins]);

  return (
    <iframe
      src={ramper}
      title="ramper"
      frameBorder="no"
      allow="accelerometer; autoplay; camera; gyroscope; payment;"
      style={{
        width: "420px",
        height: "625px",
        boxShadow: "0 0 10px #744296",
        border: "1px solid #744296",
        borderRadius: "1rem",
        backgroundColor: "grey",
        padding: "0",
      }}
    />
  );
}

export default Ramper;
