import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components';
import { useGesture } from "react-with-gesture"


const root = document.querySelector("#root")

const Container = styled.div`
    width: 40em;
    margin: auto;
    overflow: hidden;
`;

const CarouselContainer = styled.div`
    display: flex;
    position: relative;
    left: ${({ left }) => left}px;
`;

const Card = styled.div`
   min-width: calc(33.33% - 55px);
    padding: 20px;
    border: 1px solid black;
    margin-left: 10px;
    user-select: none;
    &:hover {
        cursor: pointer;
    }
`;

const Cart = styled.div``;

const App = props => {
    const [left, setleft] = useState(0)
    const handleMove = useCallback(event => {
        const { previous, xy, down } = event;
        if (down) {
            const diff = xy[0] - previous[0]
            if (diff > 0) {
                setleft(preState => preState + diff)
            } else {
                setleft(preState => diff + preState)
            }
        }
    }, [left])

    const bind = useGesture({ onAction: handleMove })
    return <Container {...bind()}><CarouselContainer left={left}><Card>First</Card><Card>Second</Card><Card>Third</Card><Card>Fourth</Card></CarouselContainer></Container>
}

ReactDOM.render(<App />, root)