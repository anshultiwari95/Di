import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`../../public/Images/dice_${currentDice}.png`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  p {
    font-size: 24px;
  }
`;
