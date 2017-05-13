'use strict';

var React = require('react/addons');
// CSS
require('normalize.css');
require('../styles/main.css');
//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function getImageURL(imageDataArr){
	for(var i = 0; i < imageDataArr.length; i++){
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
})(imageDatas);
var GalleryApp = React.createClass({
  render: function() {
    return (<section className="stage"><section className="img-sec"></section><nav className="controller-nav"></nav></section>);
  }
});
React.render(<GalleryApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryApp;
