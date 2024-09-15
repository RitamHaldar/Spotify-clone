import React from 'react'

const Control = () => {
  return (
    <div className='control'>
      <div className="control1">
        <img src="./card4img.jpeg" alt="image" className='controlimg'/>
        <span className="first">
            <ul>
                <li className='boldli'>Naa Ready</li>
                <li className='thinli'>Leo</li>
            </ul>
        </span>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div className="control2">
        <div className='controls'>
        <i class="fa-solid fa-shuffle"></i>
        <i class="fa-solid fa-backward-step"></i>
        <span className='play'><i class="fa-solid fa-circle-play" id='play'></i></span>
        <i class="fa-solid fa-forward-step"></i>
        <i class="fa-solid fa-repeat"></i>
        </div>
        <div className="slidebar">
          <span>0.00 </span>
            <input type="range" className='slider' max={100} min={0}/>
          <span> 3.46</span>
        </div>
      </div>
      <div className="control3">
      <i class="fa-solid fa-file-audio" id='control3i'></i>
      <i class="fa-solid fa-wand-magic" id='control3i'></i>
      <i class="fa-solid fa-database" id='control3i'></i>
      <i class="fa-solid fa-window-restore" id='control3i'></i>
      <i class="fa-solid fa-volume-low" id='control3i'></i>
      <div className="slidebar2" ><input type="range" className='slider2' id='control3i'/></div>
      <i class="fa-solid fa-window-maximize" id='control3i'></i>
      </div>
    </div>
  )
}

export default Control;
