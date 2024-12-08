import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export default function Newss(props) {
  const[articles,Setarticles]=useState([]);
  const[page,Setpage]=useState(1);
  const[loading,Setloading]=useState(true);
  const[totalResults,SettotalResults]=useState(0);
  const update=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=38c96742b763429dbe5880b4fb1c8a90&page=${page}&pageSize=${props.pageSize}`;
    const data=await fetch(url);
    props.setProgress(30);
    const parsedata=await data.json();
    props.setProgress(70);
    Setarticles(parsedata.articles);
    SettotalResults(parsedata.totalResults);
    Setloading(false);
    props.setProgress(100);
  }
  useEffect(()=>{
    update();
  })
  const fetchMoreData=async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=38c96742b763429dbe5880b4fb1c8a90&page=${page+1}&pageSize=${props.pageSize}`
    Setpage(page+1);
    const data=await fetch(url);
    const parsedata=await data.json();
    Setarticles(articles.concat(parsedata.articles));
    SettotalResults(parsedata.totalResults);
  }
  // const prevfunc=async()=>{
  //   Setpage(page-1);
  //   update();
  // }
  // const nextfunc=async()=>{
  //   if(page + 1>Math.ceil(totalResults/12))
  //   {

  //   }
  //   else
  //   {
  //     Setpage(page+1);
  //     update();
  //   }
  // }
    return (
      <>
        <div className='container my-3'>
          <h2>HEADLINES</h2>
          {loading && <Loading/>}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}
        >
          <div className='container'>
          <div className='row'>
            {/* one more condition !loading */}
            {articles.map((element)=>{
              return <div className='col-md'>
              <Newsitems title={element.title} desc={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
          {/* <div className='d-flex justify-content-between container'>
          <button type="button" disabled={page<=1} className="btn btn-dark" onClick={prevfunc}> &lt;- Previous</button>
          <button type="button" disabled={page + 1>Math.ceil(totalResults/12)} className="btn btn-dark" onClick={nextfunc}> Next -&gt;</button>
          </div> */}
        </div>
      </>
    )
}

Newss.defaultProps={
  country: "us",
  pageSize: 12,
  category: "general",
  keys: "general"
}
Newss.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  keys: PropTypes.string
}
