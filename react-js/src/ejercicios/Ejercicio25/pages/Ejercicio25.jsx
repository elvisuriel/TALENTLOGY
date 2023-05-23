import React, { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";

function Ejercicio25() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("editorContent", content);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [content]);

  const config = {
    readonly: false,
    height: 400,
  };

  const handleUpdate = (event) => {
    const editorContent = event.target.value;
    setContent(editorContent);
  };

  return (
    <div className="App">
      <h1>Editor de Texto</h1>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={() => {}}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Ejercicio25;
