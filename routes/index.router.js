const express = require("express");
const router = express.Router();
const fs = require("fs");

const videoPath_ar = "media/videos/arabic/";
const videoPath_en = "media/videos/english";
const imagePath_first = "media/images/first/";
const imagePath_second = "media/images/second/";
const songPath_ar = "media/songs/arabic/";
const songPath_en = "media/songs/english/";

router.get("/", (req, res) => {
  fs.readdir(videoPath_en, (error, videos) => {
    if (error) console.log(error);

    res.render("index", { videos: videos });
  });
});

router.get("/videos/ar", (req, res) => {
  fs.readdir(videoPath_ar, (error, videos) => {
    if (error) console.log(error);

    res.render("videosAR", { videos: videos });
  });
});

router.get("/videos/en", (req, res) => {
  fs.readdir(videoPath_en, (error, videos) => {
    if (error) console.log(error);

    res.render("videosEN", { videos: videos });
  });
});

router.get("/images/first", (req, res) => {
  fs.readdir(imagePath_first, (error, images) => {
    if (error) console.log(error);

    res.render("imagesFirst", { images: images });
  });
});

router.get("/images/second", (req, res) => {
  fs.readdir(imagePath_second, (error, images) => {
    if (error) console.log(error);

    res.render("imagesSecond", { images: images });
  });
});

router.get("/songs/ar", (req, res) => {
  fs.readdir(songPath_ar, (error, songs) => {
    if (error) console.log(error);

    res.render("index", { songs: songs });
  });
});

router.get("/songs/en", (req, res) => {
  fs.readdir(songPath_en, (error, songs) => {
    if (error) console.log(error);

    res.render("index", { songs: songs });
  });
});

module.exports = router;
