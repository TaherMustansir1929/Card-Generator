const generateRandImage = () => { 
    return `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/300/300`;
 }

export default generateRandImage;