import { getMap } from "../Api"

export default function Stats(props) {
    const { loading, players, season, deadlyDuos } = props

    if (loading) {
        return <></>
    }

    return (
        <div className="App">
            <p>
                {season.totalGames} games played by {players.length} players.
            </p>
            {deadlyDuos && (
                <p>
                    Deadliest impostor duo is <i>{deadlyDuos}</i>.
                </p>
            )}
            {Object.keys(season.mapData).length > 0 && (
                <p>
                    <b>Maps</b>
                    <br />
                    {Object.keys(season.mapData).map(name => {
                        const crewWin = season.mapData[name].crewWin
                        const crewLoss = season.mapData[name].crewLoss
                        const percent = parseFloat(
                            (crewWin / (crewWin + crewLoss)) * 100
                        ).toFixed(2)

                        return (
                            <span key={name}>
                                Crew win {percent}% of the time on{" "}
                                {getMap(name)}.
                                <br />
                            </span>
                        )
                    })}
                </p>
            )}
        </div>
    )
}
