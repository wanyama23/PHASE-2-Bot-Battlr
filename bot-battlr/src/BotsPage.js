import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);

  function fetchData() {
    return fetch(`http://localhost:8001/bots`)
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      });
  }
  // https://battlr-p8mi.onrender.com/example`
  useEffect(() => {
    fetchData();
  }, []);

  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  function deleteBot(bot) {
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    setBots((bots) => deletedBot);
  }
  return (
    <div>
      <YourBotArmy
        bots={bots.filter((b) => b.army)}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;