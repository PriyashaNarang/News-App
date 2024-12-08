import React from 'react'
export default function Newsitem(props) {
  var {title,desc,imgUrl,newsUrl}=props;
  return (
    <div>
      <div className="card my-2" style={{width: "21rem"}}>
<img src={imgUrl?imgUrl:"https://www.reuters.com/resizer/v2/T6TJMQU54FPVFJIC2JQHRMGSXE.jpg?auth=f1f0ad2e08a3b2cccab1ca79679ce85b99d2adce1efc0e96d13d1b1dbfe28ee5&height=1005&width=1920&quality=80&smart=true"} className="card-img-top" alt="Not supported"/>
<div className="card-body">
  <h5 className="card-title">{title}</h5>
  <p className="card-text">{desc}</p>
  <a href={newsUrl} className="btn btn-primary">Read More</a>
</div>
</div>
    </div>
 )
}
