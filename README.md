# Sebu-Dev-React-Lib

**Version:** 0.0.1

## Beschreibung

Diese Bibliothek bietet ein übergeordnetes Layout für React-Anwendungen, das sowohl Styling als auch einen Hintergrund für die gesamte Webseite bereitstellt. \
Schließen Sie den gesamten Inhalt in das `Layout`, wie im Beispiel beschrieben.

## Installation

```bash
npm install sebu-dev-react-lib
```

## Nutzung

Beispiel

```typescript
import React from "react";
import { Layout } from "sebu-dev-react-lib";
import "sebu-dev-react-lib/dist/sebu-dev-react-lib.css";

const App = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
};

export default App;
```

## Hinweise

- Stellen Sie sicher, dass Sie die CSS-Datei der Bibliothek importieren, um das Styling korrekt anzuwenden.
- Das `Layout`-Element sollte das Wurzelelement Ihrer Anwendung sein, um die vorgesehenen Styles und den Hintergrund auf die gesamte Seite anzuwenden.

## Abhängigkeiten

Die folgenden Abhängigkeiten werden bei der Installation automatisch hinzugefügt:

- [motion](https://www.framer.com/motion/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Lizenz

MIT
