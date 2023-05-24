import ItemForm from '../ItemForm/ItemForm';
import ItemDetail from '../ItemDetail/ItemDetail';
import MenuForm from '../MenuForm/MenuForm';
import PreviewPage from '../PreviewPage/PreviewPage';
import BusinessContext from '../../utilities/BusinessContext';
import React, { useContext, useState, useEffect } from 'react';
import YouTube from 'react-youtube'
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as menusAPI from '../../utilities/menus-api';

import './PreviewPage.css'

export default function CreateDisplay({ user }) {

  const { business, setBusiness } = useContext(BusinessContext)
  const [ items, setItems ] = useState(null)
  const [ menus, setMenus ] = useState(null)
  const [ showAdvertisement, setShowAdvertisement ] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const fetchMenus = async () => {
      if (business) {
        const menuList = await menusAPI.getMenus();
        const userMenus = menuList.filter((m) => m.user === user._id)
        setMenus(userMenus)

        const itemList = await itemsAPI.getItems();
        const userItems = itemList.filter((item) => item.user === user._id)
        setItems(userItems)
      }
    }
    fetchMenus()
  }, [business, user])

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

  useEffect(function () {
    function showAdvertisement() {
      setShowAdvertisement(true);
      setTimeout(hideAdvertisement, 10000);
    }
    function hideAdvertisement() {
      setShowAdvertisement(false);
      setTimeout(showAdvertisement, 10000);
    }
    showAdvertisement();
    function resetClock() {
      clearTimeout();
    }
    return resetClock;
  }, [])

  function handleExitPage() {
    if (location.pathname === '/preview')
    navigate('/')
  }

  return (

  <div className="PreviewContainer">
      {location.pathname === '/preview' && 
        <div>
          <button className="ExitPreviewButton" onClick={handleExitPage}>Exit Preview</button>
        </div>
        }
      { items ?
        <div className="PreviewCardContainer {
          ">
          { items.map((item) => (
            <div className="PreviewCard" key={item._id}>
              <div className="PreviewLeft">
                <div className="PreviewName"> {item.name}</div>
                <div className="PreviewDescription"> {item.description}</div>
              </div>
              <div className="PreviewPrice"> ${item.price}</div>
            </div>
            ))}
      </div>
        :
        <div>No Items</div>
        }
        <div className="AdContainer">

        { showAdvertisement ? 
          <div className="AdvertisementPlaceholder">Visit us at www.yourbusiness.com</div>
          :
          <div className="Advertisement">
            <YouTube videoId={videoId} opts={opts} />
          </div>
        }
        </div>

    </div>
  );
}