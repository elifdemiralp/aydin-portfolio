import React from 'react'

type Props = {
    srcImg?: string;
    srcTitle?: string;
};

export default function Skill({srcTitle, srcImg}: Props) {
  return (
    <div>
    <div className='group relative flex cursor-pointer'>
    <div
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-125"
              src={srcImg}
              alt=""
            />
            <p className="text-center text-gray-200 pt-2">{srcTitle}</p>
          </div>
    </div>

  </div>

  )
}
