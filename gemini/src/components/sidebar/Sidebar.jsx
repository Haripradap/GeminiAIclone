import './Sidebar.css'
import {assets} from '../../assets/assets.js'
import { useContext, useState } from 'react'
import { context } from '../../context/Context.jsx'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts,setRecentPrompt,newChat} = useContext(context)

    const loadPrompt = async(prompt) => {
             setRecentPrompt(prompt)
           await onSent(prompt)
    }

  return (
    <div className="sidebar">
        <div className='top'>
            <img onClick={() => {
                setExtended(prev => !prev)
            }} className='menu' src={assets.menu_icon} alt='menu' />
            <div onClick={() => newChat()} className='new-chat'>
                <img src={assets.plus_icon} alt='plus' />
                {extended ? <p>New Chat</p> : null}
            </div>
            {extended 
            ?<div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} key={index} className='recent-entry'>
                                <img src={assets.message_icon} alt='recent' />
                                 <p>{item.slice(0,18)}...</p>
                             </div>
                        )                    
                })}
               
            </div> 
            : null
            
             }
            
        </div>
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
                <img src={assets.question_icon} alt=''/>
               {extended ? <p> Help </p> : null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src={assets.history_icon} alt=''/>
                {extended ? <p> Activity </p> : null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src={assets.setting_icon} alt=''/>
                {extended ? <p> Contact </p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar