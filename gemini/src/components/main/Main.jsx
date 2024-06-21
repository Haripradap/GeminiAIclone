import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { context } from '../../context/Context'

const Main = () => {

const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(context);

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt=''/>
        </div>
        <div className='main-container'>

            {!showResult 
            ?<>
            <div className='greet'>
                <p><span>Hello, Dev.</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Breifly summarize something</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
            
                <div className='card'>
                    <p>Suggest anything new in this chat</p>
                    <img src={assets.bulb_icon} alt=''/>
                </div>
            
                <div className='card'>
                    <p>Brain strom is something crazy</p>
                    <img src={assets.message_icon} alt=''/>
                </div>
            
                <div className='card'>
                    <p>imrove readability of the following code</p>
                    <img src={assets.code_icon} alt=''/>
                </div>
            </div>
            </>
            :
            <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt=''/>
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt=''/>
                    {loading
                     ? 
                    <div className='loader'>
                        <hr/>
                        <hr/>
                        <hr/>
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }

           
            <div className='main-bottom'>
                <div className='search-box'>
                    <input  onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a Prompt Here..'/>
                    <div>
                        <img src={assets.gallery_icon} />
                        <img src={assets.mic_icon} />
                       {input ? <img onClick={() =>onSent()} src={assets.send_icon} /> : null} 
                    </div>
                </div>
                <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main