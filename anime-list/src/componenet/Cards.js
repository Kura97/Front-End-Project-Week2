import React from 'react'

function Cards(props) {
  return (
    <div>
        

      <article class="card">
        <img src={props.image} alt="card image" />
        <article class="content">
        <p class="date">{props.date}</p>
          <h3>{props.title}</h3>
          <p>
          {props.story}
          </p>
        </article>
      </article>



    </div>
  )
}

export default Cards