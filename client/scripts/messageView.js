var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">
          <%- username %>
        </div>
        <div class="text">
          <%- text %>
        </div>
        <div class ="roomName" style="color:blue; font-size: 85%">
         <i><br><%- roomname %><br></i>
        </div>
        <div class="time"> 
        <%- createdAt%> </div>
      </div>
      
    `)

};