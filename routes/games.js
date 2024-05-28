// Файл routes/games.js

const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe , checkIsGameExists, checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');



gamesRouter.put(
    "/games/:id",
    findGameById,
    
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame, 
    sendGameUpdated
    
  );
//gamesRouter.put('/games/:id',  sendGameUpdated ,checkIfUsersAreSafe, checkIfCategoriesAvaliable, updateGame)
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkEmptyFields, checkAuth, createGame, sendGameCreated); 
gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted);
module.exports = gamesRouter;