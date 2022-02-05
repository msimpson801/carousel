import styled from "@emotion/styled";
import {useState} from "react";


function shift(props) {
        console.log(props.clickCount , "Here is my click count")
        if (props.clickCount !== 0) {
            return `-${props.clickCount * 25}%`
        }
}

const MainContainer = styled.div`
  width: 1020px;
  height: 400px;
  margin: 200px auto;
  overflow: hidden;
  position: relative;
  background-color: hotpink;
`

const ArrowButton = styled.span`
  position: absolute;
  top: 40%;
  font-size: 60px;
  font-weight: bold;
  color: #2876fd;
  cursor: pointer;
  z-index: 1;
  width: 50px;
  height:50px;
  background-color: purple;
  border-radius:50%;
  display: flex;
`

const LeftButton = styled(ArrowButton)`
  left: .5%;

  
  svg {
    width: 100%;
    height:100%;
    align-items: center;
  }
`

const RightButton = styled(ArrowButton)`
  right: .5%;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #3bff3d;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow-x: auto;
  scrollbar-width: none;
  
  div{
    left: ${props =>shift(props)}}

  ::-webkit-scrollbar{
    /*visibility: hidden;*/
    display: none;
  }
`

const ImageDiv= styled.div`
  min-width: 23%;
  max-width: 23%;
  height: 200px;
  position: relative;
  text-align: center;
  margin-left: 1%;
  margin-right: 1%;
  color: white;
  background: #ee066d;
  transition: .5s;
`


function MySlider(props) {
    const [clickCount, setClickCount] = useState(0)
    const [clickDirection, setClickDirection] = useState(0)


    const handleLeftClick = () => {
        setClickCount(prevClickCount => prevClickCount - 1)
        setClickDirection("Left")
    }

    const handleRightClick = () => {
        setClickCount(prevClickCount => prevClickCount + 1)
        setClickDirection("Right")
    }
    return (
        <>
            <MainContainer>
                {clickCount > 0 && <LeftButton onClick={()=> {handleLeftClick()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563ff" d="M9.87891,17.24268a1,1,0,0,1-.707-1.707L12.707,12,9.17188,8.46436a.99989.99989,0,0,1,1.41406-1.41407L14.82812,11.293a.99962.99962,0,0,1,0,1.41406l-4.24218,4.24268A.99678.99678,0,0,1,9.87891,17.24268Z"/></svg></LeftButton>}
                <ImageContainer clickCount={clickCount} clickDirection={clickDirection}>
                    {
                        props?.info?.map((info, index) => {
                            return <ImageDiv key={index}>{info.name}</ImageDiv>
                        })
                    }
                </ImageContainer>
                {clickCount < Math.floor(props?.info?.length - 4) && <RightButton onClick={()=> {handleRightClick()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6563ff" d="M14.12109,17.24268a.99678.99678,0,0,1-.707-.293L9.17188,12.707a.99962.99962,0,0,1,0-1.41406l4.24218-4.24268a.99989.99989,0,0,1,1.41406,1.41407L11.293,12l3.53515,3.53564a1,1,0,0,1-.707,1.707Z"/></svg></RightButton>}
            </MainContainer>
        </>

    )
}

export {MySlider}