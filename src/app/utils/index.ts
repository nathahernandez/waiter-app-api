import path from "node:path";
import multer from "multer";

export const UPLOAD_PATH = path.resolve(__dirname, "..", "uploads");

export const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, UPLOAD_PATH);
		},
		filename(req, file, callback ) {
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	}),
});