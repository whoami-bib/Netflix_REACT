import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../axios'
import { imageUrl,API_KEY} from '../constants/constants'
import YouTube from 'react-youtube'
import { findAllInRenderedTree } from 'react-dom/test-utils'

function RowPost(props) {
  const [Movie,setMovie] =useState([])
  const [urlId,SetUrlId] = useState([])
  useEffect(()=>{
    axios.get(props.url).then(respose=>{

      setMovie(respose.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(respose=>{
      if(respose.data.results.length!==0){
        SetUrlId(respose.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {Movie.map((obj)=>

        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
        )}
      </div>
     { urlId && <YouTube opts={opts} videoId={urlId.key} /> }

    </div>
  )
}

export default RowPost
