# among-us-friends

I use this to track the performance of players in the Among Us games I play with my friends.

There is a provisional ELO system and graphs powered by Chart.js. The backend is an Node/Express app.



The data source is a Google Sheets file where I store the crew names, imposter names, and the winner (crew/imposter).



We connect via the Sheets API (v4).

## Setup

Set two enviromental variables.

- `SHEETS_ID` - the id in the URL bar.
- `SHEETS_API_KEY` - an API key from Google Console.

`npm i`

`npm run start`

## Deployment

I run this project on glitch.com without any setup.

You can import straight from this repository.
