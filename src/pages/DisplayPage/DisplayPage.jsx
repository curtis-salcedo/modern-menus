import React, {useState, useRef, useContext} from 'react'
import YouTube, {YouTubeProps} from 'react-youtube'

import './DisplayPage.css'
import BusinessPage from '../BusinessPage/BusinessPage'
import ItemList from '../../components/ItemList/ItemList'


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


  // Add video to use state
  const [ videoId, setVideoId ] = useState('CKgKPGBa9EQ')

  const opts = {
    height: '180',
    width: '320',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <>
    
    <div className="DisplayPageContainer">
      <h1>Menu Edit Layout Page</h1>
      <div className="DisplayPageMenu">

        <div className="DisplayRow">
          <div className="DisplayMenuListContainer">
          <div className="DisplayRowItems">
              <div>Item 1</div>
              <div>Item 1</div>
              <div>Item 1</div>
            </div>
          </div>
        </div>

        <div className="DisplayRow">
          <div className="DisplayMenuListContainer">
            <div className="DisplayRowItems">
              <div>Item 1</div>
              <div>Item 1</div>
              <div>Item 1</div>
            </div>
            <div className="DisplayVideoAd">
              <YouTube videoId={videoId} opts={opts} />
            </div>
          </div>
        </div>

        <div className="DisplayRow">
          <div className="DisplayMenuListContainer">
          <div className="DisplayRowItems">
              <div>Item 1</div>
              <div>Item 1</div>
              <div>Item 1</div>
            </div>
          </div>
        </div>


        {/* <div onDrop={handleDrop}>
          <div>Drop Area</div>
        </div> */}


      </div>
    </div>
    </>
  );
}