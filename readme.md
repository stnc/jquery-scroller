#Initialization
##Initialize via javascript
```javascript
jQuery(document).ready(function() {
		$('#unique-pager').StncThumbnailScroller({
			scrollSpeed : 100,
			fadeSpeed : 400,
			imagePictureAttr : '#showPicture'
		});
	});
  ```	
##Initialize via HTML
```html
    <div id="unique-pager">
      <ul>
        <!-- your content -->
          </ul>
		</div>	
  ```			
##picture show 
```html
   <img src="" alt="" id="showPicture">
   	 ```	
##arrows 
```html
    <div data-direction="next" class="btn directionBtn">
      <i class="fa fa-arrow-up"></i>
    </div>
    
        <div data-direction="prev" class="btn directionBtn">
      <i class="fa fa-arrow-down"></i>
    </div>		
    
    css
    
    .pictureShow{
    width: 399px;
    border: 1px solid #ebebeb;
    float: left;
    height: 505px;
    margin: 0 20px 10px 0;
    overflow: hidden;
}  

#thumbnailsGallery {
    margin: 0;
    width: 592px;
}
#unique-pager ul li img {

    border: 1px solid #dddddd;
    padding: 5px;
    margin: 5px;
    width: 130px;
    height: 130px;
    background: #f0f0f0;
}
#unique-pager {
    border: 1px solid red;
    width: 154px;
    height: 458px;
    overflow: hidden;
    font-size: 0;
    float:left;
}
.btn{
    width: 128px;
    height: 20px;
    line-height: 20px;
    padding: 14px;
    float: left;
    text-align: center;
    background-color: #000;
    color: #fff;
    cursor: pointer;
}
img {
    max-width: 100%;
    width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}
     ```