import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as wifiController from "../controllers/wifiController.js";

const wifiRoute = Router();

wifiRoute.get("/wifis", verifyToken, wifiController.sendWifis);

wifiRoute.get("/wifis/:id", verifyToken, wifiController.sendWifiById);

wifiRoute.post("/wifis", verifyToken, wifiController.newWifi);

wifiRoute.delete("/wifis/:id", verifyToken, wifiController.removeWifi);

export default wifiRoute;
