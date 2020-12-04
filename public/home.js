const statsList = document.getElementById("stats")

function load(json) {
    // Remove loading text and any old data
    document.querySelector(".loading-indicator").innerHTML = ""
    document.querySelectorAll(".player-row").forEach(elem => elem.remove())

    const players = json.players
    for (const [rank, player] of players.entries()) {
        const newListItem = document.createElement("div")
        newListItem.classList.add("player-row")

        const crewWin = player.crewWin
        const crewLoss = player.crewLoss
        let crewWinRate = parseFloat(
            (crewWin / (crewWin + crewLoss)) * 100
        ).toFixed(2)
        const imposterWin = player.imposterWin
        const imposterLoss = player.imposterLoss
        let imposterWinRate = parseFloat(
            (imposterWin / (imposterWin + imposterLoss)) * 100
        ).toFixed(2)

        const crewText =
            crewWin + crewLoss > 0
                ? `<li>😇&nbsp;&nbsp;win ${crewWin}, loss ${crewLoss}, win rate of ${crewWinRate}%</li>`
                : ""
        const imposterText =
            imposterWin + imposterLoss > 0
                ? `<li>👹&nbsp;&nbsp;win ${imposterWin}, loss ${imposterLoss}, win rate of ${imposterWinRate}%</li>`
                : ""

        const elo = player.eloHistory.length <= 10 ? "~" : player.elo
        newListItem.innerHTML = `<div class="player">
<h5><small>#${rank + 1}</small> <a href="/player/${player.name}">${
            player.name
        }</a> <small>(<code>${elo}</code>)</small></h5>
<ul style="list-style-type: none; padding-bottom: 1em;">
${crewText}
${imposterText}
</ul>
</div>
<div class="player-graph">
<canvas id="${player.name}" width="300" height="100"></canvas>
</div>`

        statsList.appendChild(newListItem)
        window.generatePlayerGraph(player, 30)
    }
}

getStats().then(json => load(json))