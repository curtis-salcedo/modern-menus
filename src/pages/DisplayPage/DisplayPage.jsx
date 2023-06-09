import React, {useState, useRef, useContext} from 'react'
import YouTube, {YouTubeProps} from 'react-youtube'

import './DisplayPage.css'
import BusinessPage from '../BusinessPage/BusinessPage'
import ItemList from '../../components/ItemList/ItemList'
import DisplayTemplate from '../../components/DisplayTemplate/DisplayTemplate'
import ItemSelection from '../../components/ItemSelection/ItemSelection'
import PreviewPage from '../../components/PreviewPage/PreviewPage'


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

  return (
    <>
    <div className="DisplayPageContainer">
      {/* <div>
        <PreviewPage user={user} business={business} />
      </div> */}
    </div>
    </>
  );
}