"use client";
import TileCard from "@/components/TileCard";
import TileForm from "@/components/TileForm";
import TileGenerator from "@/components/TileGenerator";
import TilesSection from "@/components/TilesSection";
import { IMessage, Status } from "@/types";
import { useMemo, useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [tiles, setTiles] = useState<IMessage[]>([]);

  const activeTiles = useMemo(
    () => tiles.filter((tile) => tile.status === Status.Active),
    [tiles]
  );
  const doneTiles = useMemo(
    () => tiles.filter((tile) => tile.status === Status.Done),
    [tiles]
  );

  const setTileAsDone = (tile: IMessage) => {
    setTiles(
      tiles.map((t) => {
        if (t.text === tile.text) {
          t.status = Status.Done;
        }
        return t;
      })
    );
  };

  const deleteTile = (tile: IMessage) => {
    const answer = confirm("Are you sure you want to delete this tile?");
    if (!answer) return;

    setTiles(
      tiles.map((t) => {
        if (t.text === tile.text) {
          t.status = Status.Deleted;
        }
        return t;
      })
    );
  };

  const openForm = () => setShowForm(true);

  const createNewTile = (tile: IMessage) => {
    if (!tile.text) return;
    const repeat = tiles.find((t) => t.text === tile.text);
    if (repeat) {
      alert("You already have a tile with this text!");
      return;
    }
    setTiles([...tiles, tile]);
    setShowForm(false);
  };

  return (
    <main className="p-12">
      <TilesSection>
        <TileGenerator onClick={openForm} />
        {activeTiles.map((tile, index) => (
          <TileCard
            onDelete={deleteTile}
            onDone={setTileAsDone}
            tile={tile}
            key={index}
          />
        ))}
      </TilesSection>
      <aside className="grid grid-cols-4">
        <p>Active: {activeTiles.length}</p>
        <p>Done: {doneTiles.length}</p>
      </aside>
      {showForm && <TileForm onSubmit={createNewTile} />}
    </main>
  );
}
