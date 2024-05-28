const sendAllUsers = (req, res) => {
  // Установим заголовок ответа в формате JSON
res.setHeader('Content-Type', 'application/json');
// Отправим данные в виде JSON-объекта, 
// которые подготовим в миддлваре findAllUsers
res.end(JSON.stringify(req.usersArray));
};


// Экспортируем контроллер


const sendUserCreated = (req, res)=>{
  res.setHeader("Content-Type", 'application/json');
  res.end(JSON.stringify(req.user))
}



const sendUserById =  (req, res) =>{
  res.setHeader("Content-Type", 'application/json');
  res.end(JSON.stringify(req.user));
}




const sendUserUpdated = (req, res)=>{
  res.setHeader("Content-Type", 'application/json');
  res.end(JSON.stringify(req.user));
}

const sendUserDeleted = (req, res)=>{
  res.setHeader("Content-Type", 'application/json');
  res.end(JSON.stringify(req.user));
}

const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
}; 

module.exports = {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe};