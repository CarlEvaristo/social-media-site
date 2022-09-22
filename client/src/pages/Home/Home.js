import React from 'react'
import "./Home.css"

// npm install simplebar-react
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import LeftMenu from "../../components/LeftMenu"
import RightMenu from "../../components/RightMenu"

export default function Home() {
  return (
    <div className='home'>
      <section className="leftSection">
        <SimpleBarReact style={{ height: "90vh" }} >
          <LeftMenu />
        </SimpleBarReact>
      </section>

      <section className="mainSection">
        <h1>Home</h1>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </section>
      
      <section className="rightSection">
        <SimpleBarReact style={{ height: "90vh" }}>
          <RightMenu />
        </SimpleBarReact>
      </section>
    </div>
  )
}
