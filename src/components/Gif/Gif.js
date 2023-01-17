import React from "react";
import { Link } from "wouter";
export default function Gif ({title,id,url}) {
    return(
        <div className="h-full w-full">
              <Link to={`/gif/${id}`}>
              <img className="rounded-md" alt={title} src={url}/>
              </Link>
            </div>
    )

}