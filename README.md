# ToDo List --- React + TypeScript

Pequeña app de lista de tareas hecha con **React** y **TypeScript**.
Permite agregar y eliminar tareas con una interfaz simple y responsiva.
------------------------------------------------------------------------

## 👀 Capturas

1.  **Pantalla sin tareas**
   <img width="885" height="589" alt="image" src="https://github.com/user-attachments/assets/ef97e2bc-0969-49ee-8c53-abfde49c0b76" />




3.  **Pantalla con tareas**
   <img width="885" height="589" alt="image" src="https://github.com/user-attachments/assets/c133e6a6-5224-4c87-b880-4eeea6347632" />



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
-   **@fortawesome/react-fontawesome**,
    **@fortawesome/free-solid-svg-icons**
