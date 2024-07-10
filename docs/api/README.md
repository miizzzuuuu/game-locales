# API Response Documentation

## Changing API Response

For local development, use `miragejs`.
Custom dummy API located at `src/api/server.ts`

### Dummy Response Locations

-   **Player Data**

    -   `src/api/server/db/player.ts`

-   **Settings Data**

    -   `src/api/server/db/settings.ts`

-   **Last Bet Data**
    -   `src/api/server/db/lastbets.ts`

To add response data for a specific game, edit the `lastbets` object with the following format:

```ts
Record<string, { periode: number; data: any[] }>;
```

**Example:**

Last bet data for a roulette game:

```ts
p7e: {
  periode: 1909121,
  data: [
    {
      button: '2nd 12',
      group: 'n12',
      value: 5000,
    },
    {
      button: '05,06,08,09',
      group: 'n4',
      value: 5000,
    },
  ],
}
```

-   **Game Data**
    -   `src/api/server/db/games.ts`

To modify the dummy game data you are developing, find the game data with the `pcode` matching your game.

**Example:**

If you want to modify the roulette game data, find the data with `pcode=p7`.

```ts
{
  name: 'Roulette',
  displayName: 'Roulette',
  periode: 2058119,
  pcode: 'p7',
  stream: 'https://cam1.idnstreams.com/?app=SDI&name=RL_720P',
  stream_hd: '',
  stream_uhd: '',
  stream_4k: '',
  stream_8k: '',
  bet: {},
  betHistory: [],
  newgame: '0',
  maintenance: '',
  maintenance_text: '',
  min: 1000,
  max: 1000000,
  min50: 5000,
  max50: 5000000,
  category: 'casino',
  shoePeriode: '53760-351',
  order: 99,
  newSet: false,
  fast_table: false,
}
```

-   **Payout Data**
    -   `src/api/server/db/payouts.ts`

To add response data for a specific game, edit the `lastbets` object with the following format:

```ts
Record<
    string,
    {
        name: string;
        min: number;
        max: number;
        payout: number | null;
        items: {
            name: string;
            payout: number | null;
        }[];
    }[]
>;
```

**Example:**

Payout data for the 24D Jackpot game:

```ts
p6b: [
    {
        name: 'one number',
        min: 1000,
        max: 1000000,
        payout: 29,
        items: [],
    },
    {
        name: 'two number',
        min: 1000,
        max: 1000000,
        payout: 17,
        items: [],
    },
    {
        name: 'four number',
        min: 1000,
        max: 1000000,
        payout: 8,
        items: [],
    },
    {
        name: 'bet column',
        min: 1000,
        max: 1000000,
        payout: 2,
        items: [],
    },
    {
        name: 'bet row',
        min: 1000,
        max: 1000000,
        payout: 2,
        items: [],
    },
    {
        name: 'side bet',
        min: 1000,
        max: 1000000,
        payout: null,
        items: [
            {
                name: 'big',
                payout: 1,
            },
            {
                name: 'small',
                payout: 1,
            },
            {
                name: 'odd',
                payout: 1,
            },
            {
                name: 'even',
                payout: 1,
            },
            {
                name: 'red',
                payout: 1,
            },
            {
                name: 'black',
                payout: 1,
            },
        ],
    },
];
```

-   **Timer Data**
    -   `src/api/server/db/timer.ts`

To modify the dummy timer data you are developing, find the game data with the `pcode` matching your game.

**Example:**

If you want to modify the roulette timer data, find the data with `pcode=p7`.

```ts
{
  pcode: 'p7',
  time: '23',
  timer: 60,
}
```

### Result Data

Located in the folder `src/api/server/response/result`

To add a response result for the game you are developing, create a file named `{pcode}.json` in the folder `src/api/server/response/result/` with the format:

```ts
{ data: <DATA_RESULT> }
```

Then edit the file `src/api/server/server.ts`. Add the import file.

**Example:**

Import result data for the `24D Spin` game with `pcode=m6`:

```ts
import resultsM6 from './response/results/m6.json';
```

Then edit the result route. Add the response to the route:

```ts
this.get(ENDPOINTS.result + '/:pcode', async (_, request) => {
  ...
  switch (pcode) {
    ...
    case 'm6':
      data = resultsM6;
      break;
    default:
      data = { data: [] };
  }
  ...
}
```

### Transaction Data

Located in `src/api/server/response/transactions`

Follow the same steps as adding response results.
