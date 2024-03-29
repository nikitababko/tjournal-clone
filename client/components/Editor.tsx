import React from 'react';
import EditorJS from '@editorjs/editorjs';

export const Editor: React.FC = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Enter your article text',
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error('ERROR editor cleanup', e));
    };
  }, []);

  return <div id="editor" />;
};
