import React from "react";
import BotCard from "./BotCard";


function BotCollection({bots, enlist, deleteBot}) {
    const botItem = bots.map((bot) => {
        return(
            <BotCard
            key={bot.id}
            bot={bot}
        )
    }
    )
}