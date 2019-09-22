/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import '../App.css';
import { async } from 'q';
import { Link } from 'react-router-dom';

function News() {

  useEffect(() => {
    fetchData()
  },[])

  const [news, setNews] = useState([])

  const fetchData = async () => {
    const rawdata = await fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=535ff7548b3c452fa0ccb7fc815d1aad");
    
    const data = await rawdata.json()
    setNews(data.articles)
    console.log(data)
  }

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row">
        {news.map(item => (
            <div key={item.title} className="col-md-3 col-sm-12">
              <img src={item.urlToImage} alt="" className="img-fluid" />
              <a className="text-sm text-muted" href={item.url}>{item.title}</a>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default News;
