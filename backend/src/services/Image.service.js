import config from "../config/config.js";
import ImageKit from "@imagekit/nodejs";
import { toFile } from "@imagekit/nodejs";

const client = new ImageKit({
    privateKey: config.IMAGEKIT_KEY, // This is the default and can be omitted
});


export async function sendImage({ buffer, fileName, folder = "threadly" }) {
   const result =  await client.files.upload({
        file: await ImageKit.toFile(buffer),
        fileName:fileName,
        folder:folder

    });

    return result.url;

}