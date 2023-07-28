import React from 'react'
import Header from '../header/header'

export default function Ourstory() {
    return (
        <div>
        <Header />
        <div
          style={{
            position: "relative",
            width: "60%",
            margin: "auto",
            marginTop: "10%",
          }}
        >
          <div class="container">
          <div
            style={{
              fontSize: "2rem",
              textTransform: "initial",
              fontWeight: "bold",
              marginTop: "2%",
              color: "#ff7a00",
              textAlign: "center",
            }}
          >Our story</div>
            <p style={{ margin: "20px auto" }}>
            The owner of our publishing company Nwankwo Group, Kenneth Nwankwo is a big fan and advocate of recognition for outstanding accomplishments. He birthed the idea of having a standard and recognized publication of accomplishments on the emerging virtual world: the metaverse.            </p>
            <p style={{ margin: "20px auto" }}>
            The big push that brought this big project came after Kenneth read on a reliable media outlet on 28th of February 2022, that MTN (owning 144 plots of virtual land with an overall area of 12x12m) became the first African company to enter the metaverse by purchasing land in Africarare. Other convincing factors where Facebook rebranding itself as Meta so as to play a key role on building the next evolution of digital connection in the metaverse, Nike making massive moves to sell virtual Air Jodans, Walmart working on offering virtual merchandise in online stores, and Microsoft’s purchase of game developing company Activision Blizzard.            </p>
          
      
            
          </div>
        </div>
      </div>
    )
}
