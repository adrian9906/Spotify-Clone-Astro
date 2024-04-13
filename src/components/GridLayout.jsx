import { useMenuStore } from "@/store/menuStore";

function GridLayout({ children }) {
  const { isOpen } = useMenuStore();

  return (
    <div
      id="app"
      className={`relative h-screen p-2 gap-2 ${
        isOpen ? "grid-cols-menuOpen" : "grid-cols-menuClosed"
      }`}
    >
      {children}
    </div>
  );
}

export default GridLayout;
