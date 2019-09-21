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
  }

  return (
    <div className="App">
      <h1>News Page</h1>
      {news.map(item => (
        <div key={item.title}>
          <Link to={`/news/${item.title}`}>
            <p>{item.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default News;
