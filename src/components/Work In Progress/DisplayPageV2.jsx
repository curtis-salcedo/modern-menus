import React, {useState, useRef, useContext} from 'react'
import YouTube, {YouTubeProps} from 'react-youtube'

import './DisplayPage.css'
import BusinessPage from '../../pages/BusinessPage/BusinessPage'
import ItemList from '../ItemList/ItemList'
import DisplayTemplate from '../DisplayTemplate/DisplayTemplate'
import ItemSelection from '../ItemSelection/ItemSelection'


export default function DisplayPage({ user, business }) {
  // Identify the item being dragged to the display menu
  const [ draggedItem, setDraggedItem ] = useState(null)


  // Handles for draggable items
  // Take dragged item and it's data to copy
  function handleDragStart(itemData) {
    setDraggedItem(itemData)
  }

  // Reset data to null for next drag and drop
  function handleDragStop() {
    setDraggedItem(null)
  }

  // Log out the item dragged to the menu
  function handleDrop() {
    if (draggedItem) {
      console.log('Dropped Item:', draggedItem)
    }
  }

  // Add video to use
  const [ videoId, setVideoId ] = useState('CKgKPGBa9EQ')

  const opts = {
    height: 'auto',
    width: 'auto',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <>
    
    <div className="DisplayPageContainer">
      <h1>Display Page</h1>
      <div className="">
        <div><DisplayTemplate user={user} business={business} /></div>

            {/* <div className="DisplayVideoAd">
              <YouTube videoId={videoId} opts={opts} />
            </div> */}

      </div>
    </div>
    </>
  );
}