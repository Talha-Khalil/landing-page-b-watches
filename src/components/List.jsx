import React from 'react'
import listImg from '/assets/images/listimg.png'

const List = () => {
  return (
    <div className=' flex w-[59.625rem] h-[13.375rem] bg-card-bg rounded-xl border-[1px] border-solid border-card-border ' >
    <div>
      <img src={listImg} className='  h-[13.375rem] ' />
    </div>

    <div>
      <div>
        <h1>Rolex Datejust</h1>
        <p>Space for small produch description</p>
      </div>
      <div className='flex' >
      <div className='grid grid-cols-2 ' >
        <h6>Movement:</h6>
        <p>Automatic</p>
        <h6>Case material:</h6>
        <p>Rose Gold</p>
        <h6>Updated at:</h6>
        <p>2022/02/11</p>
        <h6>Comes with:</h6>
        <p>Watch only</p>
        </div>
        <div className=' grid grid-cols-2' >
        <h6>Ref #:</h6>
        <p>228235</p>
        <h6>Delivery:</h6>
        <p>Original box, original papers</p>
        <h6>Location:</h6>
        <p>San Fransisco</p>
        <h6>Diameter:</h6>
        <p>40mm</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default List