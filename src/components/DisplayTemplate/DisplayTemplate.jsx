import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import * as businessAPI from '../../utilities/business-api';
import * as menusAPI from '../../utilities/menus-api';
import * as itemsAPI from '../../utilities/items-api';
import * as displaysAPI from '../../utilities/displays-api';
import { generateTemplate } from '../../utilities/business-service'
import ItemSelection from '../ItemSelection/ItemSelection';
import './DisplayTemplate.css'

export default function DisplayTemplate({ user, business }) {
  // Identify the item being dragged to the display menu
  const [ draggedItem, setDraggedItem ] = useState(null)
  const [ menus, setMenus ] = useState(null)
  const [ filteredList, setFilteredList ] = useState(null)
  const [ itemList, setItemList ] = useState(null)
  const [ showItemList, setShowItemList ] = useState(false)
  const [ template, setTemplate ] = useState(generateTemplate())
  const [ userTempate, setUserTemplate ] = useState(null)
  const [ itemIndex, setItemIndex ] = useState(null)
  const [ userTemplateForm, setUserTemplateForm] = useState({
    name: '',
    template: [
      {
        displayItem: '',
        value: '',
      }
    ],
    business: business,
    user: user,
  })


  useEffect(() => {
    const fetchData = async () => {
      if (business && business.menus) {
        await (business)
        // Get all menus for the user
        const menuList = await menusAPI.getMenus();
        const userMenus = menuList.filter((m) => m.user === user._id)
        setMenus(userMenus)

        // Get all the items for the user
        const itemList = await itemsAPI.getItems();
        const userItems = itemList.filter((item) => item.user === user._id)
        setItemList(userItems)

        // Get sortable lists based on sub-menu lists
        const mappedItems = userMenus.map((menu) => {
          const menuItems = userItems.filter((item) => item.menu._id === menu._id)
          return { menu, items: menuItems }
        })
        // Filtered list with arrays of objects that have menus with key of item objects in array
        setFilteredList(mappedItems)
      }
    }
    fetchData()
  }, [user, business])

  // useEffect(() => {
  //       // Get column headers
  //       if (filteredList) {
  //         const menuTitleArray = filteredList.map((arr) => ( arr.menu.name ))
  //         setTitleArray(menuTitleArray)
  //       }
  //   }, [filteredList])

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

  // Handle menu category selector
  function handleSelection(evt) {
    const selection = evt.target
    console.log(template)
  }

  function handleItemList(evt) {
    const curIdx = evt.target.value
    setItemIndex(curIdx)
    return <ItemSelection />
  }
  console.log(itemIndex)
  
  function handleShowItemList() {
    setShowItemList(true)
  }

  function handleCloseItemList() {
    setShowItemList(false)
  }

  function handleAddItemClick(evt) {
    handleItemList(evt)
    handleShowItemList(evt)
  }

  function handleAddItemToDisplayIndex(evt) {
    // Returns item ID
    const itemId = evt.target.value

    console.log(evt.target.value)
  }

  console.log(showItemList)

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

  function renderTemplate() {
    if (template) {
      return (
        <div className="DisplayArea">
        {template.map((item, idx) => (

          <div key={idx} className="DisplayCard">
            <div className="DisplayCardTitle"></div>
            <div className="DisplayCardContent"></div>
            <button onClick={handleAddItemClick} value={idx}>Add Content</button>



          </div>
        ))}
        </div>
      );
    }
  }

  return (
    <div className="DisplayTemplateContainer">
        { showItemList && (
          <div className="DisplayItemListSelection">
            <ItemSelection handleAddItemToDisplayIndex={handleAddItemToDisplayIndex} handleCloseItemList={handleCloseItemList} itemList={itemList} />
          </div>
        )}
      <div>{renderTemplate()}</div>
        <div className="Advertisement">
          <YouTube videoId={videoId} opts={opts} />
        </div>
  </div>

  )
}