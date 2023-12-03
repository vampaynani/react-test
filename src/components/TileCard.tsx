import { IMessage, Priority, Status } from "@/types";
import Draggable from "react-draggable";

interface TileCardProps {
  tile: IMessage;
  onDone: (tile: IMessage) => void;
  onDelete: (tile: IMessage) => void;
}

const TileCard = ({ tile, onDone, onDelete }: TileCardProps) => {
  const setAsDone = () => onDone(tile);
  const deleteMe = () => onDelete(tile);
  const flattenClassNames = (classNames: (string | boolean)[]) =>
    classNames.filter(Boolean).join(" ");

  return (
    <Draggable>
      <article className="relative w-48 h-48 p-4 bg-white border-black border flex flex-col justify-between">
        <div>
          <p className="text-xl font-bold">{tile.text}</p>
          <p
            className={flattenClassNames([
              "text-xl font-bold",
              tile.priority === Priority.Low && "text-green-500",
              tile.priority === Priority.Medium && "text-orange-500",
              tile.priority === Priority.High && "text-red-500",
            ])}
          >
            {Priority[tile.priority]}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <button
            className="bg-blue-500 border-0 w-full p-2 rounded-xl"
            onClick={setAsDone}
          >
            Done
          </button>
          <button
            className="bg-blue-500 border-0 w-full p-2 rounded-xl"
            onClick={deleteMe}
          >
            Delete
          </button>
        </div>
      </article>
    </Draggable>
  );
};

export default TileCard;
