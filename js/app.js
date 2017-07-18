
var initCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            nickNames : ['Tabby2',  'Tabby2a'],        
            catLevel : 'newBorn',
            //imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            //imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
            imgSrc : 'https://static.pexels.com/photos/33358/cat-fold-view-grey-fur.jpg'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            nickNames : ['Tiger2',  'Tiger2a'],        
            catLevel : 'newBorn',
          
            //imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgSrc : 'https://static.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg',
            //imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
          nickName : 'Scaredy2',
            catLevel : 'newBorn',
          
            imgSrc : 'http://1.bp.blogspot.com/-zAWnDj_hEeE/UjWq6heqF-I/AAAAAAAAB_8/iThTIziz7VA/s1600/cat.jpg',
            //imgSrc : 'img/22252709_010df3379e_z.jpg',
        },
        {
            clickCount : 0,
            name : 'Shadow',
            nickNames : ['shadow2',  'shadow2a'],        
            catLevel : 'newBorn',
          
          imgSrc : 'http://ravenclan.yolasite.com/resources/Dawnfleck.jpg',
            //imgSrc : 'img/1413379559_412a540d29_z.jpg',
            //imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            
            name : 'Sleepy',
            nickNames : ['Sleepy2',  'sleepy2a'],        
            catLevel : 'newBorn',
          
          imgSrc : 'https://i.ytimg.com/vi/aBSzB6qxisQ/0.jpg',
            //imgSrc : 'img/9648464288_2516b35537_z.jpg',
            //imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ];

var cat = function(data){
  
    this.name = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
    //this.catLevel = ko.observable('Newborn'); 
  //this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.nickName = ko.observableArray(data.nickNames);
  //this.imgSrc = ko.observable('https://static.pexels.com/photos/33358/cat-fold-view-grey-fur.jpg');
    this.imgSrc = ko.observable(data.imgSrc);  
  //this.imageAttribution = ko.observable('https://www.flickr.com/photos/onesharp/9648464288');
    this.catLevel = ko.computed(function(){
      var catLevelx;
      console.log('yyyyyy');
      var cnt = this.clickCount();
      console.log(cnt);
      console.log('zzzzzz');
   
      if ( cnt  <10 && cnt >=0){
        catLevelx = 'newBorn';
        console.log('x');
        //return catLevelx;
      }else if ( cnt < 20){
        catLevelx = 'inFant';
        console.log('xx');
        //return catLevelx;
      }else if (cnt<30){
        catLevelx  = 'child';
        console.log('xxx');
        //return catLevelx;
      }else //if(catLevelx>=30)
      {
        catLevelx='ninja3';
        console.log('xxxx');
        //return catLevelx;
      }
      return catLevelx;
      
    },this);

}

var viewModel = function() {
    var self = this;
    //this.currentCat = ko.observable(new cat({}));
    this.catList = ko.observableArray([]);
    initCats.forEach(function(catItem){
        self.catList.push(new cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
  };  
};
ko.applyBindings(new viewModel());
  /*
    this.cats = ko.observableArray( [
        {
            clickCount : 0,
            name : 'Tabby',
            nickName : 'Tabby2',          
            catLevel : 'newBorn',
            //imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            //imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
            imgSrc : 'https://static.pexels.com/photos/33358/cat-fold-view-grey-fur.jpg'
        },
        {
            clickCount : 0,
            name : 'Tiger',
          nickName: 'Tiger2',
            catLevel : 'newBorn',
          
            //imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgSrc : 'https://static.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg',
            //imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
          nickName : 'Scaredy2',
            catLevel : 'newBorn',
          
            imgSrc : 'http://1.bp.blogspot.com/-zAWnDj_hEeE/UjWq6heqF-I/AAAAAAAAB_8/iThTIziz7VA/s1600/cat.jpg',
            //imgSrc : 'img/22252709_010df3379e_z.jpg',
        },
        {
            clickCount : 0,
            name : 'Shadow',
          nickName : 'Shadow2',
            catLevel : 'newBorn',
          
          imgSrc : 'http://ravenclan.yolasite.com/resources/Dawnfleck.jpg',
            //imgSrc : 'img/1413379559_412a540d29_z.jpg',
            //imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            
            name : 'Sleepy',
            nickName : 'Sleepy2',
            catLevel : 'newBorn',
          
          imgSrc : 'https://i.ytimg.com/vi/aBSzB6qxisQ/0.jpg',
            //imgSrc : 'img/9648464288_2516b35537_z.jpg',
            //imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
                                   */


//ko.applyBindings({
