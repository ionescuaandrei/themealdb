import React from 'react'

const list = [
  "Învață să gatești",
  "Simplu si rapid",
  "Renunță la cărțile fizice de rețete",
  "Învață despre nutriție",
  "Accesează noua platformă culinară"
]

const improveSkills = () => {
  return (
    <div className="section improve-skills">
      <div className="col img">
      <img src="/img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">
          Improve Your Culinary Skills!
        </h1>
        { list.map((item,index) => (
          <p className="skills-item" key={index}> {item} </p>
        ))
        }
        <button className="btn">Sign up now!</button>
      </div>
    </div>
  )
}

export default improveSkills