import React from "react";
import BotCard from "./Bot";

function BotCollection({ bots, enlistBot, deleteBot }) {
    
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    );
  });
  return (
    <div className="bot-collection">
      <div>
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;
