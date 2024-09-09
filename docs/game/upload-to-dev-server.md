# How to Build and Upload the Game to the Dev Server

## Build the Game

Run the following command:

```sh
pnpm build-dev

```

The build output will be in the `dist-dev` folder.

## Upload the Game to the Server

Use FileZilla, WinSCP, or any other SFTP tool to upload the files.

Connect to the server:

`43.246.216.38`

### SFTP

host: 43.246.216.38
port: 2222
username: idntotogames
password: IDNtoto38#\*

### Upload all the folders and files inside `dist-dev` to the respective game paths:

"new_rl_soccer",
"new_baccarat_react",
"new_bc_react",
"new_eu_bc_react",
"new_dt_react",
"new_dt_wild_react",
"new_rl_react",
"new_rl_react2",
"new_24d_react",
"new_24d_spin_react",
"new_24d_jp_react",
"new_shio_fight_react",
"new_12d_thunder_react",
"new_dice6_fever_react",
"new_dice6_react",
"new_sicbo_dice_react",
"new_eu_sicbo_dice_react",
"new_domino_live_react",
"new_shio_fight_react",
"new_poker_dice_react",
"new_48D_react"

-   **Poker Dice - m14**

Path: `~/gameserver/build/new_poker_dice_react`

-   **Roulette - p7**

Path: `~/gameserver/build/new_rl_kd_react`

-   **24D - p6**

Path: `~/gameserver/build/new_24d_react`

-   **24D Spin - m6**

Path: `~/gameserver/build/new_24d_spin_react`

-   **Sicbo Dice - p12**

Path: `~/gameserver/build/new_sicbo_dice_react`

-   **Domino Live - m41**

Path: `~/gameserver/build/new_domino_live_react`

-   **Shio Fight - m27**

Path: `~/gameserver/build/new_shio_fight_react`

-   **12D Thunder - p9b**

Path: `~/gameserver/build/new_12d_thunder_react`

-   **Dice 6 Fever - m8b**

Path: `~/gameserver/build/new_dice6_fever_react`

-   **24D Jackpot - p6b**

Path: `~/gameserver/build/new_24d_jp_react`

-   **Dragon Tiger - m23**

Path: `~/gameserver/build/new_dt_react`

-   **Dragon Tiger Wild - m23b**

Path: `~/gameserver/build/new_dt_wild_react`

-   **Baccarat - m22**

Path: `~/gameserver/build/new_bc_react`

-   **Europe Roulette - p7d**

Path: `~/gameserver/build/new_rl_react`

-   **Soccer Roulette - p7e**

Path: `~/gameserver/build/new_rl_soccer`
