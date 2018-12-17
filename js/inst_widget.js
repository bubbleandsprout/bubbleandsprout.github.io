var bas = {};

bas.fetchInstagram = function (instFeed) {
    var instToShow = [];
    instFeed.forEach(function (item, index) {
        var link = item.link;
        var image = item.images.low_resolution.url;
        instToShow.push({"link": link, "image": image});
    });
    var compiledRow = _.template('<% _.forEach(images, function(image) { %><div class="col-6 col-sm-4<%- show %>"><a href="<%- image.link %>" target="_blank"><img class="img-fluid instFeedImg" src="<%- image.image %>"/></a> </div><% }); %>');
    $('.instFeed').append(compiledRow({'images': instToShow.slice(0, 3),'show':""})).append(compiledRow({'images': instToShow.slice(3, 6), 'show':""})).append(compiledRow({'images': instToShow.slice(6, 9),'show':" hidden-xs-down"}));
};

bas.getInstagram = function (callback) {
   $.ajax({
        url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1208290410.4814d80.dd2d7fbc761947e7b474e6b89b71943a",
        type: "GET",
        crossDomain: true,
        dataType: "jsonp",
        success: function (data) {
            callback(data.data);
        },
        error: function (err) {
            console.log(JSON.stringify(err, null, 4));
        }
    });
};