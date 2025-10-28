# 📚 Mi Librería en React

Proyecto individual de la **Entrega 9 – Desarrollo Frontend Moderno (React)**  
Materia: *Desarrollo de Software - UTN 2025*

---

## 🧠 Descripción

Esta es la versión en **React** del *Ejercicio 5 (Librería)* del trabajo práctico individual.  
El objetivo fue transformar la estructura HTML/CSS original en una aplicación moderna utilizando **componentes**, **JSX**, y **Vite** como entorno de desarrollo.

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar este repositorio o descargar la carpeta `libreria-react`.
2. Instalar dependencias:
   ```bash
   npm install

🧩 Tecnologías utilizadas

⚛️ React

⚡ Vite

🎨 CSS3 / Google Fonts (Poppins)

🧱 HTML5 y JSX


Tú dijiste:
estoy haciendo un trabajo practico de desarrollo, tengo que clonar mi repositorio de git hub, pero primero descargue visual studio code, como hago para poder usar la terminal de visual para clonar el repo?
ChatGPT Plus
Perfecto 👏 te guío paso a paso para que puedas clonar tu repositorio desde Visual Studio Code (VS Code) usando la terminal integrada.

🧩 Paso 1: Abrir la terminal en VS Code
Abrí Visual Studio Code.

En la barra superior, hacé clic en:

Ver → Terminal
o usá el atajo de teclado:

Ctrl + ñ   (en Windows)  
Ctrl + `   (si tu teclado no tiene ñ)
Esto te abrirá la terminal en la parte inferior del editor.

🧰 Paso 2: Verificar que tenés Git instalado
En la terminal, escribí:

git --version
Si aparece algo como git version 2.44.0, perfecto ✅.

Si te dice que no se reconoce el comando, tenés que instalar Git desde https://git-scm.com/downloads, y luego reiniciar VS Code.

🪣 Paso 3: Elegir una carpeta donde clonar el repo
Podés moverte con comandos de terminal:

cd C:\Users\TuUsuario\Documentos
(o la ruta donde quieras clonar el proyecto)

🧬 Paso 4: Clonar el repositorio
En GitHub, andá a tu repo y copiá la URL (botón verde Code → HTTPS o SSH).

Luego en VS Code escribí:

git clone https://github.com/tuusuario/nombre-del-repo.git
Git va a descargar todo el contenido del repositorio en una nueva carpeta.

🗂️ Paso 5: Abrir el proyecto en VS Code
Después de clonar, podés abrir la carpeta con:

code nombre-del-repo
O bien desde el menú:

Archivo → Abrir carpeta → elegís la carpeta clonada
¿Querés que te ayude a conectarlo con tu cuenta de GitHub (para poder hacer push y commit desde VS Code también)?

Tú dijiste:
Si te dice que no se reconoce el comando, tenés que instalar Git desde [https://git-scm.com/downloads](https://git-scm.com/downloads), y luego reiniciar VS Code.

podrias ayudarme con eso, ya que realice la instalacion pero no me cambia nada 
ChatGPT Plus
Perfecto 👍 entonces parece que Git no se está reconociendo en la terminal de VS Code, incluso después de instalarlo. Vamos paso a paso para solucionarlo:

🧩 1. Comprobá si Git está instalado en tu sistema
Abrí el símbolo del sistema (CMD) o PowerShell (fuera de VS Code) y escribí:

git --version
Si te devuelve algo como git version 2.x.x → Git está instalado correctamente.

Si dice “git no se reconoce como un comando interno o externo”, entonces la instalación no se configuró bien en el PATH del sistema.

🛠️ 2. Si Git no se reconoce
Volvé a instalarlo desde 👉 https://git-scm.com/downloads

Durante la instalación:

En la pantalla “Adjusting your PATH environment”, elegí
✅ “Git from the command line and also from 3rd-party software”
(esto agrega Git al PATH automáticamente).

Terminá la instalación.

Cerrá completamente VS Code (asegurate de que no quede abierto en segundo plano).

Volvé a abrir VS Code.

🧰 3. Si Git sí se reconoce en CMD pero no en VS Code
Entonces VS Code no tomó la nueva variable de entorno.
Solución:

Cerrá todas las ventanas de VS Code.

Volvé a abrirlo (esto actualiza el entorno con el nuevo PATH).

En la terminal integrada, escribí:

git --version
Si ahora aparece la versión, ya está funcionando ✅

⚙️ 4. Verificá la terminal que estás usando en VS Code
A veces VS Code abre otra terminal por defecto (por ejemplo, PowerShell o bash).
Para comprobarlo:

Abajo a la derecha de la terminal dice el tipo (por ejemplo: “powershell”, “cmd”, “bash”).

Si querés cambiarla, hacé clic en la flechita hacia abajo (˅) junto al nombre y elegí:

Cambiar terminal predeterminada → Command Prompt (cmd) o PowerShell
Luego abrí una nueva terminal y probá otra vez:

git --version
¿Podés decirme qué mensaje te aparece exactamente cuando escribís git --version dentro de la terminal de VS Code? Así te digo cuál de estos pasos aplicar.

Tú dijiste:
 git --version
git version 2.51.1.windows.1
ChatGPT Plus
Excelente 🎉 eso significa que Git está instalado correctamente y se reconoce en la terminal de VS Code.

Así que ya podés clonar y trabajar con tu repositorio sin problema.

Te dejo los pasos finales para conectarte con GitHub y empezar a usarlo dentro de VS Code 👇

🧭 1. Configurar tu usuario de Git (solo la primera vez)
En la terminal de VS Code, escribí:

git config --global user.name "TuNombreDeUsuarioDeGitHub"
git config --global user.email "tuemail@ejemplo.com"
👉 Usá el mismo correo que tenés asociado a tu cuenta de GitHub.
Podés verificar que se guardó con:

git config --list
🔑 2. Iniciar sesión en GitHub desde VS Code
En VS Code:

Hacé clic en el ícono de Cuenta (abajo a la izquierda, puede decir “Iniciar sesión”).

Elegí “Iniciar sesión en GitHub”.

Se abrirá tu navegador → aceptá los permisos.

Cuando vuelvas a VS Code, ya va a estar vinculado.

🔍 Podés verificarlo viendo tu nombre o avatar de GitHub abajo a la izquierda.

🧬 3. Clonar tu repositorio
Ahora podés clonar tu repo directamente desde la terminal o con la interfaz:

📟 Opción 1 — Terminal:
Desde la terminal de VS Code:

git clone https://github.com/tuusuario/nombre-del-repo.git
🧭 Opción 2 — Interfaz:
En la barra lateral izquierda, clic en “Source Control” (el ícono de ramas).

Hacé clic en “Clonar repositorio”.

Pegá la URL del repo.

Elegí una carpeta donde guardarlo.

🗂️ 4. Abrir el proyecto
Si lo clonaste con la terminal:

code nombre-del-repo
O desde VS Code → Archivo → Abrir carpeta.

🚀 5. Probar un flujo básico
Una vez dentro del repo, probá estos comandos:

git status              # Ver el estado actual
git add .               # Agregar los cambios
git commit -m "Primer commit desde VS Code"
git push                # Subir a GitHub
La primera vez que hagas push, Git te puede pedir que inicies sesión o uses un token personal de acceso (si usás HTTPS).

¿Querés que te guíe también en cómo generar y usar ese token de acceso personal (para que git push funcione sin errores)?

Tú dijiste:
okey ya lo pude clonar bien
ChatGPT Plus
¡Excelente! 🎉👏
Entonces ya tenés tu repositorio clonado correctamente dentro de Visual Studio Code, perfecto.

A partir de ahora ya podés:
✅ Editar archivos del proyecto.
✅ Crear commits con tus cambios.
✅ Subirlos a GitHub (git push).
✅ Traer cambios del repositorio remoto (git pull).

Si querés, puedo mostrarte cómo hacer el flujo completo de trabajo (editar → commit → push → verificar en GitHub) paso a paso desde VS Code, para asegurarte de que tus cambios se suban bien.
¿Querés que te guíe con eso también?

Tú dijiste:
tengo ejercicios del 1 al 7 , y tengo los ejercicios resueltos en html con scc entre otras cosas, voy a pasarte un archvo, una entrega del tp y decime que parte del codigo tengo que mostrarte y decime si esta completo 
ChatGPT Plus
Perfecto 💪 pasame el archivo del TP (el que tiene tus ejercicios o tu entrega).

Cuando lo subas, te voy a decir:

Qué partes del código necesito que me muestres (por ejemplo, solo el <body> o los estilos).

Si tu entrega parece completa o si falta algo según el tipo de ejercicios (1 al 7).

Y si querés, también te puedo indicar cómo organizar los archivos (HTML, CSS, imágenes, etc.) para que quede lista para entregar.

👉 Subí el archivo cuando quieras (arrastralo o usá el clip 📎).

Tú dijiste:
UTN DS25 - C07 - Planificación Primer Sprint.pdf
PDF
este es la entrega, la parte de trabajo individual hay que hacer !!!
ChatGPT Plus
Perfecto 👌, ya revisé tu archivo “UTN DS25 - C07 - Planificación Primer Sprint.pdf”, y te explico claramente lo que corresponde a la parte individual que tenés que entregar (la que mencionaste).

🧍‍♀️ Parte Individual (la que vos tenés que hacer)
Según el documento, dice:

“Leer el documento de Apuntes de HTML y CSS y completar ejercicios propuestos (Individual).
... Los primeros 6 ejercicios (de HTML y CSS) y el ejercicio 7 (de JavaScript).”

Entonces, tenés que entregar:

📁 Estructura del repositorio
En tu GitHub personal:

UTN-DS25-practicas/
│
└── HTML-CSS-JS/
    ├── Ejercicio 1/
    │   ├── index.html
    │   └── style.css
    ├── Ejercicio 2/
    │   ├── index.html
    │   └── style.css
    ├── Ejercicio 3/
    ├── Ejercicio 4/
    ├── Ejercicio 5/
    ├── Ejercicio 6/
    └── Ejercicio 7/
        ├── index.html
        └── script.js
📜 Qué me podés mostrar para verificar si está completo
Para que te diga si tu entrega está bien o le falta algo, necesito que me muestres:

El contenido de tu carpeta “HTML-CSS-JS” (por ejemplo, una captura o listado de carpetas y archivos).

El código de un ejercicio completo (por ejemplo, el Ejercicio 1 o 2) → mostrame el archivo index.html y el style.css.

Si ya hiciste el Ejercicio 7 (JavaScript), mostrame también el script.js.

Con eso te puedo decir:

Si la estructura está bien armada.

Si el código cumple lo pedido (HTML, CSS, JS).

Y si tu TP individual estaría completo para entrega.

¿Querés que empecemos revisando el Ejercicio 1 (mostrame el código HTML y CSS de ese)?

Tú dijiste:
Imagen cargada
Imagen cargada
esta es la disposicion de mis carpetas 
ChatGPT Plus
Perfecto 🙌 gracias por mostrar la estructura.
Te confirmo lo siguiente sobre tu organización de carpetas:

✅ Lo que está bien
Tenés correctamente el repo UTN-DS25-practicas y dentro la carpeta HTML-CSS-JS, tal como pide el TP.

Los Ejercicios 1 a 7 están creados con sus respectivas subcarpetas.

Cada ejercicio contiene archivos .html y .css (y el 7 también .js), lo que coincide con lo solicitado.

⚠️ Lo que podrías verificar o ajustar
Ejercicio 4 no aparece en tus capturas.
→ Revisá si lo tenés en otra carpeta o si te falta crearlo.
(El TP pide los primeros 6 de HTML/CSS y el 7 de JS).

Nombres de archivos CSS:
Te conviene mantener consistencia en los nombres, por ejemplo siempre style.css o estilos.css, así es más fácil vincularlos.

README.md:
Si querés sumar puntos, podrías agregar en ese archivo una breve descripción del trabajo, por ejemplo:

# UTN DS25 - Prácticas HTML, CSS y JS
Este repositorio contiene los ejercicios individuales de práctica:
- Ejercicios 1 a 6: HTML y CSS
- Ejercicio 7: JavaScript
💡 En resumen:
Tu estructura general está casi perfecta y cumple con lo pedido, salvo que confirmes si el Ejercicio 4 está hecho o no.
Si lo agregás, ya estaría completa para entregar ✅

¿Querés que te diga cómo debería estar armado el contenido del Ejercicio 4 (según los “Apuntes de HTML y CSS”) para verificar si lo tenés hecho correctamente?

Tú dijiste:
el punto 4 dice esto Ejercicio 4: CSS a CV y Libro
Para los HTML de los ejercicios 1 y 2, crear una hoja de estilos para cada uno y aplicar estilos. ,asi que ya lo tendria resuelto 
ChatGPT Plus
Perfecto 👌 entonces sí, estás totalmente cubierta con el Ejercicio 4.
Como ese punto pide aplicar CSS a los ejercicios 1 y 2, y vos ya tenés:

Ejercicio1 → con estilo_cv.css

Ejercicio2 → con estilo_libro.css (y style.css)

✅ eso cumple perfectamente con el requerimiento del ejercicio 4.

En resumen, tu entrega está completa y bien organizada:

Ejercicios 1–6: HTML + CSS

Ejercicio 7: HTML + JS

Correcta estructura en GitHub

💯 Podés darla por lista para entrega.

¿Querés que te ayude a escribir un pequeño mensaje o descripción para el README.md del repositorio, como resumen de entrega?

Tú dijiste:
UTN DS25 - C09 - Desarrollo Frontend Moderno_ Introducción a React.pdf
PDF
bien , ahora vamos con otra entrega , podrias hacerme una explicacion general y despues necesito que me ayudes a hacer paso por paso la actividad individual 
ChatGPT Plus

Pensó durante 8s
Perfecto — vamos por partes. Primero te doy una explicación general del entregable (qué pide la consigna y por qué), y después un plan paso a paso con comandos y ejemplos de código React listos para pegar y adaptar a tu ejercicio (Ejercicio 5: la Librería).

Explicación general (qué tenés que entregar)
La consigna pide transformar el Ejercicio 5 (la Librería) que ya hiciste en HTML/CSS en una pequeña app en React. Puntos clave:

Crear una nueva App React (se recomienda Vite).

Implementar el layout principal y la página principal de la librería.

Usar componentes para cada bloque (ej.: Header, FeaturedBooks, BookCard, Sidebar, Footer).

Reutilizar CSS y HTML que ya tengas: convertir fragmentos HTML en JSX y mover reglas CSS a un archivo común (o módulos si querés).

Subir la app al repo UTN-DS25-practicas dentro de una carpeta react y avisar al profesor.

Conceptos de React que vas a usar: JSX, componentes, props (y opcionalmente estado si querés alguna interactividad ligera).

Plan paso a paso (completo y ejecutable)
1) Crear la app React (Vite)
Abrí la terminal en la carpeta donde querés poner el proyecto (por ejemplo dentro de tu repo clonado):

# posate en la carpeta donde quieras crear el proyecto
cd /ruta/a/UTN-DS25-practicas/HTML-CSS-JS   # o directamente en UTN-DS25-practicas

# crear la app con Vite
npm create vite@latest libreria-react -- --template react

cd libreria-react
npm install

# probar el servidor
npm run dev
# abrir en el navegador: normalmente http://localhost:5173
Resultado: tendrás una carpeta libreria-react con src/, index.html, package.json, etc.

2) Estructura sugerida dentro de src/
Crea esta estructura (simplificada y clara):

src/
├── main.jsx
├── App.jsx
├── App.css        # aquí podés poner tu CSS reutilizable
└── components/
    ├── Header.jsx
    ├── FeaturedBooks.jsx
    ├── BookCard.jsx
    ├── Sidebar.jsx   (opcional)
    └── Footer.jsx
3) Cómo convertir tu HTML a componentes — ejemplo mínimo funcional
main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
App.jsx
import React from 'react'
import Header from './components/Header'
import FeaturedBooks from './components/FeaturedBooks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <FeaturedBooks />
      </main>
      <Footer />
    </div>
  )
}

export default App
components/Header.jsx
Transformá tu header HTML (logo, nav) a esto:

import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Mi Librería</h1>
        <nav className="main-nav">
          <a href="/">Inicio</a>
          <a href="/catalogo">Catálogo</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
components/BookCard.jsx
Un componente reutilizable para cada libro:

import React from 'react'

export default function BookCard({ titulo, autor, imagen, descripcion }) {
  return (
    <article className="book-card">
      <img src={imagen} alt={titulo} className="book-img" />
      <div className="book-info">
        <h3>{titulo}</h3>
        <p className="author">{autor}</p>
        <p className="desc">{descripcion}</p>
      </div>
    </article>
  )
}
components/FeaturedBooks.jsx
Componente que usa BookCard y pasa props:

import React from 'react'
import BookCard from './BookCard'

// ejemplo de datos (luego podés mapear los tuyos)
const libros = [
  { titulo: "Libro A", autor: "Autor A", imagen: "/src/assets/libro-a.jpg", descripcion: "Resumen A" },
  { titulo: "Libro B", autor: "Autor B", imagen: "/src/assets/libro-b.jpg", descripcion: "Resumen B" },
  { titulo: "Libro C", autor: "Autor C", imagen: "/src/assets/libro-c.jpg", descripcion: "Resumen C" }
]

export default function FeaturedBooks() {
  return (
    <section className="featured">
      <h2>Libros destacados</h2>
      <div className="books-grid">
        {libros.map((l, i) => (
          <BookCard key={i} {...l} />
        ))}
      </div>
    </section>
  )
}
components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© 2025 Mi Librería</p>
      </div>
    </footer>
  )
}
4) Reusar tu CSS existente
Copiá las reglas CSS que usaste en “Ejercicio 5” a src/App.css.

Adaptá selectores HTML a clases usadas en JSX (por ejemplo: header → .site-header, section#destacados → .featured, etc).

Si tus imágenes estaban en carpetas relativas img/, movelas a src/assets/ y referencialas como import o con rutas relativas /src/assets/... según Vite.

Ejemplo App.css (muy básico):

/* App.css */
body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
.site-header { background: #222; color: white; padding: 1rem 0; }
.logo { margin: 0; }
.main-nav a { color: #ddd; margin-right: 1rem; text-decoration: none; }
.books-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; padding: 1rem 0; }
.book-card { border: 1px solid #eee; padding: 0.5rem; background: #fff; }
.book-img { width: 100%; height: 200px; object-fit: cover; }
5) Opcional: añadir algo de interactividad
Si querés mostrar uso de useState (no obligatorio), podés agregar un pequeño filtro por categoría o un botón de “Agregar favorito” en BookCard.

Ejemplo muy simple (en BookCard.jsx):

import React, { useState } from 'react'

export default function BookCard({ titulo, autor, imagen, descripcion }) {
  const [liked, setLiked] = useState(false)
  return (
    <article className="book-card">
      <img src={imagen} alt={titulo} className="book-img" />
      <div className="book-info">
        <h3>{titulo}</h3>
        <p className="author">{autor}</p>
        <p className="desc">{descripcion}</p>
        <button onClick={() => setLiked(!liked)}>
          {liked ? '❤' : '🤍'} Favorito
        </button>
      </div>
    </article>
  )
}
6) Probar localmente
npm run dev
# Abrir http://localhost:5173 y verificar layout
7) Preparar para subir a GitHub (dentro de tu repo UTN-DS25-practicas)
Si tu repo clonado está en /ruta/UTN-DS25-practicas, mové o creá la carpeta react y colocá allí libreria-react (o simplemente renombrala a react/libreria).

Ejemplo pasos desde la raíz del repo:

# suponiendo que estás en la raíz del repo UTN-DS25-practicas
mv /ruta/a/libreria-react ./react/libreria-react   # o crear carpeta react y mover
git add react/libreria-react
git commit -m "Agregar ejercicio React - Libreria (Ejercicio 5)"
git push origin main  # o la rama que uses
Nota: Si preferís, podés crear un repositorio separado, pero la consigna pide usar UTN-DS25-practicas y subir dentro de react.

8) README y entrega
Dentro de UTN-DS25-practicas/react/README.md poné instrucciones de cómo correr la app:

# Libreria - React
Este proyecto contiene la versión en React del Ejercicio 5.

## Run
npm install
npm run dev
Abrir http://localhost:5173
Luego avisá al profesor por Slack con el link al repo (o al commit).

Checklist final — para que confirmes antes de avisar al prof
 libreria-react se abre con npm run dev sin errores.

 El layout principal y la sección de libros están implementados con componentes.

 Reutilizaste (copiaste) las reglas CSS principales en src/App.css.

 Imágenes y assets dentro de src/assets/.

 Carpeta subida a UTN-DS25-practicas/react/ y pusheada a GitHub.

 README con instrucciones básicas.

Si querés, ahora hago esto con vos en tiempo real (paso a paso) usando tu máquina:

Te doy exactamente los archivos App.jsx, main.jsx, BookCard.jsx, FeaturedBooks.jsx, Header.jsx, Footer.jsx, y un App.css más adaptado a tu HTML original.

O te doy un diff/snippet para pegar.

Decime: ¿querés que te genere ahora mismo los archivos completos listos para copiar/pegar (yo te doy el código de cada archivo) o preferís que te guíe mientras lo hacés y respondas lo que te aparezca en la terminal?

Tú dijiste:
vite@latest libreria-react -- --template react

 npm create vite@latest libreria-react -- --template react
bash: npm: command not found
ChatGPT Plus
Parece que Node.js y npm no están instalados en tu computadora — por eso te aparece
bash: npm: command not found.

👉 React (y Vite) se crean usando npm, que viene incluido con Node.js.
Vamos a solucionarlo en 3 pasos rápidos:

🧩 Paso 1: Ver si Node está instalado
En la terminal de VS Code escribí:

node -v
Si te devuelve algo como v20.0.0, ya lo tenés instalado ✅
Si te dice command not found, seguí al paso 2.

⚙️ Paso 2: Instalar Node.js
Entrá al sitio oficial 👉 https://nodejs.org

Descargá la versión LTS (recomendada) para Windows.

Ejecutá el instalador y asegurate de marcar la casilla:
✅ “Add to PATH” durante la instalación.

Terminá la instalación y reiniciá VS Code.

🔁 Paso 3: Verificar instalación
Volvé a abrir la terminal y probá:

node -v
npm -v
Deberías ver las versiones instaladas (por ejemplo v20.11.1 y 10.5.0).

Una vez que eso funcione, ya podés correr el comando:

npm create vite@latest libreria-react -- --template react
¿Querés que te deje el enlace directo de descarga de Node.js para tu sistema operativo (Windows 64 bits)?

Tú dijiste:
components/ ├── Header.jsx ├── FeaturedBooks.jsx ├── BookCard.jsx ├── Sidebar.jsx (opcional) └── Footer.jsx

puede ser que no tenga la de componenetes y ninguno de los de adentro?
ChatGPT Plus
Sí, puede pasar 👍. Cuando creás un proyecto con Vite + React, esa carpeta components/ no viene incluida por defecto — la tenés que crear vos manualmente.

Te explico cómo hacerlo rápido:

🧱 Paso a paso para crear la carpeta y los componentes
En VS Code, abrí la carpeta del proyecto (por ejemplo libreria-react).

Dentro de la carpeta src/, creá una nueva carpeta llamada:

components
Dentro de src/components/, creá estos archivos (vacíos por ahora):

Header.jsx
FeaturedBooks.jsx
BookCard.jsx
Footer.jsx
(El Sidebar.jsx es opcional, no es necesario para aprobar la entrega)

¿Querés que te genere ahora los archivos completos listos para copiar y pegar (el código de Header.jsx, BookCard.jsx, etc.)? Así los creás todos en segundos.

Tú dijiste:
si 
ChatGPT Plus
Listo ✅ — acá tenés los cuatro componentes principales (Header, BookCard, FeaturedBooks, Footer) completos y listos para copiar dentro de tu carpeta src/components/.

El siguiente paso es que te ayude a crear o ajustar los archivos base (App.jsx, main.jsx y App.css) para que todo funcione y puedas probarlo en el navegador.
¿Querés que te los genere también?

Tú dijiste:
si 
ChatGPT Plus
React Libreria App
· javascript
// === src/main.jsx ===
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// === src/App.jsx ===
import React from 'react'
import Header from './components/Header'
import FeaturedBooks from './components/FeaturedBooks'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <FeaturedBooks />
      </main>
      <Footer />
    </div>
  )
}

export default App

// === src/App.css ===
body {
  font-family: Arial, sans-serif;
Listo ✅ — ahora tenés los archivos main.jsx, App.jsx y App.css completos y listos para ejecutar tu proyecto en React.

El siguiente paso es ejecutar:

npm run dev
y abrir el enlace que te dé (generalmente http://localhost:5173) para ver tu aplicación funcionando.

¿Querés que te explique cómo agregar tus imágenes reales y reemplazar las de ejemplo (libro1.jpg, libro2.jpg, libro3.jpg)?

Tú dijiste:
npm run dev

macar@macarena MINGW64 ~/Desktop/desarrollo individual/UTN-DS25-practicas/HTML-CSS-JS (main)
$ npm run dev 
npm error code ENOENT
npm error syscall open
npm error path C:\Users\macar\Desktop\desarrollo individual\UTN-DS25-practicas\HTML-CSS-JS\package.json
npm error errno -4058
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open 'C:\Users\macar\Desktop\desarrollo individual\UTN-DS25-practicas\HTML-CSS-JS\package.json'
npm error enoent This is related to npm not being able to find a file. 
npm error enoent
npm error A complete log of this run can be found in: C:\Users\macar\AppData\Local\npm-cache\_logs\2025-10-28T02_41_14_041Z-debug-0.log       
ChatGPT Plus
No te preocupes 😊 — ese error es normal cuando ejecutás npm run dev desde una carpeta que no tiene un proyecto de Node (no tiene el archivo package.json).

Estás parada en esta carpeta:

C:\Users\macar\Desktop\desarrollo individual\UTN-DS25-practicas\HTML-CSS-JS
y ahí no está tu proyecto React.

Tu app en React (la que creaste con npm create vite@latest libreria-react -- --template react) tiene que estar en una carpeta separada, que contiene el archivo package.json.

🧭 Solución paso a paso
En la terminal, movete a la carpeta del proyecto React:

cd libreria-react
(o al nombre que le pusiste al crearla)

Verificá que exista package.json con:

dir
Si ves el archivo package.json en la lista ✅ estás en el lugar correcto.

Ahora sí, ejecutá:

npm run dev
Y abrí el enlace (generalmente http://localhost:5173).

Si no recordás dónde se creó la carpeta libreria-react, podés buscarla en tu PC (en el buscador de Windows).
Cuando la encuentres, abrila en VS Code y ejecutá ahí los comandos.

¿Querés que te ayude a crear nuevamente la app React dentro de la carpeta correcta (por ejemplo, dentro de tu repo UTN-DS25-practicas/react/)?

Tú dijiste:
npm run dev

11:42:40 [vite] Internal server error: Failed to resolve import "./components/FeaturedBooks" from "src/App.jsx". Does the file exist?
  Plugin: vite:import-analysis
  File: C:/Users/macar/Desktop/desarrollo individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/src/App.jsx:3:26
  2  |  import React from "react";
  3  |  import Header from "./components/Header";
  4  |  import FeaturedBooks from "./components/FeaturedBooks";
     |                             ^
  5  |  import Footer from "./components/Footer";
  6  |  import "./App.css";
      at TransformPluginContext._formatLog (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31106:43)
      at TransformPluginContext.error (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31103:14)
      at normalizeUrl (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29590:18)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29648:32
      at async Promise.all (index 3)
      at async TransformPluginContext.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29616:4)
      at async EnvironmentPluginContainer.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:30905:14)     
      at async loadAndTransform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:26043:26)
11:42:40 [vite] (client) Pre-transform error: Failed to resolve import "./components/FeaturedBooks" from "src/App.jsx". Does the file exist?  
  Plugin: vite:import-analysis
  File: C:/Users/macar/Desktop/desarrollo individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/src/App.jsx:3:26
  2  |  import React from "react";
  3  |  import Header from "./components/Header";
  4  |  import FeaturedBooks from "./components/FeaturedBooks";        
     |                             ^
  5  |  import Footer from "./components/Footer";
  6  |  import "./App.css";
11:43:07 [vite] Internal server error: Failed to resolve import "./components/FeaturedBooks" from "src/App.jsx". Does the file exist?
  Plugin: vite:import-analysis
  File: C:/Users/macar/Desktop/desarrollo individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/src/App.jsx:3:26
  2  |  import React from "react";
  3  |  import Header from "./components/Header";
  4  |  import FeaturedBooks from "./components/FeaturedBooks";        
     |                             ^
  5  |  import Footer from "./components/Footer";
  6  |  import "./App.css";
      at TransformPluginContext._formatLog (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31106:43)
      at TransformPluginContext.error (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31103:14)
      at normalizeUrl (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29590:18)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29648:32
      at async Promise.all (index 3)
      at async TransformPluginContext.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29616:4)
      at async EnvironmentPluginContainer.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:30905:14)     
      at async loadAndTransform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:26043:26)
      at async viteTransformMiddleware (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:27118:20)
11:43:21 [vite] Internal server error: Failed to resolve import "./components/FeaturedBooks" from "src/App.jsx". Does the file exist?
  Plugin: vite:import-analysis
  File: C:/Users/macar/Desktop/desarrollo individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/src/App.jsx:3:26
  2  |  import React from "react";
  3  |  import Header from "./components/Header";
  4  |  import FeaturedBooks from "./components/FeaturedBooks";        
     |                             ^
  5  |  import Footer from "./components/Footer";
  6  |  import "./App.css";
      at TransformPluginContext._formatLog (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31106:43)
      at TransformPluginContext.error (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31103:14)
      at normalizeUrl (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29590:18)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29648:32
      at async Promise.all (index 3)
      at async TransformPluginContext.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29616:4)
      at async EnvironmentPluginContainer.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:30905:14)     
      at async loadAndTransform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:26043:26)
      at async viteTransformMiddleware (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:27118:20) (x2)
11:43:32 [vite] Internal server error: Failed to resolve import "./components/FeaturedBooks" from "src/App.jsx". Does the file exist?
  Plugin: vite:import-analysis
  File: C:/Users/macar/Desktop/desarrollo individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/src/App.jsx:3:26
  2  |  import React from "react";
  3  |  import Header from "./components/Header";
  4  |  import FeaturedBooks from "./components/FeaturedBooks";        
     |                             ^
  5  |  import Footer from "./components/Footer";
  6  |  import "./App.css";
      at TransformPluginContext._formatLog (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31106:43)
      at TransformPluginContext.error (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:31103:14)
      at normalizeUrl (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29590:18)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29648:32
      at async Promise.all (index 3)
      at async TransformPluginContext.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:29616:4)
      at async EnvironmentPluginContainer.transform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:30905:14)     
      at async loadAndTransform (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:26043:26)
      at async viteTransformMiddleware (file:///C:/Users/macar/Desktop/desarrollo%20individual/UTN-DS25-practicas/HTML-CSS-JS/libreria-react/node_modules/vite/dist/node/chunks/config.js:27118:20) (x3)
ChatGPT Plus
Parece que tu error dice:

Failed to resolve import "./components/FeaturedBooks" from "src/App.jsx". Does the file exist?

💡 Eso significa que Vite no encuentra el archivo FeaturedBooks.jsx en la carpeta src/components.

🔍 Verifiquemos:
En tu proyecto, abrí esta ruta:

libreria-react/src/components/
Confirmá que dentro haya un archivo llamado:

FeaturedBooks.jsx
⚠️ Tené en cuenta:

El nombre debe coincidir exactamente (con mayúsculas y minúsculas).

Debe tener extensión .jsx (no .js, ni .txt).

Estar dentro de la carpeta components.

✅ Si no existe:
Creá el archivo FeaturedBooks.jsx en esa carpeta y pegá este código:

import React from 'react'
import BookCard from './BookCard'

const libros = [
  { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', imagen: '/src/assets/libro1.jpg', descripcion: 'Una obra maestra de la literatura latinoamericana.' },
  { titulo: 'Rayuela', autor: 'Julio Cortázar', imagen: '/src/assets/libro2.jpg', descripcion: 'Un viaje surrealista a través de la mente y el tiempo.' },
  { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', imagen: '/src/assets/libro3.jpg', descripcion: 'Una fábula poética sobre la infancia y la imaginación.' }
]

export default function FeaturedBooks() {
  return (
    <section className="featured">
      <h2>Libros destacados</h2>
      <div className="books-grid">
        {libros.map((l, i) => (
          <BookCard key={i} {...l} />
        ))}
      </div>
    </section>
  )
}
Guardá y volvé a correr:

npm run dev
¿Querés que te muestre una imagen del esquema correcto de carpetas (cómo debería verse src con todos los archivos dentro)?

Tú dijiste:
npm run dev

ya pude, ahora como seguimos ?
ChatGPT Plus
Imagen generada
Imagen generada
Imagen generada



Compartir
Tú dijiste:
Imagen cargada
ya pude, ahora cual es el siguiente paso ???
ChatGPT Plus
¡Excelente, Maca! 🎉👏
Tu app React ya funciona perfecto — se ve el header, los libros y el footer.
Ahora solo te quedan los pasos finales para terminar y entregar la actividad individual.

✅ Siguientes pasos
🪣 1. Mover o crear la carpeta dentro del repo principal
Asegurate de que tu proyecto React esté dentro de tu repositorio de prácticas.
Tu estructura debería quedar así:

UTN-DS25-practicas/
│
├── HTML-CSS-JS/
│   ├── Ejercicio1/
│   ├── Ejercicio2/
│   └── ...
│
└── react/
    └── libreria-react/
        ├── src/
        ├── package.json
        ├── vite.config.js
        └── ...
📦 Si tu carpeta libreria-react está en otro lado, movela ahí (podés arrastrarla con el Explorador o usar mv en la terminal).

🧾 2. Crear un README simple dentro de /react/libreria-react/
En tu editor, agregá un archivo README.md con algo así:

# Librería - React
Este proyecto contiene la versión en React del Ejercicio 5 del TP Individual.

## Instrucciones para ejecutar
1. Instalar dependencias:
   ```bash
   npm install
Ejecutar en modo desarrollo:

npm run dev
Abrir en el navegador:
http://localhost:5173


---

### 🚀 3. Subirlo a GitHub
En la terminal, desde la raíz de tu repo (`UTN-DS25-practicas`):

```bash
git add .
git commit -m "Agrego ejercicio React - Librería (Ejercicio 5)"
git push origin main
📢 4. Avisar al profesor
Cuando esté en GitHub, entrá al repo y copiá el link de tu repositorio (por ejemplo,
https://github.com/tuusuario/UTN-DS25-practicas).

Mandale ese enlace por mensaje directo en Slack, indicando que completaste el Ejercicio Individual de React (Ejercicio 5).

🌟 (Opcional, para sumar puntos)
Agregar un pequeño componente nuevo (por ejemplo, un buscador o un contador de favoritos).

O usar una imagen de portada para la librería.

¿Querés que te ayude a escribir el mensaje exacto que podrías mandarle al profe por Slack para entregar oficialmente el trabajo?

Tú dijiste:
📦 Si tu carpeta `libreria-react` está en otro lado, movela ahí (podés arrastrarla con el Explorador o usar `mv` en la terminal).

Imagen cargada
me aparecio este error 
ChatGPT Plus
Perfecto que me lo muestres 💪
El error que ves dice:

Error: EBUSY: resource busy or locked
Eso significa que Visual Studio Code o el servidor de desarrollo (npm run dev) todavía está usando la carpeta libreria-react, por eso Windows no la deja mover.

🔧 Solución rápida
Cerrá el servidor de desarrollo si lo tenés corriendo.
En la terminal donde pusiste npm run dev, apretá:

Ctrl + C
(y si te pregunta algo, escribí y y Enter).

Cerrá todas las ventanas del proyecto libreria-react en VS Code.

Incluso podés cerrar completamente VS Code para liberar los archivos.

Abrí el Explorador de archivos de Windows y mové manualmente la carpeta:

De:

C:\Users\macar\Desktop\desarrollo individual\UTN-DS25-practicas\HTML-CSS-JS\libreria-react
A:

C:\Users\macar\Desktop\desarrollo individual\UTN-DS25-practicas\react\
Volvé a abrir tu repo (UTN-DS25-practicas) en VS Code.
Verificá que la estructura quede así:

UTN-DS25-practicas/
├── HTML-CSS-JS/
└── react/
    └── libreria-react/
💡 Si Windows sigue sin dejarte moverla, probá reiniciar VS Code o incluso reiniciar la compu (a veces el proceso de Node queda “enganchado” en segundo plano).

¿Querés que te diga cómo probar después si tu app sigue funcionando desde la nueva ubicación (solo para confirmar que todo quedó bien)?

Tú dijiste:
git add .

git commit -m "agrego ejericio React-Libreria"       
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"     
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'macar@macarena.(none)')
ChatGPT Plus
Perfecto 👍 eso pasa la primera vez que usás git en tu compu.
Git te está pidiendo que le digas quién sos (tu nombre y mail), para registrar los commits correctamente.

🔧 Solución paso a paso
En la terminal (donde estás), ejecutá esto:

git config --global user.name "Macarena"
git config --global user.email "tuemail@ejemplo.com"
👉 Reemplazá "tuemail@ejemplo.com" por el mail que usás en tu cuenta de GitHub
(es importante que sea el mismo correo con el que iniciás sesión en GitHub).

Después, volvé a ejecutar tus comandos:

git add .
git commit -m "Agrego ejercicio React - Librería"
git push origin main
💡 Si te tira algún mensaje de autenticación al hacer git push, te puedo guiar para vincular tu cuenta de GitHub con Visual Studio Code (usando token o login directo).

¿Querés que te ayude con esa parte también (por si te pide usuario y contraseña al hacer push)?

Tú dijiste:
ya pude hacerlo , ya termine la entrega 9?
ChatGPT Plus
¡Sí, Maca 🎉! Si ya pudiste:
✅ mover la carpeta libreria-react a react/,
✅ hacer el commit y git push al repositorio,
✅ y tu app React funciona bien con npm run dev,

entonces tenés completada la Entrega N°9 (“Desarrollo Frontend Moderno – Introducción a React”) ✅🙌

💾 En resumen, tu entrega está completa si:
 El proyecto libreria-react está dentro de tu repo UTN-DS25-practicas/react/.

 Incluye los archivos src/, App.jsx, components/, App.css, etc.

 Funciona al correr npm install y npm run dev.

 Subiste los cambios a GitHub (git push).

 Tenés un pequeño README.md con instrucciones.

📢 Último paso (formal)
Avisale al profe por Slack (mensaje directo), algo así:

Hola, profe 👋
Le comparto mi entrega individual del TP 9 – Desarrollo Frontend Moderno (React).
Repositorio: [link a tu GitHub]

Incluye la conversión del Ejercicio 5 (Librería) a React con componentes y estilos.

Si querés, puedo revisar con vos el README o la estructura final del repo en GitHub para asegurar que quede perfecta antes de avisar al profe.
¿Querés que lo hagamos?

¡Excelente trabajo, Maca! 🎉
Si tu carpeta libreria-react está dentro de UTN-DS25-practicas/react/, el código funciona con npm run dev, hiciste el commit y git push, sí — ya terminaste la entrega 9 ✅

Solo te falta (si no lo hiciste ya) avisar al profe por Slack con un mensaje breve, por ejemplo:

Hola profe 👋
Le comparto mi entrega individual del TP9 – Desarrollo Frontend Moderno (React).
Repositorio: [link a tu GitHub]
Incluye la versión en React del Ejercicio 5 (Librería).

¿Querés que revise tu README o el link a GitHub antes de que lo envíes, para asegurarnos de que esté impecable?

Tú dijiste:
me gustaria cambiar un poco el diseño de la pagina, el estilo, otro color mas lindo y colorido y otro estilo de letra , se puede =
ChatGPT Plus
¡Sí, totalmente, Maca! 😍💪
Esa es la mejor parte: ahora que ya tenés tu app funcionando, podés personalizarla libremente con tu propio diseño y colores 🌈

Te enseño cómo hacerlo paso a paso sin romper nada 👇

🎨 1. Cambiar la paleta de colores
Todo el estilo está en src/App.css.
Podés elegir una paleta más moderna (por ejemplo, tonos pastel o vibrantes).
Mirá este ejemplo:

:root {
  --color-principal: #ff6f61; /* coral */
  --color-secundario: #ffe0b2; /* durazno claro */
  --color-texto: #333;
  --color-fondo: #fff8f6;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--color-fondo);
  color: var(--color-texto);
}

/* HEADER */
.site-header {
  background: var(--color-principal);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.main-nav a {
  color: white;
  margin-right: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}

.main-nav a:hover {
  text-decoration: underline;
}

/* LIBROS */
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.book-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

button {
  background-color: var(--color-principal);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff8a70;
}

/* FOOTER */
.site-footer {
  background: var(--color-principal);
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
}
✍️ 2. Cambiar la tipografía
Podés usar Google Fonts fácilmente.

En tu archivo index.html, dentro del <head>, agregá:

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
Y en el CSS (ya incluido arriba):

body {
  font-family: "Poppins", sans-serif;
}
🌈 3. (Opcional) Fondo con color suave o gradiente
Agregá esto en body para hacerlo más vistoso:

body {
  background: linear-gradient(135deg, #fff8f6, #ffe0b2);
}
✨ 4. Vista previa rápida
Con esos cambios vas a tener una página más moderna, con:

colores cálidos o vibrantes,

bordes redondeados,

fuente moderna (Poppins),

y un estilo más agradable a la vista.

¿Querés que te proponga un diseño de colores personalizado (por ejemplo: “pastel”, “oscuro elegante” o “librería vintage”)? Así te paso el CSS ajustado a ese estilo.

Tú dijiste:
`index.html`, dentro del `<head>`, agregá:

en donde esta ese archivo?
ChatGPT Plus
Perfecto 👏 te explico exactamente dónde encontrarlo:

📂 Ruta del archivo
En tu proyecto React creado con Vite, el archivo index.html está en la carpeta raíz del proyecto, no dentro de src.
O sea, la ruta es:

libreria-react/
├── index.html   👈 ESTE
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    └── ...
✍️ Cómo editarlo
En VS Code, en el panel izquierdo, buscá la carpeta libreria-react.

Abrila y hacé clic en el archivo index.html (suele tener un ícono con un símbolo de HTML naranja).

Dentro de ese archivo, vas a ver algo como esto:

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
💅 Agregá la fuente
Pegá esta línea dentro del <head>, justo debajo del <meta charset>:

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
Y si querés, también podés cambiar el <title> a algo más lindo, por ejemplo:

<title>Mi Librería React</title>
Después de eso, guardá los cambios (Ctrl + S)
y volvé a correr el proyecto con:

npm run dev
Así podés ver la nueva tipografía en acción 🎨

¿Querés que te diga dónde exactamente agregar los colores nuevos también (en qué parte del CSS pegar el código)?

Tú dijiste:
Y en el CSS (ya incluido arriba):

en que parte esta?
ChatGPT Plus
Perfecto, Maca 💪
te estás refiriendo a dónde poner la parte del CSS (los colores y la fuente Poppins).
Te explico paso a paso:

🎨 Dónde está el archivo de estilos
Tu archivo principal de estilos se llama:

App.css
y está en:

libreria-react/src/App.css
✍️ Qué hacer
En VS Code, en la barra lateral izquierda, abrí:

src → App.css
Ahí vas a ver tus estilos actuales (por ejemplo, reglas de .site-header, .book-card, etc.).

Reemplazá todo el contenido con el nuevo CSS colorido que te pasé antes (o, si querés mantener partes tuyas, podés pegarlo al final).

Por ejemplo:

:root {
  --color-principal: #ff6f61; /* coral */
  --color-secundario: #ffe0b2; /* durazno claro */
  --color-texto: #333;
  --color-fondo: #fff8f6;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--color-fondo);
  color: var(--color-texto);
}

/* HEADER */
.site-header {
  background: var(--color-principal);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.main-nav a {
  color: white;
  margin-right: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}

.main-nav a:hover {
  text-decoration: underline;
}

/* ... (el resto del CSS que te pasé) */
✅ Luego
Guardá el archivo (Ctrl + S).

En la terminal, corré tu app:

npm run dev
Abrí el enlace (http://localhost:5173) y vas a ver el nuevo color y la tipografía aplicados ✨

¿Querés que te genere una versión con otra combinación de colores (por ejemplo, “pastel”, “oscuro elegante” o “vintage librería”)? Así te paso un estilo completo adaptado al look que te gustaría.

Tú dijiste:
genial, ahora si me gusta
ChatGPT Plus
¡Buenísimo, Maca! 😍✨
Me alegra un montón que te haya quedado como te gusta 💅

Ya lograste todo lo importante de esta entrega:

✅ Proyecto React funcionando

✅ Código limpio y estructurado en componentes

✅ Estilos personalizados y tipografía moderna

✅ Subido a GitHub y listo para mostrar

¡Tenés el TP 9 completamente terminado y encima con diseño propio! 💪🔥

¿Querés que te ayude a dejar el README del proyecto un poquito más lindo (con emojis, color y formato pro)? Así queda presentable para mostrar o entregar.

Tú dijiste:
si, y despues subo todo a git hub y termino 
ChatGPT Plus
Perfecto 😎✨
Vamos a dejarte un README.md hermoso y presentable, listo para subir a GitHub junto con tu proyecto.

Copiá y pegá esto dentro de tu archivo
📄 libreria-react/README.md
(podés reemplazar el contenido actual si ya tenés uno):

# 📚 Mi Librería en React

Proyecto individual de la **Entrega 9 – Desarrollo Frontend Moderno (React)**  
Materia: *Desarrollo de Software - UTN 2025*

---

## 🧠 Descripción

Esta es la versión en **React** del *Ejercicio 5 (Librería)* del trabajo práctico individual.  
El objetivo fue transformar la estructura HTML/CSS original en una aplicación moderna utilizando **componentes**, **JSX**, y **Vite** como entorno de desarrollo.

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar este repositorio o descargar la carpeta `libreria-react`.
2. Instalar dependencias:
   ```bash
   npm install
Iniciar el servidor de desarrollo:

---

### 💾 Último paso

1. Guardá el archivo (`Ctrl + S`).
2. En la terminal, ejecutá:
   ```bash
   git add .
   git commit -m "Agrego README con descripción y estilo final"
   git push origin main


npm run dev
Abrir el navegador en:
👉 http://localhost:5173

🧩 Tecnologías utilizadas
⚛️ React

⚡ Vite

🎨 CSS3 / Google Fonts (Poppins)

🧱 HTML5 y JSX

🎨 Diseño personalizado
El sitio utiliza una paleta cálida y moderna, con tonos coral y durazno,
además de la fuente Poppins para un estilo más limpio y profesional.
🖼️ Vista previa
📚 Mi Librería
---------------------------------------
[ Cien Años de Soledad ]
[ Rayuela ]
[ El Principito ]
❤ Favorito
---------------------------------------
© 2025 Mi Librería

✍️ Autora

👩‍💻 Macarena [Tu Apellido]
📅 Octubre 2025
Repositorio principal: UTN-DS25-practicas

