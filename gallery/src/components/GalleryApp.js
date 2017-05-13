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
var ImgFigure = React.createClass({
	render: function() {
		return (
			<figure class="img-figure">
				<img src={this.props.data.imageURL} alt={this.props.data.title} />
				<figcaption>
					<h2>{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}
});
var GalleryApp = React.createClass({
  render: function() {
  	var controllers = [], imgFigures = []; 
  	imageDatas.forEach(function(value){ 
  		imgFigures.push(<ImgFigure data={value} />); 
  	});
    return (
    	<section className="stage">
    		<section className="img-sec">
    			{imgFigures}
    		</section>
    		<nav className="controller-nav">
    			{controllers}
    		</nav>
    	</section>
    );
  }
});
React.render(<GalleryApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryApp;