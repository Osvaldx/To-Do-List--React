# ToDo List --- React + TypeScript

Pequeña app de lista de tareas hecha con **React** y **TypeScript**.
Permite agregar y eliminar tareas con una interfaz simple y responsiva.
------------------------------------------------------------------------

## 👀 Capturas

1.  **Pantalla sin tareas**
   <img width="824" height="616" alt="image" src="https://github.com/user-attachments/assets/be35f7e8-cf37-430c-9ed1-96c78e78a9c3" />



3.  **Pantalla con tareas**
   <img width="824" height="616" alt="image" src="https://github.com/user-attachments/assets/9801ee47-ec52-4e13-9cfa-a39f04afca5d" />


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
