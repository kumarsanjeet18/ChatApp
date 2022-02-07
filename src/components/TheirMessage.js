const TheirMessage = (lastMessage, message) => {
    const isFirstMessageByUser= (!lastMessage || lastMessage.sender.username!==message.sender.username)  ;
            
    return (
        <div>
            className="message-row" 
            {isFirstMessageByUser &&(
                <div className="message-avatar">
                    style={{backgroundImage: ` url$(message?.sender/.avatar) `} }
                    </div>                    
                ) }  
                {message?.attachments?.length >0
                ?(
                    <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className=" message-image"
                    style={{marginLeft:isFirstMessageByUser? '4PX':'48PX' }}/>
                    
                   ):(
                    <div className="message" style={{ float: 'left' , backgroundColor: '#CABCDC'}}>
                    {message.text}
                </div>
                   )
                   }
               
        </div>
      );
}
 
export default  TheirMessage;