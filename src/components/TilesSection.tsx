import { LegacyRef, forwardRef } from "react";

interface TilesSectionProps {
  children: React.ReactNode;
}

const TilesSection = ({ children }: TilesSectionProps) => {
  return (
    <section className="p-12 border-black border mb-12 grid grid-cols-4 gap-y-12">
      {children}
    </section>
  );
};

export default TilesSection;
