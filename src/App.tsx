import { Tldraw, type TldrawProps, useEditor } from "tldraw";
import "tldraw/tldraw.css";
import "./App.css";
import { useCallback } from "react";

function App() {
  const components: TldrawProps["components"] = {
    DebugPanel: () => null,
  };

  const handleMount = useCallback((editor: ReturnType<typeof useEditor>) => {
    editor.user.updateUserPreferences({
      colorScheme: "dark",
      isSnapMode: true,
    });
    editor.updateInstanceState({
      isGridMode: true,
    });
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw components={components} onMount={handleMount} />
    </div>
  );
}

export default App;
