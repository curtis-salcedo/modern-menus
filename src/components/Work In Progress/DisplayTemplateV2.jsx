import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube'
import * as businessAPI from '../../utilities/business-api';
import * as menusAPI from '../../utilities/menus-api';
import * as itemsAPI from '../../utilities/items-api';
import * as displaysAPI from '../../utilities/displays-api';
import { generateTemplate } from '../../utilities/business-service'
import ItemSelection from '../ItemSelection/ItemSelection';
import './DisplayTemplate.css'
import { set } from 'mongoose';

export default function DisplayTemplate({ user, business }) {
  // Identify the item being dragged to the display menu
  const [ draggedItem, setDraggedItem ] = useState(null)
  const [ menus, setMenus ] = useState(null)
  // Filter list menus with all the children items
  const [ filteredList, setFilteredList ] = useState(null)
  const [ itemList, setItemList ] = useState(null)
  const [ showItemList, setShowItemList ] = useState(false)
  // Used to get the basic template from business-services.js
  const [ template, setTemplate ] = useState(generateTemplate())
  // Used to store the template object to database
  const [ userTemplate, setUserTemplate ] = useState([])
  // 0 index storage
  const [ itemIndex, setItemIndex ] = useState(null)
  // Template storage and reset form
  const [ loadTemplate, setLoadTemplate ] = useState(null)
  const [ updatedTemplate, setUpdatedTemplate ] = useState(null)
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
  const navigate = useNavigate();

  useEffect(() => {
    if (userTemplate.length === 0) {
      setUserTemplate(template)
    }
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
      if (userTemplate) {
        console.log(userTemplate.template)
      }
      const userId = user._id
      const checkUserTemplate = await displaysAPI.getTemplate()
      const loadUserTemplate = checkUserTemplate.find((t) => t.user === userId)
      setLoadTemplate(loadUserTemplate)

    }
    fetchData()
  }, [user, business])
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
  function handleItemList(evt) {
    const curIdx = evt.target.value
    setItemIndex(curIdx)
    return <ItemSelection />
  }
  // Show item list when clicking add item
  function handleShowItemList() {
    setShowItemList(true)
  }
  // Close item list when item selected and close button on ItemSelection.jsx
  function handleCloseItemList() {
    setShowItemList(false)
  }
  // Handle to run multiple handles on "Add Item" in ItemSelection list
  function handleAddItemClick(evt) {
    handleItemList(evt)
    handleShowItemList(evt)
  }

  function handleAddItemToDisplayIndex(evt) {
    try {
      // Returns item ID
      const itemId = evt.target.value
      // Establish the cell value for it's part in the schema position array
      const cellIdx = itemIndex
      // Filter itemList to get the item matching the selected item
      const selectedItem = itemList.find((item) => item._id === itemId)
      // Set the item to the placeholder template array
      const templateHolder = [ ...userTemplate ]
      // Put the item object into the selected cell
      templateHolder[cellIdx] = {
        displayItems: selectedItem,
        value: cellIdx,
        style: '',
      }
      setUserTemplate( templateHolder )
      setUpdatedTemplate( templateHolder )
      handleCloseItemList();
      setLoadTemplate( templateHolder )
      console.log()
      const newArray = updatedTemplate
      // setLoadTemplate(prevState => ({...prevState, userTemplate: newArray}))
      console.log(loadTemplate)
      displaysAPI.updateTemplate()
    } catch (err) {
      
    }
  }
  
  // Not currently used
  async function handleChange(evt) {
    const { name, value } = evt.target;
    console.log(evt.target)
  }
  // Handle to create a template / save a template
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const templateData = {
        name: null,
        template: {userTemplate},
        business: business,
        user: user,
      }
      await displaysAPI.createTemplate( templateData )
      setUserTemplateForm({
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
    } catch (err) {
      console.log('TemplateForm Create Error', err)
    }
    navigate('/')
  }

  // Handle to update if there is already a user template
  async function handleUpdateSubmit(evt) {
    evt.preventDefault()
    try {
      const newArray = updatedTemplate
      setLoadTemplate(prevState => ({...prevState, userTemplate: newArray}))
      console.log(loadTemplate)
      await displaysAPI.updateTemplate(loadTemplate)
    } catch (err) {
      console.log('TemplateUpdate Error', err)
    }
  }

  // YouTube API
  const [ videoId, setVideoId ] = useState('CKgKPGBa9EQ')

  const opts = {
    height: 'auto',
    width: 'auto',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  // Render function to display menu cells
  function renderTemplate() {
    if (template) {
      return (
        <div className="DisplayArea">
          {template.map((item, idx) => (
            <div key={idx} className="DisplayCard">
              { template[idx] ? (
                <button onClick={handleAddItemClick} value={idx}>Add Content</button>
              ) : (
                <div className="DisplayCardTitle">{template[idx]}</div>
              )}

            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div className="DisplayTemplateContainer">
      
  </div>
  )
}