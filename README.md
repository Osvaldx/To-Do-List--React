# ToDo List --- React + TypeScript

Pequeña app de lista de tareas hecha con **React** y **TypeScript**.
Permite agregar y eliminar tareas con una interfaz simple y responsiva.
------------------------------------------------------------------------

## 👀 Capturas

1.  **Pantalla sin tareas**
   <img width="1807" height="945" alt="image" src="https://github.com/user-attachments/assets/4911277b-1aad-4603-aac0-803e51c0c972" />


3.  **Pantalla con tareas**
   <img width="1807" height="945" alt="image" src="https://github.com/user-attachments/assets/507ef95d-b6e8-4f8a-bc55-36765db00e69" />

------------------------------------------------------------------------

## 🧱 Estructura (componentes)

    src/
    ├─ components/
    │  ├─ TodoApp.tsx        // Contenedor principal: input + botón + lista
    │  ├─ ListaTareas.tsx    // Renderiza el array de tareas
    │  └─ Tarea.tsx          // Ítem individual con checkbox y botón borrar
    ├─ main.tsx              // createRoot + StrictMode
    └─ style.css             // Estilos

------------------------------------------------------------------------

## ⚙️ Requisitos

-   **Node.js 18+**
-   Gestor de paquetes: `npm`, `pnpm` o `yarn`
-   Proyecto configurado con **Vite** (o similar) para React + TS

------------------------------------------------------------------------

## 🚀 Instalación y uso

``` bash
# 1) Instalar dependencias
npm install
# o
pnpm install
# o
yarn

# 2) Correr en desarrollo
npm run dev
# Vite mostrará la URL (p.ej. http://localhost:5173)

# 3) Build de producción
npm run build

# 4) Previsualizar build
npm run preview
```

> Si usás FontAwesome, asegurate de tener instalado
> `@fortawesome/react-fontawesome` y el pack
> `@fortawesome/free-solid-svg-icons`.

------------------------------------------------------------------------

## 🧩 Dependencias principales

-   **react**, **react-dom**
-   **typescript**
-   (Opcional) **@fortawesome/react-fontawesome**,
    **@fortawesome/free-solid-svg-icons**
