AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "captain-aero",
          title: "captain aero",
          url: "assets/captain-aero-poster.jpg",
        },
        {
          id: "outer-space",
          title: "outer space",
          url: "assets/outer-space-poster.jpg",
        },
  
        {
          id: "spiderman",
          title: "spiderman",
          url: "assets/spiderman-poster.jpg",
        },
        {
          id: "superman",
          title: "superman",
          url: "assets/superman-poster.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.create_border(position,item.id);
        // Thumbnail Element
        const thumbnail= this.create_thumbNails(item);
        borderEl.appendChild(thumbnail)
        // Title Text Element
        const title= this.create_title(position,item)
        borderEl.appendChild(title)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
    
    create_border : function(position,id){
      var border = document.createElement('a-entity')
      border.setAttribute("id",id);
      border.setAttribute('visible',true);
      const pos = position;
      pos.z = -39;
      border.setAttribute("position",pos);
      border.setAttribute('geometry',{
        primitive:"box",
        height: 31, width: 21
      });
      border.setAttribute('material',{
        color:"black",
        opacity:1
      });
      border.setAttribute("position", position);
      return border;
  
     
    },
  
    create_thumbNails : function(item){
      var thumbnail = document.createElement('a-entity');
      thumbnail.setAttribute('visible',true);
      thumbnail.setAttribute('geometry',{
        primitive:"box",
        height: 30, width: 20
      });
      thumbnail.setAttribute('material',{src:item.url})
      return thumbnail;
  
      
    },
  
    create_title : function(position,item){
      var title = document.createElement('a-entity');
      title.setAttribute("text",{
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "orange",
        value: item.title,
      });
      title.setAttribute('visible',true);
      const pos = position;
      pos.y = -35;
      title.setAttribute("position",pos);
  
      return title;
      
    }
    
    
  });
  