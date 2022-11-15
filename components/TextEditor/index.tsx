import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";


const TextEditor = () => {
    const [value, setValue] = useState<string>();


    const MDEditor = dynamic(
        () => import("@uiw/react-md-editor"),
        { ssr: false }
      );
      
    return  <div>
      <MDEditor value={value} onChange={setValue} />
  </div>
}

export default TextEditor