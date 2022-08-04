import React from 'react'
import tex from "../../assets/images/tex.png";
import bugun from "../../assets/images/bugun.png";
import parse from "html-react-parser";


export default function LeftAloneBig({item}) {
  return (
    <div className="left-img-con">
              <div className="left-img-container-one">
                <img src={item.default_img} alt="img" />
              </div>

              <div className="tex-header-flex">
                <div>
                  <img src={tex} alt="tex" />
                  <p>{item.category_id}</p>
                </div>

                <div>
                  <img src={bugun} alt="tex" />
                  <p>{item.created_date}</p>
                </div>
              </div>

              <h3>
                {item.title_uz}
              </h3>

              <p>
                {parse(item.description_uz.substring(0, 200))}
              </p>
            </div>
  )
}
