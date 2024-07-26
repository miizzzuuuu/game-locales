# Customizing Baccarat Roadmap

## FAQ

- All about baccarat roads (https://www.baccarat.net/guide/roads/)

## Adding new base pcode layout to roadmap

- Copy one of closest similarity layout at [roadmap layouts folder](src/game/components/RoadMap/layout/game) and rename it with base pcode of your game

- Then customize your the class component to have the right of your game roadmap behavior. Customize the file of [base module](src/game/components/RoadMap/layout/base) module if needed

- Import created layout to [BaccaratRoads.ts](src/game/components/RoadMap/BaccaratRoads.tsx) and customize the index.ts file if needed


