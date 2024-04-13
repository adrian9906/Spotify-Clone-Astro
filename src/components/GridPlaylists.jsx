import { useMenuStore } from "@/store/menuStore";

function GridPlaylists({ children, columns = 5 }) {
  const { isOpen } = useMenuStore((state) => state);

  if (columns === 5)
    return (
      <div
        className={`grid mt-2 mb-8 gap-x-6 gap-y-6 ${
          isOpen ? "grid-cols-3" : "grid-cols-5"
        }`}
      >
        {children}
      </div>
    );

  if (columns === 3)
    return (
      <div
        class={`grid mt-3 ${
          isOpen ? "grid-cols-2 gap-2" : "grid-cols-3 gap-3"
        }`}
      >
        {children}
      </div>
    );
}

export default GridPlaylists;
