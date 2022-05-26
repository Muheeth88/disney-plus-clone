import React from 'react'
import '../styles/Details.css'

const Details = () => {
  return (
    <div className='detailsContainer'>
       <div className='detailsBackground'>
         <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg' alt=''></img>
       </div>
       <div className='imgTitle'>
         <img src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1522856074944-CXPZQOKB9OJLBMB1F678/bau_poster.jpg' alt=''></img>
       </div>
       <div className='controls'>
         <button className='playBtn'>
           <img src='/images/play-icon-black.png' alt=''></img>
           <span>PLAY</span>
         </button>
         <button className='trailerBtn'>
            <img src='/images/play-icon-white.png' alt=''></img>
            <span>Trailer</span>
         </button>
         <button className='addBtn'>
           <span>+</span>
         </button>
         <button className='groupBtn'>
           <img src='/images/group-icon.png' alt=''></img>
         </button>
       </div>
       <div className='subtitle'> 2018 7m Family,Fantasy,Kids,Animation</div>
       <div className='description'> <p>kljcnlknclahaihucaiwehucLUfhcUDFe;aiwwhucfuo8hfihfiasd hciuhdicpavhwp9hfvpwiep;adfohipowiefj;aiwefc;wi
       ehcn;iseonc;vaioefnpoawiehaiowhcp;lIEfhpawefhpawo;ivhp;oieds;afiknsdf;oipwaihgpfvqwncpiwjriwalkjhsfailuhwfoiauhwoflih </p> </div>
    </div>
  )
}

export default Details