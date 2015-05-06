Polymer({

  /* Overriding the core-ajax go method for checking the imgur input link */

  go: function() {

    // Matches direct url to the image. Example: http://i.imgur.com/aBc123.gif
    var imgur_image_pattern = RegExp("^https?:\/\/(?:www\.)?i\.imgur\.com\/([a-zA-Z0-9&,]+)\.((jpg)|(gif)|(png))", "i");

    // Matches album url to the image. Example: http://i.imgur.com/a/aBc123.gif
    var imgur_album_url_pattern = RegExp("^https?://(?:www\.)?imgur\.com/a/([a-zA-Z0-9&,]+)", "i");

    // Matches gallery url to the image. Example: http://imgur.com/gallery/aBc123
    var imgur_gallery_url_pattern = RegExp("^https?://(?:www\.)?imgur\.com/gallery/([a-zA-Z0-9&,]+)", "i");

    // Matches an image short link. Example: http://imgur.com/aBc123
    var imgur_hashes_pattern = RegExp("imgur\.com/(([a-zA-Z0-9]{5,7}[&,]?)+)", "i");

    this.headers = { "Authorization": "Client-ID " + this.clientId };

    if (imgur_image_pattern.exec(this.imgId)) {
      var match = imgur_image_pattern.exec(this.imgId);
      if (match) {
        var id = match[1].split(/[,&]/);
      }
      this.url = "https://api.imgur.com/3/image/" + id + ".json";
      this.super();
    } else if (imgur_album_url_pattern.exec(this.imgId)) {
      var match = imgur_album_url_pattern.exec(this.imgId);
      if (match) {
        var id = match[1].split(/[,&]/);
      }
      this.url = "https://api.imgur.com/3/album/" + id + ".json";
      this.super();
    } else if (imgur_gallery_url_pattern.exec(this.imgId)) {
      var match = imgur_gallery_url_pattern.exec(this.imgId);
      if (match) {
        var id = match[1].split(/[,&]/);
      }
      this.url = "https://api.imgur.com/3/gallery/" + id + ".json";
      this.super();
    } else if (imgur_hashes_pattern.exec(this.imgId)) {
      var match = imgur_hashes_pattern.exec(this.imgId);
      if (match) {
        var id = match[1].split(/[,&]/);
      }
      this.url = "https://api.imgur.com/3/image/" + id + ".json";
      this.super();
    } else {
      console.log("Unknown imgur link: ", this.imgId);
    }
  }
}); 