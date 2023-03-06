import React from "react"
import { ReactDOM } from "react-dom/client"



// this one is used for creating element by js 

// const heading = document.createElement("h1")

// heading.innerHTML = "Hello Shubham"

// const root = document.getElementById('root')

// root.append(heading)


// =====================================

// this one is used for creating element ny react.js


// React.creatlement take 3 arguments, first is the tag second is the object which contain attributes and third is the content

const heading = React.createElement('h1', {}, 'Hello Shubham')

// if we want to create multiple element we can do this by using following method ==
const heading1 = React.createElement('h2', { id: 'simran' }, 'Hello Simran')

const container = React.createElement('div', { className: 's&s' }, [heading, heading1])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container)