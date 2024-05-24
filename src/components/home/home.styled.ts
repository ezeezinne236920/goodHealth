import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('./weddings/gownBg.jpg');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 1900px;
  }
  img {
    width: 100%;
  }
  .wrapper {
    background-image: url('./weddings/gownBg.jpg');
    /* background-color: #372e37; */
    /* background-color: #0d090d; */
    background-color: #25002a;
    background-position: right;
    /* background-origin: content-box; */
    margin: auto;
    background-size: 100%;
    background-repeat: no-repeat;
    color: #8b4513;
    font-family: 'Garamond', 'Lucida Sans', 'Lucida Sans Regular',
      'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; /* Elegant font */
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    padding-top: 20px;
    /* z-index: 100; */
    .img-bg {
      background-image: url('./weddings/gown.png');
      /* width: 33%; */
      background-position:77%;
      box-shadow: 1px 0px 9px transparent;
      z-index: -0;
    }
  }
`
