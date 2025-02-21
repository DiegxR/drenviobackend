"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
// Crear un precio especial 
router.post('/', usersController_1.requestUsers);
router.get('/', usersController_1.getUsers);
router.get('/:email', usersController_1.getUserByEmail);
exports.default = router;
