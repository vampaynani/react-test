interface TileGeneratorProps {
  onClick: () => void;
}

const TileGenerator = ({ onClick }: TileGeneratorProps) => {
  return (
    <div onClick={onClick} className="relative w-48 h-48 border-black border">
      <div className="line rotate-45"></div>
      <div className="line -rotate-45"></div>
    </div>
  );
};

export default TileGenerator;
