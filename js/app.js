var cat = function(){
  
    this.name = ko.observable('Tabby');
  this.clickCount = ko.observable(0);
    //this.catLevel = ko.observable('Newborn'); 
  //this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.nickName = ko.observableArray(['T1','T2','T3','T4','T5']);
  this.imgSrc = ko.observable('https://static.pexels.com/photos/33358/cat-fold-view-grey-fur.jpg');
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
    this.currentCat = ko.observable(new cat());
  this.incrementCounter = function(){
    this.currentCat().clickCount(this.currentCat().clickCount()+1);
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
