import { IMessage, Priority, Status } from "@/types";

interface TileFormProps {
  onSubmit: (tile: IMessage) => void;
}

const TileForm = ({ onSubmit }: TileFormProps) => {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.pendingTitle.value;
    const priority = parseInt(form.pendingPriority.value);
    const status = Status.Active;
    onSubmit({ text, priority, status });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center">
      <div className="mt-12 p-6 bg-white rounded-md shadow-md w-1/3 h-1/3">
        <h2 className="text-center">New Pending</h2>
        <form onSubmit={submitForm} className="flex flex-col space-y-3">
          <label htmlFor="pendingTitle">Title</label>
          <input
            id="pendingTitle"
            name="pendingTitle"
            className="border border-black rounded-sm p-2"
            type="text"
          />
          <label htmlFor="pendingPriority">Priority</label>
          <select
            id="pendingPriority"
            name="pendingPriority"
            className="border border-black rounded-sm p-2"
          >
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
          <button>Create Tile!</button>
        </form>
      </div>
    </div>
  );
};

export default TileForm;
