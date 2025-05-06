```mermaid
sequenceDiagram
    participant U as Usuario
    participant B as Navegador
    participant S as Servidor

    U->>B: Abre https://studies.cs.helsinki.fi/exampleapp/spa
    B->>S: GET /spa
    S-->>B: HTML básico (estructura inicial de la SPA)
    B->>S: GET /main.js
    S-->>B: JavaScript de la SPA
    B->>S: GET /data.json
    S-->>B: JSON con las notas
    B->>U: Renderiza las notas en la página (sin recargar)
