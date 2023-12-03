This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
```

second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key features

1. State Management: It uses the useState hook for managing state related to form visibility and the list of tiles. `useState` is used to manage state that seems to be local to a single component. If this state needed to be accessed by many distant components, Context might be a better choice. However, because the state is only managed in a single component and closely related components, `useState` is likely the simpler and more appropriate choice.

2. Form Handling: The openForm function is used to show a form for creating a new tile.

3. Tile Creation: The createNewTile function is used to create and append a new tile. It checks if the tile text is not empty and if a tile with the same text doesn't already exist before adding the new tile to the tiles state.

4. Rendering: It renders a TilesSection component. Inside this component, it renders a TileGenerator component and maps over activeTiles to render a TileCard component for each active tile.

5. Tile Deletion: The TileCard component receives a `deleteTile` function as a prop, which is used to delete a tile.
