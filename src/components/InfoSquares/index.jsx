import { SquareBottomLeft, SquareBottomRight, SquareContainer, SquareTopLeft, SquareTopRight } from "./style";

const InfoSquares = () => {
    return(
        <>
        <SquareContainer>
            <SquareTopLeft/>
            <SquareTopRight/>
            <SquareBottomLeft/>
            <SquareBottomRight/>
        </SquareContainer>
        </>
    )
}

export default InfoSquares;