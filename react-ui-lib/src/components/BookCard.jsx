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