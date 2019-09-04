import React, { Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GalleryThumb from './GalleryThumb';

class Gallery extends Component {
  state = {
    images: [],
    selectedImg:''
  };

  componentDidMount() {
    this.fetchImages();
     this.interval = setInterval(() => this.selectRendomImage(), 3000)
  }

  selectRendomImage() {
      this.setState({
        selectedImg: (this.state.images[Math.floor(Math.random() * this.state.images.length)]).images.downsized.url
      })
  }

  fetchImages() {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt`
    )
      .then(response => response.json())
      .then(json =>
        this.setState({
          images: json.data,
        })
      );
  }
  deleteImg =(img)=>{
      this.setState({images:   this.state.images.filter(image=> image.images.fixed_height_small.url !== img )})
  }
  selectImage =(selectedImg)=>{
     console.log('s', selectedImg)
      this.setState({ selectedImg })
  }

  render() {
      const { images, selectedImg } = this.state;
        return (
          <div>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}
             >
                <h1>Fading at Initial Mount</h1>
             </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                transitionName="background"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
            >

                <img
                    src={ selectedImg!== '' ? (selectedImg):(images[0]&&images[0].images.fixed_height.url)}
                    className="mainImg"
                />
            </ReactCSSTransitionGroup>

            <GalleryThumb images = { images } onDelete={(i)=>{this.deleteImg(i)}} selectImage={(i)=>{this.selectImage(i)}}/>
          </div>
        );
    }
}
export default Gallery;
